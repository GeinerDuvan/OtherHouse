from rest_framework import serializers
from .models import Usuario, Direccion, Inmueble, Arriendo, ServicioAdicional

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nombre', 'username', 'contrasena', 'tel', 'fecha_nac', 'tipo_doc', 'num_doc', 'correo']

class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = ['id', 'direccion', 'pais', 'ciudad', 'departamento', 'barrio', 'detalles_adicionales']

class InmuebleSerializer(serializers.ModelSerializer):
    arrendador = UsuarioSerializer()

    class Meta:
        model = Inmueble
        fields = ['id', 'arrendador', 'descripcion', 'tamano', 'direccion', 'preciobase', 'cupo',
                  'servicios_base', 'servicios_ad', 'num_banos', 'petfriendly']

class ArriendoSerializer(serializers.ModelSerializer):
    usuario = UsuarioSerializer()
    inmueble = InmuebleSerializer()
    class Meta:
        model = Arriendo
        fields = ['id', 'usuario', 'inmueble', 'fecha_inicio', 'fecha_fin']

    class Meta:
        model = Arriendo
        fields = ['id', 'usuario', 'inmueble', 'fecha_inicio', 'fecha_fin']

class ServicioAdicionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicioAdicional
        fields = ['id', 'inmueble', 'servicio', 'precio']
