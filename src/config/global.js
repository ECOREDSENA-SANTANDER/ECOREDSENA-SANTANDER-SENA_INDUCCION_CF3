export default {
  global: {
    componenteFormativo: 'Formación titulada virtual',
    descripcionCurso:
      'La formación titulada virtual es una modalidad de la formación profesional integral que imparte el SENA, comprende las actividades de formación, entrenamiento, evaluación y reentrenamiento en temas específicos y se caracteriza porque las acciones de formación conducen al otorgamiento de un título de formación profesional, cumpliendo además con varios procesos y trámites administrativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procesos de evaluación SENA',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de mejoramiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Trámites de gestión administrativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Deserciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Alternativas de selección etapa productiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguimiento al desarrollo de la etapa productiva',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Etapa productiva',
      referencia: 'SENA (s.f.) Etapa productiva. Aspectos generales.  ',
      tipo: 'PDF',
      descarga: '/downloads/etapa_productiva_aprendices_virtual.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprendiz',
      significado:
        'es una persona en continuo proceso de aprendizaje, en interacción permanente consigo mismo, con los demás y con la naturaleza, en los entornos sociales y productivos; en capacidad de construir sus propios conocimientos, que busca trascender la interpretación de la realidad para contribuir propositivamente en la transformación de esta, con un proyecto de vida centrado en el mejoramiento continuo personal, familiar, social y productivo. ',
    },
    {
      termino: 'Competencia laboral',
      significado:
        'la capacidad de una persona para desempeñar funciones productivas en contextos variables, con base en los estándares de calidad establecidos por el sector productivo. ',
    },
    {
      termino: 'Estilo de aprendizaje',
      significado:
        'es el conjunto de características psicológicas, rasgos afectivos, cognitivos y fisiológicos que suelen expresarse conjuntamente cuando una persona debe enfrentar una situación de aprendizaje. ',
    },
    {
      termino: 'Estrategia didáctica activa',
      significado:
        'es una propuesta de carácter metodológico que crea las condiciones propicias para que el aprendiz asuma su rol activo; el instructor, su rol de mediador; en medio de unos ambientes de aprendizaje tecnológicamente dotados para el proceso de aprender y de enseñar. ',
    },
    {
      termino: 'Plan de mejoramiento',
      significado:
        'un plan de mejoramiento académico es un conjunto de medidas de cambio que se toman para optimizar el rendimiento académico y el desempeño actitudinal del estudiante. ',
    },
    {
      termino: 'Pedagogía',
      significado:
        'es una ciencia aplicada, con características psicosociales, que tiene a la educación como principal interés de estudio. ',
    },
    {
      termino: 'Resultados de aprendizaje',
      significado:
        'se definen como los logros (productos, respuestas, desempeños) de tipo motriz, valorativo, cognitivo y actitudinal, que debe alcanzar el aprendiz durante el proceso de aprendizaje. ',
    },
    {
      termino: 'Transversales',
      significado:
        'una parte muy importante de la estructura curricular SENA es el aporte de las cinco (5) competencias transversales, las cuales se integran articuladamente dentro del diseño y el proyecto formativo. Estas son: emprendimiento, inglés, cultura física, salud ocupacional, ética. Cada aprendiz, dentro de su programa, se forma en la puesta en práctica e integrada de aptitudes, rasgos de personalidad, conocimientos y valores adquiridos, que son útiles, sean cuales sean sus campos de acción. ',
    },
  ],
  referencias: [
    {
      referencia:
        'SENA. (2016). Instructivo para orientar el desempeño del instructor en ambientes virtuales de aprendizaje. Versión 2. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia.  ',
    },
    {
      referencia:
        'SENA. (2015). Formación tecnopedagógica en ambientes virtuales de aprendizaje. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia.  ',
    },
    {
      referencia:
        'SENA. (2012). Inducción a procesos pedagógicos. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia.  ',
    },
    {
      referencia:
        'SENA. (2014). Inducción SENA. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia. ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2016). Formación virtual. ',
      link: 'http://www.mineducacion.gov.co/cvn/1665/w3-article-261460.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Diana Patricia Carmona Milian',
          cargo: 'E-pedagoga',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'María Cecilia Aroca Díaz',
          cargo: 'E-pedagoga',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Marisol Báez Solano',
          cargo: 'E-pedagoga',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Frankli Gómez Cardona',
          cargo: 'E-pedagogo',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Humberto Amaya Alvear',
          cargo: 'E-pedagogo',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Correcctor de estilo',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carla Liliana Sequera Vargas',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora Fullstack',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
