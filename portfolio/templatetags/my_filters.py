from django import template

register = template.Library()

@register.filter(name='type_filter')
def type_filter(value,type):
    return value.filter(type=type)
