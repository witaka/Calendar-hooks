import React from "react";
import { useGlobalState } from "./GlobalState";

const EventsIndexPage = () => {
  const [loading, updateLoading] = useGlobalState("loading");

  return (
    <div>
      <span>{loading}</span>
    </div>
  );
};

export default EventsIndexPage;
