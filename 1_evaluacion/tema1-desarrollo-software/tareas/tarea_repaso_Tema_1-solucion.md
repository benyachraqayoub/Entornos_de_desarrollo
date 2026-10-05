# DOCUMENTO DE EVALUACIÓN: DESARROLLO DE SOFTWARE
**Asignatura:** Sistemas Informáticos / Programación  
**Unidad:** Tema 1 · Ciclo de Vida y Desarrollo de Software  

---

## PARTE 1: El Software y el Hardware

### 1. Clasificación del Software
*   **Software de Sistema:** Controlador de la impresora.
*   **Software de Desarrollo:** Depurador, Entorno Integrado de Desarrollo (IDE), Enlazador.
*   **Software de Aplicación:** Navegador web, Hoja de cálculo.

### 2. Relación Hardware-Software: Perspectivas Binomiales
*   **El Software como componente lógico (El Alma):** El hardware por sí mismo es una estructura inerte de circuitos y componentes electrónicos. El software le dota de operatividad, gobernando sus acciones y determinando cómo y cuándo debe procesar la información.
*   **El Hardware como soporte físico (El Cuerpo):** El software es una abstracción conceptual (algoritmos e instrucciones) que requiere obligatoriamente una arquitectura física (procesador, memoria, buses) para poder ser ejecutado y manifestar su funcionalidad.

### 3. El Proceso de Traducción de Código
La traducción es un requisito indispensable en la informática moderna debido a la brecha de abstracción entre el ser humano y los componentes físicos:
*   Los programadores desarrollan software utilizando lenguajes de alto nivel para facilitar la lógica y la legibilidad.
*   Sin embargo, **lo único que el hardware es capaz de interpretar es el código máquina**, constituido estrictamente por lenguaje binario (secuencias de ceros y unos, `0` y `1`, que representan estados de voltaje).

---

## PARTE 2: Las Fases del Desarrollo

### 1. Ciclo de Vida del Software (7 Fases en Orden)
1. **Análisis**
2. **Diseño**
3. **Codificación** *(o Implementación)*
4. **Pruebas** *(o Testing)*
5. **Documentación**
6. **Explotación** *(o Despliegue)*
7. **Mantenimiento**

### 2. Justificación de la Fase de Análisis
*   **Por qué es la de mayor importancia:** Representa los cimientos del proyecto. Cualquier error de comprensión no detectado en esta fase se propagará exponencialmente a las fases de diseño y codificación, multiplicando drásticamente los costes económicos y temporales de subsanación en fases avanzadas.
*   **Por qué es la más complicada:** Implica la abstracción de necesidades. Requiere actuar de puente de comunicación entre las peticiones (frecuentemente ambiguas o desestructuradas) del cliente y la formalización técnica requerida por el equipo de desarrollo.

### 3. Clasificación de Requisitos del Sistema
*   *«Emitirá facturas en PDF»* → **Requisito Funcional** (Define un servicio o función que el sistema debe ejecutar).
*   *«La respuesta no superará los dos segundos»* → **Requisito No Funcional** (Define una restricción o criterio de calidad/rendimiento).
*   *«Permitirá dar de alta clientes»* → **Requisito Funcional** (Define una acción operativa del sistema).
*   *«Soportará cincuenta peticiones simultáneas»* → **Requisito No Funcional** (Define una propiedad de capacidad, escala y carga).

### 4. Estructura Estándar del Documento ERS (Especificación de Requisitos de Software)
1. **Introducción:** Propósito, alcance del sistema y definiciones del proyecto.
2. **Descripción General:** Perspectiva del producto, funciones globales y restricciones generales.
3. **Requisitos Específicos:** Desglose detallado de requisitos funcionales, no funcionales y de interfaz.
4. **Modelos de Datos y Procesos:** Diagramas de flujo, diagramas de entidad-relación o casos de uso.
5. **Apéndices:** Glosario de términos técnicos, referencias y documentación complementaria.

### 5. Elección del Lenguaje de Programación
*   **Fase de elección:** Se decide estrictamente en la fase de **Diseño**.
*   **Justificación:** Aunque la escritura de código ocurre en la *Codificación*, la elección del lenguaje no es un acto improvisado. Depende de las decisiones arquitectónicas tomadas en el diseño (plataforma de despliegue, topología de red, integraciones de bases de datos y requisitos de rendimiento). Elegirlo en la codificación implicaría un riesgo crítico de inconsistencia estructural.

