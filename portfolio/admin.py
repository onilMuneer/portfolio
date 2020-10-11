from django.contrib import admin
from .models import project, course, tool, prjImage, service


class projectAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'importancy')
    list_filter = ('category',)
    ordering = ('-importancy',)

class courseAdmin(admin.ModelAdmin):
    list_display = ('title', 'importancy')
    ordering = ('-importancy',)

class toolAdmin(admin.ModelAdmin):
    list_filter = ('type',)


# Register your models here.
admin.site.register(project, projectAdmin)
admin.site.register(course, courseAdmin)
admin.site.register(tool, toolAdmin)
admin.site.register(prjImage)
admin.site.register(service)
