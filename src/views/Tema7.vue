<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Conservación del documento electrónico
    .row.mt-5
      .col-5.d-none.d-lg-flex.align-items-center
        figure
          img(src='@/assets/template/tema-7-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p Como se ha venido mencionando, la información es un activo primordial, para las personas, organizaciones, colectivos y naciones, pero no solo es importante acceder a la información, también lo es, el poder mantener esta con las características auténticas y originales, pero a nivel de información digital estas características deben darse con procesos adicionales, como renovación, actualización y/o migración de manera periódica.
          p.mt-3 Por lo anterior, las organizaciones tanto públicas como privadas, deben acogerse a ciertas normativas, estándares, como también deben realizar implementaciones en procedimientos e infraestructura que garantizarán no sólo la calidad y seguridad sino la vigencia y largo plazo de los datos, de manera fiable, íntegra y auténtica.
          p.mt-3 Conservar implica que la información debe pasar por una caracterización donde la que deja de ser necesaria en la gestión del día a día, deben ser almacenados adecuadamente teniendo en cuenta la gestión del riesgo
    p.mt-5 Las siguientes son algunas recomendaciones a la hora de tomar la decisión de conservar documentos digitales:
    .row.mt-5
      .col-12.col-md-8.offset-md-2
        LineaTiempoC.color-acento-contenido(text-small).text-center.bg-gris-claro.p-4.rounded-15
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-2.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Asegurarse que la tecnología hardware y software que va a utilizar, garantice la supervivencia de los datos..

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-3.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Que la información conservada pueda ser transferida a otros soportes, ya sea por cambio de proveedor, por políticas o por modernización. 

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-4.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Los datos deben tener formatos portables, para que puedan ser visualizados con códigos abiertos y no propietarios para facilitar su administración y conservación. Hay formatos estándar y reconocible como los de tipo HTML o XML que es el formato más recomendable para la información empaquetada

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-5.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Que los mecanismos de identificación de ficheros, permitan la fácil localización e identificación  como los DOI (Identificador de Objetos Digitales).

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-6.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Que los encargados de generar o crear los metadatos, garanticen su calidad tal como lo proponen algunos esquemas como Dublin Core, ESE, MODS entre otros.
          
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-7.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Implementar buenas prácticas de seguridad y políticas de copias en los ficheros para que estén protegidos de deterioro, pérdida o atentados de tipo intencional o natural.
              p.mt-3 Que el sistema de aseguramiento de calidad, garantice la trazabilidad y mejora del proceso de conservación
            
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-8.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Que el Software usado para esta finalidad, sea previamente analizado para que satisfaga las necesidades de la organización, y si es un software diseñado o acondicionado a la medida, que cubra todas los requerimientos de la entidad, es decir realizar testing de software.

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-9.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Designar personal capacitado para desempeñar los roles o funciones que exija el proceso de conservación y asegurar su continua actualización.


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

<style lang="sass"></style>