---

## PARTE 3: Los Estados del Código

### 1. Flujo de Transformación del Código

```
[ Editor de Texto ] ---> Código Fuente
                             |
                             v
                        [ Compilador ]
                             |
                             v
                        Código Objeto
                             |
                             v
                        [ Enlazador ]
                             |
                             v
                       Código Ejecutable
```

### 2. Tabla Comparativa: Mecanismos de Traducción

| Criterio | Compilador | Intérprete |
| :--- | :--- | :--- |
| **En qué consiste** | Traduce el código fuente completo de una sola vez de forma previa, generando un archivo independiente para su posterior ejecución. | Traduce y ejecuta el código instrucción por instrucción (línea a línea) en tiempo real, directamente durante el tiempo de ejecución. |
| **¿Genera código objeto?** | **Sí.** Produce archivos intermedios (`.obj`, `.o`) que requieren un enlazado posterior. | **No.** Procesa la lógica directamente en la memoria del sistema sin persistir un archivo intermedio. |
| **Software responsable** | Compilador técnico (Ej: `gcc`, `javac`). | Motor o Intérprete del entorno (Ej: Intérprete de Python o V8 en JavaScript). |

### 3. Arquitectura de Máquina Virtual
*   **Definición:** Es una capa de software intermedia instalada sobre el sistema operativo físico que simula el comportamiento de un computador real, encargada de ejecutar un código intermedio estandarizado (como el *bytecode* o CIL).
*   **Garantía:** Asegura la **portabilidad absoluta** (independencia del hardware). Permite la ejecución multiplataforma bajo la premisa de *"Write Once, Run Anywhere"* (Escríbelo una vez, ejecútalo en cualquier lugar), siempre que la máquina virtual específica esté instalada en el sistema anfitrión.

### 4. Corrección Técnica de Conceptos
> **Refutación a la afirmación del compañero:** Su argumento es conceptualmente incorrecto. El código objeto es una traducción incompleta. Contiene las instrucciones del programador pasadas a código máquina, pero carece de los enlaces y la resolución de direcciones de las librerías del sistema. Para que el programa sea operativo y ejecutable, el código objeto debe pasar obligatoriamente por el **Enlazador (Linker)** para generar el **Código Ejecutable** binario final.

---

## PARTE 4: Pruebas, Documentación, Explotación y Mantenimiento

### 1. Niveles de Pruebas y Entornos
*   **Pruebas Unitarias:** Verificaciones aisladas que comprueban la corrección lógica de un componente mínimo, función o método del código de forma independiente.
*   **Pruebas de Integración:** Verificaciones que se realizan uniendo los componentes previamente validados para asegurar que las interfaces y la comunicación entre los diferentes módulos del sistema funcionan correctamente.
*   **Beta Test:** Pruebas de aceptación que se ejecutan directamente en el **entorno real del cliente o mediante un grupo de usuarios finales seleccionados**, fuera del laboratorio de desarrollo.

### 2. Gestión Documental: Destinatarios y Canales
*   *Un programador que hereda el proyecto* → **Documentación Técnica / de Diseño Interno.**
*   *Un administrativo que no sabe emitir un recibo* → **Manual de Usuario.**
*   *Un técnico que debe implantar la aplicación en una delegación nueva* → **Manual de Installation y Configuración.**

### 3. Extensión Temporal de la Fase de Mantenimiento
El material determina que es la fase más larga porque su duración está ligada de forma directa al **tiempo total de explotación o vida útil del software**. Mientras que las fases de creación duran meses, un sistema de software empresarial operativo puede permanecer activo durante años o décadas, requiriendo atención constante para no quedar obsoleto.

### 4. Clasificación del Mantenimiento
*   *Corregir un cálculo de IVA equivocado* → **Mantenimiento Correctivo** (Subsanación de fallos de lógica u omisiones operativas).
*   *Añadir un informe que el cliente ahora necesita* → **Mantenimiento Evolutivo** (Incorporación de nuevas características o requisitos al sistema).
*   *Acelerar una consulta que ya funciona* → **Mantenimiento Perfectivo** (Optimización de recursos y velocidad de respuesta sin alterar el resultado funcional).
*   *Adaptar la aplicación a un lector de códigos de barras nuevo* → **Mantenimiento Adaptativo** (Modificación del sistema para operar con cambios en el entorno de hardware o sistemas operativos).

