import { Component, OnInit } from '@angular/core';
import { Disco } from '../../models/disco';
import { DiscoService } from '../../shared/service-disco.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public disco = new Disco;
  public discos: object;

  constructor(private apiService: DiscoService) {
    this.disco
  }
  send(name: string, singer: string, yearPublication: number) {
    let newDisco: Disco = new Disco();
    this.apiService.postDisco(newDisco).subscribe((data) => {
      console.log(data);
    })
  }

  edit(name: string, singer: string, yearPublication: number, id: number) {
    let newDisco: Disco = new Disco()
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

  onSubmit(form) {
    console.log(form.value);
    this.apiService.postDisco(this.disco).subscribe((data) => {
      console.log(data); 
    })
  }

  ngOnInit(): void {
    }

}
