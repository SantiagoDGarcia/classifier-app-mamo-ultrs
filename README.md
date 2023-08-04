

# Mamacheck - ES
En este repositorio se almacenan y detallan todos los avances de la aplicación móvil realizada para clasificar imágenes de mama (ultrasonido y mamografía) en benignas o malignas.
## Descripción
Se plantea el desarrollo de un aplicativo móvil para dispositivos Android e iOS, en la cual se carguen imágenes de ultrasonido de mama o de mamografía, posteriormente mediante el uso de un segmentador se extrae las regiones de interés (ROI) (opcional), finalmente a estas se les aplicará un algoritmo clasificador para determinar si la imagen es benigna o maligna.
### Lenguajes empleados 
 - TypeScript
 - JavaScript
 - Python 3.11
### Herramientas/Frameworks utilizados
 - Figma
 - VS Code
 - Jupyter Notebooks
 - Flask
 - PyTorch 2.0.1
 - React Native 0.71 
 ### Base de datos y plataformas en la nube
 - Google Firebase
 - Google Cloud
### Maqueta - Prototipo
<p align="center">
  <img src="./repo_sources/mockup.gif" width="280px" alt="accessibility text">
</p>

### Arquitectura del sistema
Se planteó una arquitectura para la aplicación de tipo cliente-servidor, esta se basa en el envió y recepción de peticiones entre dos activos.
 <p align="center">
  <img src="./repo_sources/architecture.png" width="600px" alt="Architecture model">
</p>

## Desarrollo

### Modelos de clasificación de imágenes
Los modelos de clasificación se basaron en el uso de Transfer Learning, específicamente con el uso de ResNet 18 con PyTorch y con sus capas preentrenadas. 
Los modelos que mayor exactitud presentaron para cada tipo de imágenes de (ultrasonido y mamografía)  fueron:
#### Ultrasonido
Cantidad de imágenes para validación: benignas - 131, malignas - 78
 - Exactitud para imágenes benignas: 93.1% 
 - Exactitud para imágenes malignas: 94.9%
 - Estadísticas:
<p align="center">
  <img src="./repo_sources/ultrasound_table_2.png" width="380px" alt="Consfusion matrix">
  </p>
  <p align="center">
  <img src="./repo_sources/ultrasound_table_1.png" width="380px" alt="Statistics table">
</p>

#### Mamografía
Cantidad de imágenes para validación: benignas - 681, malignas - 212
 - Exactitud para imágenes benignas: 80.9% 
 - Exactitud para imágenes malignas: 76.9%
 - Estadísticas:
<p align="center">
  <img src="./repo_sources/mammography_table_2.png" width="380px" alt="Consfusion matrix">
  </p>
  <p align="center">
  <img src="./repo_sources/mammography_table_1.png" width="380px" alt="Statistics table">
</p>

### Modelo de extracción de máscaras de imágenes
Para la extracción de las máscaras de las imágenes de entrada de la aplicación se uso Segment Anything Model SAM, este modelo de libre acceso es elaborado por la compañía Meta, antes conocida como Facebook, para mas informacion visite el enlace del repositorio original: https://github.com/facebookresearch/segment-anything/

### Uso y restricciones
- La aplicación admite únicamente tres tipos de imágenes JPG, JPEG, PNG.
- El tamaño de las imagenes no debe superar los 10 Mb.
- No es obligatorio la extracción de las mascaras en las imágenes, esta opción queda a criterio del usuario.