---

## PARTE 5: El Ciclo de Vida

### 1. Modelo en Cascada Puro vs. Cascada con Realimentación
*   **Diferencia:** El modelo puro es estrictamente lineal y secuencial (no permite volver atrás). El modelo con realimentación añade **bucles de retorno** entre fases adyacentes.
*   **Problema que resuelve:** Mitiga la **rigidez e intolerancia al cambio** del modelo tradicional. Si durante la codificación o las pruebas se detecta una inconsistencia o un error de diseño, la realimentación permite retroceder formalmente a la fase previa para corregirla de manera controlada sin destruir el ciclo completo.

### 2. Elección de Ciclo de Vida para Requisitos Indefinidos
*   **Modelo recomendado:** **Modelo Evolutivo / Prototipado** o en su defecto un enfoque Ágil/Incremental.
*   **Justificación:** Cuando un cliente no es capaz de definir sus necesidades sin ver un producto físico operativo, un modelo predictivo como la cascada está abocado al fracaso. El prototipado permite construir versiones rápidas y visuales de la aplicación. El cliente interactúa con el prototipo, lo que ayuda a madurar sus requisitos y permite al equipo refinar las especificaciones de forma iterativa y real.

### 3. Las Cuatro Actividades del Modelo en Espiral (Por Cuadrante)
1. **Determinación de objetivos:** Identificar metas de la iteración, alternativas de desarrollo y restricciones del sistema.
2. **Análisis y resolución de riesgos:** Evaluar técnicamente las alternativas, identificar puntos críticos de fallo y elaborar estrategias de mitigación (creación de prototipos de riesgo).
3. **Desarrollo y validación:** Programar el software y ejecutar el testing correspondiente al nivel alcanzado en el ciclo.
4. **Planificación:** Revisar los resultados con el cliente y planificar el alcance de la siguiente iteración de la espiral.

---

## PARTE 6: Lenguajes y Técnicas

### 1. El Primer Escalón Evolutivo: Lenguaje Máquina
*   **Ventaja teórica:** No requiere ningún proceso de traducción intermedia; los circuitos lo procesan directamente a la velocidad nativa del procesador.
*   **Razón de desuso actual:** Es **inmanejable para el ser humano**. Escribir software en binario puro (`0` y `1`) provoca un índice crítico de errores, imposibilita la depuración o el mantenimiento de grandes sistemas, requiere un conocimiento exhaustivo de la microarquitectura del chip y carece por completo de portabilidad entre diferentes procesadores.

### 2. Estructura Lingüística en Programación

| Componente | Definición | Ejemplo de Error |
| :--- | :--- | :--- |
| **Alfabeto** | El conjunto de caracteres, símbolos y grafías válidas reconocidas por el lenguaje. | Uso de un carácter ilegal (Ej: Introducir el símbolo `ñ` en un lenguaje que no soporte Unicode para identificadores). |
| **Sintaxis** | El conjunto de reglas gramaticales y estructurales que determinan cómo combinación los elementos del alfabeto. | Error de compilación por falta de puntuación (Ej: `if (x == 1) print("OK"` → Falta el paréntesis de cierre). |
| **Semántica** | El significado intrínseco, lógico y operacional de una instrucción válida formalmente. | Error en tiempo de ejecución por lógica inviable (Ej: `division = total / 0;` → Sintácticamente correcto, matemáticamente indefinido). |

### 3. Evolución: Programación Estructurada y Modular
*   **Tres Estructuras de Control Fundamentales:**
    1. *Secuencial* (Ejecución ordenada línea tras línea).
    2. *Selectiva / Condicional* (`if-else`, `switch`).
    3. *Repetitiva / Bucles* (`for`, `while`, `do-while`).
*   **Causa de su sustitución:** La programación estructurada pura generaba códigos monolíticos de miles de líneas de lectura vertical ("código espagueti"). Al crecer la complejidad de los proyectos, se volvió inmanejable. Fue sustituida por la **programación modular** para fragmentar el problema grande en submódulos o funciones independientes, lo que permitía la reutilización de código y el desarrollo en equipo.

