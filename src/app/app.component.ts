import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Predictions from '@aws-amplify/predictions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public createForm: FormGroup;
  resultMessage = "Pick a selfie or image to identify.";
  showResult = false;
  keanuFound = false;
  celebrities = [];

  @ViewChild('fileInput', { static: false })
  fileInput: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      'file': [''],
    });
  }

  findKeanu(event) {
    this.showResult = false;
    this.celebrities = [];
    this.resultMessage = "Looking for Keanu..."
    const { target: { files } } = event;
    if (files.length===0) {
      return;
    }
    const file = files[0];
    Predictions.identify({
      entities: {
        source: {
          file,
        },
        celebrityDetection: true
      }
    }).then(result => {
      console.log(result);
      if (result.entities.length>0) {
        this.celebrities = [];
        let keanuFound = result.entities.filter( (entity) => {
          //@ts-ignore
          const {metadata: {id} = { } } = entity;
          if (id) {
            this.celebrities.push(entity);
          }
          return id == "32wO2f3"; // Keanu Reeves
        })
        if (keanuFound.length>0) {
          this.showResult = true;
          this.keanuFound = true;
          this.resultMessage = `Congratulations! Keanu found!`;
        } else {
          this.showResult = true;
          this.keanuFound = false;
          this.resultMessage = `Nope! Keanu is not here! Keep trying!`;
        }
      } else {
        this.showResult = true;
        this.keanuFound = false;
        this.resultMessage = `Nope! Keanu is not here! Keep trying!`;
      }
    })
    .catch(err => { 
      console.log(err);
      this.resultMessage = "There was an error. Try again later."
    })
    .finally(() => {
      // reset input file
      this.fileInput.nativeElement.value = "";
    })
  }

}
