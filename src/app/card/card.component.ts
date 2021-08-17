import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title = 'My Card Title'
  text = 'My Sample Text'

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  number = 42

  array = [1, 1, 2, 3, 5, 8, 13]

  obj = {name: 'Grygoriy', info: {age: 39, job: 'FE'}}

  ngOnInit() {
    console.log('ngOnInit');

    setTimeout(() => {
      this.imgUrl = 'https://cdn.iconscout.com/icon/free/png-256/vue-282497.png'
    }, 3000)
  }

  getInfo(): string {
    return 'This is my info'
  }
}
