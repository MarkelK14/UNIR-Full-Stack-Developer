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

  ngOnInit() {
    console.log('posts', this.posts);
  }
}
