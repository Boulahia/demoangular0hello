import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  data = [
    {'title': 'Disuqe extrne USB', 'unitPrise': 250, 'quantity': 2},
    {'title': 'Sorie Optique', 'unitPrise': 10.5, 'quantity': 5},
    {'title': 'Ecran Led 22 Pouce', 'unitPrise': 350, 'quantity': 12}
];

  constructor() { }

  ngOnInit() {
  }

}
