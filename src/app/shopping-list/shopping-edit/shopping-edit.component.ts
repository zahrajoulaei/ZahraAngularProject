import {Component, ElementRef, EventEmitter, ViewChild, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
@ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;
@Output() ingredientAdded= new EventEmitter<{Ingredient}>(); //you can listen to Output from outside
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // @ts-ignore
    this.ingredientAdded.emit( newIngredient );
  }
}
