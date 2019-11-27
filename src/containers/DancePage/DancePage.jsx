import React, { Component } from "react";
import Dance from "../../Components/Dance";
import Header from "../../Components/Header";
import { styles } from "ansi-colors";

class DancePage extends Component {
  state = { events: [], eventType: "", filteredEvents: [], searchValue: "" };

  componentDidMount = () => {
    const fetchPromise = fetch(
      "https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events?key=AIzaSyAfRKHl1zzNeD-D89vcVf7n1Nt3PvB31Ao"
    );
    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({ events: events.items, filteredEvents: events.items });
      });
  };

  checkitem = () => {
    return console.log(this.state.events);
  };

  searchType = event => {
    const searchValue = event.target.value;
    this.setState({ searchValue }, this.filterEvents);
  };

  filterEvents = searchText => {
    const filteredEvents = this.state.filteredEvents.filter(event => {
      if (
        event.summary.toLowerCase().includes("dance") ||
        event.summary.toLowerCase().includes("jump") ||
        event.summary.toLowerCase().includes("shea") ||
        event.summary.toLowerCase().includes("barry") ||
        event.summary.toLowerCase().includes()
      ) {
        return event;
      }
      return false;
    });
    this.setState({ filteredEvents });
  };

  render() {
    console.log(this.state.events);
    return (
      <section>
        <Header
          className={styles.header}
          search={this.searchType}
          setSearch={this.state.searchValue}
          filter={this.filterEvents}
        />
        {this.state.filteredEvents.map((item, id) => (
          <Dance dance={item} key={id} />
        ))}
      </section>
    );
  }
}

export default DancePage;
