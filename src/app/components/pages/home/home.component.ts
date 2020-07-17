import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts:{
    id: string;
    titlePost: string;
    segmentPost: string;
    yearPost: string;
    pricePost: string;
    contentPost: string;
    imagePost: string;
}[]=[
  {
    id:'1',
    titlePost: 'Etios',
    segmentPost:'autos',
    yearPost:'2019',
    pricePost:'$815.900',
    contentPost:'Rendimiento de combustible: combinado 9.1 l/100 km (ciudad 11, ruta 7.4)',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/A0EDFC67-2C7A-4783-AC32-39E62E81B714.png'
  },
  {
    id:'2',
    titlePost: 'Yaris',
    segmentPost:'autos',
    yearPost:'2020',
    pricePost:'$1.015.000',
    contentPost:'Rendimiento de combustible: combinado 5.9-6.2 l/100 km (ciudad 7.2-7.9, ruta 5.1)',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/35011CE1-4F2B-4560-854A-2362B3C8A96A.png'
  },
  {
    id:'3',
    titlePost: 'Corolla',
    segmentPost:'autos',
    yearPost:'2018',
    pricePost:'$1.415.000',
    contentPost:'Rendimiento de combustible: combinado 8.8 l/100 km (ciudad 10, ruta 7.7)',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/692EA715-94F6-40CB-85AE-BC29AC4A7846.png'
  },
  {
    id:'4',
    titlePost: 'Prius',
    segmentPost:'hibrido',
    yearPost:'2019',
    pricePost:'$2.815.000',
    contentPost:'en ciudad logramos 17.5 km/l,por más de 700 km en carretera, logramos unos enormes 24.5 km/l.',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/1FF2050C-239A-4EFC-BBA9-4C1AB1241352.png'
  },
  {
    id:'5',
    titlePost: 'Camry',
    segmentPost:'mediano',
    yearPost:'2019',
    pricePost:'$3.715.000',
    contentPost:'Rendimiento de combustible combinado 8.6-9 l/100 km ciudad 12-13, ruta 6.7-6.8',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/D9E1EB9F-B401-4C9D-BFA8-9F427D3107B7.png'
  },
  {
    id:'6',
    titlePost: 'Toyota 86',
    segmentPost:'autos',
    yearPost:'2019',
    pricePost:'$3.815.000',
    contentPost:'Rendimiento Consumo de combustible urbano	9.6 l/100 km 24.5 US mpg 29.43 UK mpg',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/EA0D333E-617F-4C6D-9E04-4A6E03A9B66A.png'
  },
  {
    id:'7',
    titlePost: 'Innova',
    segmentPost:'srv',
    yearPost:'2020',
    pricePost:'$2.975.000',
    contentPost:'Rendimiento de combustible: combinado 10 l/100 km (ciudad 13, ruta 8.6)',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/81660CD1-0C33-4F05-A668-8E46142688B1.png'
  },
  {
    id:'8',
    titlePost: 'SW4',
    segmentPost:'srv',
    yearPost:'2019',
    pricePost:'$3.315.000',
    contentPost:'881,7 kilómetros con 71,5 litros de combustible. De mantenerse el consumo',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/62B5A80D-3981-40A7-94AD-84EEA745A367.png'
  },
  {
    id:'9',
    titlePost: 'RAV4',
    segmentPost:'autos',
    yearPost:'2019',
    pricePost:'$2.815.000',
    contentPost:'El consumo de gasolina es bueno, ofreciendo desde 25 millas por galón en ciudad y 33 MPG en carretera.',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/1A397EEE-1CAB-4C51-8FDA-51F3AFBDE5E9.png'
  },
  {
    id:'10',
    titlePost: 'Land Cruiser Prado',
    segmentPost:'cruiser',
    yearPost:'2017',
    pricePost:'$8.915.000',
    contentPost:'Rendimiento de combustible: combinado 14 l/100 km (ciudad 18, ruta 11)',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/2D99A1DE-8DA9-46FF-AC03-A50595D4A533.png'
  },
  {
    id:'11',
    titlePost: 'Land Cruiser 200',
    segmentPost:'cruiser',
    yearPost:'2018',
    pricePost:'$7.415.000',
    contentPost:'Rendimiento de combustible combinado 9.9 l/100 km ciudad 12, ruta 8.9',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/8272810C-A664-4071-9304-88C468F2CA73.png'
  },
  {
    id:'12',
    titlePost: 'Hilux',
    segmentPost:'pick up',
    yearPost:'2019',
    pricePost:'$1.815.000',
    contentPost:'Rendimiento efectivo de combustible entre 7 y 7.5 kilometros por litro. Segun rinde 9 en ciudad y 11 012 en carretera',
    imagePost:'https://cdn.zeplin.io/5e9475ca3501187a87c47bd3/assets/16D677C7-76D5-445C-AEDD-CBAF239615C4.png'
  }

]

  constructor() { }

  selectedValue: string;

  ngOnInit() {
  }

}
