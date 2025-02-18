import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() defaultPosts: IPost[] = [];
  posts: IPost[] = [];
  borderBottom: string = '1px solid #cecece';

  ngOnInit() {
    this.posts = this.defaultPosts;
  }

  searchPosts(event: any) {
    console.log('this.posts', this.posts);
    this.posts = this.defaultPosts;
    console.log('this.posts', this.posts);
    const inputValue:string = event.target.value;
    this.posts = this.defaultPosts.filter(post => post.body.toLowerCase().includes(inputValue.toLowerCase()));

    console.log('event', event);
    console.log('event.target.value', event.target.value);
  }

  ngOnChanges() {
    this.posts = this.defaultPosts;
  }
}
