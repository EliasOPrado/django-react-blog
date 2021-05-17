
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from blog.api.viewsets import ArticleViewSet

router = routers.DefaultRouter()
router.register(r'article', ArticleViewSet, basename='article')

urlpatterns = [
    path('', include(router.urls)),
]