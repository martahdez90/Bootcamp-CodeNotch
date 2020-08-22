import { Component, OnInit } from '@angular/core';
import { Disco } from '../../models/disco';
import { DiscoService} from '../../shared/disco.service'

@Component({
  selector: 'app-vista-disco',
  templateUrl: './vista-disco.component.html',
  styleUrls: ['./vista-disco.component.css']
})
export class VistaDiscoComponent implements OnInit {
  public disco: Disco;
  public hide = false;
  public discos: object;

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


  ngOnInit(): void {
  }

}
