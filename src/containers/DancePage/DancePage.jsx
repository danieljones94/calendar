import React, { Component } from "react";
import Dance from "../../Components/Dance";

class DancePage extends Component {
  state = { events: [] };

  componentDidMount = () => {
    const fetchPromise = fetch(
      "https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events?key=AIzaSyAfRKHl1zzNeD-D89vcVf7n1Nt3PvB31Ao"
    );
    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({ events: events.items });
      });
  };

  checkitem = () => {
    return console.log(this.state.events);
  };

  render() {
    return (
      <>
        <button onClick={this.checkitem}>hello</button>
        {this.state.events.map((item, id) => (
          <Dance dance={item} key={id} />
        ))}
      </>
    );
  }
}

export default DancePage;
