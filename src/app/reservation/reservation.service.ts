import { Injectable } from '@angular/core';
import { Reservation } from '../Models/reservation';

// importing the services
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // dependency injection
  constructor(private http: HttpClient) { }

  // object instance creation
  // private reservations: Reservation[] = [];

  // initializing the object using constructor
  /*constructor() {
    let savedReservations = localStorage.getItem('reservations')
    this.reservations = savedReservations ? JSON.parse(savedReservations) : []
  }*/



  //CRUD ops
  // stroing the url in a variable
  private apiUrl = 'http://localhost:3000';

  //GET 
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }
  //GET by id
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + '/reservation/' + id);
  }
  // POST
  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);
  }
  // DELETE
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/reservation/' + id);
  }
  // PUT
  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
  }
}


