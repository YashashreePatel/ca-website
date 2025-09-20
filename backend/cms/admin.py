from django.contrib import admin
from .models import Page, Section, CaseStudyMetric, CaseStudy, Testimonial

class CaseStudyMetricInline(admin.TabularInline):
    model = CaseStudyMetric
    extra = 1
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "read_time")
    inlines = [CaseStudyMetricInline]

class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("author_name", "author_company")

class SectionAdmin(admin.ModelAdmin):
    list_display = ("title", "section_type", "page")
    filter_horizontal = ("testimonials", "case_studies")

    def get_fields(self, request, obj=None):
        fields = ["page", "section_type", "name", "title", "subtitle", "content", "button_text", "button_link"]
        if obj:
            if obj.section_type == "testimonials":
                fields.append("testimonials")
            elif obj.section_type == "case_studies":
                fields.append("case_studies")
        return fields

class PageAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "meta_title")

admin.site.register(Page, PageAdmin)
admin.site.register(Section, SectionAdmin)
admin.site.register(CaseStudy, CaseStudyAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
