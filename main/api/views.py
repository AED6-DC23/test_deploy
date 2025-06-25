from rest_framework import viewsets
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def list(self, request):
        """Получить список всех товаров"""
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)