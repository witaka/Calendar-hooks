import { createGlobalState } from "react-hooks-global-state";

const initialState = { loading: "true" };
export const { GlobalStateProvider, useGlobalState } = createGlobalState(
  initialState
);
