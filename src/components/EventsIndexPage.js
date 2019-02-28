import React from "react";
import { useGlobalState } from "./GlobalState";
import EventsList from "./EventsList";
import EventDetails from "./EventDetails";
import Progress from "./Progress";
import singlePerson from "../images/singlePerson.png";
import groupOf3 from "../images/groupOf3.png";
import UrlForm from "./UrlForm";
import ProgressBar from "./ProgressBar";

const EventsIndexPage = () => {
  const [loading, updateLoading] = useGlobalState("loading");
  const [error, updateError] = useGlobalState("error");
  const [events, updateEvents] = useGlobalState("events");

  if (loading) {
    return (
      <main className="EventsIndexPage">
        <Progress />
      </main>
    );
  }

  if (error) {
    return (
      <main className="EventsIndexPage">
        <div className="error">Error! {error.message}</div>
        <UrlForm />
      </main>
    );
  } else {
    const [first, ...rest] = events;

    return (
      <main className="EventsIndexPage">
        <ProgressBar />

        <div>
          <div className="firstEvent">
            <div
              style={{
                width: "100%"
              }}
            >
              <h2>NEXT UP</h2>
            </div>
            <EventDetails event={first} />
            <div>
              <div>
                <img src={groupOf3} className="groupOf3Img" alt="" />
                <h3>-</h3>
              </div>
              <div>
                <img src={singlePerson} className="singlePersonImg" alt="" />
                <h3>Why so serious?</h3>
              </div>
            </div>
          </div>
          <div className="timeline-wrapper">
            <EventsList events={rest} />
          </div>
          <UrlForm />
        </div>
      </main>
    );
  }
};

export default EventsIndexPage;
