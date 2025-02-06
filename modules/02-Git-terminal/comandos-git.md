# COMANDOS GIT

## Índice
- [COMANDOS GIT](#comandos-git)
  - [Índice](#índice)
  - [Repositorio local](#repositorio-local)
  - [Estado de cambios](#estado-de-cambios)
  - [Staging Area](#staging-area)
  - [Commit](#commit)
  - [Ramas](#ramas)
  - [Repositorio remoto](#repositorio-remoto)

## Repositorio local
Iniciaar repositorio local:
```
git init [nombreRepositorio]
```

## Estado de cambios
Ver estado de los cambios:
```
git status
```

## Staging Area
Para pasar todos los archivos al Staging Area:
```
git add .
```

Para pasar un solo fichero:
```
git add [nombreFichero].[extension]
```

Para pasar todos los ficheros con la extension .js:
```
git add *.[extension]
```

## Commit
Para hacer un commit de todo lo que esta en Staging Area:
```
git commit -m "[mensaje]"
```

Para saltarse el ```git add.``` y hacerlo con el commit directamente:
```
git commit -am "[mensaje]"
```

Ver listado de commits:
```
git log
```

## Ramas
Ver en que rama estamos y listado de ramas:
```
git branch
```

Activar la rama en la que queremos trabajar:
```
git checkout [nombreRama]
```

Crear rama:
```
git branch [nombreRama]
```

Eliminar rama:
```
git branch -D [nombreRama]
```

Crear rama e ir a la misma en un mismo comando:
```
git checkout -b [nombreRama]
```

Hacer un merge en la rama activa desde la rama [ramaConCambio]:
```
git merge [ramaConCambio]
```
> [!NOTE]
> Para hacer esto hay que posicionarse en la rama donde queremos traer los cambios.
> 
> Por ejemplo, si hemos hecho los cambios en la rama myBranch y queremos llevarlos a la rama Main, tendremos que posicionarnos en la rama Main y ejecutar ```git merge myBranch```

## Repositorio remoto

Clonar repositorio remoto existente:
```
git colne [urlRepositorio]
```

Actualizar commits de repositorio remoto:
```
git fetch
```

Actualizar el repositorio local respecto al remoto (descargarse la versión actual del remoto):
```
git pull origin [nombreRama]
```

Subir cambios a repositorio remoto:
```
git push origin [nombreRama]
```