<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Documento electrónico de archivo
    .row.mt-5
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src="@/assets/template/tema-5-1.png", alt="Texto que describa la imagen")
      .col-12.col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p Es el registro de la información generada, recibida, almacenada, y comunicada por medios electrónicos, que permanece en estos medios durante su ciclo de vida; es producida por una persona o entidad en razón de sus actividades y debe ser tratada conforme a los principios y procesos archivísticos (UIS).
        p.mt-4 A continuación, para asegurar la adecuada gestión o proceso de los documentos electrónicos, se recomiendan los siguientes aspectos (Gestión Pública, 2015):
    .row.mt-5.display-flex.align-items-center.d-none.d-lg-flex(style="height:680px")(data-aos="zoom-out")
      .img-animation-move.col-4.offset-4.position-relative(@mouseover="indicadorTarjetaFlip = false")
        .indicador--hover(v-if="indicadorTarjetaFlip")
        figure
          img(src='@/assets/template/tema-5-2.png', alt='Texto que describa la imagen')
        .col-10.position-absolute.right.p-4.border-gris-1.rounded-15.box-shadow.mt-xl-4(style='left:44%; top:-40%; z-index:-1;')
          .row.p-3.border-gris-4.rounded-20
            .h4 Fiabilidad
            p.text-small.mt-2 Es la capacidad del documento para verificar que su contenido tenga una visualización completa, confiable y precisa de las actividades.
        .col-10.position-absolute.right.p-4.border-gris-1.rounded-15.box-shadow(style='left:41%; top:84%; z-index:-1;')
          .row.p-3.border-gris-4.rounded-20
            .h4 Disponibilidad
            p.text-small-2.mt-2 Es la capacidad presente y futura de que sus metadatos sean inteligibles en el uso diario.
        .col-10.col-lg-11.position-absolute.left.p-4.border-gris-1.rounded-15.box-shadow.mt-lg-3(style='left:-28%; top:77%; z-index:-1;')
          .row.p-3.border-gris-4.rounded-20
            .h4 Integridad 
            p.text-small-2.mt-2 Es la condición del documento de mantenerse intacto, lo cual garantiza el contenido  y que las  propiedades estén protegidas con el tiempo.
        .col-10.col-lg-11.position-absolute.left.p-4.border-gris-1.rounded-15.box-shadow(style='left:-31%; top:-28%; z-index:-1;')
          .row.p-3.border-gris-4.rounded-20
            .h4 Autenticidad
            p.text-small-2.mt-2 Es la garantía de que el documento sea lo que pretende ser, sin cambios o fallas con el tiempo.
    .row.mt-5.d-flex.d-lg-none
      .col-10.offset-1
        LineaTiempoD.color-secundario
          p.text-small-2(numero="" titulo="Autenticidad") Es la garantía de que el documento sea lo que pretende ser, sin cambios o fallas con el tiempo.
          
          p.text-small-2(numero="" titulo="Fiabilidad") Es la capacidad del documento para verificar que su contenido tenga una visualización completa, confiable y precisa de las actividades. 

          p.text-small-2(numero="" titulo="Disponibilidad") Es la capacidad presente y futura de que sus metadatos sean inteligibles en el uso diario.

          p.text-small-2(numero="" titulo="Integridad") Es la condición del documento de mantenerse intacto, lo cual garantiza el contenido y que las propiedades estén protegidas con el tiempo. 
    .h4.mt-5 Características de un documento electrónico de archivo
    .row.mt-4
      .col-12.col-lg-8.offset-lg-4
        .row.px-3
          p Es muy diferente hablar de documento electrónico y de documento electrónico de archivo, debido a que este último hace referencia a documentos digitales que dependen de su estructura lógica en el área de la archivística. Estos documentos se caracterizan por tener: 
      .col-12.mt-3
        .row.p-4.bg-naranja
          .col-3.d-none.d-lg-flex.position-relative.mt-5
            figure.position-absolute(style="top:-75%;")
              img(src='@/assets/template/tema-5-3.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-8.offset-lg-1.mt-3
            p.mt-4 
             ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Contenido estable.
              li 
                i.fas.fa-angle-right
                | Forma documental fija.
              li 
                i.fas.fa-angle-right
                | Vínculo archivístico.
              li 
                i.fas.fa-angle-right
                | Equivalente funcional.

      p.mt-5 Para ampliar la información, es importante consultar el Decreto 1080 de 2015 en el Artículo 2.8.2.7.2, donde se encuentran las definiciones de cada una de las características del documento electrónico de archivo.
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-morado-claro.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-5-4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1  Decreto 1080 de 2015
                  p.text-small Lo invitamos a leer y comprender el siguiente enlace, donde encontrará los temas anteriormente mencionados, con mayor detalle de los procedimientos requerido.
                .col-sm-auto
                  a.boton.color-secundario.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76833" target="_blank")
                    span Enlace web
                    i.fas.fa-link
  
    p.mt-4 Con relación al documento electrónico de archivo deben poderse identificar de forma explícita atributos tales como:
    .row.mt-5
      .col-6
        .row.p-4
          ul.lista-ul.mt-4
            li 
              i.fas.fa-angle-right
              | El asunto.
            li 
              i.fas.fa-angle-right
              | El autor y nombres de las personas que hicieron parte de la construcción del documento.
            li 
              i.fas.fa-angle-right
              | Fecha y hora.
            li 
              i.fas.fa-angle-right
              | Niveles de acceso.
            li 
              i.fas.fa-angle-right
              | Trazabilidad.
      .col-6
        figure.mb-5
          img(src="@/assets/template/decreto.svg", alt="Texto que describa la imagen")
        
        



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
.row.mt-5.display-flex.align-items-center
  overflow-y: hidden
.img-animation-move:hover .left, .img-animation-move:hover .right
  opacity: 1
  transition: all 800ms
.img-animation-move:hover .right
  transform: translatex(40%)
.img-animation-move:hover .left
  transform: translatex(-40%)
.left, .right
  opacity: 0
  transition: all 800ms
.left
  top: -10.6rem
.right
  top: 5rem
</style>
