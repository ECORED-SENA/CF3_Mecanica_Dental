export default {
  global: {
    componenteFormativo: 'Aparatos dentales de ortopedia funcional',
    descripcionCurso:
      'Los aparatos de ortopedia funcional pueden ser utilizados para corregir malposiciones o maloclusiones dentarias a cualquier edad. En la elaboración de la aparatología es importante tener en cuenta la normatividad, la calidad, y el uso de las buenas prácticas en la confección de los aparatos; de esta manera se puede planear la fabricación del aparato a partir de la prescripción clínica, garantizando así el cumplimiento de las necesidades del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Normativa nacional para laboratorios de Mecánica Dental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Lineamientos para su funcionamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Equipamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Prohibiciones y sanciones',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Talento humano',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aparatos de ortopedia funcional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Evolución',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Función',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Indicaciones y precauciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Anatomía dental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estructura anatómica',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Funciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Fisiología, forma, y posición',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Desarrollo de los dientes',
            hash: 't_3_4',
          },

          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Sistema dentario',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Función',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Morfología',
            hash: 't_3_7',
          },
        ],
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
  complementario: [
    {
      tema: 'Normativa nacional para laboratorios de Mecánica Dental',
      referencia:
        'Resolución 214 de 2022. [Ministerio Salud y Protección Social]. En ejercicio de sus facultades legales, en especial de las conferidas por los artículos 245 de la Ley 100 de 1993, 9 numeral 8 de la Ley 1618 de 2013, 1° parágrafo 2 del Decreto 4725 de 2005 y artículo 45 de la Ley 1437 de 2011.',
      tipo: 'PDF',
      descarga: '/downloads/Resolucion_No._214_de_2022.pdf',
    },
    {
      tema: 'Anatomía dental',
      referencia:
        'Esponda Vila, R. (2019). <i>Anatomía dental</i>. Universidad Nacional Autónoma de México (UNAM). ',
      tipo: 'Capítulo 1.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/187393',
    },
  ],
  glosario: [
    {
      termino: 'Arista central',
      significado:
        'Elevación del esmalte que se encuentra en la cara vestibular más marcado de los caninos y recorre la pieza en su tercio medio desde cervical o incisal.',
    },
    {
      termino: 'Cíngulo',
      significado:
        'Elevación del esmalte que se encuentra por palatino – lingual de los incisivos y caninos en su tercio cervical.',
    },
    {
      termino: 'Cresta central',
      significado:
        'Elevación del esmalte característico de los caninos que se encuentra en su cara palatina lingual, en su tercio medio y recorre desde el cíngulo hasta el borde incisal (punta cuspídea).',
    },
    {
      termino: 'Cresta marginal',
      significado:
        'Elevación del esmalte característica de incisivos y de caninos que se encuentra en su cara palatina, lingual en mesial y distal.',
    },
    {
      termino: 'Cresta triangular',
      significado:
        'Elevación del esmalte con forma triangular que se encuentra en la vertiente interna de la cúspide.',
    },
    {
      termino: 'Cúspide',
      significado:
        'La elevación de esmalte que se encuentra en la cara oclusal de los premolares y molares, consta de 4 vertientes: vertiente externa, vertiente interna, vertiente mesial y vertiente distal.',
    },
    {
      termino: 'Dentomaxilares',
      significado:
        'Corresponden a un grupo de alteraciones en el desarrollo de los maxilares que se presenta frecuentemente junto a mal posición dentaria que repercuten en la forma, función y estética del sistema estomatognático.',
    },
    {
      termino: 'Fosa principal',
      significado:
        'Fosa que forma por la unión del surco principal y transversal. Puede haber más de uno.',
    },
    {
      termino: 'Fosa secundaria',
      significado:
        'Fosa que se forma por la unión del surco principal y surcos secundarios.',
    },
    {
      termino: 'Maloclusión',
      significado: 'Es la incorrecta alineación de los dientes.',
    },
    {
      termino: 'Rebordes marginales',
      significado:
        'Elevación del esmalte que se encuentra en mesial y distal de la cara oclusal de premolares y molares, siendo la zona donde finalizan surcos secundarios.',
    },
    {
      termino: 'Sistema estomatognático',
      significado:
        'Es el conjunto de órganos y tejidos que permiten las funciones fisiológicas de: comer, hablar, pronunciar, masticar, deglutir, sonreír incluyendo todas las expresiones.',
    },
    {
      termino: 'Surco principal',
      significado:
        'Surco que recorre la pieza desde mesial a distal, sirve como vía de escape para el alimento triturado.',
    },
    {
      termino: 'Surco secundario',
      significado:
        'Surco formado en la terminación del surco principal tanto en mesial como en distal.',
    },
    {
      termino: 'Surco transversal',
      significado: 'Surco que recorre la pieza vestibular a palatino-lingual.',
    },
    {
      termino: 'Tubérculo de carabelli',
      significado:
        'Elevación del esmalte característico de los primeros molares definitivos que se encuentra en la vertiente externa de la cúspide mesio palatina',
    },
  ],
  referencias: [
    {
      referencia: 'Artedental (2015). <i>Nomenclatura Dental.</i>',
      link:
        'http://artedental.es/_movil/pacientes/nomenclatura-dental.html#:~:text=La%20nomenclatura%20m%C3%A1s%20utilizada%20es,incisivos%20centrales%2C%20y%20hacia%20atr%C3%A1s.',
    },
    {
      referencia:
        'Caero Bernal, M. (2009). Ortodoncia <i>dental y sus tipos</i>. El Cid Editor | apuntes.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/28232',
    },
    {
      referencia:
        'Esponda Vila, R. (2019). <i>Anatomía dental</i>. Universidad Nacional Autónoma de México (UNAM). ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/187393',
    },
    {
      referencia: 'Ilerna. (2019). Nomenclatura dentaria.',
      link:
        'https://storage.googleapis.com/ilerna_media-cloud/wordpress_ilerna/production/nomenclatura-dentaria.jpg',
    },
    {
      referencia:
        'Gill, D. & B. Naini, F. (2014). <i>Ortodoncia: principios y práctica</i>. Editorial El Manual Moderno.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/39664',
    },
    {
      referencia:
        'Matiz Cuervo, J. (2014). <i>Temas de rehabilitación oral: acrílicos dentales. 1: Clínica-laboratorio.</i> Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/122433',
    },
    {
      referencia:
        'Medineplus. (2022). <i>Desarrollo de los dientes permanentes</i>.',
      link: 'https://medlineplus.gov/spanish/ency/esp_imagepages/18162.htm',
    },
    {
      referencia:
        'Mounth healthy, (s.f.). <i>Tablas de erupción de dientes</i>.',
      link:
        'https://www.mouthhealthy.org/es-MX/az-topics/e/eruption-charts#:~:text=Al%20nacer%2C%20las%20personas%20t%C3%ADpicamente,los%20dientes%20permanentes%20han%20salido.',
    },
    {
      referencia:
        'Navas Cuenca, E. (Coord.). (2018). <i>Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales (2a. ed.)</i>. Editorial ICB.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/111411',
    },
    {
      referencia:
        'Nayib Radi L. J. & Álvarez G. G. J. (2017). </i>Aspectos claves: alteraciones del desarrollo dental.<i> Fondo Editorial CIB.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/186732',
    },
    {
      referencia:
        'Riojas, M. (2014). <i>Anatomía dental (3a. ed.)</i>. Editorial El Manual Moderno.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/39706',
    },
    {
      referencia:
        'Uribe Restrepo, G. A. & Uribe Trespalacios, P. (2019). <i>Fundamentos de odontología: ortodoncia: teoría y clínica "énfasis en biomecánica" (3a. ed.)</i>. Fondo Editorial CIB.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/186719',
    },
    {
      referencia:
        'Venegas, C.; Farfán, C. y Fuentes, R. (2021). Posiciones Mandibulares de Referencia Clínica. Una Descripción Narrativa. Revista internacional de odontoestomatología. 15 (2), 387-396.',
      link: 'https://dx.doi.org/10.4067/S0718-381X2021000200387',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel L. Toro A.',
        cargo: 'Experto temático',
        centro: 'Regional Antioquia - Centro de Servicios de Salud',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
