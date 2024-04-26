<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Trámites de gestión administrativa
    
    p.mb-5 Es necesario que el aprendiz reconozca los siguientes trámites que en cualquier momento puede solicitar.  Para cada uno de los casos, el interesado debe elevar una solicitud formal a través de oficio radicado en el centro de formación y registrado en el sistema de gestión de formación.   A continuación, se listan los siguientes:

    .linea-tiempo-k.color-acento-botones
      .linea-tiempo-k__item.row.linea-tiempo-k__item--selected
        .col-auto.linea-tiempo-k__item__col-number
          .linea-tiempo-k__item__number.tarjeta.tarjeta--color-acento-contenido
            span 1
          .linea-tiempo-k__item__dots
        .col.mb-4
          .linea-tiempo-k__item__content.tarjeta.tarjeta--color-acento-contenido
            .linea-tiempo-k__item__content__slot
              .row.mb-5.p-5
                .col-sm-12.col-lg-8
                  h3 Traslado
                  .mt-3 Se realiza cuando el aprendiz requiere cambio de jornada, de centro de formación, en el mismo programa o en otro que corresponda a la misma red o línea tecnológica.
                  .mt-3 Para solicitarlo, el interesado debe haber adelantado, como mínimo, el primer trimestre del proceso de formación del programa, y la correspondiente autorización está supeditada a la disponibilidad de cupo que exista en el programa para el cual requiere traslado; además, debe encontrarse a paz y salvo con el centro de formación. 
                  .mt-3 El número de veces del traslado debe estar supeditado al análisis del comité de evaluación y seguimiento del centro de formación. 
                  .mt-3 Cuando el aprendiz se encuentre sancionado con condicionamiento de matrícula, no se le autorizará traslado ni aplazamiento del proceso de formación.
                .col-sm-12.col-lg-4
                  img(src='@/assets/curso/temas/tema3/01.svg' alt="Formación titulada virtual")
                      
      .linea-tiempo-k__item.row.linea-tiempo-k__item--selected
        .col-auto.linea-tiempo-k__item__col-number
          .linea-tiempo-k__item__number.tarjeta.tarjeta--color-acento-contenido
            span 2
          .linea-tiempo-k__item__dots
        .col.mb-4
          .linea-tiempo-k__item__content.tarjeta.tarjeta--color-acento-contenido
            .linea-tiempo-k__item__content__slot
              .row.mb-5.p-5
                .col-sm-12.col-lg-8
                  h3 Aplazamiento
                  .mt-3 Es la solicitud para desvincularse temporalmente del programa de formación en el que se encuentra matriculado, por las siguientes causas: incapacidad médica, licencia de maternidad, servicio militar, problemas de seguridad o calamidad doméstica, debidamente demostradas con los respectivos soportes legales.
                  .mt-3 El aplazamiento será autorizado por el Comité de Evaluación y Seguimiento del centro de formación a través de acto administrativo, por un tiempo máximo de seis (6) meses calendario continuos o discontinuos, de acuerdo con el tiempo de duración del programa, contados a partir de su notificación o respectiva respuesta a la solicitud.
                  .mt-3 Cuando se trate de aplazamiento por prestación de servicio militar o incapacidad, el Comité podrá autorizarlo por un tiempo superior a los seis meses mientras permanezca en esta situación.
                .col-sm-12.col-lg-4
                  img(src='@/assets/curso/temas/tema3/02.svg' alt="Formación titulada virtual")
      .linea-tiempo-k__item.row.linea-tiempo-k__item--selected
        .col-auto.linea-tiempo-k__item__col-number
          .linea-tiempo-k__item__number.tarjeta.tarjeta--color-acento-contenido
            span 3
          .linea-tiempo-k__item__dots
        .col.mb-4
          .linea-tiempo-k__item__content.tarjeta.tarjeta--color-acento-contenido
            .linea-tiempo-k__item__content__slot
              .row.mb-5.p-5
                .col-sm-12.col-lg-8
                  h3 Reingreso
                  .mt-3 Es la solicitud para reanudar su proceso de formación en el programa donde solicitó aplazamiento, y la fecha límite para que el aprendiz reingrese será la indicada en el acto administrativo respectivo. 
                  .mt-3 El reingreso está supeditado a que el programa se encuentre en ejecución y a la disponibilidad de cupo. De no existir cupo en el programa en el cual el aprendiz solicitó aplazamiento, el reingreso podrá efectuarse cuando exista disponibilidad de este; en todo caso, se informará por escrito al aprendiz la fecha de reintegro o su imposibilidad.
                  .mt-3 Si el programa al que solicita el reingreso no se encuentra vigente en el momento de la solicitud, el Comité de Evaluación y Seguimiento procederá a: 
                  .mt-3 *Verificar que el programa vigente corresponda a la misma red, modalidad de formación o línea tecnológica.
                  .mt-3 *Analizar cada una de las competencias y resultados de los dos programas para establecer los que le faltan al aprendiz para que continúe en el proceso de formación.
                .col-sm-12.col-lg-4
                  img(src='@/assets/curso/temas/tema3/03.svg' alt="Formación titulada virtual")
      .linea-tiempo-k__item.row.linea-tiempo-k__item--selected
        .col-auto.linea-tiempo-k__item__col-number
          .linea-tiempo-k__item__number.tarjeta.tarjeta--color-acento-contenido
            span 4
        .col.mb-4
          .linea-tiempo-k__item__content.tarjeta.tarjeta--color-acento-contenido
            .linea-tiempo-k__item__content__slot
              .row.mb-5.p-5
                .col-sm-12.col-lg-8
                  h3 Retiro voluntario
                  .mt-3 Es la petición para retirarse definitivamente del programa de formación. Implica que el aprendiz no pueda participar en procesos de ingreso a la institución en programas de formación titulada dentro de los seis (6) meses siguientes, contados a partir del registro de la novedad. 
                .col-sm-12.col-lg-4
                  img(src='@/assets/curso/temas/tema3/04.svg' alt="Formación titulada virtual")
        .hidden-slot

    
          

</template>

<script>
export default {
  name: 'Tema3',
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
