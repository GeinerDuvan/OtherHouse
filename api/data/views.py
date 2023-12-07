from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Usuario, Direccion, Inmueble, Arriendo, ServicioAdicional
from .serializer import UsuarioSerializer, DireccionSerializer, InmuebleSerializer, ArriendoSerializer, ServicioAdicionalSerializer

class UsuarioList(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioDetail(RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class DireccionList(ListCreateAPIView):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer

class DireccionDetail(RetrieveUpdateDestroyAPIView):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer

class InmuebleList(ListCreateAPIView):
    queryset = Inmueble.objects.all()
    serializer_class = InmuebleSerializer

class InmuebleDetail(RetrieveUpdateDestroyAPIView):
    queryset = Inmueble.objects.all()
    serializer_class = InmuebleSerializer

class ArriendoList(ListCreateAPIView):
    queryset = Arriendo.objects.all()
    serializer_class = ArriendoSerializer

class ArriendoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Arriendo.objects.all()
    serializer_class = ArriendoSerializer

class ServicioAdicionalList(ListCreateAPIView):
    queryset = ServicioAdicional.objects.all()
    serializer_class = ServicioAdicionalSerializer

class ServicioAdicionalDetail(RetrieveUpdateDestroyAPIView):
    queryset = ServicioAdicional.objects.all()
    serializer_class = ServicioAdicionalSerializer
