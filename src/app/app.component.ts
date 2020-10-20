import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/angular';

const TODAY_STR = new Date().toISOString().replace(/T.*$/, '');
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: '1',
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: '2',
    title: 'Timed event',
    start: TODAY_STR + 'T11:00:00'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialEvents: INITIAL_EVENTS
    // dateClick: this.handleDateClick.bind(this),
  };
  isCollapsed = false;
  handleDateClick(arg) {
    alert(arg);
    console.log(arg);
  }
}
