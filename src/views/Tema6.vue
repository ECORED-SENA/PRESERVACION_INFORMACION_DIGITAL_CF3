<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Dispositivos de almacenamiento de datos
    figure.mt-4
      img(src='@/assets/template/tema-6-1.png', alt='Texto que describa la imagen')
    p.mt-5 Son los componentes o elementos que permiten alojar, transmitir o recuperar la información digital. En la actualidad existen una gran variedad de dispositivos de almacenamiento de datos, tanto físicos como virtualizados.
    p.mt-3 Año tras año, los dispositivos de almacenamiento vienen mejorando el tipo y utilidad, teniendo en cuenta del desarrollo de las TIC y los requerimientos cada vez más exigentes de los usuarios. A continuación, se mencionan algunos dispositivos de almacenamiento más usados y de popular acceso:
    .row.mt-5
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")            
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#FF5151`}").d-flex.align-items-center.justify-content-center
              .h4 Disco duro
            .tarjeta-flip__contenido.p-4.bg-img-1
              p.py-4 
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#88E0EF`}").d-flex.align-items-center.justify-content-center
              .h4 Discos compactos
            .tarjeta-flip__contenido.p-4.bg-img-2
              p.py-4 
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#FF5151`}").d-flex.align-items-center.justify-content-center
              .h4 Tarjetas de memoria
            .tarjeta-flip__contenido.p-4.bg-img-3
              p 
      .col-sm-6.mb-4.offset-lg-4.offset-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#88E0EF`}").d-flex.align-items-center.justify-content-center
              .h4 Memoria USB 
            .tarjeta-flip__contenido.p-4.bg-img-4
              p 
    p.mt-5 Existen otros tipos de almacenamiento, que requieren una mayor infraestructura tecnológica, pero que garantizan, en tiempo real, la disposición de la información para varios usuarios a la vez, con ciertos atributos de acceso, de cantidad (peso de la información), como lo es, el almacenamiento en la nube.
    p.mt-3 Estos lugares pueden ser llamados aplicaciones o servicios. Ejemplo:
    .row.mt-5
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")            
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#FF5151`}").d-flex.align-items-center.justify-content-center
              .h4 Google Drive
            .tarjeta-flip__contenido.p-4.bg-img-5
              p.py-4 
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#88E0EF`}").d-flex.align-items-center.justify-content-center
              .h4 Dropbox
            .tarjeta-flip__contenido.p-4.bg-img-6
              p.py-4 
      .col-sm-6.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#FF5151`}").d-flex.align-items-center.justify-content-center
              .h4 Cloud
            .tarjeta-flip__contenido.p-4.bg-img-7
              p 
      .col-sm-6.mb-4.offset-lg-4.offset-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-color': `#88E0EF`}").d-flex.align-items-center.justify-content-center
              .h4 One drive
            .tarjeta-flip__contenido.p-4.bg-img-8
              p 
    p.mt-5 
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          p.text-small Ventajas y desventajas
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr.text-center
            th.py-3 Ventajas  
            th Desventajas  
        tbody.text-small
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-6-11.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-6-10.svg", alt="Texto que describa la imagen")
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-6-13.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-6-12.svg", alt="Texto que describa la imagen")
          tr
            td.p-3 Minimiza costos.
            td.p-3 Para su consulta en tiempo real, requiere conexión a Internet.
          tr
            td.p-3 Facilita el acceso de la información, en tiempo real y multiusuario. 
            td.p-3 Dependencia de un tercero (Proveedor de servicios que en muchos casos desde otra nacionalidad).
          tr
            td.p-3 La seguridad mejora, gracias al desarrollo y fortalecimiento de los proveedores.
            td.p-3 Se modifican continuamente las interfaces de las aplicaciones.
          tr
            td.p-3 No importa la ubicación, desde que tengan acceso a internet.
            td.p-3 Si las solicitudes tienen alto tráfico, los servidores se pueden sobrecargar. La calidad y velocidad para consultar la información depende de otros factores como el servicio de internet y el hardware o terminal de consulta (computador, dispositivo móvil, etc.)
          tr
            td.p-3 Se optimiza su uso de manera automática.
            td.p-3 
          tr
            td.p-3 No requiere personal capacitado para su acceso.
            td.p-3 
          tr
            td.p-3 No requiere de ser instalado o actualizado por un equipo de soporte técnico.
            td.p-3 




</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-img-1
  background-image: url(../assets/template/tema-6-2.png)
  background-repeat: no-repeat
  background-size: cover
.bg-img-2
  background-image: url(../assets/template/tema-6-3.png)
  background-repeat: no-repeat
  background-size: cover
.bg-img-3
  background-image: url(../assets/template/tema-6-4.png)
  background-repeat: no-repeat
  background-size: cover
.bg-img-4
  background-image: url(../assets/template/tema-6-5.png)
  background-repeat: no-repeat
  background-size: cover
.bg-img-5
  background-image: url(../assets/template/tema-6-6.png)
  background-repeat: no-repeat
  background-size: cover
.bg-img-6
  background-image: url(../assets/template/tema-6-7.png)
  background-repeat: no-repeat
  background-size: cover
.bg-img-7
  background-image: url(../assets/template/tema-6-8.png)
  background-repeat: no-repeat
  background-size: cover
.bg-img-8
  background-image: url(../assets/template/tema-6-9.png)
  background-repeat: no-repeat
  background-size: cover
.tarjeta-flip__contenido
  height: 192px

@media (min-width: 992px)
  .col-sm-6.mb-4
    width: 33% !important
@media (min-width: 1200px)
  .col-sm-6.mb-4
    width: 24.667% !important
</style>
