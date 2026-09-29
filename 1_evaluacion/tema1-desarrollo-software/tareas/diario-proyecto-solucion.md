# 🛠️ Taller: El Diario del Proyecto (Solución)

* **Asignatura:** Entornos de Desarrollo (1º DAW)
* **Tema:** Tema 1 - Fichas de Taller
* **Alumno:** Ayoub

---

## 📋 1. Tabla del Diario del Proyecto «Tienda Marina» (Resuelta)

| # | Anotación del Diario | Fase / Tipo de Mantenimiento |
| :-: | :--- | :--- |
| **1** | El cliente firma un documento donde se enumeran los objetivos del sistema y sus requisitos funcionales y no funcionales. | **Análisis** |
| **2** | Se decide qué Sistema Gestor de Bases de Datos se usará y en qué lenguaje se programará. | **Diseño** |
| **3** | Un programador escribe en pseudocódigo los pasos de la solución antes de teclear ninguna instrucción. | **Diseño** |
| **4** | Se comprueba por separado que el módulo de facturación calcula bien el IVA. | **Pruebas (Unitarias)** |
| **5** | Se comprueba que el módulo de facturación y el de almacén funcionan correctamente juntos. | **Pruebas (Integración)** |
| **6** | Se redacta el documento que explica al personal de la tienda cómo emitir un recibo. | **Documentación** |
| **7** | Los programas se transfieren a los equipos del cliente y allí se configuran y verifican. | **Explotación** |
| **8** | Durante una semana, el cliente usa la aplicación en sus propios equipos y con carga normal de trabajo. | **Pruebas (Beta Test)** |
| **9** | Seis meses después se corrige un fallo en el cálculo de un descuento. | **Mantenimiento Correctivo** |
| **10** | Al año, el cliente pide un módulo de proveedores que antes no existía. | **Mantenimiento Evolutivo** |
| **11** | Se adapta la aplicación a un nuevo lector de códigos de barras que ha comprado la empresa. | **Mantenimiento Adaptativo** |
| **12** | `[Tras las pruebas del punto 5 hubo que volver a la fase de diseño para cambiar una relación entre tablas.]` | **Diseño / Pruebas** *(Ambigua)* |

---

## 🧠 2. Respuestas al Análisis Técnico

### 🔍 2. Análisis de la Anotación Ambigua
La **anotación 12** es la ambigua porque ocurre cronológicamente durante la ejecución de la fase de **Pruebas**, pero los entregables y las tareas técnicas de modelado que describe pertenecen estrictamente a la arquitectura de la fase de **Diseño**.

### 🔄 3. Justificación del Modelo de Ciclo de Vida
El proyecto sigue un **Modelo de cascada con realimentación**. La pista de la anotación 12 confirma inequívocamente este modelo dinámico, ya que demuestra la capacidad de regresar de forma estructurada a una etapa anterior (Diseño) inmediatamente al detectar una anomalía crítica en una fase posterior (Pruebas).

### ⚙️ 4. Mantenimiento Ausente y Anotación Número 13
El tipo de mantenimiento técnico que no aparecía originalmente reflejado en el diario del proyecto es el **Mantenimiento Perfectivo**.

*   **Anotación 13 (Propuesta):** *"A los ocho meses, se modifica el color de los elementos y botones principales de la interfaz web de azul a verde con el fin de optimizar la velocidad visual y usabilidad del usuario final al registrarse."* [2]
