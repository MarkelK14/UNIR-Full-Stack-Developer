import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() posts: IPost[] = [];
  borderBottom: string = '1px solid #cecece';

  ngOnInit() {
    console.log('posts', this.posts);
  }
}
