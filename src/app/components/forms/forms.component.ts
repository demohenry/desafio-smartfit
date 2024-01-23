import { GetUnitsService } from './../../services/get-units.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  formGroup!: FormGroup;
  results: Location[] = [];
  filteredResults: Location[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: ['', Validators.required],
      showClosed: true,
    });

    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit() {
    this.filteredResults = !this.formGroup.value.showClosed
      ? this.results.filter((location) => location.opened == true)
      : this.results;
  }

  // onSubmit com early return
  // onSubmit() {
  //   if (this.formGroup.value.showClosed) {
  //     this.filteredResults = this.results;
  //     return;
  //   }
  //   this.filteredResults = this.results.filter(
  //     (location) => location.opened === true
  //   );
  // }

  onCleanForm() {
    this.formGroup.reset();
  }
}
