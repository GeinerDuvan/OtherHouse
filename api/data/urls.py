from django.urls import include, path
from .views import (
    UsuarioList, UsuarioDetail,
    DireccionList, DireccionDetail,
    InmuebleList, InmuebleDetail,
    ArriendoList, ArriendoDetail,
    ServicioAdicionalList, ServicioAdicionalDetail,
)

urlpatterns = [
    path('usuarios/', UsuarioList.as_view(), name='usuario-list'),
    path('usuarios/<int:pk>/', UsuarioDetail.as_view(), name='usuario-detail'),
    path('direcciones/', DireccionList.as_view(), name='direccion-list'),
    path('direcciones/<int:pk>/', DireccionDetail.as_view(), name='direccion-detail'),
    path('inmuebles/', InmuebleList.as_view(), name='inmueble-list'),
    path('inmuebles/<int:pk>/', InmuebleDetail.as_view(), name='inmueble-detail'),
    path('arriendos/', ArriendoList.as_view(), name='arriendo-list'),
    path('arriendos/<int:pk>/', ArriendoDetail.as_view(), name='arriendo-detail'),
    path('serviciosadicionales/', ServicioAdicionalList.as_view(), name='servicioadicional-list'),
    path('serviciosadicionales/<int:pk>/', ServicioAdicionalDetail.as_view(), name='servicioadicional-detail'),
];