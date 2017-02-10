import React from 'react'
import ReactDOM from 'react-dom'
import BookingCalendar from 'react-booking-calendar';
import TimeComponent from './components/time';

import style from './style.scss'

const bookings = [
  new Date(2017, 1, 1),
  new Date(2017, 1, 2),
  new Date(2017, 1, 3),
  new Date(2017, 1, 9),
  new Date(2017, 1, 10),
  new Date(2017, 1, 11),
  new Date(2017, 1, 12),
];

const MyBookingCalendar = () => (
  <BookingCalendar bookings={bookings} clickable={true} />
);

export default class TemplateModule extends React.Component {

  render() {
    return <div className={style.bookingModule}>
      <div className={style.col1}>
        <MyBookingCalendar style={{ "max-width": "50%" }}></MyBookingCalendar>
      </div>
      <div className={style.col2}>
        <TimeComponent></TimeComponent>
      </div>
    </div>
  }
}
