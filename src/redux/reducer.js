export function reducer(currentState, action) {
  const nextstate = { ...currentState };
  console.log( `reducer called with ${action.type}`)
  switch (action.type) {
    case "ROW_SELECT_POST":
      const rowId = action.payload.rowId;
      return { ...nextstate, firstRow: rowId };
    // case "ROW_SELECT_PRE":
    //   const row = action.payload.rowId;
    //   return { ...nextstate, firstRow: row };
    default:
      return currentState;
  }
}
