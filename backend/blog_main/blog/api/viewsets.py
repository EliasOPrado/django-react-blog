from rest_framework import viewsets
from .serializers import ArticleSerializer
from blog.models import Article

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
