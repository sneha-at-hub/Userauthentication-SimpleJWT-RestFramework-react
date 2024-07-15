from django.contrib import admin
from .models import User, Profile  # Adjusted import statement to relative import

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name', 'verified']  # Fixed typo in list_display
    list_editable = ['verified']  # Moved list_editable to the correct place

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
