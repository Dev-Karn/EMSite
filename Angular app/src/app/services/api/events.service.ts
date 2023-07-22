import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRESTService } from './appRESTService';
import { Event } from '../../models/event';
import { catchError, tap } from 'rxjs';

// interface EventInput {
//   Name: string;
//   Description: string;
//   City: string;
//   State: string;
//   Zipcode: number;
//   StartDate: string;
//   EndDate: string;
//   Capacity: number;
//   EventType: string;
//   Price: number;
//   OrganizerId: number;
// }


interface EventInput {
    name:string;
    description:string;
    location:string;
    startDate:string;
    endDate:string;
    speakerName:string;
    speakerExpertise:string;
    speakerAffiliations:string;
    speakerAccomplishments:string;
    speakerBiography:string;
    price:number;
    totalTickets:number;
    imgUrl:string;
}

@Injectable({
  providedIn: 'root',
})
export class EventsService extends AppRESTService {
  override API_URL: string;
  BASE_URL: string = 'http://localhost:8080/event';

  constructor(private http: HttpClient) {
    super();
  }
  getEvents() {
    return this.http
      .get<Event[]>(this.BASE_URL);
  }

  
 getEventById(id:number){
      return this.http.get<Event>(this.BASE_URL+'/'+id)
 }

  addEvent(input: EventInput) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .post<string>(this.BASE_URL, input, {
        headers,
        responseType: 'text' as 'json',
      })
      .subscribe(
        (data) => {
          console.log(data); 
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

