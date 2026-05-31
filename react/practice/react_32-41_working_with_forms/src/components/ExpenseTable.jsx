import React, { useState, useEffect } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

const ExpenseTable = ({
  fetchData,
  setFetchData,
  setInputData,
  setEditingRowId,
}) => {
  const [menuPosition, setMenuPosition] = useState(null);
  const [rowId, setRowId] = useState("");
  const [sortCallback, setSortCallback] = useState(() => () => {});
  // this use state for sort allows us to set the state for a return callback function.

  // console.log(sortCallback); // output is a callback function

  useEffect(() => {
    const closeMenu = () => setMenuPosition(null);
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);
  {
    /* closing the menu, we did click on table and setMenuPosition to null */
  }

  // custom hook
  const [filteredData, query, setQuery] = useFilter(
    fetchData,
    (data) => data.category,
  );
  // query is needed to update the table header value
  const totalAmtSum = filteredData.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0,
  );

  return (
    <>
      {/* one inside {} is of useState */}
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setFetchedData={setFetchData}
        rowId={rowId}
        setInputData={setInputData}
        fetchData={fetchData}
        setEditingRowId={setEditingRowId}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (menuPosition?.left) {
            // if there is a menu position.left, then only update this setMenu position state, initially we used null in use State so we used optional chaining here to avoid getting error
            (console.log("click"), setMenuPosition({}));
          }
        }}
      >
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                {/* here we will implement sorting functionality */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() =>
                    setSortCallback(() => (a, b) => a.title.localeCompare(b.title))
                  }
                >
                  {/* for ideal sorting, first copy the array using ..., then sort */}
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() =>
                    setSortCallback(() => (a, b) => b.title.localeCompare(a.title))
                  }
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())}> 
              {/* here we update the query state */}
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                {/* here we will implement sorting functionality */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() =>
                    // setFetchData((prevState) => [
                    //   ...prevState.sort((a, b) => a.amount - b.amount),
                    // ])
                    // old way of sorting

                    setSortCallback(() => (a, b) => a.amount - b.amount)
                  }
                >
                  {/* for ideal sorting, first copy the array using ..., then sort */}
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() =>
                    setSortCallback(() => (a, b) => b.amount - a.amount)
                  }
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* fetch wrt myCategory filter */}
          {[...filteredData]
            .sort(sortCallback)
            .map(({ id, title, category, amount }) => {
              // initially sort callback is empty so no sorting here, also we used ... to clone the filtered data to make sorting and clear sort work
              return (
                <tr
                  key={id}
                  onContextMenu={(e) => {
                    e.preventDefault(); // stops the default right click menu from coming on right click press
                    // we gave it inside the rows as we'll get key and id for row edit and row delete
                    // console.log(e);
                    setMenuPosition({ left: e.pageX + 4, top: e.pageY + 4 });
                    setRowId(id);
                  }}
                >
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>₹{amount}</td>
                </tr>
              );
            })}
          <tr>
            <th>Total:</th>
            <th
              className="clear-sort"
              onClick={() => {
                // console.log("clear sort"),
                setSortCallback(() => () => {});
                // function body has nothing to return, so no sorting
              }}
            >
              Clear Sort
            </th>
            <th>₹ {totalAmtSum}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
