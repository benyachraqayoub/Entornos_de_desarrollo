import notas

suma = 0
maxima = 0
aprobados = 0

for nota in notas.lista:
    suma = suma + nota
    if nota > maxima:
        maxima = nota
    if nota >= 5:
        aprobados = aprobados + 1

media = suma / len(notas.lista)

print("Media:", media)
print("Nota mas alta:", maxima)
print("Aprobados:", aprobados)
