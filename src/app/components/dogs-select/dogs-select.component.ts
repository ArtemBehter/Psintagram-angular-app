import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../dogs.service';
import { Dog } from '../../dog';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dogs-select',
  templateUrl: './dogs-select.component.html',
  styleUrls: ['./dogs-select.component.scss']
})
export class DogsSelectComponent implements OnInit {
  dogs!: Observable<Dog[]>;
  dog!: Dog;
  constructor(private dogsService: DogsService) {}
  stringifiedData: any;

  ngOnInit(): void {
    this.dogs = this.dogsService.getDogs();
  }
  get dogsSelection() {
    return this.dog;
  }

  set dogsSelection(value) {
    this.dog = value;
    this.dogsService.setDog(this.dog);
  }
}
