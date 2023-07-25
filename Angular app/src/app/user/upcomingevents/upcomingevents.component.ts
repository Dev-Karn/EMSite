import { Component,EventEmitter,Input,Output } from '@angular/core';
import { EventsService } from 'src/app/services/api/events.service';

@Component({
  selector: 'app-upcomingevents',
  templateUrl: './upcomingevents.component.html',
  styleUrls: ['./upcomingevents.component.css']
})
export class UpcomingeventsComponent {

  constructor(private eventService : EventsService) {}

  userDetails : any;

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('user'));
    this.getUpcomingEvent();
  }


  @Input()
  upcomingevent : any;
  @Output()
  changeevent =new EventEmitter<any>();
  cancelEvent(bookingId: string,index:number) {
    console.log(bookingId,index);
    console.log(this.upcomingevent[index]);
    let event=this.upcomingevent[index];
    event.paymentStatus="Refundstatus";
    let upcomingeventcopy=this.upcomingevent;
    upcomingeventcopy[index]=event;
    this.changeevent.emit(upcomingeventcopy);

    // Logic to cancel the event with the provided bookingId
    // You can remove the cancelled event from the `upcomingBookings` array or perform any other desired action
  }


  getUpcomingEvent() {
    this.eventService.getEventsByUserId(this.userDetails.id).subscribe(
      {
        next : (response) => {
          console.log(response);
        },
        error : (err) => {
          console.log(err);
        }
      }
    )
  }


}
