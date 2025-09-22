from django.contrib import admin
from .models import Page, Section, CaseStudyMetric, CaseStudy, Testimonial, Service, ServiceWhy, ServiceForWhom, ServiceOutcome, ServiceApproach

class CaseStudyMetricInline(admin.TabularInline):
    model = CaseStudyMetric
    extra = 1
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "read_time")
    inlines = [CaseStudyMetricInline]

class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("author_name", "author_company")

class ServiceWhyInline(admin.TabularInline):
    model = ServiceWhy
    extra = 1


class ServiceForWhomInline(admin.TabularInline):
    model = ServiceForWhom
    extra = 1


class ServiceOutcomeInline(admin.TabularInline):
    model = ServiceOutcome
    extra = 1


class ServiceApproachInline(admin.TabularInline):
    model = ServiceApproach
    extra = 1


class ServiceAdmin(admin.ModelAdmin):
    list_display = ("service_name",)
    inlines = [ServiceWhyInline, ServiceForWhomInline, ServiceOutcomeInline, ServiceApproachInline]

class SectionAdmin(admin.ModelAdmin):
    list_display = ("title", "section_type", "page")
    filter_horizontal = ("testimonials", "case_studies", "services")

    def get_fields(self, request, obj=None):
        fields = ["page", "section_type", "name", "title", "subtitle", "content", "button_text", "button_link"]
        if obj:
            if obj.section_type == "testimonials":
                fields.append("testimonials")
            elif obj.section_type == "case_studies":
                fields.append("case_studies")
            elif obj.section_type == "services":
                fields.append("services")
        return fields

class PageAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "meta_title")

admin.site.register(Page, PageAdmin)
admin.site.register(Section, SectionAdmin)
admin.site.register(CaseStudy, CaseStudyAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
admin.site.register(Service, ServiceAdmin)