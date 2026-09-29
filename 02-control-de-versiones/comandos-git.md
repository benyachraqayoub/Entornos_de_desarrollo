# Comandos de Git

## Configuración inicial

```bash
git config --global user.name "Tu nombre"
git config --global user.email "tu-correo@example.com"
```

## Flujo básico

```bash
git status
git add <archivo>
git commit -m "Describe el cambio"
git pull
git push
```

## Ramas y fusiones

```bash
git branch                 # Listar ramas
git switch -c <rama>       # Crear y cambiar a una rama
git switch <rama>          # Cambiar de rama
git merge <rama>           # Fusionar una rama en la actual
git branch -d <rama>       # Eliminar una rama ya fusionada
```

## Consultar cambios

```bash
git log --oneline --graph --decorate
git diff
git diff --staged
```

Si aparece un conflicto, edita los archivos afectados, elimina los marcadores de conflicto, verifica el resultado y registra la resolución con `git add` y `git commit`.
