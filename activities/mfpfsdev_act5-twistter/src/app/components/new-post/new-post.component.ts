import { Component, EventEmitter, Output } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  imports: [FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  newPost: IPost = {username: '', title: '', imageURL: '', body: '', date: ''};
  @Output() sendPost: EventEmitter<IPost> = new EventEmitter();
  currentDate: Date = new Date();

  getFormattedDate(): string {
    const day = this.currentDate.getDate().toString().padStart(2, '0');
    const month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = this.currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getPost(): void {
    console.log('currentDate', this.currentDate.toISOString);
    if (this.newPost.username === '' || this.newPost.title === '' || this.newPost.imageURL === '' || this.newPost.body === '') {
      alert('All fields are required');
      return;
    }else{
      this.newPost.date = this.getFormattedDate();
      this.sendPost.emit(this.newPost);
      this.newPost = {username: '', title: '', imageURL: '', body: '', date: ''};      
    }
  }
}
