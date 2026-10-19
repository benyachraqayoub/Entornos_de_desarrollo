# 🛠️ Taller: Exploración de las funciones de un IDE (Soluciones)

Este documento contiene las respuestas técnicas literales basadas estrictamente en las diapositivas de la asignatura **DIGITECH (Tema 2 - Entornos de desarrollo)** para validar la práctica del alumno.

---

## Paso 0 · Preparar el terreno

![Captura 1: Extensión de Python instalada y programa funcionando](./captura%201.png)

**Responde:** Instalar esa extensión es una de las funciones que enumera el apartado 2.3. ¿Con qué palabras exactas la describe el dossier?
> **Respuesta:** El dossier describe textualmente esta capacidad bajo el bloque "Trabajar en equipo y afinar el entorno" con las palabras exactas: **"Aumento de funcionalidades a través de la gestión de módulos y plugins"**.

---

## Paso 1 · El editor (apartados 2.1 y 2.2)

![Captura 2: Autocompletado y funciones del editor](./captura%202.png)

**Responde:** En esa captura se ven tres capacidades distintas de las que el apartado 2.1 atribuye al editor de textos. Identifícalas y di dónde se ve cada una. (Mira también lo que pasó con el paréntesis al escribirlo.)
> **Respuesta:** Basándonos en las capacidades enumeradas "Al escribir" en el Bloque 2, se identifican las siguientes tres funciones en la captura:
> 1. **"Editor de código: coloración de la sintaxis"**: Se aprecia en cómo el IDE pinta con colores diferenciados las palabras reservadas (`import`), las funciones nativas (`print`), los textos fijos entre comillas y los nombres de las variables.
> 2. **"Auto-completado de código, atributos y métodos de clases"**: Se evidencia en el menú desplegable flotante que ofrece la ayuda visual para completar la palabra `media` tras escribir los primeros caracteres.
> 3. **"Inserción automática de paréntesis, corchetes, tabulaciones y espaciados"**: Al abrir el primer paréntesis `(`, el editor inserta de forma inmediata el símbolo de cierre `)` de manera automática para mantener el balance sintáctico.

---

## Paso 2 · El error que no llega a ejecutarse (apartados 2.1 y 2.2)

![Captura 3: Error de sintaxis detectado por el IDE](./captura%203.png)

**Responde:** ¿Qué componente de la tabla del apartado 2.1 te está avisando? Esa misma capacidad aparece dos veces en el tema, en el 2.1 y en el 2.2. ¿Por qué no es un descuido del libro?
> **Respuesta:** Nos está avisando la **"Detección de errores de sintaxis en tiempo real"** mediante un subrayado ondulado. No es un descuido de la maquetación del libro por lo siguiente:
> * En la primera mención (Bloque 2, herramienta **Editor de textos**), hace referencia al comportamiento visual de la interfaz del editor que nos pinta los subrayados de advertencia **"Al escribir"**.
> * En la segunda mención (Bloque 2, herramienta **Compilador / intérprete**), hace referencia al motor lógico subyacente que escanea estáticamente el archivo de código en segundo plano para verificar el cumplimiento estricto de las reglas gramaticales del lenguaje.

---

## Paso 3 · Parar el programa por dentro (apartado 2.3)

![Captura 4: Depurador detenido en un punto de ruptura y panel de variables](./captura%204.png)

**Responde:** Copia los valores de `n`, `suma`, `maxima` y `aprobados` en ese instante. Dos preguntas: ¿por qué `suma` vale eso y no la suma de todas las notas? Y `aprobados` está a cero aunque ya ha pasado un 7 por el bucle — ¿por qué?
> **Respuesta:** 
> * **Valores en la segunda iteración:** `n = 7`, `suma = 11`, `maxima = 4`, `aprobados = 0`.
> * **Por qué `suma` vale 11:** Porque el programa realiza un **"seguimiento de variables"** secuencial. En la primera vuelta procesó el valor `4` (`suma = 4`). Al iniciar la segunda vuelta, sumó el nuevo valor `7` (`4 + 7 = 11`) justo antes de detenerse. No refleja la suma de todas las notas porque el programa se encuentra pausado y todavía no ha completado el recorrido completo del resto de elementos de la lista.
> * **Por qué `aprobados` vale 0:** Debido a que el **"punto de ruptura"** está colocado arriba, concretamente en la línea `if n > maxima:`. El flujo de ejecución de la CPU está congelado en esa línea, lo que significa que las líneas de código posteriores (donde se valida el aprobado `if n >= 5:`) todavía no se han ejecutado para el número `7`.

