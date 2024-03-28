import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-movements',
  templateUrl: './new-movement.page.html',
  styleUrls: ['./new-movement.page.scss'],
})
export class NewMovementPage implements OnInit {

  newMovementForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newMovementForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required])
    });
  }

  saveMovement(data: any) {
    console.log(data);
  }

}
