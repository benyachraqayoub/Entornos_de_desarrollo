# Resolución del Cuestionario: Entornos de Desarrollo

## Parte 1 · El software y el hardware

### 1. Clasificación de Software
* **Software de Sistema:** 
  * El controlador de la impresora (drivers).
* **Software de Desarrollo:** 
  * Un depurador.
  * Un entorno integrado de desarrollo (IDE).
  * Un enlazador.
* **Software de Aplicación:** 
  * Un navegador web.
  * Una hoja de cálculo.

### 2. Relación Hardware-Software (Dos Puntos de Vista)
El material expone esta relación indisoluble mediante las siguientes perspectivas:
* **Desde el sistema operativo:** El S.O. coordina al hardware durante el funcionamiento del ordenador actuando como intermediario oculto. Controla y administra de forma transparente para el usuario y las aplicaciones los recursos físicos requeridos (tiempo de CPU, espacio en memoria RAM, tratamiento de interrupciones y gestión de dispositivos de E/S).
* **Desde las aplicaciones:** Una aplicación es un conjunto de programas escritos en lenguajes con sentencias legibles y aprendibles por el ser humano. Sin embargo, el hardware no puede entender este idioma directamente, ya que solo es capaz de interpretar señales eléctricas (ausencias o presencias de tensión).

### 3. Necesidad del Proceso de Traducción
El proceso de traducción de código es estrictamente necesario porque existe una brecha idiomática entre el programador y el ordenador. El programador escribe sentencias derivadas de un idioma humano (alto nivel), mientras que **lo único que el hardware es capaz de interpretar son señales eléctricas —ausencias o presencias de tensión— que en informática se traducen en secuencias de 0 y 1 (código binario)**. El proceso de traducción permite transformar esas sentencias humanas en el código binario que la máquina comprende y ejecuta.

---

## Parte 2 · Las fases del desarrollo

### 1. Las Siete Fases del Desarrollo (En Orden)
1. **Análisis**
2. **Diseño**
3. **Codificación**
4. **Pruebas**
5. **Documentación**
6. **Explotación**
7. **Mantenimiento**

### 2. El Análisis: Importancia y Complejidad
* **La fase de mayor importancia:** El material argumenta que **todo lo demás dependerá de lo bien detallada que esté** esta fase, puesto que en ella se determinan y definen claramente las necesidades del cliente y los requisitos del software.
* **La fase más complicada:** Se debe a que **no está automatizada y depende en gran medida del analista** que la realice para evitar omisiones o malas interpretaciones.

### 3. Clasificación de Requisitos (Funcionales vs. No Funcionales)
* *«Emitirá facturas en PDF»*: **Requisito Funcional** (Define qué función específica tendrá que realizar la aplicación).
* *«La respuesta no superará los dos segundos»*: **Requisito No Funcional** (Define un criterio de rendimiento o tiempo de respuesta).
* *«Permitirá dar de alta clientes»*: **Requisito Funcional** (Establece una acción o función del sistema).
* *«Soportará cincuenta peticiones simultáneas»*: **Requisito No Funcional** (Establece una restricción de tratamiento ante peticiones simultáneas).

### 4. Contenidos del Documento ERS (Especificación de Requisitos Software)
1. La planificación de las reuniones que van a tener lugar.
2. Relación de los objetivos del usuario cliente y del sistema.
3. Relación de los requisitos funcionales y no funcionales del sistema.
4. Relación de objetivos prioritarios y temporización.
5. Reconocimiento de requisitos mal planteados o que conllevan contradicciones, etc.

### 5. Fase de Elección del Lenguaje de Programación
El lenguaje de programación **se elige en la fase de Diseño (Fase 2)** y no en la de Codificación (Fase 3), como podría parecer intuitivamente. El material aclara explícitamente que *"la selección del lenguaje de programación es una decisión de diseño, no de codificación"*, debido a que forma parte de la división del sistema, el establecimiento de sus relaciones y la arquitectura técnica previa a escribir el código.

---

## Parte 3 · Los estados del código

### 1. Recorrido Completo del Código
1. El programador escribe el **Código fuente** en un **editor de texto** utilizando un lenguaje de alto nivel.
2. El código fuente se somete a una traducción. Si se utiliza un **compilador**, este traduce el programa completo de una sola vez y genera un archivo intermedio llamado **Código objeto** (en código binario, libre de errores sintácticos y semánticos).
3. Finalmente, el código objeto se procesa a través de la **máquina virtual**, la cual se encarga de enlazar los archivos de código objeto con las rutinas y bibliotecas necesarias, generando el **Código ejecutable** (código máquina en un único archivo inteligible directamente por la computadora y controlado por el sistema operativo).

*Nota: Si se usa un **intérprete**, el paso de código fuente a ejecutable es directo línea a línea, sin generar código objeto.*

### 2. Tabla Comparativa: Compilación vs. Interpretación

