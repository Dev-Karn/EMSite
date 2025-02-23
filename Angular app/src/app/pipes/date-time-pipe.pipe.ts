import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimePipe'
})
export class DateTimePipePipe implements PipeTransform {

  transform(timestamp:string): string {
    const date = new Date(timestamp);

    const extractedDate = date.toDateString(); 
    const extractedTime = date.toTimeString().slice(0, 5); 

    // Combine the extracted date and time
    const extractedDateTime = `${extractedDate}, ${extractedTime}`;

    return extractedDateTime;

  }

}
