from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cms.views import PageViewSet, ServiceViewSet

router = DefaultRouter()
router.register(r'pages', PageViewSet)
router.register(r'services', ServiceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]