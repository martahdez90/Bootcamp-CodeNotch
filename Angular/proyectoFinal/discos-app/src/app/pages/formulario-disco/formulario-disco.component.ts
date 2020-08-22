import { Component, OnInit } from '@angular/core';
import { Disco } from '../../models/disco';
import { DiscoService} from '../../shared/disco.service'

@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css']
})
  
export class FormularioDiscoComponent implements OnInit {
  public disco: Disco;
  public hide = false;
  public discos: object;

  constructor(private apiService: DiscoService) { }

  send(name: string, singer: string, yearPublication: number) {
    let newDisco: Disco = new Disco(null, name, singer, yearPublication);
    this.apiService.postDisco(newDisco).subscribe((data) => {
      console.log(data);
    })
  }

  edit(name: string, singer: string, yearPublication: number, id: number) {
    let newDisco: Disco = new Disco(id, name, singer, yearPublication)
    this.apiService.putDisco(newDisco).subscribe((data) => {
      console.log(data);
    })
  }

  delete(id: number) {
    this.apiService.deleteDisco(id).subscribe((data) => {
      console.log(data)
    })
  }
  show(id: number) {
    this.apiService.getDisco(id).subscribe((data) => {
      this.disco = data[0]
    })
  }
  showAll() {
    this.hide = true;
    this.apiService.getDiscos().subscribe((data) => {
      this.discos = data;
      console.log(this.discos)
      /* let i = 2
      console.log(typeof(data[0]))
      let discos = data
      this.disco = data[i];
      console.log(this.disco.singer)
      console.log(this.disco); */
    })
  }

ngOnInit(): void {
  }

}


  
  

