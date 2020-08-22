import { Component, OnInit } from '@angular/core';
import { Disco } from '../../models/disco';
import { DiscoService} from '../../shared/service-disco.service'

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  public disco = new Disco;
  public discos: object;
  public hide = false;

  constructor(private apiService: DiscoService) { }

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

    })
  }

  onSubmit(form) {
    console.log(form.value);
    this.apiService.getDisco(this.disco.id).subscribe((data) => {
      this.disco = data[0] 
    }) 
  }

  ngOnInit(): void {
  }

}
