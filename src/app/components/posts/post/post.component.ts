import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: {
    id: string;
    titlePost: string;
    segmentPost:string;
    contentPost: string;
    imagePost: string;
    descriptionPost: string;
    image1Post: string;
    description1Post: string;
    image2Post: string;
}={
  id: '1',
    titlePost: 'Etios Hatchback  X M/T ',
    segmentPost:'Seguridad Etios incorpora control de estabilidad (VSC) y control de tracción (TRC) en todas sus versiones, que aportan tranquilidad y seguridad a todos los pasajeros',
    contentPost: 'Tu primer Toyota, mejor que nunca',
    imagePost: 'https://www.toyota.com.ar/storage/contents/WJWeowFrB7.jpg',
    descriptionPost: 'Su diseño exterior renovado con llantas de aleación diamantadas, faros oscurecidos y spoiler trasero le dan una impronta más agresiva y robusta.',
    image1Post: 'https://www.toyota.com.ar/storage/contents/XjE0zXhTHL.jpg',
    description1Post: 'El motor con sistema Dual VVT-i (doble sincronización variable de válvulas) asociados a transmisiones manual de 6 marchas, y automática de 4, aseguran excelente performance dinámica y bajo consumo de combustible.',
    image2Post: 'https://www.toyota.com.ar/storage/contents/GINndapLdB.jpg',
}
    


  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    this.post.id = this.route.snapshot.params.id;
    
  }

}
