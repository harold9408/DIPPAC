import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rfn004',
  templateUrl: './rfn004.component.html',
  styleUrls: ['./rfn004.component.css']
})
export class RFN004Component implements OnInit {
  
  audios: any =[
    {codigo:"1",
    url: "../../assets/songs/Carro.mp3"},
    {codigo:"2",
    url : "../../assets/songs/Casa.mp3"}
  ];

  constructor() { }

  ngOnInit(): void {}

  audioPlay(urlAudio){
    var audio  =  new Audio(urlAudio);
    audio.play();
  }

  reproSiguiAudio(){

    
  }



}