| Característica | Compilación | Interpretación |
| :--- | :--- | :--- |
| **En qué consiste** | Traducción de una sola vez del programa completo. | Traducción y ejecución simultánea del programa, línea a línea. |
| **¿Genera código objeto?** | **Sí**, se genera una vez que el código fuente está libre de errores sintácticos y semánticos. | **No**, los programas interpretados no producen código objeto; el paso de fuente a ejecutable es directo. |
| **Software responsable** | El **compilador**. | El **intérprete**. |

### 3. Máquina Virtual: Definición y Garantía
* **¿Qué es?** Es un tipo especial de software cuya misión es separar el funcionamiento del ordenador de los componentes hardware instalados.
* **¿Qué garantiza?** Garantiza de manera absoluta la **portabilidad de las aplicaciones**, permitiendo desarrollar y ejecutar una aplicación sobre cualquier equipo con independencia de sus características físicas concretas.

### 4. Corrección al Compañero
El razonamiento del compañero es erróneo. El código objeto es únicamente un código binario intermedio resultante de la traducción del código fuente, pero **aún no puede ser ejecutado directamente por la computadora**. Para poder ejecutarlo, el código objeto debe pasar obligatoriamente por un proceso de enlazado (a través de la máquina virtual) con las rutinas y bibliotecas necesarias para convertirse en un **código ejecutable** (o código máquina), que consta de un único archivo que el sistema operativo puede controlar y correr.

---

## Parte 4 · Pruebas, documentación, explotación y mantenimiento

### 1. Pruebas Unitarias vs. Integración y Beta Test
* **Pruebas unitarias:** Consisten en probar, una a una, las diferentes partes del software para comprobar su funcionamiento por separado e independiente.
* **Pruebas de integración:** Se realizan una vez superadas las unitarias y comprueban el funcionamiento del sistema completo con todas sus partes interrelacionadas.
* **Ubicación del Beta Test:** Se realiza en el **entorno de producción**, es decir, en los propios equipos del cliente y bajo cargas normales de trabajo donde el software va a ser utilizado definitivamente.

### 2. Mapeo de Documentación por Perfil
* **Un programador que hereda el proyecto:** Acudirá a la **Guía Técnica**, ya que está dirigida al personal técnico (analistas/programadores) y contiene el diseño de la aplicación, codificación y pruebas.
* **Un administrativo que no sabe emitir un recibo:** Acudirá a la **Guía de Uso**, destinada a los usuarios finales (clientes) para detallar la funcionalidad y ejemplos de uso de la aplicación.
* **Un técnico que debe implantar la aplicación en una delegación nueva:** Acudirá a la **Guía de Instalación**, orientada al personal responsable de la instalación para una puesta en marcha segura y precisa.

### 3. Por qué el Mantenimiento es la Etapa más Larga
El material indica que es la etapa más larga porque, por su propia naturaleza, **el software es cambiante y deberá actualizarse y evolucionar con el tiempo** a lo largo de toda su vida útil para cubrir nuevas necesidades, corregir fallos imprevistos o adaptarse al mercado.

### 4. Clasificación de Encargos de Mantenimiento
* *Corregir un cálculo de IVA equivocado:* **Mantenimiento Correctivo** (La aplicación presenta errores que es necesario subsanar).
* *Añadir un informe que el cliente ahora necesita:* **Mantenimiento Evolutivo** (El cliente tiene nuevas necesidades que implican modificaciones o expansiones de código).
* *Acelerar una consulta que ya funciona:* **Mantenimiento Perfectivo** (Se realiza estrictamente para mejorar la funcionalidad o el rendimiento del software existente).
* *Adaptar la aplicación a un lector de códigos de barras nuevo:* **Mantenimiento Adaptativo** (Sirve para adaptar el sistema a nuevos componentes hardware o tendencias de mercado).

---

## Parte 5 · El ciclo de vida

### 1. Diferencia entre Cascada Clásica y con Realimentación
* **Única diferencia:** La introducción de **flechas de vuelta atrás (realimentación) entre las etapas**.
* **Problema que resuelve:** Resuelve la rigidez absoluta del modelo clásico (donde las etapas pasan de una a otra sin retorno posible presuponiendo que no habrá errores). La realimentación permite volver atrás en cualquier momento para **corregir, modificar o depurar cualquier aspecto** detectado en fases posteriores.

### 2. Selección de Modelo ante Requisitos Inciertos
Para un cliente que afirma no saber qué necesita hasta que lo vea funcionando, el modelo ideal es el **Modelo en Espiral** (o en su defecto el Iterativo Incremental). 
* **Justificación:** Ambos pertenecen a los *modelos evolutivos*, diseñados específicamente para asumir la naturaleza cambiante del software. El modelo en espiral construye el software repetidamente en forma de **versiones sucesivas que incrementan la funcionalidad en cada ciclo**, permitiendo al cliente ver prototipos operativos, evaluar riesgos y refinar sus requisitos de forma progresiva.

### 3. Las Cuatro Actividades del Modelo en Espiral
Cada ciclo o vuelta de la espiral comprende:
1. **Determinar objetivos**
2. **Evaluar riesgos**
3. **Desarrollar y probar**
4. **Planificar**

---

## Parte 6 · Lenguajes y técnicas

