from rest_framework import serializers
from .models import AboutUsTab, Page, Section, CaseStudyMetric, CaseStudy, TeamMember, Testimonial, Service, ServiceWhy, ServiceForWhom, ServiceOutcome, ServiceApproach

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

class ServiceWhySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceWhy
        fields = "__all__"


class ServiceForWhomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceForWhom
        fields = "__all__"


class ServiceOutcomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOutcome
        fields = "__all__"


class ServiceApproachSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceApproach
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    why = ServiceWhySerializer(many=True, read_only=True)
    for_whom = ServiceForWhomSerializer(many=True, read_only=True)
    outcome = ServiceOutcomeSerializer(many=True, read_only=True)
    our_approach = ServiceApproachSerializer(many=True, read_only=True)

    image = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = "__all__"
    
    def get_image(self, obj):
        if obj.image:
            return obj.image.name
        return None

class SectionSerializer(serializers.ModelSerializer):
    testimonials = TestimonialSerializer(many=True, read_only=True)
    case_studies = CaseStudySerializer(many=True, read_only=True)
    services = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = Section
        fields = "__all__"

class AboutUsTabSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsTab
        fields = "__all__"

class TeamMemberSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = TeamMember
        fields = "__all__"
    
    def get_image(self, obj):
        if obj.image:
            return obj.image.name
        return None
    
class PageSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)
    about_tabs = AboutUsTabSerializer(many=True, read_only=True)

    class Meta:
        model = Page
        fields = "__all__"
