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
          p.mt-3 Por lo anterior, las organizaciones tanto públicas como privadas, deben acogerse a ciertas normativas, estándares, como también deben realizar implementaciones en procedimientos e infraestructura que garantizarán no sólo la calidad y seguridad sino la vigencia a largo plazo de los datos, de manera fiable, íntegra y auténtica.
          p.mt-3 Conservar implica que la información debe pasar por una caracterización donde la que deja de ser necesaria en la gestión del día a día, debe ser almacenada adecuadamente teniendo en cuenta la gestión del riesgo
    p.mt-5 Las siguientes son algunas recomendaciones a la hora de tomar la decisión de conservar documentos digitales:
    .row.mt-5
      .col-12.col-md-8.offset-md-2
        LineaTiempoC.color-acento-contenido(text-small).text-center.bg-gris-claro.p-4.rounded-15
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-2.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Asegurarse que la tecnología <i>hardware</i> y <i>software</i> que va a utilizar, garantice la supervivencia de los datos.

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
              p.mt-3 Los datos deben tener formatos portables, para que puedan ser visualizados con códigos abiertos y no propietarios para facilitar su administración y conservación. Hay formatos estándar y reconocibles como los de tipo <i>HTML</i> o <i>XML</i> que es el formato más recomendable para la información empaquetada.

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
              p.mt-3 Que los encargados de generar o crear los metadatos, garanticen su calidad tal como lo proponen algunos esquemas como <i>Dublin Core</i>, <i>ESE</i>, <i>MODS</i>, entre otros.
          
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-7.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Implementar buenas prácticas de seguridad y políticas de copias en los ficheros para que estén protegidos de deterioro, pérdida o atentados de tipo intencional o natural.
              p.mt-3 Que el sistema de aseguramiento de calidad, garantice la trazabilidad y mejora del proceso de conservación.
            
          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-8.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Que el <i>software</i> usado para esta finalidad, sea previamente analizado para que satisfaga las necesidades de la organización, y si es un <i>software</i> diseñado o acondicionado a la medida, que cubra todos los requerimientos de la entidad, es decir, realizar <i>testing</i> de <i>software</i>.

          .row(titulo="")
            .col-6.col-xl-4.offset-3.offset-xl-4
              figure.px-5
                img(src='@/assets/template/tema-7-9.svg', alt='Texto que describa la imagen')
            .col-8.offset-2
              p.mt-3 Designar personal capacitado para desempeñar los roles o funciones que exija el proceso de conservación y asegurar su continua actualización.
    
    p A continuación, se exponen algunos conceptos básicos, relacionados con la conservación digital de archivos:

    p.mt-4 Para ampliar la información, es importante consultar el siguiente decreto 1080 del 2015 en el Artículo 2.8.2.7.2. donde se encuentran las definiciones de cada una de las características del documento electrónico de archivo. 
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-morado-claro.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-5-4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1  Manual: Fundamentos de la preservación digital a largo plazo
                  p.text-small Lo invitamos a leer y comprender el siguiente enlace, donde encontrará los temas anteriormente mencionados, con mayor detalle de los procedimientos requerido.
                .col-sm-auto
                  a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/Manual_Fundamentos_De_Preservacion_Digital.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    p.mb-5 A continuación, se exponen algunos conceptos básicos, relacionados con la conservación digital de archivos:

    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="Almacenamiento físico")
        p Se hacen por medio de carpetas, cajas, estantería con ciertos requisitos especiales. 
      
      .row(numero="2" titulo="Almacenamiento electrónico")
        p Se hace por medio de un hardware adecuado para almacenar grandes volúmenes de documentos.

      .row(numero="3" titulo="Archivo digital")
        p Es un archivo que la organización opera, que puede formar parte de una organización más amplia, de personas y sistemas, que ha aceptado la responsabilidad de conservar información y mantenerla disponible para una comunidad designada. (NTC-ISO 14721:2018)

      .row(numero="4" titulo="Gestión de registros")
        p Contribuye a la organización en la gestión eficaz de documentos, especialmente en relación con la creación, recepción, mantenimiento, uso y procesamiento de información en forma de registros, que representan las actividades y actividades de la organización.

      .row(numero="5" titulo="Gestión documental")
        p Contribuye a las organizaciones a utilizar su información de manera más eficiente, lo que contribuye a un mayor control sobre la creación, almacenamiento, revisión y distribución de documentos entre los usuarios (incluido el correo electrónico) de acuerdo con la Política de privacidad. Lo mismo ocurre con el control del flujo de archivos.

      .row(numero="6" titulo="Plan de preservación digital")
        p Es un conjunto de procedimientos destinados a garantizar la creación y conservación de documentos digitales.

      .row(numero="7" titulo="Practica")
        p Acciones conducidas a ejecutar los procedimientos. Las prácticas se miden mediante los registros (documentación) u otra evidencia que registre las acciones completadas. (NTC-ISO16363:2016).

      .row(numero="8" titulo="Programa de Gestión Documental")
        p Es el conjunto de actividades administrativas y técnicas, pendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades (Programa de gestión documental. 2014).

      .row(numero="9" titulo="Transferencia")
        p Los documentos se pueden guardar en el Administrador de documentos, pero si una organización prefiere mover archivos a otro entorno de almacenamiento por razones de espacio u otras consideraciones.
      
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
