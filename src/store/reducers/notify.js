import { SET_NOTIFICATIONS } from "../actionTypes";

export default function notify(state = [], action) {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return {
        notifications: action.data,
      };
    default:
      return state;
  }
}
