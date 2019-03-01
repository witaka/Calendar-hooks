import React from "react";
import Button from "@material-ui/core/Button";
import { useGlobalState } from "./GlobalState";
import Events from "../requests/events";
import GetLocalFile from "../requests/events";
import processData from "../services/processData";

const UrlForm = props => {
  const [loading, updateLoading] = useGlobalState("loading");
  const [error, updateError] = useGlobalState("error");
  const [events, updateEvents] = useGlobalState("events");
  const [totalEventsCount, updateTotalEventsCount] = useGlobalState(
    "totalEventsCount"
  );

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);
    const newUrl = formData.get("url");
    const newFile = formData.get("file");

    updateLoading(true);
    if (newUrl) {
      Events.getFile(newUrl)
        .then(events => {
          updateTotalEventsCount(events.length);
          events = processData(events);
          updateEvents(events);
          updateLoading(false);
        })
        .catch(error => {
          updateError(error);
          updateLoading(false);
        });
      currentTarget.reset();
      props.history.push("/calendar");
    }
    if (newFile) {
      let reader = new FileReader();
      reader.readAsText(newFile, "UTF-8");
      reader.onload = evt => {
        let events = evt.target.result;
        updateTotalEventsCount(events.length);
        events = processData(events);
        updateEvents(events);
        updateLoading(false);
        currentTarget.reset();
        props.history.push("/calendar");
      };
    }
  };

  return (
    <nav className="NavBar">
      <form className="NavForm" onSubmit={handleSubmit}>
        <p>Open Calendar from URL</p>
        <input id="url" name="url" type="link" />
        <Button color="inherit" variant="contained" type="submit">
          Open
        </Button>
        <p>Open Calendar from computer</p>
        <input type="file" name="file" />
        <Button color="inherit" variant="contained" type="submit">
          Open
        </Button>
      </form>
    </nav>
  );
};

export default UrlForm;
