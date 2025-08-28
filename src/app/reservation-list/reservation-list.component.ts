import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Reservation } from '../Models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {

  // object initialization
  reservations: Reservation[] = []
  // service dependency injection
  constructor(private reservationService: ReservationService) { }

  // getting the result by calling the subscribe event
  ngOnInit(): void {
    this.reservationService.getReservations()
      .subscribe(reservations => { this.reservations = reservations });
  }

  // delete method
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete request processed")
    });
  }
}
