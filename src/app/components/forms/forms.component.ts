import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  formGroup!: FormGroup;
  results = [0];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: ['', Validators.required],
      showClosed: false,
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onCleanForm() {
    this.formGroup.reset();
  }
}
