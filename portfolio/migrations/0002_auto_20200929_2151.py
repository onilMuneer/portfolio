# Generated by Django 3.1 on 2020-09-29 21:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='dscription',
            new_name='description',
        ),
    ]