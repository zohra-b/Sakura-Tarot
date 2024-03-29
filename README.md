# 🌌 Proyecto de Lectura de Cartas 🌌

## Descripción

Bienvenido a nuestro místico proyecto de lectura de cartas. Esta aplicación web te sumergirá en el fascinante mundo de la adivinación, proporcionando orientación para el pasado, presente y futuro a través de las cartas. Descubre las respuestas que el universo tiene para ti.

![Gif de Lectura de Cartas](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJmMDA2dHZxeW93dTI4MTZra242bGFlNndhbXBkcmFiOTBjengyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SrWh9peE9r1MTVr8aQ/giphy.gif)

## API de Sakura 🌸

Este proyecto consume la API de Sakura, que devuelve un archivo JSON con información sobre las cartas. Puedes escoger entre mostrar la Sakura Card y explorar sus detalles en la aplicación.

### Uso de la API

Para obtener información sobre una Sakura Card específica, puedes hacer una solicitud a la siguiente URL:
https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/

## Tecnologías Utilizadas 💻

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat)
- ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
- ![React Slick](https://img.shields.io/badge/React%20Slick-CA4245?logo=react&logoColor=white&style=flat)
- ![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=black&style=flat)
- ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=flat)
- ![Json-server](https://img.shields.io/badge/Json--server-0A0A0A?logo=json&logoColor=white&style=flat)
- ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?logo=material-ui&logoColor=white&style=flat)
- ![Axios](https://img.shields.io/badge/Axios-56A7F7?logo=axios&logoColor=white&style=flat)

## Herramientas 🛠

- ![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white&style=flat)
- ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=flat)/![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=flat)

## Funcionalidades Principales ✔️

1. **Mostrar Todas las Cartas Boca Abajo:**

   - Implementado utilizando HTML, CSS y React.js para una presentación clara y estéticamente agradable.

2. **Seleccionar Tres Cartas:**

   - Funcionalidad en Javascript que permite al usuario elegir exactamente tres cartas.

3. **Asignar Cartas a Pasado, Presente y Futuro:**

   - Interfaz que permite al usuario asignar cada carta a una posición específica.

4. **Mostrar Significado de Cada Carta:**

   - Despliegue del significado de cada carta en la interfaz de usuario.

5. **Guardar Lecturas Realizadas (Historial):**

   - Utilización de Json-server para almacenar las lecturas realizadas.

6. **Guardar Fecha y Nombre de Usuario:**

   - Registro automático de la fecha y posibilidad de introducir o actualizar el nombre de usuario.

7. **Actualizar Información de Nombre de Usuario:**

   - Funcionalidad para cambiar el nombre de usuario asociado a las lecturas guardadas.

8. **Eliminar Lectura Guardada Seleccionada:**

   - Interfaz que permite al usuario eliminar lecturas específicas.

9. **Vaciar Historial de Lecturas Guardadas:**
   - Función para eliminar todas las lecturas guardadas con una confirmación.

## Instrucciones de Configuración y Ejecución 🚀

1. Clona este repositorio a tu máquina local con el siguente comando: "git clone https://github.com/zohra-b/Sakura-Tarot.git" .
2. Instala las dependencias usando `npm install`.
3. Inicia la aplicación con `npm start`.
4. Inicia el servidor Json con `json-server --watch db.json`.

## ¡Explora el Universo de las Cartas y Descubre tu Destino! 🔮✨

Con estos pasos, los usuarios podrán disfrutar de una experiencia de lectura de cartas intuitiva y personalizada. ¡Esperamos que encuentren orientación y claridad en sus consultas! 🌟

## ## Vista Previa 🌠 📸

![Pagina-principal](<./public/img-readme/Captura de pantalla 2024-01-26 094522-1.png>)
![Tiradas](<./public/img-readme/Captura de pantalla 2024-01-26 094543-1.png>)
![Pagina-tiradas](<./public/img-readme/Captura de pantalla 2024-01-26 094614.png>)
![Historial](<./public/img-readme/Captura de pantalla 2024-01-26 094645.png>)

## Autoras 👩‍💻

Este proyecto fue creado con amor y pasión por:

- Laura Gil Solano
- [LinkedIn](https://www.linkedin.com/in/laura-gil-solano/)

- Carolina Delfa
- [LinkedIn](https://www.linkedin.com/)

- Stefania Desogus
- [LinkedIn](https://www.linkedin.com/in/stefania-desogus/)

- Gabriela Irimia
- [LinkedIn](https://www.linkedin.com/in/gabriela-irimia/)

- Jessica Zapata
- [LinkedIn](https://www.linkedin.com/in/j%C3%A9ssica-zapata-sol%C3%B3rzano-07401b29b/)

- Zohra Bellamine
- [LinkedIn](https://www.linkedin.com/in/z-bellamine/)

## Estructura del Proyecto 🏗️

```plaintext
sakura-tarot
|-- public/
|   |-- images/
|       |-- card-back.png
|       |-- carousel-icon.png
|       |-- cursor-img.png
|       |-- hero-img.png
|       |-- logo-sakura.png
|       |-- ornament-bg.png
|       |-- sakura-ornament.png
|
|-- src/app
|   |-- assets/data
|   |   |-- db.json
|   |
|   |-- componentes/
|   |   |--Button
|   |   |--Card
|   |   |--CardsContainer
|   |   |--Carousel
|   |   |--Footer
|   |   |--Header
|   |   |--HistTable
|   |   |--Input
|   |   |--Historial
|   |
|   |-- Services/
|   |   |--historial.jsx
|   |   |-- sakuraApi.jsx
|   |-- Tirada
|   |   |--page.jsx
|   |
|   |   |--layout.jsx
|   |   |--page.jsx(Home)
|   |
|   |-- gitignore
|   |-- jsconfig.js
|   |-- next.config.js
|   |-- package-lock.json
|   |-- package.json
|   |--README.md
```
