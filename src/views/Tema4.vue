<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Deserciones
      .row.mb-5
        .col-sm-12.col-lg-5
            img(src='@/assets/curso/temas/tema4/01.svg' alt="Formación titulada virtual")
        .col-sm-12.col-lg-7
          p.mb-3 Según el Reglamento del Aprendiz, el estudiante, como gestor principal de su proceso de formación, debe participar de manera activa y oportuna en las diferentes actividades, presenciales y/o virtuales, que conforman la ruta de aprendizaje.
          p.fw-bold.mb-4 De acuerdo con el documento, las siguientes causales generan deserción:
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span a
              | Cuando el aprendiz injustificadamente no se presenta por tres (3) días consecutivos al centro o empresa en su proceso formativo (aplica para aprendices de formación presencial).
            li 
              .lista-ol--cuadro__vineta
                span b
              | Cuando, al terminar el periodo de aplazamiento aprobado por el SENA, el aprendiz no reingresa al programa de formación.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Cuando transcurridos dos (2) años contados a partir de la fecha de terminación de la etapa lectiva del programa, el aprendiz no ha presentado la evidencia de la realización de la etapa productiva.
      .cajon.color-acento-contenido.p-4.mb-5
        p.mb-0 Cuando el aprendiz se encuentre incurso en alguna de estas situaciones, el instructor, o el funcionario responsable del seguimiento respectivo, reportará inmediatamente el caso al coordinador académico. 

      .row.mb-5
        .col-sm-12.col-lg-8
          p.mb-4 Este último, a su vez, enviará una comunicación al aprendiz a la dirección domiciliaria registrada en el sistema de gestión de información requiriéndole para que justifique plenamente el incumplimiento, aportando los soportes respectivos dentro de los cinco (5) días hábiles siguientes al envío.
          p.mb-4 Si el aprendiz no da respuesta dentro del término establecido o no aporta las evidencias que justifiquen plenamente el incumplimiento, el subdirector del centro suscribirá el acto académico que declara la deserción en el proceso y ordena la respectiva cancelación de matrícula, acto administrativo debidamente notificado al aprendiz, para que dentro de los términos de ley presente el recurso de reposición ante el subdirector del centro.
          p.mb-0 Una vez esté en firme la decisión, deberá ser registrada la novedad en el sistema de gestión académica.  La cancelación de la matrícula implica que el aprendiz no pueda participar en procesos de ingreso a la institución en programas de formación titulada dentro de los seis (6) meses siguientes, contados a partir del registro de la novedad en el sistema de gestión de la formación.
        .col-sm-12.col-lg-4
          img(src='@/assets/curso/temas/tema4/02.svg' alt="Formación titulada virtual")
</template>

<script>
export default {
  name: 'Tema4',
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
