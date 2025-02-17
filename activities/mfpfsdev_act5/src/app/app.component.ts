import { Component } from "@angular/core";
import { INoticia } from "./interfaces/inoticia.interface";
import { ListadoNoticiasComponent } from "./components/listado-noticias/listado-noticias.component";
import { FormNoticiaComponent } from "./components/form-noticia/form-noticia.component";
import { MostrarNoticiaComponent } from "./components/mostrar-noticia/mostrar-noticia.component";

@Component({
  selector: "app-root",
  imports: [ListadoNoticiasComponent, FormNoticiaComponent, MostrarNoticiaComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  // arrNoticias: INoticia[] = [];
  arrNoticias: INoticia[] = [
    {
      "titulo": "Elon Musk Intenta Cambiar el Logo de X en Vivo y Bloquea su Propia Cuenta",
      "categoria": "Tecnología",
      "imagen": "https://noticiasdemexico.com.mx/wp-content/uploads/2025/02/x-frandroid-x-elon-musk.jpg",
      "cuerpo": "Elon Musk, siempre en busca de innovaciones, decidió cambiar el logo de X (antes Twitter) durante una transmisión en vivo en la plataforma Twitch, pero terminó bloqueando accidentalmente su propia cuenta en el proceso. 'Voy a hacer esto personalmente, es fácil', dijo con confianza, antes de entrar a la configuración avanzada del sitio. Sin embargo, tras varios clics erróneos y una confusa secuencia de comandos, la pantalla mostró: 'Acceso denegado. Contacte al administrador'. El problema: él era el administrador. Durante varios minutos, los espectadores vieron a Musk teclear frenéticamente, fruncir el ceño y murmurar: 'Esto no puede estar pasando'. Finalmente, tuvo que llamar a un ingeniero de X para recuperar su cuenta. El incidente desató memes de Musk hackeándose a sí mismo, mientras él lo tomaba con humor: 'Bueno, al menos no tuiteé algo raro mientras dormía... esta vez'.",
      "fecha": "2021-01-01"
    },
    {
      "titulo": "Zuckerberg Olvida la Contraseña de Administrador de Meta y Llama a Soporte",
      "categoria": "Tecnología",
      "imagen": "https://elceo.com/wp-content/uploads/2023/12/mark_meta_.jpg",
      "cuerpo": "Mark Zuckerberg, la única persona con acceso a la contraseña de administrador de Meta, olvidó su clave y bloqueó el sistema tras tres intentos fallidos. Sin otra opción, tuvo que llamar al soporte técnico de su propia empresa. Al principio, los empleados pensaron que era una broma, hasta que él, visiblemente frustrado, pidió ayuda en serio. Tras un riguroso proceso de verificación, logró restablecer el acceso. La anécdota se filtró y desató memes imaginándolo resolviendo captchas o respondiendo su propia pregunta de seguridad. Meta no ha confirmado ni desmentido el incidente.",
      "fecha": "2021-01-02"
    },
    {
      "titulo": "Jeff Bezos compra AliExpress: 'Si no puedes con tu enemigo, únete a él'",
      "categoria": "Tecnología",
      "imagen": "https://content.imageresizer.com/images/memes/Amazons-Jeff-Bezos-meme-4.jpg",
      "cuerpo": "En un movimiento inesperado, Jeff Bezos ha anunciado la compra de AliExpress, la famosa plataforma china de comercio electrónico. Según fuentes cercanas, la decisión se basó en una estrategia simple pero efectiva: rendirse ante los precios ridículamente bajos. 'Intentamos competir, pero vender un dron, tres camisetas y un juego de herramientas por 5 dólares con envío gratis simplemente es imposible', habría dicho Bezos en una reunión interna. El magnate planea fusionar Amazon y AliExpress en un nuevo modelo de negocio llamado 'AliZon', donde los envíos tardarán de un día a tres meses, dependiendo de cuán barato seas. Los compradores están divididos: algunos celebran la idea de recibir paquetes sorpresa meses después de olvidarlos, mientras que otros temen que Prime ahora incluya un curso de paciencia. Por su parte, Bezos aclaró: 'Si no puedes vencer sus precios… al menos cómpralos y súbeles un poco'.",
      "fecha": "2021-01-03"
    },
    {
      "titulo": "Donald Trump Anuncia su Propia Red Social y Se Banea a Sí Mismo",
      "categoria": "Política",
      "imagen": "https://i.abcnewsfe.com/a/584b02f5-25d2-49f4-bf19-ccb7cd3903be/donald-trump-7-gty-gmh-240415_1713194275665_hpMain_16x9.jpg?w=1600",
      "cuerpo": "Donald Trump lanzó 'TrumpNet', su nueva red social, prometiendo 'libertad de expresión total'. Sin embargo, tras un acalorado debate con él mismo en los comentarios, fue baneado por violar las normas de la plataforma. 'Esto es un escándalo', declaró en una conferencia de prensa, olvidando que él mismo escribió las reglas.",
      "fecha": "2025-02-14"
    },
    {
      "titulo": "Celebración Histórica del Athletic Club con la Gabarra tras la Copa del Rey",
      "categoria": "Deportes",
      "imagen": "https://www.noradoa.com/wordpress/wp-content/themes/yootheme/cache/b7/gabarra-athletic-celebracion-copa-rey-2024-noradoa-10-b7545435.jpeg",
      "cuerpo": "El Athletic Club celebró su reciente victoria en la Copa del Rey de una forma histórica: ¡con la Gabarra! Miles de aficionados se reunieron para ver cómo los campeones recorrían la ría de Bilbao, en lo que muchos consideraron la mejor fiesta deportiva de la historia del club. La gabarra, adornada con banderas y cánticos, se convirtió en un símbolo de alegría y unidad para los bilbaínos.",
      "fecha": "2025-04-07"
    },
    {
      "titulo": "La Final de la Europa League se Jugará en San Mamés: El Athletic Tiene Muchas Posibilidades",
      "categoria": "Deportes",
      "imagen": "https://cdn.athletic-club.eus/uploads/2024/10/20241003_cronica.jpg",
      "cuerpo": "La final de la Europa League de este año se celebrará en San Mamés, y el Athletic Club está más cerca que nunca de levantar el trofeo. Con su increíble rendimiento durante la temporada, el equipo está optimista de que, si siguen jugando así de bien, tendrán muchas posibilidades de ganar. Los aficionados ya han empezado a soñar con la fiesta en casa, ¡y la presión sobre los rivales crece cada día!",
      "fecha": "2025-05-01"
    }
  ];
  // modalSwitch: boolean = false;


  // ngOnInit(): void {
  //   // Para modificar los datos: https://jsonblob.com/1339934620019515392
  //   fetch('https://jsonblob.com/api/jsonBlob/1339934620019515392')
  //   .then ((res) => res.json())
  //   .then((data) => {
  //     this.arrNoticias = data;
  //     console.log('data', this.arrNoticias);
  //   })
  // }

  getDataForm(event: INoticia): void {
    this.arrNoticias = [...this.arrNoticias, event];
  }
  // getCloseAction(event: boolean): void {
  //   this.modalSwitch = event;
  // }




  // // ---------------------- MODAL ----------------------
  // openModal(): void{
  //   this.modalSwitch = true;
  // }
  // closeModal(): void{
  //   this.modalSwitch = false;
  // }
}
