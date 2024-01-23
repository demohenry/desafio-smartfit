import { GetUnitsService } from './../../services/get-units.service';
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

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe((data) => console.log(data));

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
