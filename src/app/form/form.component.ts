import { Component, OnInit, ElementRef } from '@angular/core';
import { DreamService } from '../dream.service';
const URL = 'http://127.0.0.1:5000/image/kittens';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  types: string[] = ["Kittens", "Puppies", "Flowers", "Titties", "NSFW", "Sunsets", "Selfies"];
  musicFile: any;

  constructor(
    private dreamService: DreamService,
  ) { }

  ngOnInit() {
  }

  save(){
    console.log("OMG SAVING!");
  }

  test(name: string){
    this.dreamService.upload(name)
      .then(res=>{
        console.log("OMG RESPONSE FOR GET LOC CODED");
        console.log(res);
        // this.addresses.start = res;
        // this.startAddress = res.start;
      })
      .catch(error=>{
        console.log(error);
      });
  }

}
