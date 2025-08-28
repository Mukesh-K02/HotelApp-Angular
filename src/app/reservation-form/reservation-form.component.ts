import { Component, OnInit } from '@angular/core';
// importing required modules in component
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../Models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  // initializing a variable with FormGroup
  reservationForm: FormGroup = new FormGroup({});

  // dependency injection 
  constructor(
    private formBuilder: FormBuilder,
    // injecting service
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    // GET by id
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservation(id).subscribe(reservation => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      // passing the values from the form using value function
      let reservation: Reservation = this.reservationForm.value;

      // fetching the id from the route
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        // PUT
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("Update request processed")
        })
      }
      else {
        // POST
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("Add request processed")
        });
      }

      /* import router module in the component
      and inject the router service*/
      this.router.navigate(['/list']);
    }
  }

}
