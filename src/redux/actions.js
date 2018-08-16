export function putRowFirst(rowId) {
  return {
    type: "PUT_ROW_FIRST",
    payload: {
      rowId: rowId
    }
  };
}

export function rowSelectPre(rowId) {
  return {
    type: "ROW_SELECT_PRE",
    payload: {
      rowId: rowId
    }
  };
}

export function rowSelectPost(rowId) {
  return {
    type: "ROW_SELECT_POST",
    payload: {
      rowId: rowId
    }
  };
}
