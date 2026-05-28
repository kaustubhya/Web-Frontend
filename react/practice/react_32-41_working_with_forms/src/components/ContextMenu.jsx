import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setFetchedData,
  rowId,
  setInputData,
  fetchData,
  setEditingRowId,
}) => {
  if (!menuPosition) return null;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          const {title, category, amount} = fetchData.find(
            (singleExpense) => singleExpense.id === rowId,
          );
          // setInputData({
          // title: "Hi",
          // category : "Bills",
          // amount: "200",
          // email: "saksham@gmail.com",
          // });
          console.log("Editing.....");
          // setInputData({
          //   title: foundExpense?.title || "",
          //   category: foundExpense?.category || "",
          //   amount: foundExpense?.amount || "",
          //   email: foundExpense?.email || "", 
          // });
          setEditingRowId(rowId);
          setInputData({title, category, amount, email: ""});
          // console.log(foundExpense);
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          console.log("Deleting.....");
          setFetchedData((prevState) =>
            prevState.filter((data) => data.id !== rowId),
          );
          /* here we remove that row via filter which returns false, say there are 3 rows, 1 , 2, 3
            if user clicks row2, then rowId = 2, so now we run the loop 1 !== 2 (true), keep the item
            2 !== 2 false, remove the item
            3 !== 2 , true keep the item. 
            So from 1,2,3 we are left with 1,3 after deletion
          */
          setMenuPosition(null);
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
