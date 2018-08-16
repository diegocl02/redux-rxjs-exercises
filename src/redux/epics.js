import { Observable } from "rxjs";
import * as Actions from "./actions";

export const saveField = action => {
  console.log(`Epic called with ${action}`)
  action.ofType("ROW_SELECT_PRE").switchMap(payload => {
    return Observable.interval(1000)
      .take(1)
      .map(() => Actions.rowSelectPost(payload.rowId))
  });
};
