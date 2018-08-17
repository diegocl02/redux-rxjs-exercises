import { Observable } from "rxjs";
import * as Actions from "./actions";
import { switchMap } from "rxjs/operators";
import { delay, mapTo, interval, tap } from "rxjs/operators";
import { of } from 'rxjs';

// Just for learning purpose, the following epic is receiving the PRE action and the
// wait for 1 second to trigger the POST action that is sending the row to the top
// of the table. If two clicks are done between 1 second, both actions are gonna
// be visible, one after the other.

// export const saveField = action => {
//   console.log(`Epic called with `, action);
//   return action.ofType("ROW_SELECT_PRE").pipe(
//     delay(1000),
//     tap(action => console.log(action)),
//     map(action => {
//       return { type: "ROW_SELECT_POST", payload: {
//         rowId: action.payload.rowId
//       } };
//     })
//   );
// };

// In this function, if two or more PRE action are triggered before 1 secon, only
// the latest one will trigger POST

export const saveField = action => {
  console.log(`Epic called with `, action);
  return action.ofType("ROW_SELECT_PRE").pipe(
    switchMap(action =>
      of({
        type: "ROW_SELECT_POST",
        payload: {
          rowId: action.payload.rowId
        }
      }).pipe(delay(1000))
    )
  );
};
