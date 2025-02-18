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
    - [Signals](#signals)
      - [Signal](#signal)
      - [WriteableSignal](#writeablesignal)
  - [7. Implantación de interfaces](#7-implantación-de-interfaces)
  - [8. Gestión de eventos](#8-gestión-de-eventos)
    - [Selector de ciudad](#selector-de-ciudad)
    - [Galería de imágenes](#galería-de-imágenes)
  - [9. Ciclo de vida](#9-ciclo-de-vida)
  - [10. Inputs y Outputs](#10-inputs-y-outputs)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
  - [11. Signals](#11-signals)
    - [input()](#input)
    - [model()](#model)
      - [Diferencias entre WriteableSignal y model()](#diferencias-entre-writeablesignal-y-model)
    - [computed()](#computed)
    - [effect()](#effect)
    - [Funciones de los signals](#funciones-de-los-signals)
      - [.required()](#required)
  - [12. Servicios](#12-servicios)

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
```
ng new [nombreApp]
```

- ```[nombreApp]``` => Nombre de la app que queramos crear

> [!WARNING]
> No vamos a tener que crear carpetas para proyectos nuevos, la carpeta de cada proyecto nuevo la va a crear el propio comando de Angular.

Al ejecutar el comando, Angular nos hace algunas preguntas:
- _"Which stylesheet format would you like to use?"_ => CSS
- _"Do you want to enable Server-Side Rendering (SSR) and Static Stite Generation (SSG/Prerendering)?"_ => N

Si queremos que Angular no nos cree la carpeta .git ejecutaremos el comando:
```
ng new [nombreApp] --skip-git
```

## 4. Creación de componentes
Ejecutar el siguiente comando en la carpeta de la app:
```console
ng genearate component components/[nombreComponente] [--skip-tests]
```

- ```[nombreComponente]``` => Nombre del componente que queremos crear
- ```[--skip-tests]``` => Opcional. Es para evitar que Angular nos cree el fichero .spec.ts, esquivar los tests unitarios

También existe una "versión corta" de este comando:
```console
ng g c components/[nombreComponente] [--skip-tests]
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

### Signals
Existen varios tipos de signals. Aquí hablaremos brevemente de ellos, pero en el punto [11. Signals](#11-signals) hablaremos más en profundidad.

#### Signal
Normalmente los signals son de lectura.
```typescript
export class ContadorComponent {
    contador1: Signal<numebr> = signal <number> (0)
}
```
```contador1()``` devuelve el valor del signal, pero no podríamos modificarlo después de crearlo.

#### WriteableSignal
Estos tipos de signals serán de lectura y escritura. Se podrá actualizar el valor con los métodos:
- ```.set(nuevoValor)``` => Resetea el valor del signal al que le metamos. Reemplaza completamente el valor del signal. Lanzaría el evento ```ngOnChanges()``` ya que se sobrescribe el valor.
- ```.update(nuevoValor)``` => Actualiza el valor del signal al que le metamos. Modifica el valor del signal usando una función.No lanzaría el evento ```ngOnChanges()``` ya que actualiza el valor, pero no lo resetea.

```typescript
export class ContadorComponent {
    contador2: WritableSignal<number> = signal(0); // Signal mutable
}
```
```contador2()``` devuelve el valor actual, y podríamos modificarlo.

> [!NOTE]
> Por ejemplo, vamos a montar un contador, donde por cada segundo que pase desde > que se activa se actualizará el valor del contador y por tanto el html:
> 
> ```typescript
> // Import
> import { signal, WritableSignal } from '@angular/core';
> // {...}
> export class MainComponent {
>   contador: WriteableSignal <number> = signal (0)
> 
>   ngOnInit(){
>     setInterval(() => {
>       this.contador.update(this.contador + 1)
>     }, 1000)
>   }
> }
> ```
> ```html
> <p> Contador: {{contador()}} </p>
> ```

## 7. Implantación de interfaces
Tras crear la interfaz en la terminal, definimos lo que temdrá nuestra interfaz y la implementamos donde queramos. Por ejemplo:

_iphoto.interface.ts:_
```typescript
export interface IPhoto {
    id?:number; // ? => hace que sea opcional
    title:string;
    url:string;
}
```

_galeria.component.ts:_
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

_app.component.html:_
```html
<select (change) = "selectCity($event)">
    <option value="">Selecciona una ciudad</option>
    <option value="madrid">Madrid</option>
    <option value="paris">Paris</option>
    <option value="londres">Londres</option>
</select>
<h3>Ciudad escogida: {{ciudadSeleccionada}}</h3>
```

_app.component.ts:_
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

_galeria.component.html:_
```html
<figure class="galeria">
    <img [src]="arrImagenes[currentImg].url" [alt]="arrImagenes[currentImg].title">
    <figcaption>{{arrImagenes[currentImg].title}}</figcaption>
    <button (click) = "prev()">Anterior</button>
    <button (click) = "next()">Siguiente</button>
</figure>
```

_iphoto.interface.ts:_
```typescript
export interface IPhoto {
    id?:number; // ? => hace que sea opcional
    title:string;
    url:string;
}
```

_galeria.component.ts:_
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
> _app.component.html:_
> ```html
> <section>
>     <app-ciclo-vida [miInput] = "edad"></app-ciclo-vida>
> </section>
> ```
> 
> _app.component.ts:_
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
> _ciclo-vida.component.ts:_
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

_app.component.html:_
```HTML
<app-mi-component [miPropiedadVariable] = "miVariable1" miPropiedadEstatica = "valorConcreto"></app-mi-component>
```
_app.component.ts:_
```typescript
import { MiComponent } from './components/mi-component/mi-component.component';
// {...}
export class AppComponent {
  miVariable1: number = 0;
  valorConcreto: string = "";
}
```
_mi.component.ts:_
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

Hay varios tipos de signals distintos

### input()
Se usa para recibir valores de inputs de un componente. Son signals de lectura, no se pueden modificar.

_app.component.html:_
```html
<section>
    <app-hijo [contador1] = "numero"></app-ciclo-vida>
</section>
```

_app.component.ts:_
```typescript
// {...}
export class AppComponent {
  numero: number = 0
}
```

_hijo.component.html:_
```html
<p> {{ contador1() }}</p>
```

_hijo.component.ts:_
```typescript
// {...}
export class HijoComponent {
  // Son parecidos
  // @Input() contador1: signal <number> (0);
  contador1 = input<number>(); // Solo lectura, "Read Only Signal"
}
```

- ```numero``` es una variable que tiene que estar en el ```app.component.ts```.
- ```contador1``` es un input solo de lectura. Cogerá el valor de la variable ```numero``` del componente principal (al inicio) y no se podrá modificar.

### model()
Son signals de lectura y de escritura (como un WriteableSignal). Es un signal de dos vías, lo que significa que se puede usar tanto para recibir un valor como para modificarlo desde el componente hijo.

Características:
- Es bidireccional (two-way data binding)
- Se usa comúnmente en formularios o componentes controlados.
- Permite cambiar el estado local y reflejarlo en el componente padre.

_app.component.html:_
```html
<section>
    <app-hijo [(contador2)] = "numero"></app-ciclo-vida>
</section>
```

_app.component.ts:_
```typescript
// {...}
export class AppComponent {
  numero: number = 0
}
```

_hijo.component.html:_
```html
<p> {{ contador2() }}</p>
```

_hijo.component.ts:_
```typescript
// {...}
export class HijoComponent {
  contador2 = model<number>(0); // // Lectura y escritura, bidireccional
}
```

```contador2``` se actualizará automáticamente en el padre cuando cambie en el hijo.

#### Diferencias entre WriteableSignal<T> y model<T>()

```typescript
cont1: WriteableSignal<number> = signal(0);
cont2 = model<number>(0);
```

|Característica|WriteableSignal (cont1)|model() (cont2)|
| ----------- | ----------- | ----------- |
|¿Mutable?|✅ Sí (set(), update(), mutate())|✅ Sí (set(), update(), mutate())|
|¿Requiere valor inicial?|✅ Sí, obligatorio|❌ No, puede estar vacío|
|¿Se puede enlazar a un input?|❌ No directamente|✅ Sí (permite two-way binding)|
|Uso principal|Manejar estado interno del componente|Comunicar estado entre padre e hijo|
|Se usa con input()?|❌ No|✅ Sí, es un @Input() reactivo|
|Ejemplo de uso|contador = signal(0);|contador = model<number>();|

- Un **WriteableSignal** se usa para manejar estado dentro del mismo componente. No tiene relación con el componente padre.
  - No tiene relación con otros componentes.
  - Se usa dentro de un solo componente.
  - No puede recibir valores desde el padre.

- **model()** es un @Input() reactivo, lo que significa que el padre debe proporcionar el valor y puede actualizarlo.
  - Es equivalente a @Input() en Angular.
  - Requiere que el padre pase un valor.
  - Se puede modificar desde el hijo, y el cambio se refleja en el padre automáticamente.

¿Cuándo utilizar cada uno?
|Situación|¿Usar WriteableSignal?|¿Usar model?
| ----------- | ----------- | ----------- |
|Estado interno del componente|✅ Sí|❌ No|
|Comunicación padre → hijo (@Input())|❌ No|✅ Sí|
|Comunicación hijo → padre ([(model)])|❌ No|✅ Sí|

- Cuando el estado solo le pertenece al componente => WriteableSignal
- Cuando el padre debe controlar el estado del hijo => model()


### computed()
Se modifica asociado a la modificación de otro signal. Para ello necesitamos que el signal ```cont1``` sea mutable (WritableSignal). Se actualiza automáticamente

```typescript
// {...}
export class HijoComponent {
  cont1: WriteableSignal<number> = signal(0);
  cont2 = computed(() =>  this.cont() * 2)
}
```

```cont2``` solo se ejecuta cuando el ```cont1``` se modifica / ```cont2``` solo se modifica cuando el ```cont1``` se modifica


### effect()
Se ejecuta en el contructor. Solo se ejecuta para las variables que metamos dentro de la función.

```typescript
// {...}
export class HijoComponent {
  cont1: WriteableSignal<number> = signal(0);
  cont2 = computed(() =>  this.cont() * 2)

  constructor(){
    effect(() => {
      console.log(`El valor de cont1 es ${cont1}`)
    })
  }
}
```
```effect()``` solo se lanzará para el ```cont1``` porque es el que está dentro de una función. No sacará nada para el ```cont2``` porque no lo tiene metido dentro del ```effect()```.

### Funciones de los signals

#### .required()
Cuando usamos input() en un componente hijo, el valor que recibe puede ser opcional.
Sin embargo, si queremos que el input sea obligatorio (es decir, que Angular lance un error si el padre no lo proporciona), podemos usar required().

Ejemplo sin required() (opcional):

```typescript
// {...}
export class HijoComponent {
  nombre = input<string>(); // ❌ Si el padre no lo pasa, será undefined
}
```
```html
<app-hijo></app-hijo> <!-- No hay error si no pasamos "nombre" -->
```
> [!WARNING]
> Si el padre no pasa el ```nombre```, el componente hijo mostrará ```undefined``` sin advertencias.

Si queremos forzar que el padre pase un valor, usamos ```required()```:
```typescript
// {...}
export class HijoComponent {
  nombre = input<string>().required(); // 🔥 Requiere que el padre pase un valor
}
```
```html
<app-hijo nombre="Angular"></app-hijo> <!-- ✅ Correcto -->
<app-hijo></app-hijo> <!-- ❌ ERROR en tiempo de ejecución -->
```
Si el padre no pasa ```nombre```, Angular lanzará un error indicando que falta un valor obligatorio.

> [!NOTE]
> Si el signal es de tipo model hay que ponerle ```.required()``` obligatoriamente (se le pasa por variable).

## 12. Servicios
