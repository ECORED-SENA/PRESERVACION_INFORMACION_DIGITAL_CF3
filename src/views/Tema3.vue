<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Migración de información 
    .row.mt-5.p-5.bg-naranja
      .col-12.col-lg-7
        p Puede definirse como proceso, actividad u operación en la cual se movilizan o transfieren datos de un sistema de almacenamiento a otro, o entre diferentes sistemas o aplicaciones software. La migración de datos se realiza generalmente para reemplazar y/o actualizar servidores o dispositivos de almacenamiento de datos.
        p.mt-4 Ocurre con mayor frecuencia durante las actualizaciones de hardware o la transición de un sistema existente a uno completamente nuevo. La siguiente figura 2 presenta algunas de las razones de la migración de datos.
      .col-5.d-none.d-lg-flex.position-relative
        figure.position-absolute(style="top:-75%;")
          img(src='@/assets/template/tema-3-1.svg', alt='Texto que describa la imagen')
    .row.mt-5
      .col-10.offset-1  
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          p.text-small Razones de la migración de datos
    .row.mt-5
      .col-10.col-lg-8.col-xl-6.offset-1.offset-lg-2.offset-xl-3
        ImagenInfograficaB.color-acento-botones.mt-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-3-2.png', alt='Texto que describa la imagen')
            figcaption.mt-3 Referencia Nota. Powerdata (2014).
          div(x="10%" y="53%" tooltip="Actualización de base de datos" numero="")
            p Actualización de base de datos
            
          div(x="33%" y="14%" tooltip="Migración hacia o desde la plataforma de hardware" numero="")
            p Migración hacia o desde la plataforma de hardware
            
          div(x="66%" y="14%" tooltip="Migración a un nuevo software" numero="")
            p Migración a un nuevo software
        
          div(x="90%" y="53%" tooltip="Fusión de dos sistemas paralelos en uno solo, cuando una empresa absorbe a otra o cuando dos negocios se fusionan" numero="")
            p Fusión de dos sistemas paralelos en uno solo, cuando una empresa absorbe a otra o cuando dos negocios se fusionan

    .h4.mt-5 Pasos para la Migración de datos 
    p.mt-5 Realizar una migración de datos, de una manera exitosa, requiere tener en cuenta los siguientes pasos:
    .row.mt-5
      .col-10.col-lg-8.col-xl-6.offset-1.offset-lg-2.offset-xl-3
        ImagenInfograficaB.color-acento-botones.mt-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-3-3.png', alt='Texto que describa la imagen')
            figcaption.mt-3 Referencia Nota. Powerdata (2014).
          div(x="67%" y="10%" tooltip="Planeación" numero="").row.position-relative
            .col-3.position-absolute.img-borde
              figure.px-1.px-md-3.ml-lg-2.mr-xl-2.px-xl-0
                img(src='@/assets/template/tema-3-4.svg', alt='Texto que describa la imagen')
            .h3.text-sistema Planeación
            p Desde la definición de la estrategia y el alcance del proyecto hasta el análisis de la viabilidad.
            figure.mt-4
              img(src='@/assets/template/tema-3-10.png', alt='Texto que describa la imagen')

          div(x="85%" y="41%" tooltip="Analítica" numero="").row.position-relative
            .col-3.position-absolute.img-borde
              figure.px-1.px-md-3.ml-lg-2.mr-xl-2.px-xl-0
                img(src='@/assets/template/tema-3-5.svg', alt='Texto que describa la imagen')
            .h3.text-sistema Analítica
            p Considerando variables como la integridad, exactitud o consistencia de los datos a migrar, teniendo en cuenta las características de las bases de datos de origen y destino. 
            figure.mt-4
              img(src='@/assets/template/tema-3-11.png', alt='Texto que describa la imagen')

          div(x="67%" y="72%" tooltip="Selección de aplicación" numero="").row.position-relative
            .col-3.position-absolute.img-borde
              figure.px-1.px-md-3.ml-lg-2.mr-xl-2.px-xl-0
                img(src='@/assets/template/tema-3-6.svg', alt='Texto que describa la imagen')
            .h3.text-sistema Selección de aplicación
            p Puede desarrollarse de forma interna o adquirirse tras evaluar las distintas alternativas.
            figure.mt-4
              img(src='@/assets/template/tema-3-12.png', alt='Texto que describa la imagen')

          div(x="27.5%" y="72%" tooltip="Testing" numero="").row.position-relative
            .col-3.position-absolute.img-borde
              figure.px-1.px-md-3.ml-lg-2.mr-xl-2.px-xl-0
                img(src='@/assets/template/tema-3-7.svg', alt='Texto que describa la imagen')
            .h3.text-sistema Testing
            p Aplicación de los ciclos de prueba a las aplicaciones que emplearan las bases de datos.
            figure.mt-4
              img(src='@/assets/template/tema-3-13.png', alt='Texto que describa la imagen')

          div(x="10%" y="41%" tooltip="Migración" numero="").row.position-relative
            .col-3.position-absolute.img-borde
              figure.px-1.px-md-3.ml-lg-2.mr-xl-2.px-xl-0
                img(src='@/assets/template/tema-3-8.svg', alt='Texto que describa la imagen')
            .h3.text-sistema Migración
            p Comprende las etapas de extracción, transformación y carga.
            figure.mt-4
              img(src='@/assets/template/tema-3-14.png', alt='Texto que describa la imagen')

          div(x="27.5%" y="10%" tooltip="Evaluación" numero="").row.position-relative
            .col-3.position-absolute.img-borde
              figure.px-1.px-md-3.ml-lg-2.mr-xl-2.px-xl-0
                img(src='@/assets/template/tema-3-9.svg', alt='Texto que describa la imagen')
            .h3.text-sistema Evaluación
            p Se trata de medir los resultados y analizarlos, determinando los ajustes necesarios.
            figure.mt-4
              img(src='@/assets/template/tema-3-15.png', alt='Texto que describa la imagen')
    .h4.mt-5 Tipos de migración de datos
    p.mt-5 Se debe tener en cuenta las estrategias más adecuadas para las necesidades de la organización. Existen dos enfoques principales en la migración (Evaluando Software, 2021):
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr.text-center
            th.py-3 Los componentes de inserción o THT 
            th Los componentes de superficie o SMD 
        tbody
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-3-17.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-3-16.svg", alt="Texto que describa la imagen")
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-3-19.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-3-18.svg", alt="Texto que describa la imagen")
          tr.text-small
            td.p-4 Implican completar toda la migración en una pequeña ventana de procesamiento definida. La consecuencia de este enfoque es la inactividad del sistema mientras los datos se extraen de la fuente, se procesan, se cargan en el destino, y luego se redirecciona el procesamiento al nuevo entorno. Este enfoque resulta atractivo, en la medida en que permite completar la migración en el menor tiempo posible, pero conlleva riesgos, pues pocas organizaciones pueden vivir con un sistema central no disponible por mucho tiempo, por lo que existe una intensa presión sobre la migración. La verificación y aprobación de datos se encuentran en la ruta crítica.
            td.p-4 
              p En este caso, en lugar de intentar completar todo el evento en una ventana de tiempo breve, la migración implica tener ejecutándose los sistemas antiguo y nuevo en paralelo y migrar los datos en fases.
              p.mt-3 Este método proporciona un tiempo de inactividad cero como lo requieren las aplicaciones de misión crítica que operan 24/7. Este enfoque agrega cierta complejidad al diseño, ya que debe ser posible rastrear qué datos se han migrado y qué datos no, para redireccionar las peticiones cuando los sistemas operan en paralelo.



</template>

<script>
export default {
  name: 'Tema3',
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
.img-infografica-b__modal
  border-top: 0px

.img-infografica-b__modal .img-infografica-b__modal__btn-cerrar
  top: 0px
  background-color: $color-acento-contenido
.img-infografica-b__modal .img-infografica-b__modal__btn-cerrar .fa-times::before
  color: $white
.img-infografica-b__modal
  border-left: 75px solid #FF5151 !important
.img-borde
  left: -24%
.img-infografica-b__modal__contenido div > *
  color: $color-sistema-texto !important
@media (min-width: 1200px)
  .img-borde
    left: -32.333%
@media (min-width: 1400px)
  .img-borde
    left: -31.7%
  .img-infografica-b__modal
    border-left: 95px solid #FF5151 !important
</style>
