import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  loading: "true",
  error: null,
  events: [],
  totalEventsCount: 0
};
export const { GlobalStateProvider, useGlobalState } = createGlobalState(
  initialState
);
