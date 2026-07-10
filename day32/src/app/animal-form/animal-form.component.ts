import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { animal } from '../models/animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {


  form: animal = {
    id: 0,
    name: '',
    email: '',
    lifespan: 0
  };




  onSubmit(_t4: NgForm) {
    console.log('Animal entered: ', _t4.value);
    }

  OnReset(_t7: NgForm) {
    _t7.reset();
    }

}
