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
    author_image = models.ImageField(upload_to="images/home/testimonials/", blank=True, null=True)
    tags = models.JSONField(default=list, blank=True)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.author_name} - {self.author_company}"

class CaseStudy(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="images/home/casestudies/", blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    read_time = models.CharField(max_length=50, blank=True, null=True)
    tags = models.JSONField(default=list, blank=True)
    cta_text = models.CharField(max_length=100, blank=True, null=True)
    cta_link = models.URLField(blank=True, null=True)

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
    

class Section(models.Model):
    SECTION_TYPE_CHOICES = [
        ("none", "None"),
        ("testimonials", "Testimonials"),
        ("case_studies", "Case Studies"),
    ]

    page = models.ForeignKey(Page, related_name="sections", on_delete=models.CASCADE)
    name = models.CharField(max_length=150, default="Section Name")
    title = models.CharField(max_length=150, default="New Section")
    subtitle = models.CharField(max_length=300, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    button_text = models.CharField(max_length=100, blank=True, null=True)
    button_link = models.URLField(blank=True, null=True)

    section_type = models.CharField(max_length=20, choices=SECTION_TYPE_CHOICES, default="none")

    testimonials = models.ManyToManyField(Testimonial, blank=True)
    case_studies = models.ManyToManyField(CaseStudy, blank=True)

    def __str__(self):
        return f"{self.page.name} - {self.title}"