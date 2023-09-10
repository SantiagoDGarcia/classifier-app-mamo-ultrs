export default {
  //Analysis
  initMessage: "Selecciona el tipo de imagen para analizar",
  ultrasound: "Ultrasonido",
  mammography: "Mamografía",
  // Profile
  myProfile: "Mi perfil",
  name: "Nombre",
  email: "Correo electrónico",
  organization: "Organización",
  creationDate: "Fecha de creación",
  language: "Idioma",
  changePassword: "Cambiar contraseña.",
  completeFieldsToResetPassword:
    "Completa los campos para reiniciar la contraseña",
  logout: "Cerrar sesión",
  spanish: "Español",
  english: "Inglés",
  selectLanguage: "Selecciona el idioma",
  // Login
  enterEmail: "Escribe tu correo electronico para restablecer la contraseña.",
  currentPassword: "Contraseña actual",
  newPassword: "Nueva contraseña",
  modify: "Modificar",
  cancel: "Cancelar",
  password: "Contraseña",
  login: "Iniciar sesión",
  noAccount: "¿No tienes cuenta? Registrate.",
  forgotPassword: "¿Olvidaste tu contraseña?",
  reset: "Restablecer",
  allRightsReserved:
    "Todos los derechos reservados y pertenecientes a la Universidad Tecnica Particular de Loja.",
  // Register
  completeAllFields: "Completa todos los campos para registrarse.",
  register: "Registrarse",
  alreadyHaveAccount: "¿Ya tienes cuenta? Inicia sesión.",
  iAcceptTerms: "Acepto los ",
  termsandConditions: "Términos y Condiciones",
  // Hist
  previousAnalysisHistory: "Historial de análisis previos",
  results: "Resultado",
  noHistResults: "Sin información previa.",
  durationAnalysis: "Duración análisis",
  // Test
  extractMasksAndRegionsOfInterest: "Extraer máscaras y regiones de interés",
  loadImage: "Cargar imagen",
  weRecommend:
    "Te recomendamos tener en cuenta los siguientes puntos para lograr el mejor resultado:",
  cropImage:
    "- En lo posible, al momento de seleccionar la imagen usa la herramienta para hacer un recorte manual, de esta forma la aplicación no analizará contenido irrelevante y tendra mayor precisión.",
  imageResolution: "- Una imagen de alta resolución y poca distorsión.",
  supportedFormats: "- El formato de la imagen debe ser JPG, JPEG o PNG.",
  moreInformation: "¿Más información? Consulta la Ayuda.",
  startEvaluation: "Iniciar evaluación",
  // Results
  regionOfInterest: "Región de Interés (ROI)",
  algorithmEvaluation:
    "El resultado del análisis realizado se llevo a cabo mediante algoritmos de Deep Learning, los mismos estan basados en ResNet18, para más informacion visita el módulo de Ayuda.",
  algorithmEvaluation2: "Los ROI detectados se marcan en un borde blanco.",
  idontLikeResult: "¿Resultado erróneo? Consulta la Ayuda.",
  benign: "BENIGNO",
  malignant: "MALIGNO",
  date: "Fecha",
  duration: "Duración",
  type: "Tipo",
  roiExtracted: "ROI y máscaras",
  cant: "Cantidad",
  yes: "Si",
  no: "No",
  approx: " aprox",
  // Help
  whatIsROI: "¿Qué significa ROI (Región de Interés)?",
  roiDescription:
    "Es la búsqueda y detección de las zonas mas importantes de la imagen, de esta forma se realiza un análisis con mayor precisión.",
  isRoiExtractionNecessary: "¿Es necesario extraer el ROI de mi imagen?",
  roiExtractionDescription:
    "Si tu imagen es de alta calidad se recomienda seleccionar la opción “Extraer máscaras y regiones de interés”, caso contrario se puede extraer los ROI pero es posible que las regiones detectadas no sean correctas.",
  incorrectRois:
    "Los ROIs que extrajo la aplicación no son correctos ¿Qué debo hacer?",
  incorrectRoisDescription:
    "Esto suele suceder dependiendo del tipo imagen, calidad, existencia de ruido entre otros factores. Si este es el caso lo más probable es que el análisis haya sido erroneo, para ello considera realizar nuevamente el análisis con una imagen de mayor calidad o realizarlo sin extraer las máscaras, si no solamente haciendo el recorte manual al momento de seleccionar la imagen.",
  analysisDuration: "¿Qué tiempo dura el análisis de la imagen?",
  analysisDurationDescription:
    "Si no se activa la opción “Extraer máscaras y regiones de interés” la aplicación retornará el resultado en 1-2 minutos, caso contrario tendra una duración de 3-6 minutos.",
  supportedImageTypes: "¿Qué tipo de imágenes admite la aplicación?",
  supportedImageTypesDescription:
    "La aplicación admite diversos tipos de imágenes con un tamaño máximo de 10MB, entre ellos se encuentran JPG, PNG, JPEG.",
  unsupportedImageFormats:
    "¿Qué puedo hacer si mi imagen no se encuentra en los formatos permitidos por la aplicación?",
  unsupportedImageFormatsDescription:
    "Se puede usar un programa externo de conversión de imagenes para que transforme tu imagen a un formato admitido.",
  improveAnalysisResult:
    "¿Cómo obtener el mejor el resultado para mis análisis?",
  improveAnalysisResultDescription:
    "La calidad y definición de la imagen son los factores más importantes a tener en cuenta pero no son los únicos, una de las mejores recomendaciones es siempre recortar manualmente la región mas importante de la imagen, esto se puede realizar al momento de seleccionar la imagen, de esta forma no se analizará información que no es relevante de la imagen reduciendo el tiempo de evaluación y mejorando el resultado.",
  needMoreHelp:
    "¿Necesitas mas información? Contactos a nuestro email support_branet@gmail.com",
  deleteAnalysis: "¿Cómo puedo eliminar un análisis?",
  deleteAnalysisDescription:
    "Para eliminar un análisis, vaya a la pestaña de historial y mantenga presionado el análisis hasta que aparezca una notificación. Presione 'OK' para eliminar el contenido.",
};
