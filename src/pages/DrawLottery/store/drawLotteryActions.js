import { produce } from "immer";

const initialState = {
  candidates: [],
  numOfWinners: 0,
};

const reducer = produce((draft, action) => {}, initialState);
