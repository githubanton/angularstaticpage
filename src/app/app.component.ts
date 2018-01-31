import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  showSelected = [];

  constructor(){
    for(var i = 0 ; i<7 ; i++){
      this.showSelected[i] = false;
    }
    $('#select').mouseenter(function(){
      alert('sfsf');
    });
  }
  ShowButton(id){
    if(this.showSelected[id]){
      this.showSelected[id] = false;
      $('#left'+id).attr("src","../assets/img/new/animation1.png");
    
      }
      else{
       this.showSelected[id] = true;
        $('#left'+id).attr("src","../assets/img/new/animation2.png");
      }
  }

  aaa(info){
    $('.dropdown-toggle').text($('ul #li'+info).text());

  }



}
