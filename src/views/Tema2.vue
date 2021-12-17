<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Pautas para la eliminación de documentos digitales
    figure.mt-5
      img(src='@/assets/template/tema-2-1.png', alt='Texto que describa la imagen')
    p.mt-5 La eliminación de documentos digitales se lleva a cabo cuando el documento termina su ciclo de vida, es decir, que no representa ningún valor para la empresa.
    p.mt-4 El Archivo General de la Nación ha fijado un procedimiento para la eliminación de documentos digitales. A continuación en la figura 1, se mencionan las pautas previas a realizar:
    .row.mt-5
      .col-10.offset-1  
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          p.text-small  Pautas para la eliminación documental
    .row.mt-5
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-2.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.d-flex.align-items-center
              p Revisar y valorar a la documentación del Archivo de Gestión, principal o central, en cumplimiento de lo dispuesto en las TRD y TVD en sus diferentes versiones, para disposición final de los documentos.
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-3.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p.py-4 Se debe justificar y argumentar  la eliminación a proceder.
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-4.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p.py-5  Dejar registro mediante elaboración de  acta de eliminación documental. 
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-5.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p Gestionar aprobación de la eliminación. 
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-6.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p.py-4 Ante el Comité Institucional de Gestión y Desempeño, se debe dejar tratado el punto de eliminación y aprobado. 
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-7.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.d-flex.align-items-center
              p.py-5 Efectuar el registro de evidencia, publicando en la página o portal web los documentos a eliminar. 
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-8.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p.py-5 Atender requerimientos de los ciudadanos. 
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-9.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p.py-5 Teniendo en cuenta el procedimiento implementado, tramitar la destrucción física de documentos.
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-10.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p.py-5 Recibir y almacenar el Certificado de Destrucción Documental.
      .col-8.col-sm-6.offset-2.offset-sm-0.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-11.svg')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center
              p.py-5 Archivar y garantizar su conservación.
    figcaption Nota. MINTIC (2020).


</template>

<script>
export default {
  name: 'Tema2',
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
@media (min-width: 992px)
  .col-sm-6.mb-4
    width: 33% !important
@media (min-width: 1200px)
  .col-sm-6.mb-4
    width: 19.667% !important
</style>
