from django.db import models


class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    username = models.CharField(max_length=20)
    contrasena = models.CharField(max_length=8)
    tel = models.CharField(max_length=15)
    fecha_nac = models.DateField()
    tipo_doc =models.CharField(max_length=15)
    num_doc = models.CharField(max_length=15)
    correo = models.EmailField(max_length=40)
    def __str__(self):
        return self.nombre

class Direccion(models.Model):
    direccion = models.CharField(max_length=50)
    pais = models.CharField(max_length=30)
    ciudad = models.CharField(max_length=30)
    departamento = models.CharField(max_length=30)
    barrio = models.CharField(max_length=100, blank=True, null=False, default="")
    detalles_adicionales = models.CharField(max_length=100, blank=True, null=False, default="")
    def __str__(self):
        return self.direccion
    

class Inmueble(models.Model):
    arrendador = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=200, blank=True, null=False, default="")   
    tamano = models.CharField(max_length=30)
    direccion = models.ForeignKey(Direccion, on_delete=models.CASCADE, null=True)
    preciobase =  models.IntegerField()
    cupo = models.IntegerField()
    servicios_base = models.CharField(max_length=30, blank=True,  default="")
    servicios_ad = models.CharField(max_length=30, blank=True,  default="")
    num_banos = models.IntegerField()
    petfriendly = models.BooleanField()
    def __str__(self):
        return f'{self.descripcion} - {self.arrendador.username}' if self.arrendador else 'Inmueble sin arrendador'

    def __str__(self):
        return f'{self.descripcion} - {self.arrendador.username}' if self.arrendador else 'Inmueble sin arrendador'


class Arriendo(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    inmueble = models.ForeignKey(Inmueble, on_delete=models.CASCADE)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    def __str__(self):
        return f'{self.usuario.username}'
    def calcular_total_a_pagar(self):
        total_a_pagar = self.inmueble.preciobase
        servicios_adicionales = ServicioAdicional.objects.filter(inmueble=self.inmueble)
        if servicios_adicionales.exists():
            total_a_pagar += sum(servicio.precio for servicio in servicios_adicionales)
        return total_a_pagar
   

class ServicioAdicional(models.Model):
    inmueble = models.ForeignKey(Inmueble, on_delete=models.CASCADE)
    servicio = models.CharField(max_length=100)
    precio = models.IntegerField()


