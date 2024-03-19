from django.urls import path
from . import views


urlpatterns = [
 path('', views.Homepage, name='homepage'),
 path('shop/', views.Shop, name='shop'),
 path('signup/', views.SignUp, name='signUp'),
 path('my_Account/', views.My_account, name='my_Account'),
 path('my_Account/edit_my-account/<int:pk>/', views.edit_my_account, name='edit_my_account'),


]