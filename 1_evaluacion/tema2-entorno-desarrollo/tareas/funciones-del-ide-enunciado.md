# 🛠️ Taller: Exploración de las funciones de un IDE (Enunciado)

* **Asignatura:** Entornos de Desarrollo (1.º DAW)
* **Tema:** Tema 2 - Entornos de desarrollo
* **Actividad:** Exploración práctica de las funciones de un IDE

---

## Paso 0 · Preparar el terreno

Crea una carpeta `T2_TuApellido` y ábrela en Visual Studio Code. Si no tienes instalada la extensión de Python, instálala (icono de extensiones, buscar «Python», Instalar).

Dentro de la carpeta, crea dos archivos y pega esto tal cual:

**Archivo `notas.py`:**
```python
# Las notas de un grupo de alumnos
lista = [4, 7, 9, 5, 3, 8, 6, 10]
```

**Archivo `informe.py`:**
```python
import notas

suma = 0
maxima = 0
aprobados = 0

for n in notas.lista:
    suma = suma + n
    if n > maxima:
        maxima = n
    if n >= 5:
        aprobados = aprobados + 1

media = suma / len(notas.lista)

print("Media:", media)
print("Nota mas alta:", maxima)
print("Aprobados:", aprobados)
```

Ejecuta `informe.py`. Debe salir `Media: 6.5 · Nota mas alta: 10 · Aprobados: 6`. Si no sale eso, algo has pegado mal.

### Captura 1: La extensión instalada y el programa funcionando.
<!-- PEGA AQUÍ TU CAPTURA 1 -->

**Responde:** Instalar esa extensión es una de las funciones que enumera el apartado 2.3. ¿Con qué palabras exactas la describe el dossier?
> 

---

## Paso 1 · El editor (apartados 2.1 y 2.2)

Ponte al final de `informe.py` y empieza a escribir `print(med` — sin terminar. Espera a que el IDE te ofrezca el desplegable.

### Captura 2: El desplegable de autocompletado abierto.
<!-- PEGA AQUÍ TU CAPTURA 2 -->

**Responde:** En esa captura se ven tres capacidades distintas de las que el apartado 2.1 atribuye al editor de textos. Identifícalas y di dónde se ve cada una. (Mira también lo que pasó con el paréntesis al escribirlo.)
> 

*(Borra esa línea a medias antes de seguir).*

---

## Paso 2 · El error que no llega a ejecutarse (apartados 2.1 y 2.2)

Rompe el programa a propósito: quita los dos puntos del final de la línea `for n in notas.lista:`. No lo ejecutes.

### Captura 3: El subrayado del error y el mensaje que te da el IDE.
<!-- PEGA AQUÍ TU CAPTURA 3 -->

**Responde:** ¿Qué componente de la tabla del apartado 2.1 te está avisando? Esa misma capacidad aparece dos veces en el tema, en el 2.1 y en el 2.2. ¿Por qué no es un descuido del libro?
> 

*(Vuelve a poner los dos puntos antes de seguir).*

---

## Paso 3 · Parar el programa por dentro (apartado 2.3)

Haz clic a la izquierda del número de la línea `if n > maxima:` para poner un punto de ruptura (aparece un círculo rojo). Lanza el programa con F5. Se parará solo. Dale a Continuar una vez para llegar a la segunda vuelta del bucle.

### Captura 4: El panel de variables, con el programa detenido en la segunda vuelta.
<!-- PEGA AQUÍ TU CAPTURA 4 -->

**Responde:** Copia los valores de `n`, `suma`, `maxima` y `aprobados` en ese instante. Dos preguntas: ¿por qué `suma` vale eso y no la suma de todas las notas? Y `aprobados` está a cero aunque ya ha pasado un 7 por el bucle — ¿por qué?
> 

---

## Paso 4 · Cambiar sin romper (apartado 2.3)

La variable `n` tiene un nombre horrible. Pon el cursor encima, pulsa F2 y llámala `nota`. No vale buscar y reemplazar a mano.

### Captura 5: El código después del cambio.
<!-- PEGA AQUÍ TU CAPTURA 5 -->

**Responde:** ¿En cuántos sitios ha cambiado el nombre? El dossier distingue refactorizar de depurar: ¿cuál de las dos acabas de hacer? Justifícalo con la definición del apartado 2.3. Ejecuta otra vez y comprueba que siguen saliendo 6.5, 10 y 6 — explica por qué tenía que salir lo mismo.
> 

---

## Paso 5 · Lo que el IDE ha dejado en tu carpeta (apartado 2.2)

Mira la carpeta del proyecto en el explorador de VS Code. Despliega todo lo que veas.

### Captura 6: El contenido completo de la carpeta.
<!-- PEGA AQUÍ TU CAPTURA 6 -->

**Responde:** Ha aparecido una carpeta que tú no has creado, con un archivo dentro que tú no has escrito. ¿Cómo se llaman? El apartado 2.2 incluye la función «archivos fuente en unas carpetas y compilados a otras». Relaciónalo con los dos estados del código que vimos en el Tema 1: ¿cuál de tus archivos es cuál? ¿Por qué ese archivo se ha generado a partir de `notas.py` y no de `informe.py`?
> 

---

## Paso 6 · Lo que hoy no has podido demostrar

El apartado 2.2 enumera once funciones y tú has provocado unas cuantas.

**Responde:** Nombra tres que no hayas podido demostrar hoy y explica en una línea por qué no: porque tu IDE no las trae, porque el programa es demasiado simple, o porque harían falta más personas.
> 
