import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  rForm: FormGroup;
  username: string;
  comment: string;

  constructor(private form: FormBuilder) {
    this.rForm = form.group({
      'username': [null, Validators.required],
      'comment': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    })
  }

  addComment(post){
    this.username = post.username;
    this.comment = post.comment;

    alert(this.username + " : " + this.comment);
  }

  ngOnInit() {
  }

}
