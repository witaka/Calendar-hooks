import React from "react";
import Button from "@material-ui/core/Button";
import { useGlobalState } from "./GlobalState";
import Events from "../requests/events";
import processData from "../services/processData";

const refreshPage = () => {
  window.location.reload();
};

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
  };

  return (
    <nav className="NavBar">
      <form className="NavForm" onSubmit={handleSubmit}>
        <p>Open Calendar from URL</p>
        <input id="url" name="url" type="link" />
        <Button color="inherit" variant="contained" type="submit">
          Open
        </Button>
      </form>
    </nav>
  );
};

export default UrlForm;
