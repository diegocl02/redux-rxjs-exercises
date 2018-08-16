export function reducer(currentState, action) {
  const nextstate = { ...currentState };
  switch (action.type) {
    case "PUT_ROW_FIRST":
      const rowId = action.payload.rowId;
      return { ...nextstate, firstRow: rowId };
    default:
      return currentState;
  }
}