### 1. Evolución de Lenguajes: El Escalón sin Traducción
* **Escalón que no necesita traducción:** El **Lenguaje máquina** (compuesto por combinaciones de unos y ceros), ya que es el único que entiende directamente el ordenador de forma nativa.
* **Por qué hoy nadie programa en él:** A pesar de su ventaja de ejecución directa, nadie lo utiliza porque **es único para cada procesador (carece por completo de portabilidad)** de un equipo a otro y su complejidad de lectura/escritura lo hace impracticable para el ser humano.

### 2. Definición de Componentes de Lenguaje y Ejemplos de Error
* **Alfabeto:** Conjunto de símbolos permitidos.
  * *Ejemplo de error:* Usar un carácter especial no soportado por el lenguaje (como una letra no recogida en sus símbolos válidos).
* **Sintaxis:** Normas de construcción permitidas de los símbolos del lenguaje.
  * *Ejemplo de error:* Omitir un punto y coma `;` al final de una sentencia o dejar un paréntesis abierto (error sintáctico detectado en la compilación).
* **Semántica:** Significado de las construcciones para hacer acciones válidas.
  * *Ejemplo de error:* Realizar una división entre cero o intentar sumar una variable de texto con una numérica sin conversión (errores de significado lógico detectados en la ejecución).

### 3. Programación Estructurada y Evolución a Modular
* **Tres estructuras de control:** Sentencias secuenciales (una tras otra), sentencias selectivas (condicionales) y sentencias repetitivas (iteraciones o bucles).
* **Por qué fue sustituida:** Fue sustituida por la programación modular porque en la estructurada **todo el programa se concentra en un único bloque**. Si el software se hacía demasiado grande, se volvía inmanejable y no permitía una reutilización eficaz del código. La programación modular resolvió esto dividiendo los programas grandes en trozos más pequeños bajo la técnica de *"divide y vencerás"*.

### 4. Definiciones de la Programación Orientada a Objetos (POO)
* **Objeto:** Unidad individual e indivisible que forma la base de este tipo de programación. Se tratan como entes independientes que colaboran entre sí.
* **Clase:** Colección o plantilla de objetos que comparten características y propiedades similares.
* **Atributo:** Serie de propiedades o datos específicos de los objetos que los diferencian unos de otros.
* **Método:** Mecanismo mediante el cual los objetos se comunican con otros, produciendo cambios de estado en el sistema.

### 5. Balance de la POO en el Entorno Empresarial
* **Desventaja reconocida:** No es una programación tan intuitiva como la estructurada y requiere un cambio en el razonamiento de diseño.
* **Dos razones que la compensan (Por qué se impuso):**
  1. **El código es altamente reutilizable:** Los objetos desarrollados pueden emplearse directamente en proyectos futuros.
  2. **Los errores se localizan antes:** Si se produce un fallo, es mucho más sencillo y rápido de localizar y depurar dentro de un objeto aislado que en un programa entero monolítico.

---

## Parte 7 · Herramientas de apoyo

### 1. Ventajas e Inconvenientes de los Frameworks
* **Ventajas:**
  * Desarrollo rápido de software.
  * Reutilización de partes de código para otras aplicaciones.
  * Diseño uniforme del software.
  * Portabilidad de aplicaciones de un computador a otro.
* **Inconvenientes:**
  * Gran dependencia del código respecto al framework utilizado (si se cambia de framework, hay que reescribir gran parte de la aplicación).
  * La instalación e implementación consume bastantes recursos del sistema en el equipo.

### 2. Componentes del Framework .NET
* Para **construir** aplicaciones: Se ofrece **Visual Studio .net**.
* Para **ejecutar** aplicaciones: El motor encargado es el **.NET Framework** (que se instala sobre el sistema operativo).

### 3. Tareas del Entorno de Ejecución y Tipos de Error
Durante la ejecución, el entorno se encarga de:
1. **Configurar la memoria:** Asignar la memoria principal disponible en el sistema.
2. **Enlazar:** Vincular los archivos del programa con las bibliotecas existentes y subprogramas creados.
3. **Depurar:** Comprobar la existencia o no de errores semánticos.

* **Por qué solo depura errores semánticos:** Porque **los errores sintácticos ya fueron completamente detectados y filtrados durante la fase previa de compilación**. El entorno de ejecución solo maneja el código cuando este ya es sintácticamente correcto.

### 4. Resolución del Caso Final
* **Explicación del problema:** El programador puede ejecutar aplicaciones porque cuenta con el *Entorno de Ejecución*, el cual provee la base necesaria para interpretar y correr programas terminados. Sin embargo, no puede escribir código nuevo porque **el entorno de ejecución es insuficiente para la creación de software; requiere obligatoriamente un Entorno de Desarrollo**, el cual añade herramientas de edición, compilación y construcción que no vienen incluidas.
* **De qué está formado lo que tiene instalado:** Está compuesto por la **Máquina virtual** + las **API's (bibliotecas de clase estándar)** distribuidas conjuntamente de forma compatible.
* **Qué le falta:** Le falta un **Entorno de Desarrollo** (que proporciona editores, compiladores, enlazadores y depuradores avanzados para programar).
