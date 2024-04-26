<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Alternativas de selección etapa productiva
      p.mb-5 Al finalizar la etapa lectiva, es importante que usted tenga conocimiento sobre el desarrollo de la etapa productiva. Este es el periodo en el cual podrá resolver problemas reales del sector empresarial, aplicar los conocimientos, habilidades y destrezas pertinentes a las competencias del programa de formación, asumiendo metodologías de autogestión.  
      .row.mb-5.justify-content-center
        .col-sm-12.col-lg-8
          h5 Conozca a continuación las diferentes alternativas que puede elegir para realizar en su etapa productiva. 

      TabsA.color-primario.mb-5
        .tarjeta.tarjeta--color-acento-contenido.p-5(titulo="Contrato de aprendizaje")
          h4 Contrato de aprendizaje
          .row.mb-5
            .col-sm-12.col-lg-8
              p.mb-3 Desempeño, a través del contrato de aprendizaje, en una de las diferentes empresas obligadas y/o voluntarias, incluida el SENA. La constancia de cumplimiento a satisfacción es expedida por la empresa respectiva.
            .col-sm-12.col-lg-4
              img(src='@/assets/curso/temas/tema5/01.svg' alt="Formación titulada virtual")
        .tarjeta.tarjeta--color-acento-contenido.p-5(titulo="Vinculación laboral")
          h4 Vinculación laboral
          .row.mb-5
            .col-sm-12.col-lg-8
              p.mb-3 Desempeño a través de vinculación laboral o contractual en actividades relacionadas con el programa de formación de conformidad con la normativa dispuesta para contratos de aprendizaje. La constancia de cumplimiento a satisfacción es expedida por la empresa respectiva.
            .col-sm-12.col-lg-4
              img(src='@/assets/curso/temas/tema5/02.svg' alt="Formación titulada virtual")
        .tarjeta.tarjeta--color-acento-contenido.p-5(titulo="Participación en proyectos productivos")
          h4 Participación en proyectos productivos
          .row.mb-5
            .col-sm-12.col-lg-8
              p.mb-3 Participación en un proyecto productivo, o en SENA – Empresa, proveedor SENA. Estos posibilitan la simulación de entornos productivos reales y la aplicación de conocimientos, habilidades y destrezas pertinentes para las competencias del programa, para cumplir con el objetivo de la etapa productiva, donde se concierta sobre las condiciones de estadía, esto es, pago de algún auxilio económico o en especie.  La constancia de cumplimiento a satisfacción la expide el subdirector del centro respectivo. 
            .col-sm-12.col-lg-4
              img(src='@/assets/curso/temas/tema5/03.svg' alt="Formación titulada virtual")
        .tarjeta.tarjeta--color-acento-contenido.p-5(titulo="Apoyo a entidades estatales, ONG y S.A.L")
          h4 Apoyo a entidades estatales, ONG y S.A.L
          .row.mb-5
            .col-sm-12.col-lg-8
              p.mb-3 De apoyo a una institución estatal nacional, territorial, o a una ONG, o a una entidad sin ánimo de lucro, para el desempeño de actividades prácticas asociadas a su programa de formación o el desarrollo de un proyecto productivo en un ambiente de formación facilitado por esta institución, donde el aprendiz hace su propia concertación con la institución sobre las condiciones de estadía. La constancia de cumplimiento a satisfacción de la pasantía la expide el directivo o responsable del proceso del aprendiz en la institución.
            .col-sm-12.col-lg-4
              img(src='@/assets/curso/temas/tema5/04.svg' alt="Formación titulada virtual")
        .tarjeta.tarjeta--color-acento-contenido.p-5(titulo="Monitoría")
          h4 Monitoría
          .row.mb-5
            .col-sm-12.col-lg-8
              p.mb-3 Los aprendices seleccionados apoyan los procesos de formación con actividades complementarias. Debe ser en especialidades tecnológicamente afines a su programa de formación en un centro SENA particular. La constancia de cumplimiento a satisfacción de las actividades de monitoría la expide el subdirector del centro de acuerdo con las horas asignadas por resolución.
            .col-sm-12.col-lg-4
              img(src='@/assets/curso/temas/tema5/05.svg' alt="Formación titulada virtual")
        .tarjeta.tarjeta--color-acento-contenido.p-5(titulo="Pasantías")
          h4 Pasantías
          .row.mb-5
            .col-sm-12.col-lg-8
              p.mb-3 Entre las cuales se contempla la asesoría a PYMES como alternativa de etapa productiva.
            .col-sm-12.col-lg-4
              img(src='@/assets/curso/temas/tema5/06.svg' alt="Formación titulada virtual")
      .row.mb-5.justify-content-center
        .col-sm-12.col-lg-10
          h5 Una vez que tenga claro cuál alternativa es más conveniente y que haya comprobado que cumple con los requisitos, el aprendiz debe:
      .row.mb-5
        .col-sm-12.col-lg-12
          ul.lista-ul--color.lista-ul--separador
            li.px-4 
              i.fas.fa-check-circle
              | Solicitar a la coordinación de su centro de formación el aval y registro de la alternativa.
            li.px-4 
              i.fas.fa-check-circle
              | Comunicar todos los datos personales, ficha, fecha de inicio y fin del desarrollo de la etapa productiva, datos de la empresa donde va a desarrollarla, con el fin de que le sea concedido el aval y así poder iniciar la etapa productiva.
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