### 4. Pilares de la Programación Orientada a Objetos (POO)
*   **Objeto:** Instancia o entidad de software concreta dotada de un estado (datos) y un comportamiento (funciones) que simula un elemento del mundo real.
*   **Clase:** El plano, plantilla o molde conceptual que define la estructura de atributos y métodos comunes a partir de la cual se crearán los objetos.
*   **Atributo:** Variable interna de una clase que almacena las características, propiedades o datos de un objeto.
*   **Método:** Función integrada dentro de una clase que determina las acciones, operaciones o comportamientos que el objeto puede ejecutar.

### 5. Balance Coste-Beneficio de la POO
*   **Desventaja reconocida:** Genera una mayor **sobrecarga en memoria y menor velocidad inicial de procesamiento** en comparación con los paradigmas puramente procedimentales. Requiere una abstracción más compleja y una curva de aprendizaje inicial elevada.
*   **Razones de dominancia corporativa:**
    1. **Mantenibilidad y Escalabilidad:** El encapsulamiento y el polimorfismo aíslan el código de fallos encadenados, permitiendo modificar sistemas empresariales masivos con un impacto controlado.
    2. **Reutilización Masiva de Código:** A través de la herencia, las organizaciones reducen drásticamente las líneas de código redundantes, acelerando el *time-to-market* en desarrollos complejos.

---

## PARTE 7: Herramientas de Apoyo

### 1. Evaluación Técnica del uso de Frameworks
*   **Ventajas:**
    *   *Aceleración del desarrollo:* Proporciona estructuras preestablecidas para tareas genéricas (autenticación, acceso a datos), evitando programar desde cero.
    *   *Estandarización del código:* Fuerza al equipo a seguir patrones de arquitectura limpios (ej. MVC), facilitando la lectura cruzada entre ingenieros.
    *   *Seguridad robustecida:* Al ser mantenido por comunidades masivas, implementa por defecto defensas contra vulnerabilidades críticas.
*   **Inconvenientes:**
    *   *Curva de aprendizaje:* Requiere un periodo inicial para comprender la filosofía y las reglas de diseño del propio marco de trabajo.
    *   *Acoplamiento y rigidez:* El desarrollo queda supeditado a las directrices del framework; salirse de su flujo nativo suele requerir parches complejos.
    *   *Sobrecarga estructural (Bloatware):* Incorpora dependencias y código que pueden no ser necesarios para el software específico, aumentando el tamaño final de la aplicación.

### 2. Ecosistema .NET
*   **Componente para construir aplicaciones:** **SDK** (.NET Software Development Kit), el cual aloja compiladores (como Roslyn para C#), herramientas de empaquetado y la interfaz de comandos (CLI).
*   **Componente para ejecutar aplicaciones:** **CLR** (Common Language Runtime), el entorno de ejecución virtual encargado de procesar el código intermedio.

### 3. Entorno de Ejecución (Runtime)
*   **Tres Tareas Principales:**
    1. Carga del programa y de sus dependencias en la memoria volátil del sistema.
    2. Gestión activa del sistema de hardware (administración de hilos de ejecución, asignación de memoria y recolección de basura con el *Garbage Collector*).
    3. Traducción dinámica (Compilación JIT - Just In Time) del lenguaje intermedio a instrucciones de máquina nativas del procesador.
*   **Por qué solo depura errores semánticos:** Los errores de alfabeto y sintaxis bloquean el proceso de compilación, impidiendo la generación de código objeto o intermedio. Por lo tanto, el entorno de ejecución solo recibe código estructuralmente perfecto desde el punto de vista sintáctico; la única opción de fallo en esta fase recae en la **lógica semántica** del flujo de datos en tiempo de ejecución.

### 4. Resolución del Caso Final
*   **Diagnóstico de la situación:** El programador cuenta en su equipo únicamente con el **Runtime (Entorno de ejecución)** para usuario final. Este software sirve para ejecutar aplicaciones que ya han sido completamente empaquetadas y compiladas de forma externa, pero carece de la infraestructura necesaria para la ingeniería inversa o la creación desde cero.
*   **Componentes instalados:** Lo que tiene en su máquina es el **motor de ejecución virtual (CLR / MV)** y el conjunto de **Bibliotecas de Clases Base (BCL)** necesarias para interactuar con el sistema operativo anfitrión.
*   **Componentes que le faltan:** Para poder escribir y crear software nuevo necesita instalar el **SDK de desarrollo**, el cual contiene herramientas de compilación para convertir código fuente en binario ejecutable, junto con un **Editor de Texto Avanzado o un Entorno de Desarrollo Integrado (IDE)** que le permita redactar dicho código fuente.
