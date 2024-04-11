<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Seguimiento al desarrollo de la etapa productiva 
      .row.mb-5
        .col-sm-12.col-lg-9
          .cajon.color-acento-contenido.p-4.mb-4
            p.mb-3 Después de cumplir con el periodo de la etapa lectiva, el aprendiz pasa a la etapa productiva, la cual tiene una duración de 864 horas (6 meses) para los programas técnicos y tecnológicos.
            p.mb-0 Cuando el aprendiz ejecuta una alternativa y no ha cumplido con el tiempo, puede complementar con otra alternativa el tiempo faltante. Esto implica previamente realizar el proceso de informar al centro que realizará la etapa productiva para la asignación del instructor de seguimiento. 
        .col-sm-12.col-lg-3
          img(src='@/assets/curso/temas/tema6/01.svg' alt="Formación titulada virtual")
      .row.mb-5
        .col-sm-12.col-lg-12
          h5 Documentación del desarrollo de la etapa productiva
      .row.mb-5
        .col-sm-12.col-lg-3
          img(src='@/assets/curso/temas/tema6/02.svg' alt="Formación titulada virtual")
        .col-sm-12.col-lg-9.px-4
            p.mb-4 Una vez se informa de la alternativa y tiene el aval del coordinador académico, el SENA – Centro de formación le asigna un instructor de seguimiento con el que se establecerán los formatos y evidencias que el aprendiz debe presentar de acuerdo con el plan de trabajo acordado. Estos son: 
            ul.lista-ul--color.px-5-cus
              li.px-4.mb-4
                i.fas.fa-check-circle
                | Formato 023 planeación, seguimiento, evaluación diligenciada por el ente coformador, aprendiz e instructor de seguimiento.
              li.px-4 
                i.fas.fa-check-circle
                | Diligenciamiento y entrega de bitácoras quincenales por el aprendiz.
        
      .row.mb-5
        .col-sm-12.col-lg-12
          .cajon.color-acento-contenido.p-4.mb-4
            p.mb-3 El instructor técnico delegado para acompañar esta etapa debe revisar diariamente el foro destinado para la etapa productiva y debe responder a las inquietudes de los aprendices en el tiempo estimado.
            p.mb-0 En este espacio los aprendices podrán intercambiar experiencias e información relevante para su proceso de formación.
      .row.mb-5
        .col-sm-12.col-lg-12
          h5 Registro de los formatos de seguimiento
          p.mb-0 El instructor debe registrar en los formatos de seguimiento los avances del proceso formativo de cada uno de los aprendices, de acuerdo con lo establecido en el procedimiento de ejecución de la formación.
      .row.mb-5
        .col-sm-12.col-lg-12
          h5 Conferencias web
          p.mb-0 De acuerdo con la planeación realizada con el coordinador académico del centro de formación, debe realizarse como mínimo una conferencia web mensual con el instructor técnico y los aprendices. Al igual que en las demás sesiones sincrónicas, las grabaciones de estas conferencias web deberán estar disponibles en el LMS.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
