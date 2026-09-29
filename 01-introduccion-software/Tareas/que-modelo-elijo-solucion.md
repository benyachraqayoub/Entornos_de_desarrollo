← [Volver al Índice General](../README.md) | [Volver a Introducción al Software](../README.md)

# 🛠️ Taller: ¿Qué modelo elijo? (Solución)

* **Asignatura:** Entornos de Desarrollo (1º DAW)
* **Tema:** Tema 1 - Fichas de Taller
* **Alumno:** Ayoub

---

## 📋 1. Ficha de Decisión Resuelta

A continuación se detallan los modelos de ciclo de vida seleccionados para cada escenario, basados estrictamente en los rasgos de gestión de proyectos, estabilidad de requisitos y análisis de riesgos descritos en el material teórico:

| Caso | Modelo de Ciclo de Vida Elegido | Justificación Académica (Criterio Técnico) |
| :-: | :--- | :--- |
| **A** | **Modelo en Cascada Puro (Lineal sin realimentación)** | Se elige este modelo por la **estabilidad absoluta y simplicidad de los requisitos** ("saben exactamente lo que quieren"), la brevedad extrema del plazo ("dos semanas") y la garantía explícita de que "no habrá cambios", haciendo innecesaria cualquier flexibilidad estructural. |
| **B** | **Modelo en Cascada con Realimentación** | Es adecuado porque los requisitos están "bien definidos" en un "sector estable", cumpliendo las condiciones de un enfoque secuencial, pero con la característica clave del material que exige **poder volver atrás a una fase previa** si se detecta un error sin reiniciar desde cero. |
| **C** | **Modelo Basado en Prototipos (Prototivado)** | La dueña admite textualmente que **"hasta que no lo vea funcionando" no sabrá qué necesita**, lo cual encaja perfectamente con este modelo. Permite construir una interfaz funcional rápida para que el cliente experimente y valide sus necesidades antes de la codificación definitiva. |
| **D** | **Modelo en Espiral** | Es la opción idónea porque el material define este ciclo para **sistemas grandes con entregas por versiones** donde el elemento crítico conductor es el **análisis y revisión formal de riesgos** antes de avanzar y comprometer el presupuesto de cada nueva iteración. |
| **E** | **Modelo Incremental / Cascada fijando fechas** | *(Ver sección de análisis de ambigüedad).* Se opta por este enfoque debido al largo plazo del proyecto ("año y medio"). Aunque hoy los requisitos parezcan fijos, el sector "se mueve mucho", por lo que entregar el sistema en bloques operativos reduce el riesgo de desfase tecnológico o comercial. |

---

## 🧠 2. Análisis del Caso Ambiguo (Aviso de la Ficha)

El caso deliberadamente ambiguo del taller es el **Caso E · El portal interno**.

### Justificación de la ambigüedad:
Este escenario genera un conflicto clásico de ingeniería de software entre la **percepción actual del cliente** y la **realidad del entorno de mercado**:

1. **Defensa del Modelo de Cascada (Fijando Fechas / Con Realimentación):** Si nos ceñimos estrictamente a la declaración del responsable ("los requisitos están claros e insiste en que no cambiarán"), se podría defender un enfoque secuencial clásico programado a largo plazo.
2. **Defensa del Modelo Incremental o Evolutivo (Elegido):** Es la respuesta técnicamente más robusta a nivel profesional. Un desarrollo de **año y medio** en un sector altamente volátil ("se mueve mucho") hace inviable un modelo rígido. Los requisitos cambiarán inevitablemente a pesar de la insistencia del cliente, por lo que una estrategia basada en incrementos funcionales es mucho más defendible y realista para mitigar la obsolescencia durante el transcurso del desarrollo.
