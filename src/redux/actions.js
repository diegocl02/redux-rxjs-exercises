export function putRowFirst(rowId){
  return{
    type: "PUT_ROW_FIRST",
    payload: {
      rowId: rowId
    }
  }
}
