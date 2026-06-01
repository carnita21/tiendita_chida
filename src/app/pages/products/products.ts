import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {

  modalOpen = false;

  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 15000
    },
    {
      id: 2,
      name: 'Mouse',
      price: 350
    }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  saveProduct() {

    if (this.form.invalid) return;

    const product = {
      id: this.products.length + 1,
      name: this.form.value.name,
      price: this.form.value.price
    };

    this.products.push(product);

    this.form.reset();

    this.closeModal();
  }

}
