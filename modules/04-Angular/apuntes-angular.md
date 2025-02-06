# ANGULAR

## Índice
- [ANGULAR](#angular)
  - [Índice](#índice)
  - [1. Instalación y descargas](#1-instalación-y-descargas)
    - [Node Modules](#node-modules)
  - [2. Servidor](#2-servidor)
  - [3. Creación de Apps](#3-creación-de-apps)
  - [4. Creación de componentes](#4-creación-de-componentes)
  - [5. Creación de interfaces](#5-creación-de-interfaces)
  - [6. Comunicación entre componentes](#6-comunicación-entre-componentes)
    - [Interpolación](#interpolación)
    - [Signal](#signal)
      - [Signal](#signal-1)
      - [WriteableSignal](#writeablesignal)
      - [signal.set()](#signalset)
      - [signal.update()](#signalupdate)
  - [7. Implantación de interfaces](#7-implantación-de-interfaces)
  - [8. Gestión de eventos](#8-gestión-de-eventos)
    - [Selector de ciudad](#selector-de-ciudad)
    - [Galería de imágenes](#galería-de-imágenes)
  - [9. Ciclo de vida](#9-ciclo-de-vida)
  - [10. Inputs y Outputs](#10-inputs-y-outputs)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
  - [11. Signals](#11-signals)

## 1. Instalación y descargas

### Node Modules
Ejecutar el siguiente comando en la terminal, dentro de nuestra app:
```console
npm install
```
De esta forma se descagará la carpeta node_modules, necesaria para nuestra app.

## 2. Servidor

Ejecutar el siguiente comando en la terminal para levantar el servidor, que funciona igual que la extensión Live Server de Visual Studio Code:
```console
ng s
```
No hay que preocuparse si salen Warnings, no pasa nada.

Para pararlo, simplemente tenemos que usar ```Ctrl + C```

> [!TIP]
> Se recomienda utilizar dos ventanas de terminales. Una para levantar el servidor y la otra para hacer las gestiones necesarias dentro de nuestro proyecto, como crear componentes, interfaces...
>
> En Windows el atajo de teclado para duplicar la ventana de la terminal Hyper es Ctrl + Shift + D

> [!NOTE]
> Al hacerlo por primera vez nos hace una pregunta: _"Would you like to share pseudonymous usage data about this project with the Angular Team at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more details and how to change this setting, see https://angular.dev/cli/analytics."_ => Le damos a No ("N") para rechazar que Google guarde información.


## 3. Creación de Apps
Ejecutar el siguiente comando en la carpeta donde queramos crear la app:
```console
ng new [nombreApp]
```

- ```[nombreApp]``` => Nombre de la app que queramos crear

> [!WARNING]
> No vamos a tener que crear carpetas para proyectos nuevos, la carpeta de cada proyecto nuevo la va a crear el propio comando de Angular.

Al ejecutar el comando, Angular nos hace algunas preguntas:
- _"Which stylesheet format would you like to use?"_ => CSS
- _"Do you want to enable Server-Side Rendering (SSR) and Static Stite Generation (SSG/Prerendering)?"_ => N

## 4. Creación de componentes
Ejecutar el siguiente comando en la carpeta de la app:
```console
ng genearate component components/[nombreComponente] [--skip-test]
```

- ```[nombreComponente]``` => Nombre del componente que queremos crear
- ```[--skip-test]``` => Opcional. Es para evitar que Angular nos cree el fichero .spec.ts, esquivar los tests unitarios

También existe una "versión corta" de este comando:
```console
ng g c components/[nombreComponente] [--skip-test]
```

## 5. Creación de interfaces
Ejecutar el siguiente comando en la carpeta de la app:
```console
ng genearate interface interfaces/I[nombreInterfaz] [--type=interface]
```

- ```[nombreInterfaz]``` => Nombre dela interfaz que queremos crear
- ```[--skip-test]``` => Opcional. Es para que nos cree un archivo [nombreInterfaz]**.interfaces**.ts y no un [nombreInterfaz].ts

También existe una "versión corta" de este comando:
```console
ng g i interfaces/I[nombreInterfaz] [--type=interface]
```

## 6. Comunicación entre componentes
Tenemos 2 métodos: 
- **Interpolación**: sirve para ejecutar cualquier código de TypeScript. No suele ser lo óptimo, ya que cada vez que ejecuta ese código actualiza la página entera en vez de actualizar solo ese dato 
- **Signal**: se utiliza como la interpolación, pero como si llamaramos a una función. En este caso solo se actualiza el signal, no se actualiza toda la página. El HTML no tiene que estar mirando al TS para ver si se ha actualizado o no.
### Interpolación
Vamos a montar un contador, donde por cada segundo que pasa sumamos 1
```typescript
// {...}
export class MainComponent {
  contador: number = 0

  ngOnInit(){
    setInterval(() => {
      this.contador++
    })
  }
}
```
```html
<p> Contador: {{contador}} </p>
```

### Signal
Vamos a montar un contador, donde por cada segundo que pasa sumamos 1
```typescript
import { signal } from '@angular/core';
// {...}
export class MainComponent {
  contador = signal <number> (0)

  ngOnInit(){
    setInterval(() => {
      this.contador.set(this.contador + 1)
    })
  }
}
```
```html
<p> Contador: {{contador()}} </p>
```

Como podemos apreciar, a la hora de sacar el signal en el HTML, es una función.
También podemos hacer un ```WriteableSignal``` para que sea editable:

```typescript
// Import
import { signal, WritableSignal } from '@angular/core';
// {...}
export class MainComponent {
  contador: WriteableSignal <number> = signal (0)

  ngOnInit(){
    setInterval(() => {
      this.contador.update(this.contador + 1)
    })
  }
}
```
```html
<p> Contador: {{contador()}} </p>
```
En este caso, no se hace un ```set```, si no un ```update```. Existen diferencias entre hacer un ```signal``` y ```.set()``` o un ```WriteableSignal``` y ```.update()```.


#### Signal
Normalmente los signals son de lectura. Estos no tienen ```.set()```, solo tienen ```.update()```. Son actualizables, pero no sobrescribibles
```typescript
export interface IPhoto {
    @Input contador1 = signal <number> (0)
    contador2 = input <number> (0)
}
```
```contador1``` y ```contador2``` son iguales
#### WriteableSignal
Estos tipos de signals serán de escritura. Con estos si que podemos hacer ```.set()``` y ```.update()```
```typescript
export interface IPhoto {
    @Input contador1: WriteableSignal<number> = signal(0)
    contador2 = model.required <number> (0)
}
```
```contador1``` y ```contador2``` son iguales

#### signal.set()
Añade un valor nuevo. Lanzaría el evento ```ngOnChanges()``` ya que se sobrescribe el valor. Es un "reseteo"
#### signal.update()
Actualiza el valor. No lanzaría el evento ```ngOnChanges()```.

## 7. Implantación de interfaces
Tras crear la interfaz en la terminal, definimos lo que temdrá nuestra interfaz y la implementamos donde queramos. Por ejemplo:

iphoto.interface.ts:
```typescript
export interface IPhoto {
    id?:number; // ? => hace que sea opcional
    title:string;
    url:string;
}
```

TS:
```typescript
import { IPhoto } from '../../interfaces/iphoto.interface';
// {...}
export class GaleriaComponent {
  currentImg: number = 0;
  arrImagenes: IPhoto[] = [ //tiene que cumplir lo que esté en la interfaz IPhoto
    {id: 1, title: 'Charmander', url: 'images/charmander.png'},
    {id: 2, title: 'Bulbasur', url: 'images/bulbasur.png'},
    {id: 3, title: 'Squirtle', url: 'images/squirtle.png'}
  ]
}
```

## 8. Gestión de eventos

Es como crear una propiedad variable, pero con ```[]``` en lugar de ````()````. Dentro del ```()``` va el evento (change, input, click...), pero no es obligatorio.
```HTML
<app-mi-componente (click) = "miFuncion($event)"></app-mi-componente>
```
Al hacer click en el componente (también puede ser un botón) se ejecuta miFuncion() pasándole el evento. El evento no es obligatorio, dependerá de si la función lo necesita o no.

### Selector de ciudad

Ejemplo de gestión de evento ```onChange``` de un ```select```, utilizando interpolación:

HTML:
```html
<select (change) = "selectCity($event)">
    <option value="">Selecciona una ciudad</option>
    <option value="madrid">Madrid</option>
    <option value="paris">Paris</option>
    <option value="londres">Londres</option>
</select>
<h3>Ciudad escogida: {{ciudadSeleccionada}}</h3>
```

TS:
```typescript
// {...}
export class AppComponent {
  ciudadSeleccionada: string = "Ninguna"

  selectCity(event:any) : void{
    this.ciudadSeleccionada = event.target.value
  }
}
```
Cuando cambiemos el valor del ```select``` del HTML, se ejecuta la función ```selectCity()```, que recoge el valor de la opción seleccionada mediante ```target``` y lo asigna a ```ciudadSeleccionada```. Si no cambiamos el valor, no hay evento, por lo que no se lanza la función ```selectCity()```
Como vemos en el HTML, esa ciudad se actualiza mediante interpolación.


### Galería de imágenes
Esta vez vamos a ver un ejemplo de una galería de imágenes, con el evento ```click``` de un botón.

HTML:
```html
<figure class="galeria">
    <img [src]="arrImagenes[currentImg].url" [alt]="arrImagenes[currentImg].title">
    <figcaption>{{arrImagenes[currentImg].title}}</figcaption>
    <button (click) = "prev()">Anterior</button>
    <button (click) = "next()">Siguiente</button>
</figure>
```

iphoto.interface.ts:
```typescript
export interface IPhoto {
    id?:number; // ? => hace que sea opcional
    title:string;
    url:string;
}
```

TS:
```typescript
import { IPhoto } from '../../interfaces/iphoto.interface';
// {...}
export class GaleriaComponent {

  currentImg: number = 0;
  arrImagenes: IPhoto[] = [ //tiene que cumplir lo que esté en la interfaz IPhoto
    {id: 1, title: 'Charmander', url: 'images/charmander.png'},
    {id: 2, title: 'Bulbasur', url: 'images/bulbasur.png'},
    {id: 3, title: 'Squirtle', url: 'images/squirtle.png'}
  ]

  next() {
    if (this.currentImg < this.arrImagenes.length-1) {
      this.currentImg++;
    }
    else if (this.currentImg === this.arrImagenes.length-1) { // cuando lleguemos al final, que vaya al principio
      this.currentImg = 0;
    }
  }
  prev() {
    if (this.currentImg > 0 && this.currentImg <= this.arrImagenes.length-1) {
      this.currentImg--;
    }
    else if (this.currentImg === 0) { // cuando lleguemos a la primera, que vaya al final
      this.currentImg = this.arrImagenes.length-1;
    }
  }

}
```
Esta vez, cada vez que hagamos click en uno de los botones se ejcutará ```next()``` o ```prev()``` para pasar de imagen. 

## 9. Ciclo de vida
Hay funciones que se ejecutan siempre en un componente, y es inevitable que no se lancen:
- ```constructor() : void {}```: Se ejecuta cuando se crea una instancia del componente o servicio. _Sólo se ejecuta una vez._

- ```ngOnInit() : void {}```: Se ejecuta cuando todo el componente está cargado al selector, HTML CSS y TS. El ```ngOnInit()``` necesita que el ```contructor()``` se haya cargado. Se ejecuta después del contructor. _Sólo se ejecuta una vez._

- ```ngOnChanges() : void {}```: Se ejecuta cada vez que cambian las propiedades de entrada de un componente (@Input()) del componente. _Se puede ejecutar varias veces._

- ```ngDoCheck() : void {}```: Se ejecuta cada vez que el usuario interactúa con un elemento de la interfaz que pueda recibir un evento (botón, input, select...), tenga evento o no lo tenga. Los eventos de carga (por ejemplo ```ngOnChanges()```) hacen que se lance este evento. _Se puede ejecutar varias veces._

- ```ngAfterViewInit() : void {}```: Se ejecuta cuando ya se ha cargado la vista (HTML). Es como un ```ngOnInit()```. _Sólo se ejecuta una vez._

- ```ngAfterViewChecked() : void {}```: Se ejecuta cada vez que se renderiza la vista nuevamente. Si hay algún cambio en el HTML (número nuevo, color...) se vuelve a ejecutar este evento. _Se puede ejecutar varias veces._

- ```ngOnDestroy() : void {}```: Se ejecuta antes de quitar el componente. Al darle a la X en el navegador, lo que ourre es la destrucción de los componentes que hay en pantalla. En esre evento se suelen meter funciones para cerrar sesión, guardar estados donde el usuario se ha quedado (por ejemplo vídeos), guardar datos en BBDD... para no perder esa información o guardarla para la próxima sesión. _Sólo se ejecuta una vez_

> Ejemplo del ```ngOnChanges()```:
> 
> app.component.html:
> ```html
> <section>
>     <app-ciclo-vida [miInput] = "edad"></app-ciclo-vida>
> </section>
> ```
> 
> app.component.ts:
> ```typescript
> import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
> // {...}
> export class AppComponent {
>   edad:number = 25
> 
>   ngOnInit() : void {
>     setTimeout(() => {
>       this.edad = 50
>     }, 5000);
>   }
> }
> ```
> 
> ciclo-vida.component.ts:
> ```typescript
> import { Component, Input } from '@angular/core';
> // {...}
> export class CicloVidaComponent {
> 
>   @Input() miInput: number = 0;
> 
>   constructor() {
>     console.log('constructor', this.miInput);
>   }
>   ngOnInit() : void {
>     console.log('ngOnInit', this.miInput);
>   }
>   ngOnChanges() : void {
>     console.log('ngOnChanges', this.miInput);
>   }
> }
> ```
> 
>En este ejemplo vemos como en el constructor ```miInput = 0```. Cuando se carga el componente, ``ngonInit()``, el input pasa a ser la >edad, por lo que se lanza el evento ```ngOnchanges()```  ```miInput = 25```. Cuando pasan los 5 segundos de timeout de app.component.ts, >la edad cambia y por lo tanto cambia el input y se lanza el evento ```ngOnchanges()```, y pasa a ser ```miInput = 50```.

## 10. Inputs y Outputs
### Inputs
Podemos tener propiedades variables y propiedades estáticas:

app.component.html:
```HTML
<app-mi-component [miPropiedadVariable] = "miVariable1" miPropiedadEstatica = "valorConcreto"></app-mi-component>
```
app.component.ts:
```typescript
import { MiComponent } from './components/mi-component/mi-component.component';
// {...}
export class AppComponent {
  miVariable1: number = 0;
  valorConcreto: string = "";
}
```
mi.component.ts:
```typescript
// {...}
export class MiComponent {
  @Input() miPropiedadVariable: any; // Función decoradora para indicar que es un input, igual que @Component
  @Input() miPropiedadEstatica: any; // Función decoradora para indicar que es un input, igual que @Component
}
```

A la propiedad variable ```miPropiedadVariable``` se le asigna una variable (```miVariable1```) y a la propiedad estática ```miPropiedadEstatica``` se le asigna una variable (```valorConcreto```).
Ambas variables que tiene que estar en el TS. Las propiedades tienen que estar creadas en el componente (```app-mi-componente```).

En este caso ```miVariable1``` deberá ser una variable declarada en en componente principal y ```valorConcreto``` será un valor que le podamos pasar por el HTML

### Outputs
Pasos as seguir para el Output
1. Crear una propiedad decorada con @Output de tipo EventEmitter
``` typescript 
  @Output() calculoEmitido: EventEmitter<ICalc> = new EventEmitter();
```
2. Emitir el objeto hacie el padre
``` typescript 
  this.calculoEmitido.emit(this.newCalc)
```
3. En el componente padre se crea un evento personalizado que he creado (```calculoEmitido```) para emitir al padre la respuesta. "Cuando el hijo me diga algo, yo ejecuto una funcion". Meterlo en la etiqueta del componente hijo.
``` HTML 
  <app-calculadora (calculoEmitido)="obtenerCalculo($event)"></app-calculadora>
```
4. Crear la función que se va a ejecutar en el padre cuando reciba la respuesta del hijo => ```obtenerCalculo($event)```
   - Le pasamos ```$event``` porque está enviando información asociada al evento. En este caso del evento personalizado (calculoEmitido), ```$event``` es lo que he dicho en el hijo que voy a enviar (```ICalc``` en este caso)
``` typescript 
  obtenerCalculo() { }
```
5. La función que hay que crear en el componente padre (```obtenerCalculo```) tiene que recibir un evento, que será un objeto de tipo ```ICalc```
``` typescript 
  obtenerCalculo(event:ICalc) { }
```
6. Hacemos push del Array arrCalculos
``` typescript 
  obtenerCalculo(event:ICalc) {
    this.arrCalculos.push(event)
  }
```

## 11. Signals

- input()
- model() --> writeablesignal
- effect() --> onChange para los signals que esten metidos dentro de esta funcion