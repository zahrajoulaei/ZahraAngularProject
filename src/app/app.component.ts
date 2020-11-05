import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-project';
  showSecret = false;
    log= [];
    loadedFeature = 'recipe';

    toggleSecret(){
      this.showSecret = !this.showSecret;
      this.log.push(new Date());
    }

  onNavigate(feature: string) {
  this.loadedFeature =feature;
  }

}
