import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-recipe';

  selectedFeature = 'recipe';
  
  getNavigation(feature : string)
  {
    
    this.selectedFeature = feature;
    console.log(feature);
  }
 
}
