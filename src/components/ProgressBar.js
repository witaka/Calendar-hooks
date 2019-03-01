import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useGlobalState } from "./GlobalState";

const LinearBuffer = () => {
  const [events, updateEvents] = useGlobalState("events");
  const [totalEventsCount, updateTotalEventsCount] = useGlobalState(
    "totalEventsCount"
  );
  return (
    <div>
      <div className="progressBar">
        Completed {totalEventsCount - events.length} out {totalEventsCount}
      </div>

      <div>
        <LinearProgress
          variant="buffer"
          value={(events.length / 100) * totalEventsCount}
          valueBuffer={0}
        />
        <br />
      </div>
    </div>
  );
};

export default LinearBuffer;
