from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cms.views import PageViewSet, ServiceViewSet, TeamMemberViewSet

router = DefaultRouter()
router.register(r'pages', PageViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'team-members', TeamMemberViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]