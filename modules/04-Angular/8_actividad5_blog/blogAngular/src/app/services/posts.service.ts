import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private arrPosts: IPost[] = [
    {
      id: 1,
      title: 'First Post',
      url: 'https://www.grecia.info/es/wp-content/uploads/sites/49/creta-grecia-thumbnail.jpg',
      author: 'Author One',
      date: '2023-01-01',
      body: 'This <strong>is the body</strong> of the first post.'
    },
    {
      id: 2,
      title: 'Second Post',
      url: 'https://www.grecia.info/es/wp-content/uploads/sites/49/creta-grecia-thumbnail.jpg',
      author: 'Author Two',
      date: '2023-02-01',
      body: 'This is the body of the second post.'
    },
    {
      id: 3,
      title: 'Third Post',
      url: 'https://www.grecia.info/es/wp-content/uploads/sites/49/creta-grecia-thumbnail.jpg',
      author: 'Author Three',
      date: '2023-03-01',
      body: 'This is the body of the third post.'
    }
  ];
  private id: number = 4;


  getAll(): IPost[] {
    return this.arrPosts;
  }

  insert(newPost: IPost): string {
    newPost.id = this.id;
    this.arrPosts.push(newPost);
    this.id++;
    console.log(this.arrPosts)
    return "Post insertado con exito"
  }
}
