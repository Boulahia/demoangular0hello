import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Domain/iproduct';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  data: IProduct [] = [
    {'title': 'Disuqe extrne USB', 'unitPrise': 250, 'quantity': 2},
    {'title': 'Sorie Optique', 'unitPrise': 10.5, 'quantity': 5},
    {'title': 'Ecran Led 22 Pouce', 'unitPrise': 350, 'quantity': 12},
    {'title': 'Dell 3050', 'unitPrise': 1200, 'quantity': 12}
];

  constructor() { }

  ngOnInit() {
  }

}
