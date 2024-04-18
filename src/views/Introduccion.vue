<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.pt-4.px-4
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-0
      .col-sm-12.col-lg-8
        p.mb-5 La evaluación del aprendizaje está dirigida, más que a evaluar el conocimiento teórico, a evaluar la aplicación de dicho conocimiento en prácticas reales, con resultados concretos, en el proceso de formación, tanto en la etapa lectiva como en la productiva. Con este fin, el SENA asume las evidencias de aprendizaje como referentes, a partir de los cuales se pueden identificar los logros alcanzados por los aprendices.
        p Asimismo, se exponen las diversas opciones con las que cuentan los aprendices SENA para el desarrollo y seguimiento de su etapa productiva, en la cual los aprendices logran poner en práctica en contextos reales los conocimientos adquiridos durante su etapa de formación, permitiendo que se fortalezcan sus competencias y que su integración al mundo laboral sea exitosa.
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/img01.png' alt="Introduccion")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
