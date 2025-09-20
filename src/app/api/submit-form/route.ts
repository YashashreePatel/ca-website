// File: app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface FormSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  project: string;
  submittedAt: string;
  status: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.fullName || !body.email || !body.project) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // reCAPTCHA validation
    const token = body.token;
    if (!token) {
      return NextResponse.json(
        { message: 'Missing reCAPTCHA token' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      throw new Error("Missing RECAPTCHA_SECRET_KEY in environment variables");
    }

    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      console.error("reCAPTCHA failed:", verifyData);
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed', errors: verifyData['error-codes'] },
        { status: 400 }
      );
    }
    
    // Create the submission object
    const submission: FormSubmission = {
      id: body.id || Date.now().toString(),
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      project: body.project,
      submittedAt: body.submittedAt || new Date().toISOString(),
      status: 'new'
    };

    // Define the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', 'formsubmissions.json');
    
    // Read existing submissions
    let existingSubmissions: FormSubmission[] = [];
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingSubmissions = JSON.parse(fileContent);
      }
    } catch (error) {
      console.log('No existing submissions file found, creating new one', error);
      existingSubmissions = [];
    }

    // Add new submission
    existingSubmissions.push(submission);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(existingSubmissions, null, 2));

    console.log(`New form submission saved: ${submission.fullName} (${submission.email})`);
    
    return NextResponse.json({
      message: 'Form submitted successfully',
      submissionId: submission.id
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
