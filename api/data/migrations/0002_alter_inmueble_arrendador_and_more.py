# Generated by Django 5.0 on 2023-12-06 22:07

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inmueble',
            name='arrendador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.usuario'),
        ),
        migrations.AlterField(
            model_name='servicioadicional',
            name='inmueble',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.inmueble'),
        ),
    ]
