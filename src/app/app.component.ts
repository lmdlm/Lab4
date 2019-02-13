import { Component } from '@angular/core';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { isBoolean } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 
})
export class AppComponent {
  title = 'data-binding-app';
  counter:number = 0;
  hide:boolean = true;
  

  onButtonClick()
  {
    console.log("button clicked");
    this.counter++;
  }

  onDoubleButtonClick()
  {
    if(this.hide == true)
    {
      this.hide = false;
    }
    else{
      this.hide = true;
    }
  }
}
