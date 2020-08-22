import { Component, OnInit } from '@angular/core';
import { Disk } from "../../models/disk"

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent implements OnInit {
  public disk = new Disk();
  
  constructor() { 
    this.disk
  }

  onSubmit(form) {
    console.log(form.value)
    
  }
  ngOnInit(): void {
  }

}