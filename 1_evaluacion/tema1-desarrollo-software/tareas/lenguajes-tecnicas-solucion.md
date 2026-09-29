← [Volver al Índice General](../README.md) | [Volver a Introducción al Software](../README.md)

# 🛠️ Taller: Lenguajes y Técnicas de Programación (Solución)

* **Asignatura:** Entornos de Desarrollo (1º DAW)
* **Tema:** Tema 1 - Fichas de Taller
* **Alumno:** Ayoub

---

## 📊 Parte 1 · Clasificación de los Doce Lenguajes

| Nº | Lenguaje de Programación | Clasificación por Nivel | Clasificación por Técnica |
| :-: | :--- | :--- | :--- |
| **1** | Lenguaje máquina | Bajo Nivel | *No clasificable por técnica* (Previo a las técnicas modernas) |
| **2** | Lenguaje ensamblador | Bajo Nivel | *No clasificable por técnica* (Mapeo directo a hardware) |
| **3** | C | Alto Nivel | Programación Estructurada |
| **4** | Pascal | Alto Nivel | Programación Estructurada |
| **5** | Fortran | Alto Nivel | Programación Estructurada |
| **6** | Java | Alto Nivel | Programación Orientada a Objetos (POO) |
| **7** | C++ | Alto Nivel | Programación Orientada a Objetos (POO) / Estructurada |
| **8** | Delphi | Alto Nivel | Programación Visual / Orientada a Objetos |
| **9** | Ada | Alto Nivel | Programación Estructurada (Evolución modular) |
| **10** | PowerBuilder | Alto Nivel | Programación Visual |
| **11** | VB.NET | Alto Nivel | Programación Visual / Orientada a Objetos |
| **12** | Visual Basic.Net | Alto Nivel | Programación Visual / Orientada a Objetos |

### 🔍 Análisis de Coincidencias (Apartado 4.3):
*   **Lenguajes detectados en dos listas:** **C++**, **Delphi**, **VB.NET / Visual Basic.Net**.
*   **Justificación:** No representa una contradicción porque son **lenguajes híbridos o multiparadigma**. Por ejemplo, C++ nace como una extensión de C para soportar objetos pero mantiene compatibilidad nativa con la programación estructurada; a su vez, VB.NET utiliza un entorno gráfico interactivo (Programación Visual) pero todo su código subyacente se compila bajo una arquitectura estrictamente Orientada a Objetos.

---

## 📈 Parte 2 · La Evolución de los Lenguajes

| Criterio | 1ª Generación: Máquina | 2ª Generación: Ensamblador | 3ª Generación: Alto Nivel | 4ª Generación: Cuarta Gen (4GL) |
| :--- | :--- | :--- | :--- | :--- |
| **Con qué se programa** | Código binario (`0` y `1`) | Nemotécnicos (`ADD`, `MOV`) | Sentencias legibles (Inglés) | Herramientas visuales y asistentes |
| **¿Necesita traducción?**| **No** | Sí (Requiere Ensamblador) | Sí (Compilador / Intérprete)| Sí (Generadores automáticos) |
| **¿Es portable?** | No (Ligado al procesador) | No (Ligado a la arquitectura) | **Sí** (Independiente del hardware)| **Sí** (Depende del entorno base) |
| **¿Se usa hoy?** | No de forma directa | Sí (Optimización crítica/IoT) | **Sí** (Estándar de la industria) | **Sí** (Gestión masiva de datos) |

### 💡 Pregunta Analítica:
El único que no necesita traducción es el **Lenguaje Máquina**. A pesar de esta inmensa ventaja de rendimiento directo, hoy nadie programa en él porque **es inviable para el ser humano**: es extremadamente complejo de escribir, propenso a errores fatales de transcripción binaria, ilegible en fases de depuración y carece por completo de portabilidad, obligando a reescribir todo el software al cambiar de chip o procesador.

---

## 🧠 Parte 3 · Alfabeto, Sintaxis y Semántica

1.  **Usar un símbolo que el lenguaje no admite.**
    *   **Componente:** **Alfabeto**.
    *   *Justificación:* El símbolo utilizado no forma parte del conjunto finito de caracteres legales o válidos definidos nativamente por el lenguaje.
2.  **Escribir una instrucción correcta que hace algo distinto de lo que pretendías.**
    *   **Componente:** **Semántica**.
    *   *Justificación:* La estructura es morfológicamente válida, pero el significado lógico o comportamiento final del código no se corresponde con la intención real del desarrollador.
3.  **Escribir las palabras de una instrucción en un orden que el lenguaje no permite.**
    *   **Componente:** **Sintaxis**.
    *   *Justificación:* Se viola la gramática estructural y las reglas de ordenación posicional que gobiernan la construcción de sentencias en el lenguaje.
4.  **Escribir un programa que se traduce sin problemas pero devuelve un resultado equivocado.**
    *   **Componente:** **Semántica**.
    *   *Justificación:* El código compila limpiamente porque es formal y estructuralmente impecable, pero el algoritmo ejecuta una lógica interna errónea (error de concepto o de cálculo).

---

## 🏢 Parte 4 · El Encargo (Sistema de Almacén)

