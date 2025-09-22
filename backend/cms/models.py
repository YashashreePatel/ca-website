from django.db import models

class Page(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    meta_title = models.CharField(max_length=150, blank=True, null=True)
    meta_description = models.TextField(blank=True, null=True)
    meta_keywords = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    author_name = models.CharField(max_length=100)
    author_role = models.CharField(max_length=100)
    author_company = models.CharField(max_length=150)
    company_industry = models.CharField(max_length=150)
    content = models.TextField()
    author_image = models.ImageField(upload_to="images/testimonials/", blank=True, null=True)
    tags = models.JSONField(default=list, blank=True)

    def __str__(self):
        return f"{self.author_name} - {self.author_company}"

class CaseStudy(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="images/casestudies/", blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    read_time = models.CharField(max_length=50, blank=True, null=True)
    tags = models.JSONField(default=list, blank=True)
    cta_text = models.CharField(max_length=100, blank=True, null=True)
    cta_link = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title
    
class CaseStudyMetric(models.Model):
    COLOR_CHOICES = [
        ("metric-pink", "Metric Pink"),
        ("metric-green", "Metric Green"),
    ]

    case_study = models.ForeignKey(
        CaseStudy, related_name="metrics", on_delete=models.CASCADE
    )
    value = models.CharField(max_length=50)
    label = models.CharField(max_length=250)
    position_x = models.IntegerField()  # store separately instead of dict
    position_y = models.IntegerField()
    width = models.CharField(max_length=50, blank=True, null=True)
    color = models.CharField(max_length=20, choices=COLOR_CHOICES)

    def __str__(self):
        return f"{self.case_study.title} - {self.value}"

class Service(models.Model):
    service_name = models.CharField(max_length=255)
    card_content = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to="images/services/", blank=True, null=True)
    link = models.CharField(max_length=100, blank=True, null=True)
    page_content = models.JSONField(default=list, blank=True)
    outcome_text = models.CharField(max_length=255, default="..")

    def __str__(self):
        return self.service_name

class ServiceWhy(models.Model):
    service = models.ForeignKey(Service, related_name="why", on_delete=models.CASCADE)
    highlight_text = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return f"Why: {self.highlight_text} ({self.service.service_name})"

class ServiceForWhom(models.Model):
    service = models.ForeignKey(Service, related_name="for_whom", on_delete=models.CASCADE)
    highlight_text = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return f"For Whom: {self.highlight_text} ({self.service.service_name})"

class ServiceOutcome(models.Model):
    service = models.ForeignKey(Service, related_name="outcome", on_delete=models.CASCADE)
    highlight_text = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return f"Outcome: {self.highlight_text} ({self.service.service_name})"


class ServiceApproach(models.Model):
    service = models.ForeignKey(Service, related_name="our_approach", on_delete=models.CASCADE)
    order = models.IntegerField()
    title = models.CharField(max_length=255)
    content = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"Approach {self.order}: {self.title} ({self.service.service_name})"
    
class Section(models.Model):
    SECTION_TYPE_CHOICES = [
        ("none", "None"),
        ("testimonials", "Testimonials"),
        ("case_studies", "Case Studies"),
        ("services", "Services"),
    ]

    page = models.ForeignKey(Page, related_name="sections", on_delete=models.CASCADE)
    name = models.CharField(max_length=150, default="Section Name")
    title = models.CharField(max_length=150, default="New Section")
    subtitle = models.CharField(max_length=300, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    button_text = models.CharField(max_length=100, blank=True, null=True)
    button_link = models.CharField(max_length=100, blank=True, null=True)

    section_type = models.CharField(max_length=20, choices=SECTION_TYPE_CHOICES, default="none")

    testimonials = models.ManyToManyField(Testimonial, blank=True)
    case_studies = models.ManyToManyField(CaseStudy, blank=True)
    services = models.ManyToManyField(Service, blank=True)

    def __str__(self):
        return f"{self.page.name} - {self.title}"