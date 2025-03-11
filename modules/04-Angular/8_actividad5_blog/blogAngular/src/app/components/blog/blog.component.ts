import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { PostListComponent } from "../post-list/post-list.component";

@Component({
  selector: 'app-blog',
  imports: [FormComponent, PostListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  ngOnInit() {
    //this.getData();
  }

  /*   getData(): string {
      let html = ""
      this.arrPosts.forEach(post => {
        html += `<article>
        <figure>
          <img src="${post.url}" alt="${post.title}">
        </figure>
        <h3>${post.title}</h3>
        <p>Autor: ${post.author}</p>
        <p>Fecha: ${post.date}</p>
        <div class="content">
          <p>${post.body}</p>
        </div>
      </article>`
      })
      return html;
    } */

}
