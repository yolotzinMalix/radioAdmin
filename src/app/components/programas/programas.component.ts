import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent implements OnInit {

  imgForm = 'https://images.complex.com/complex/images/c_fill,g_center,h_640,w_640/fl_lossy,q_70/cdg15oqoriupp1okgdtw/best-music-podcasts-lead';
  constructor() {
  }

  ngOnInit(): void {

  }


  // reciviendo los datos del form
  guardar(form:any){
    if(form.valid){
      console.log(form.value);
    }else {
      alert('Verifica los datos del formulario')
    }
  }

}
