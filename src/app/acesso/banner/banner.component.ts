import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Imagem } from './image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('banner', [
      state('escondido', style({
        opacity:0
      })),
      state('visivel', style({
        opacity:1
      })),
      transition('escondido <=> visivel', animate('2s ease-in')),
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado : string = 'visivel'

  public imagens : Imagem[] = [
    {estado:'visivel',  url: '/assets/imagens/img_1.png'},
    {estado:'escondido',  url: '/assets/imagens/img_2.png'},
    {estado:'escondido',  url: '/assets/imagens/img_3.png'},
    {estado:'escondido',  url: '/assets/imagens/img_4.png'},
    {estado:'escondido',  url: '/assets/imagens/img_5.png'}
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(), 2000)
  }

  logicaRotacao(): void {

    let idx!: number //identifica a imagem a ser exibida

    for(let i: number = 0; i <= 4; i++){
      if(this.imagens[i].estado === 'visivel'){
        this.imagens[i].estado='escondido'
        idx = i === 4 ? 0 : i+1  // se i for igual a4 recebe 0 senao recebe i + 1
        break
      }
    }
    this.imagens[idx].estado = 'visivel'
    setTimeout(() => this.logicaRotacao(), 3000)
  }


 

}
