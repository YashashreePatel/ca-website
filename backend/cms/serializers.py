from rest_framework import serializers
from .models import Page, Section, CaseStudyMetric, CaseStudy, Testimonial

class CaseStudyMetricSerializer(serializers.ModelSerializer):
    position = serializers.SerializerMethodField()

    class Meta:
        model = CaseStudyMetric
        fields = "__all__"

    def get_position(self, obj):
        return {"x": obj.position_x, "y": obj.position_y}
    
class CaseStudySerializer(serializers.ModelSerializer):
    metrics = CaseStudyMetricSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = CaseStudy
        fields = "__all__"

    def get_image(self, obj):
        if obj.image:
            return obj.image.name
        return None
    
class TestimonialSerializer(serializers.ModelSerializer):
    author_image = serializers.SerializerMethodField()
    class Meta:
        model = Testimonial
        fields = "__all__"
    
    def get_author_image(self, obj):
        if obj.author_image:
            return obj.author_image.name
        return None

class SectionSerializer(serializers.ModelSerializer):
    testimonials = TestimonialSerializer(many=True, read_only=True)
    case_studies = CaseStudySerializer(many=True, read_only=True)

    class Meta:
        model = Section
        fields = "__all__"

class PageSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)

    class Meta:
        model = Page
        fields = "__all__"
