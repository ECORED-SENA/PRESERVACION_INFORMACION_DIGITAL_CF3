export default {
  global: {
    componenteFormativo: 'La documentación digital',
    descripcionCurso:
      'La documentación digital es una gran alternativa en los procesos de eficiencia y rendimientos de las organizaciones modernas, porque garantiza que la información que se busca, se encuentre de manera auténtica, desde cualquier punto del planeta, sin restricciones de horario y lo mejor, con los mínimos costos para las empresas, facilitando no solo escenarios laborales, sino también la cotidianidad. Por ello es importante conocer y aplicar las últimas tendencias de las TIC con respecto al manejo y/o administración de la información digital.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Metadatos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pautas para la eliminación de documentos digitales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Migración de información ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estándares de calidad de datos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Documento electrónico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Dispositivo de almacenamiento de datos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Conservación del documento electrónico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
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
  referencias: [
    {
      referencia:
        'Archivo General de la Nación AGN (2012).  Guía de metadatos.',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/GuiaDeMetadatos.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación AGN (2017). Guía para la Gestión de Documentos y Expedientes Electrónicos.',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/2017-08/BorradorGuiaDocumentoExpediente_.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación AGN (2003). Ordenación documental.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%20organizacion/DOCUMENTOS%20TECNICOS/CARTILLA%20DE%20ORDENACION%20DOCUMENTAL.pdf',
    },
    {
      referencia: 'Ecured. (2021). Tipos de metadatos.',
      link: 'https://www.ecured.cu/Metadatos',
    },
    {
      referencia: 'Evaluando Software. (2021). Tipos de migración de Software.',
      link: 'https://www.evaluandosoftware.com/tipos-migracion-datos/',
    },
    {
      referencia: 'ICFES. (2018). Plan de preservación digital a largo plazo.',
      link:
        'https://www.icfes.gov.co/documents/20143/1036686/13+plan+de+preservacion+digital+a+largo+plazo.docx/cda4f658-5fa3-e38d-17b8-bebab34fc4c6',
    },
    {
      referencia:
        'Función pública. (2015). Decreto 1080 de 2015. Sector Cultura – Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76833',
    },
    {
      referencia: 'Gop.pe (s.f). Qué son los metadatos.',
      link:
        'https://www.geoidep.gob.pe/conoce-las-ides/metadatos/que-son-los-metadatos',
    },
    {
      referencia: 'ISO25000 (s.f). Calidad de los datos.',
      link: 'https://iso25000.com/index.php/normas-iso-25000/iso-25012',
    },
    {
      referencia: 'MINCIT. (2020). Procedimiento de eliminación documental.',
      link:
        'https://www.mincit.gov.co/servicio-ciudadano/transparencia-acceso-informacion/documentos/procedimiento-eliminacion-documental-mincit-002.aspx',
    },
    {
      referencia:
        'MINTIC. (2019). Guía para la gestión de documentos y expedientes electrónicos.',
      link:
        'https://mintic.gov.co/arquitecturati/630/articles-61594_recurso_pdf.pdf',
    },
    {
      referencia: 'PowerData (2014). Qué es la migración de datos.',
      link:
        'https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/bid/397387/qu-es-la-migraci-n-de-datos',
    },
    {
      referencia: 'Real academia española (s.f). Diccionario.',
      link: 'https://www.rae.es/',
    },
    {
      referencia: 'UIS (s.f.). Documento electrónico.',
      link:
        'https://www.uis.edu.co/webUIS/es/administracion/secretariaGeneral/direccionCertificacionGestionDocumental/documentos/glosarioArchivistico.pdf',
    },
    {
      referencia:
        'UNE-ISO 23081-1 (2008). Información y documentación. Procesos de gestión de documentos. Metadatos para la gestión de documentos. Parte 1: Principios. Madrid: Asociación Española de Normalización y Certificación (AENOR).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acta de eliminación',
      significado:
        'Es la relación de los documentos seleccionados para ser eliminados.',
    },
    {
      termino: 'Archivo general de la nación',
      significado:
        'Es la entidad encargada de administrar y proteger el patrimonio documental de nuestro país.',
    },
    {
      termino: 'Ciclo de vida de los documentos',
      significado:
        'Es el proceso de los documentos desde su elaboración hasta su eliminación.',
    },
    {
      termino: 'Comité institucional de gestión y desempeño',
      significado:
        'Es el responsable de determinar las políticas documentales para la preservación de los documentos digitales.',
    },
    {
      termino: 'Datos',
      significado: 'Es la información suministrada por medio de un computador.',
    },
    {
      termino: 'Etl',
      significado:
        'Es una abreviación de las palabras en inglés Extract, Transform, Load.',
    },
    {
      termino: 'Extracción de documentos',
      significado:
        'Es la obtención de información automática desde una computadora.',
    },
    {
      termino: 'Inteligible',
      significado: 'Que puede ser entendido.',
    },
    {
      termino: ' Norma ISO 23081',
      significado:
        'Establece un marco para la creación, gestión y uso de metadatos para la gestión de documentos, y explica los principios por los que deben regirse (Norma ISO 23081).',
    },
    {
      termino: 'Ordenación',
      significado:
        'Conjunto de acciones orientadas a la clasificación, ordenación y descripción de los documentos de una institución, como parte integral de los procesos archivísticos. (manual procedimiento de ordenación de documentos).',
    },
    {
      termino: 'Sintaxis',
      significado:
        'Son las reglas que describen la estructura de un lenguaje de programación.',
    },
    {
      termino: 'Sistema',
      significado:
        'Programa con capacidad para dar respuestas semejantes a las que daría un experto en la materia. (rae)',
    },
    {
      termino: 'Testing de software',
      significado:
        'El Testing de Software es una autoevaluación para verificar la funcionalidad del mismo.',
    },
  ],
  complementario: [
    {
      texto: 'Udearroba. (2017). Definiciones de metadatos [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1-a_AR_yWqw',
    },
    {
      texto:
        'Universidad Interamericana para el Desarrollo. (2020). Tipos de metadatos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ADR6o7IYr2A',
    },
    {
      texto:
        'Didáctica Empresarial. (2020). Sistemas de ordenación documental. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=en2c82QzEFk',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios. CIES.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