---

## Paso 4 · Cambiar sin romper (apartado 2.3)

![Captura 5: Código tras renombrar la variable con refactorización](./captura%205.png)

**Responde:** ¿En cuántos sitios ha cambiado el nombre? El dossier distingue refactorizar de depurar: ¿cuál de las dos acabas de hacer? Justifícalo con la definición del apartado 2.3. Ejecuta otra vez y comprueba que siguen saliendo 6.5, 10 y 6 — explica por qué tenía que salir lo mismo.
> **Respuesta:** 
> * **Sitios modificados:** El identificador se ha modificado automáticamente en **4 lugares** del archivo `informe.py`.
> * **¿Refactorizar o depurar?:** Acabamos de realizar una **Refactorización**. El dossier la define literalmente como: **"cambios menores que facilitan la legibilidad sin alterar la funcionalidad"**.
> * **Por qué el resultado es idéntico:** Tenía que salir exactamente el mismo resultado porque renombrar un contenedor de datos no cambia las instrucciones matemáticas ni la lógica del algoritmo de cálculo. El comportamiento del programa de cara al usuario final permanece inalterado.

---

## Paso 5 · Lo que el IDE ha dejado en tu carpeta (apartado 2.2)

![Captura 6: Carpeta del proyecto con el archivo generado en __pycache__](./captura%206.png)

**Responde:** Ha aparecido una carpeta que tú no has creado, con un archivo dentro que tú no has escrito. ¿Cómo se llaman? El apartado 2.2 incluye la función «archivos fuente en unas carpetas y compilados a otras». Relaciónalo con los dos estados del código que vimos en el Tema 1: ¿cuál de tus archivos es cuál? ¿Por qué ese archivo se ha generado a partir de `notas.py` y no de `informe.py`?
> **Respuesta:** 
> * **Nombres:** La carpeta se llama **`__pycache__`** y el archivo contiene la extensión **`.pyc`** (cuyo nombre varía según la versión, ej: `notas.cpython-3X.pyc`).
> * **Relación con el Tema 1:** El archivo `.py` que nosotros escribimos a mano se corresponde con el **código fuente** (instrucciones legibles por humanos). El archivo `.pyc` generado automáticamente por el IDE dentro de la carpeta oculta corresponde al **código compilado** (un bytecode optimizado listo para la máquina virtual).
> * **Por qué solo para `notas.py`:** Porque el IDE aplica de forma automática la separación de **"archivos fuente en unas carpetas y compilados a otras"** solo sobre los módulos secundarios independientes cuando son llamados por una sentencia de importación externa (`import notas`). El archivo ejecutable raíz (`informe.py`) se procesa y compila dinámicamente directo en la memoria durante el lanzamiento del entorno virtual, por lo que no requiere plasmar su compilado físicamente en el disco.

---

## Paso 6 · Lo que hoy no has podido demostrar

**Responde:** Nombra tres que no hayas podido demostrar hoy y explica en una línea por qué no: porque tu IDE no las trae, porque el programa es demasiado simple, o porque harían falta más personas.
> **Respuesta:** *(Selección de tres funciones literales del Bloque 2 que no aplican a la práctica actual):*
> 1. **"Control de versiones: un único almacén de archivos compartido por todos"**: No se ha podido demostrar porque estamos trabajando de manera local y aislada en nuestra propia máquina sin inicializar repositorios compartidos.
> 2. **"Generador de documentación integrado"**: No aplica en este escenario porque el programa desarrollado es demasiado simple y no cuenta con la estructura compleja ni los bloques de comentarios normalizados necesarios para renderizar un manual técnico.
> 3. **"Soporta cambios de varios usuarios de manera simultánea"**: No es posible demostrarlo en esta sesión de laboratorio porque el taller está planteado como una entrega académica de carácter estrictamente individual y harían falta más personas conectadas simultáneamente.
