# Generated by Django 5.0 on 2024-02-28 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0007_user_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bio',
            field=models.TextField(null=True),
        ),
    ]