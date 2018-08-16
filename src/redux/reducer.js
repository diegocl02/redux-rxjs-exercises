export function reducer(currentState, action) {
  const nextstate = { ...currentState };
  switch (action.type) {
    case "ROW_SELECT_POST":
      const rowId = action.payload.rowId;
      return { ...nextstate, firstRow: rowId };
    default:
      return currentState;
  }
}
