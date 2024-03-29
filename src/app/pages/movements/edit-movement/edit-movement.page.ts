import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-movement',
  templateUrl: './edit-movement.page.html',
  styleUrls: ['./edit-movement.page.scss'],
})
export class EditMovementPage implements OnInit {
  editMovementForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editMovementForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required])
    });
  }

  updateMovement(data: any) {
    console.log(data);
  }

}
