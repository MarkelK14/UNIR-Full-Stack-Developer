import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-noticia',
  imports: [],
  templateUrl: './mostrar-noticia.component.html',
  styleUrl: './mostrar-noticia.component.css'
})
export class MostrarNoticiaComponent {
  titulo: string = "Elon Musk Intenta Cambiar el Logo de X en Vivo y Bloquea su Propia Cuenta";
  categoria: string = "Tecnología";
  imagen: string = "https://noticiasdemexico.com.mx/wp-content/uploads/2025/02/x-frandroid-x-elon-musk.jpg";
  cuerpo: string = "Elon Musk, siempre en busca de innovaciones, decidió cambiar el logo de X (antes Twitter) durante una transmisión en vivo en la plataforma Twitch, pero terminó bloqueando accidentalmente su propia cuenta en el proceso. 'Voy a hacer esto personalmente, es fácil', dijo con confianza, antes de entrar a la configuración avanzada del sitio. Sin embargo, tras varios clics erróneos y una confusa secuencia de comandos, la pantalla mostró: 'Acceso denegado. Contacte al administrador'. El problema: él era el administrador. Durante varios minutos, los espectadores vieron a Musk teclear frenéticamente, fruncir el ceño y murmurar: 'Esto no puede estar pasando'. Finalmente, tuvo que llamar a un ingeniero de X para recuperar su cuenta. El incidente desató memes de Musk hackeándose a sí mismo, mientras él lo tomaba con humor: 'Bueno, al menos no tuiteé algo raro mientras dormía... esta vez'.";
  fecha: string = "2021-01-01";
}
