<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Estándares de calidad de datos
    figure.mt-4
      img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    p.mt-5 La calidad del producto de datos se puede entender como el grado en que los datos satisfacen los requisitos definidos por la organización a la que pertenece el producto. Son precisamente estos requisitos los que se encuentran reflejados en el modelo de calidad de datos mediante sus características (ISO/IEC 25012).
    p.mt-4 El modelo de calidad de producto de datos definido por el estándar ISO/IEC 25012 se encuentra compuesto por las quince (15) características que se muestran en la siguiente figura 3:
    .scroll-x-tabla
      .row.mt-5
        .col-12 
          .titulo-sexto.color-acento-contenido
            h5 Figura 3
            p.text-small Calidad de datos
          .tabla-a.color-acento-contenido.mt-5 
            table
              thead
                tr.text-center
                  th.py-3(colspan="2") Calidad de datos inherentes
                  th Calidad de datos dependiente del sistema
              tbody
                tr
                  td.p-0.position-relative 
                    .row.py-4
                      .col-6.offset-3
                        .row
                          .col-12
                            .row.bg-azul.py-3.text-center.rounded-15
                              .h4.text-small EXACTITUD
                          .col-12.mt-3
                            .row.bg-azul.py-3.text-center.rounded-15
                              .h4.text-small COMPLETITUD
                          .col-12.mt-3
                            .row.bg-azul.py-3.text-center.rounded-15
                              .h4.text-small CONSISTENCIA
                          .col-12.mt-3
                            .row.bg-azul.py-3.text-center.rounded-15
                              .h4.text-small CREDIBILIDAD
                          .col-12.mt-3
                            .row.bg-azul.py-3.text-center.rounded-15
                              .h4.text-small ACTUALIDAD
                      
                        
                  td
                    .row.py-4.text-white
                      .col-10.col-md-8.col-lg-6.offset-1.offset-md-2.offset-lg-0.px-3
                        .row
                          .col-12
                            .row.bg-morado.py-3.text-center.rounded-15
                              .h4.text-small ACCESIBILIDAD
                          .col-12.mt-3
                            .row.bg-morado.py-3.text-center.rounded-15
                              .h4.text-small CONFORMIDAD
                          .col-12.mt-3
                            .row.bg-morado.py-3.text-center.rounded-15
                              .h4.text-small CONFIDENCIALIDAD
                          .col-12.mt-3
                            .row.bg-morado.py-3.text-center.rounded-15
                              .h4.text-small EFICIENCIA
                      .col-10.col-md-8.col-lg-6.offset-1.offset-md-2.offset-lg-0.px-3.mt-3.mt-lg-5
                        .row
                          .col-12
                            .row.bg-morado.py-3.text-center.rounded-15
                              .h4.text-small PRECISIÓN
                          .col-12.mt-3
                            .row.bg-morado.py-3.text-center.rounded-15
                              .h4.text-small TRAZABILIDAD
                          .col-12.mt-3
                            .row.bg-morado.py-3.text-center.rounded-15
                              .h4.text-small COMPRENSIBILIDAD
                  td.p-0.position-relative 
                    .row.py-4.text-white.mx-0
                      .col-9.offset-2
                        .row
                          .col-12
                            .row.bg-naranja-fuerte.py-3.text-center.rounded-15
                              .h4.text-small DISPONIBILIDAD
                          .col-12.mt-3
                            .row.bg-naranja-fuerte.py-3.text-center.rounded-15
                              .h4.text-small PORTABILIDAD
                          .col-12.mt-3
                            .row.bg-naranja-fuerte.py-3.text-center.rounded-15
                              .h4.text-small RECUPERABILIDAD
        figcaption.mt-3 Nota. ISO 25000 (2021).
    p.mt-5 Teniendo en cuenta las características de calidad de datos, estos se clasifican en:
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Calidad de datos inherentes" :icono="require('@/assets/template/tema-4-2.svg')")
        .row
          .col-12.col-lg-7
            .h3 Calidad de datos inherentes
            p.mt-4 Según la norma ISO 25000, se refiere al grado con el que las características de calidad de los datos tienen el potencial intrínseco para satisfacer las necesidades establecidas y necesarias cuando los datos son utilizados bajo condiciones específicas. Desde el punto de vista inherente, la calidad de datos se refiere a los mismos datos, en particular a:
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Valores de dominios de datos y posibles restricciones (p. e.j., reglas de negocio gobernando la calidad requerida por las características en una aplicación dada).
              li 
                i.fas.fa-angle-right
                | Relaciones entre valores de datos (p. e.j., consistencia).
              li 
                i.fas.fa-angle-right
                | Metadatos.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-4-4.png", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Calidad de datos dependiente del sistema" :icono="require('@/assets/template/tema-4-3.svg')")
        .row
          .col-12.col-lg-7
            .h3 Calidad de datos dependiente del sistema
            p.mt-4 Según la norma ISO 25000, se refiere al grado con el que la calidad de datos es alcanzada y preservada a través de un sistema informático cuando los datos son utilizados bajo condiciones específicas.
            p.mt-3 Desde el punto de vista dependiente del sistema, la calidad de datos depende del dominio tecnológico en el que los datos se utilizan, y se alcanza mediante las capacidades de los componentes del sistema informático tales como: dispositivos <i>hardware</i> (p. e.j., respaldo <i>software</i> para alcanzar la recuperabilidad), y otro <i>software</i> (p. e.j., herramientas de migración para alcanzar la portabilidad).
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src="@/assets/template/tema-4-5.png", alt="Texto que describa la imagen")




              
</template>

<script>
export default {
  name: 'Tema4',
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
thead tr th:nth-child(1)
  width: 70%
</style>