### 1. Técnica recomendada: Programación Orientada a Objetos (POO)
Se aconseja de forma unánime esta técnica por los siguientes tres argumentos basados en el apartado 4.3 del dossier:
*   **Reutilización de código avanzada:** Permite crear una clase base generalizada para las entidades del almacén y extenderlas de forma limpia a través de la herencia para los nuevos módulos anuales (compras, proveedores), maximizando el ahorro de líneas de código.
*   **Modularidad natural y aislamiento:** Al encapsular los datos y comportamientos dentro de objetos independientes, cada nuevo módulo anual se acopla al sistema existente sin riesgo de alterar, corromper o desbordar las variables globales de los módulos que ya están en producción.
*   **Mantenimiento escalable a largo plazo:** Al tratarse de un encargo con crecimiento progresivo a varios años, las modificaciones o correcciones de fallos se realizan dentro de clases específicas, aislando el impacto del cambio arquitectónico.

### 2. Inconveniente de la POO y justificación del encargo:
*   **Inconveniente:** Requiere una **curva de aprendizaje inicial más compleja y un esfuerzo de diseño de arquitectura mucho mayor** antes de teclear la primera línea de código en comparación con la programación estructurada lineal.
*   **Por qué compensa:** Compensa con creces porque el proyecto va a crecer de forma continua año tras año. Invertir tiempo en un diseño inicial sólido de clases evita que el sistema colapse en el futuro bajo un entramado desordenado de funciones difíciles de actualizar.

### 3. Impacto de elegir la otra técnica (Programación Estructurada):
Si se optara por la programación estructurada, el inconveniente crítico inmediato en este encargo sería la **aparición de un código monolítico y rígido con alta dependencia global**. Con la inclusión repetitiva de nuevos módulos de compras y facturación, las variables e instrucciones globales del control de existencias original sufrirían efectos secundarios indeseados (efectos colaterales), haciendo que cualquier cambio pequeño en un módulo rompa inesperadamente funciones de los años anteriores.

---

## ⛓️ Parte 5 · La Cadena Histórica

*   **Salto 1: Estructurada → Modular**
    *   *Inconveniente motivador:* El crecimiento desmesurado del volumen de líneas de código dentro de un único archivo provocaba que los programas fueran completamente inmanejables. La necesidad de fragmentar el software en subprogramas o módulos independientes motivó este salto.
*   **Salto 2: Modular → Orientada a Objetos**
    *   *Inconveniente motivador:* La separación radical entre las funciones (los procedimientos) y los datos (las variables). Al aumentar la escala de los proyectos, los datos quedaban desprotegidos ante modificaciones accidentales desde funciones externas. La POO solventó esto uniendo datos y funciones en un solo bloque encapsulado: el objeto.
*   **Salto 3: Orientada a Objetos → Visual**
    *   *Inconveniente motivador:* La baja productividad y la inmensa cantidad de código repetitivo necesario para programar interfaces gráficas de usuario basadas en texto o ventanas nativas desde cero. Se dio el salto para automatizar el diseño visual mediante interfaces de arrastrar y soltar elementos de pantalla.

---

## 📌 Parte 6 · Verdadero o Falso

1.  **Un lenguaje de alto nivel es más potente que uno de bajo nivel.**
    *   **FALSO.** *(Apartado 4.1 / 4.2)*. El concepto "alto nivel" hace referencia exclusivamente a la **cercanía al lenguaje humano y nivel de abstracción**, no a su potencia o rendimiento. Un lenguaje de bajo nivel maneja el hardware directamente y es técnicamente más potente en velocidad y control de memoria que uno de alto nivel.
2.  **Los lenguajes visuales no necesitan traducción porque el código se genera automáticamente.**
    *   **FALSO.** *(Apartado 4.3)*. Los lenguajes visuales generan automáticamente el código de la interfaz gráfica, pero ese código resultante sigue estando escrito en un lenguaje de alto nivel que **requiere obligatoriamente ser compilado o interpretado** a código máquina para ejecutarse.
3.  **El lenguaje ensamblador es difícil de utilizar.**
    *   **VERDADERO.** *(Apartado 4.2)*. Al trabajar directamente con nemotécnicos de los registros específicos de la CPU y carecer de estructuras lógicas abstractas y familiares (como bucles complejos o condicionales avanzados), su escritura y depuración resultan tediosas y complejas.
4.  **La programación estructurada permite reutilizar código con eficacia.**
    *   **FALSO.** *(Apartado 4.3)*. Si bien permite un orden interno superior mediante funciones aisladas, su capacidad de reutilización real es limitada y rígida en comparación con los mecanismos nativos de **herencia y polimorfismo** propios de la Programación Orientada a Objetos.
5.  **En la POO, una clase es una colección de objetos con características similares.**
    *   **FALSO.** *(Apartado 4.3)*. Una clase no es una colección de objetos existentes; una clase es la **plantilla, molde o plano arquitectónico abstracto** que define las propiedades y comportamientos comunes a partir del cual se instanciarán o construirán los objetos individuales en memoria.
6.  **La POO es más intuitiva que la programación estructurada.**
    *   **VERDADERO.** *(Apartado 4.3)*. Permite modelar el desarrollo de software estructurando los componentes del sistema a semejanza de cómo los seres humanos percibimos y clasificamos los elementos, entidades y objetos reales de nuestro entorno cotidiano.
7. **Los lenguajes visuales son completamente portables de un equipo a otro.**
	*   **FALSO.** *(Apartado 4.3)*. Suelen estar fuertemente vinculados y acoplados al entorno de desarrollo integrado propietario, a las librerías gráficas específicas o al ecosistema del sistema operativo nativo bajo el cual fueron diseñados (por ejemplo, entornos cerrados de Windows antiguos).
8. **El lenguaje máquina es único para cada procesador.**
	*   **VERDADERO.** *(Apartado 4.3)*. Es el reflejo directo del conjunto de instrucciones grabadas físicamente en los circuitos integrados de la arquitectura del procesador (arquitectura de la CPU), variando por completo entre diferentes familias de hardware.
