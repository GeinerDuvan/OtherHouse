# Generated by Django 5.0 on 2023-12-06 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_alter_direccion_barrio_alter_direccion_ciudad_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='direccion',
            name='barrio',
            field=models.CharField(blank=True, default=' ', max_length=100),
        ),
    ]
