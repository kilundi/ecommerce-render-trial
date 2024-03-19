from django.contrib import admin
from . import models

class OrderItemInline(admin.TabularInline):
    model = models.OrderItem
    raw_id_fields =['product']

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user','status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('status', 'created_at', 'first_name', 'last_name', 'email')
    inlines = [OrderItemInline]

# Register your models here.
admin.site.register(models.Order, OrderAdmin)
admin.site.register(models.OrderItem)