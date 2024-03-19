from django.shortcuts import render, get_object_or_404
from .models import Product

# Create your views here.
def Product_Page(request,pk,slug):

    product = get_object_or_404( Product, pk=pk, slug=slug)
    return render(request, 'products/product.html', {'products': [product]})
