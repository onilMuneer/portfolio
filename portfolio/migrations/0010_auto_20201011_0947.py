# Generated by Django 3.1 on 2020-10-11 09:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0009_services'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='services',
            new_name='service',
        ),
    ]