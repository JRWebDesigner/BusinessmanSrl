export type ServicePageData = {
  number: string
  slug: string
  navLabel: string
  title: string
  cardText: string
  eyebrow: string
  headline: string
  intro: string
  overviewTitle: string
  overview: string
  benefits: { title: string; text: string }[]
  requirements: { title: string; text: string }[]
  steps: { title: string; text: string }[]
  faqs: { question: string; answer: string }[]
}

export const servicePages: ServicePageData[] = [
  {
    number: '01',
    slug: 'inscripcion-nso',
    navLabel: 'Inscripción de NSO',
    title: 'Inscripción de NSO',
    cardText: 'Gestionamos tu Notificación Sanitaria Obligatoria con precisión y seguimiento.',
    eyebrow: 'Gestión sanitaria',
    headline: 'Lleva tus productos al mercado con respaldo.',
    intro: 'Te acompañamos en la gestión de la Notificación Sanitaria Obligatoria para que conozcas los requisitos y avances con mayor claridad.',
    overviewTitle: 'Una gestión sanitaria más clara.',
    overview: 'Revisamos la información de tu producto, te orientamos con la documentación aplicable y coordinamos el trámite correspondiente ante la autoridad sanitaria.',
    benefits: [
      { title: 'Revisión inicial', text: 'Identificamos la información y documentación que puede requerir tu producto.' },
      { title: 'Acompañamiento', text: 'Te guiamos durante las etapas de presentación y atención de observaciones.' },
      { title: 'Seguimiento', text: 'Te mantenemos al tanto de los avances y próximos pasos de la gestión.' },
    ],
    requirements: [
      { title: 'Datos del producto', text: 'Nombre, categoría, composición y presentación del producto a registrar.' },
      { title: 'Información del titular', text: 'Datos de la empresa o persona responsable de la gestión.' },
      { title: 'Documentación de respaldo', text: 'Documentos técnicos y legales que correspondan según el producto y su procedencia.' },
    ],
    steps: [
      { title: 'Evaluamos tu caso', text: 'Revisamos el producto y el objetivo de comercialización para definir el alcance.' },
      { title: 'Preparamos la gestión', text: 'Te orientamos para reunir y organizar la información necesaria.' },
      { title: 'Damos seguimiento', text: 'Acompañamos la presentación y te comunicamos las novedades del trámite.' },
    ],
    faqs: [
      { question: '¿Todos los productos necesitan una NSO?', answer: 'La exigencia depende de la categoría y normativa aplicable al producto. Revisamos contigo el caso para orientarte sobre la gestión correspondiente.' },
      { question: '¿Cuánto demora obtener una NSO?', answer: 'El plazo depende de los requisitos, la revisión de la autoridad y posibles observaciones. Te orientamos sobre los tiempos una vez revisado tu caso.' },
    ],
  },
  {
    number: '02',
    slug: 'certificados-comercializacion',
    navLabel: 'Certificados de comercialización',
    title: 'Certificados de comercialización',
    cardText: 'Documentación lista para que tus productos lleguen al mercado sin fricciones.',
    eyebrow: 'Documentación comercial',
    headline: 'Documentación lista para abrir camino.',
    intro: 'Te ayudamos a identificar y gestionar los certificados que tu producto necesita para su comercialización, según el rubro y los requisitos aplicables.',
    overviewTitle: 'Cada producto, con su respaldo.',
    overview: 'Los requisitos pueden cambiar según el tipo de producto, su origen y el canal de comercialización. Revisamos estos factores contigo para encaminar la documentación.',
    benefits: [
      { title: 'Orientación por producto', text: 'Analizamos las características de tu producto y el destino de comercialización.' },
      { title: 'Documentación organizada', text: 'Te ayudamos a identificar los documentos que deben reunirse para iniciar.' },
      { title: 'Gestión acompañada', text: 'Coordinamos los pasos de la solicitud y el seguimiento de la documentación.' },
    ],
    requirements: [
      { title: 'Identificación del producto', text: 'Descripción, categoría, presentación y uso previsto.' },
      { title: 'Información de origen', text: 'País de procedencia, fabricante y documentos disponibles del proveedor.' },
      { title: 'Destino comercial', text: 'Información sobre el mercado o canal donde buscas comercializar el producto.' },
    ],
    steps: [
      { title: 'Definimos el certificado', text: 'Revisamos qué documentación puede corresponder a tu producto.' },
      { title: 'Validamos requisitos', text: 'Te indicamos la información que conviene reunir para la solicitud.' },
      { title: 'Gestionamos y hacemos seguimiento', text: 'Acompañamos el proceso y te informamos sobre su avance.' },
    ],
    faqs: [
      { question: '¿Qué certificados puede necesitar mi producto?', answer: 'Depende de su categoría, origen y destino comercial. Comparte los datos disponibles y revisaremos contigo qué documentación podría aplicar.' },
      { question: '¿Puedo iniciar si todavía no tengo todos los documentos?', answer: 'Sí, podemos hacer una revisión inicial y señalarte qué información falta antes de confirmar los pasos para la gestión.' },
    ],
  },
  {
    number: '03',
    slug: 'despachos-aduaneros',
    navLabel: 'Despachos aduaneros',
    title: 'Despachos aduaneros',
    cardText: 'Acompañamiento experto en importaciones, exportaciones y comercio exterior.',
    eyebrow: 'Comercio exterior',
    headline: 'Importa y exporta con mayor claridad.',
    intro: 'Te acompañamos en la coordinación documental y administrativa de tus operaciones de comercio exterior, desde la preparación hasta el seguimiento.',
    overviewTitle: 'Tu operación, paso a paso.',
    overview: 'Una operación aduanera requiere coordinación entre mercancía, documentos y tiempos. Te ayudamos a entender los pasos y a organizar la información para gestionar el despacho.',
    benefits: [
      { title: 'Planificación', text: 'Revisamos el tipo de operación y la información disponible antes de avanzar.' },
      { title: 'Coordinación documental', text: 'Te orientamos sobre los documentos de respaldo que pueden requerirse.' },
      { title: 'Seguimiento operativo', text: 'Te mantenemos informado sobre los hitos y las novedades de la gestión.' },
    ],
    requirements: [
      { title: 'Datos de la mercancía', text: 'Descripción, cantidad, valor y características de los productos.' },
      { title: 'Documentos comerciales', text: 'Facturas, listas de empaque y documentos de transporte disponibles.' },
      { title: 'Información de la operación', text: 'Origen o destino, modalidad y datos de las partes involucradas.' },
    ],
    steps: [
      { title: 'Revisamos la operación', text: 'Conocemos la mercancía, el origen o destino y el objetivo de la gestión.' },
      { title: 'Organizamos la documentación', text: 'Identificamos la información necesaria y los pasos de coordinación.' },
      { title: 'Acompañamos el despacho', text: 'Damos seguimiento a la gestión y te comunicamos los avances.' },
    ],
    faqs: [
      { question: '¿Pueden ayudarme antes de que llegue la mercancía?', answer: 'Sí. Una revisión previa ayuda a identificar información y documentos que conviene preparar antes de la operación.' },
      { question: '¿Qué información necesitan para cotizar?', answer: 'Compártenos una descripción de la mercancía, origen o destino, modalidad y documentos disponibles para revisar el alcance del servicio.' },
    ],
  },
  {
    number: '04',
    slug: 'apertura-empresas',
    navLabel: 'Apertura de empresas',
    title: 'Apertura de empresas',
    cardText: 'Constituimos tu empresa unipersonal o jurídica desde cero.',
    eyebrow: 'Formalización empresarial',
    headline: 'Convierte tu proyecto en una empresa formal.',
    intro: 'Te orientamos en los pasos de constitución y formalización para que puedas iniciar tu actividad con una ruta clara y documentación organizada.',
    overviewTitle: 'Una base firme para empezar.',
    overview: 'La estructura y los trámites dependen de la actividad, el tipo de empresa y la situación de sus titulares. Revisamos estos aspectos contigo para definir los siguientes pasos.',
    benefits: [
      { title: 'Orientación inicial', text: 'Conversamos sobre tu actividad y las opciones de formalización disponibles.' },
      { title: 'Ruta de trámites', text: 'Organizamos las gestiones y documentos que corresponden a tu caso.' },
      { title: 'Acompañamiento cercano', text: 'Te guiamos durante el proceso y resolvemos tus dudas en cada etapa.' },
    ],
    requirements: [
      { title: 'Actividad económica', text: 'Descripción del negocio, servicios o productos que ofrecerás.' },
      { title: 'Datos de los titulares', text: 'Información personal o societaria de quienes conformarán la empresa.' },
      { title: 'Domicilio y estructura', text: 'Datos del domicilio comercial y la estructura empresarial que estás considerando.' },
    ],
    steps: [
      { title: 'Conocemos tu proyecto', text: 'Revisamos la actividad, tus objetivos y las personas involucradas.' },
      { title: 'Definimos la ruta', text: 'Te orientamos sobre la estructura y los trámites aplicables.' },
      { title: 'Acompañamos la formalización', text: 'Coordinamos la documentación y el seguimiento de las gestiones.' },
    ],
    faqs: [
      { question: '¿Puedo formalizarme si todavía no definí toda la estructura?', answer: 'Sí. Podemos conversar sobre tu actividad y ayudarte a entender qué decisiones conviene tomar antes de iniciar los trámites.' },
      { question: '¿Cuánto tiempo toma abrir una empresa?', answer: 'Los plazos dependen de la estructura, la documentación y las entidades involucradas. Tras revisar tu caso podremos darte una orientación más concreta.' },
    ],
  },
  {
    number: '05',
    slug: 'cierre-empresas',
    navLabel: 'Cierre de empresas',
    title: 'Cierre de empresas',
    cardText: 'Resolvemos el cierre y la regularización de tus obligaciones.',
    eyebrow: 'Regularización empresarial',
    headline: 'Cierra una etapa con tus gestiones en orden.',
    intro: 'Te orientamos en la revisión de trámites y obligaciones pendientes para organizar el cierre o la regularización de tu empresa.',
    overviewTitle: 'Un cierre ordenado comienza con una revisión.',
    overview: 'Cada empresa puede tener registros, obligaciones y gestiones distintas por resolver. Revisamos la situación disponible para establecer una ruta adecuada.',
    benefits: [
      { title: 'Diagnóstico inicial', text: 'Identificamos la situación de la empresa y las gestiones por revisar.' },
      { title: 'Ruta organizada', text: 'Ordenamos las etapas y la documentación para avanzar con mayor claridad.' },
      { title: 'Acompañamiento', text: 'Te guiamos en las gestiones y el seguimiento hasta completar el proceso acordado.' },
    ],
    requirements: [
      { title: 'Datos de la empresa', text: 'Razón social o nombre, identificación tributaria y registros disponibles.' },
      { title: 'Situación actual', text: 'Estado de actividad y trámites que ya se iniciaron o quedaron pendientes.' },
      { title: 'Documentación disponible', text: 'Documentos societarios, contables o administrativos que tengas a mano.' },
    ],
    steps: [
      { title: 'Revisamos el estado actual', text: 'Recopilamos la información y conocemos qué gestiones siguen pendientes.' },
      { title: 'Priorizamos los pasos', text: 'Definimos una ruta de regularización acorde a la situación de tu empresa.' },
      { title: 'Damos seguimiento', text: 'Te acompañamos durante las gestiones y comunicamos cada avance.' },
    ],
    faqs: [
      { question: '¿Qué pasa si mi empresa dejó obligaciones pendientes?', answer: 'Primero revisamos la información disponible para identificar las gestiones por atender y orientarte sobre una ruta posible.' },
      { question: '¿El cierre de una empresa es inmediato?', answer: 'Los pasos y tiempos dependen del tipo de empresa, sus obligaciones y las entidades involucradas.' },
    ],
  },
  {
    number: '06',
    slug: 'asesoria-empresarial',
    navLabel: 'Asesoría empresarial',
    title: 'Asesoría empresarial',
    cardText: 'Asesoría empresarial a la medida de cada etapa de tu negocio.',
    eyebrow: 'Acompañamiento estratégico',
    headline: 'Decisiones más claras para hacer crecer tu negocio.',
    intro: 'Conectamos tus objetivos con pasos concretos. Revisamos tu situación y te ayudamos a entender qué gestiones pueden acompañar la siguiente etapa de tu empresa.',
    overviewTitle: 'Un aliado para cada etapa.',
    overview: 'La asesoría parte de escuchar tus prioridades y conocer tu contexto. A partir de ahí, te ayudamos a ordenar opciones y próximos pasos para avanzar con confianza.',
    benefits: [
      { title: 'Perspectiva externa', text: 'Revisamos tus preguntas con atención y una mirada orientada a soluciones.' },
      { title: 'Recomendaciones prácticas', text: 'Convertimos tus objetivos en acciones y gestiones que puedes evaluar.' },
      { title: 'Acompañamiento flexible', text: 'Adaptamos la orientación a la etapa y las necesidades de tu negocio.' },
    ],
    requirements: [
      { title: 'Tu objetivo', text: 'Cuéntanos qué quieres resolver o qué oportunidad estás evaluando.' },
      { title: 'Contexto del negocio', text: 'Comparte información sobre tu actividad, etapa y principales prioridades.' },
      { title: 'Dudas concretas', text: 'Anota las decisiones o gestiones donde necesitas orientación.' },
    ],
    steps: [
      { title: 'Escuchamos tu necesidad', text: 'Conversamos sobre tu negocio, tus objetivos y los desafíos actuales.' },
      { title: 'Ordenamos alternativas', text: 'Revisamos opciones y definimos contigo los pasos que tienen sentido.' },
      { title: 'Te acompañamos', text: 'Damos seguimiento a la ruta acordada y revisamos nuevas necesidades.' },
    ],
    faqs: [
      { question: '¿La asesoría es solo para empresas constituidas?', answer: 'No. Podemos conversar contigo si estás iniciando, formalizando o desarrollando un negocio.' },
      { question: '¿Puedo consultar un tema específico?', answer: 'Sí. Cuéntanos el tema y el contexto para revisar si podemos orientarte o acompañar la gestión.' },
    ],
  },
]
