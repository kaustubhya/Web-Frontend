import React, { useState, useEffect } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    // if there is some existing data in local storage, then we will use that, otherwise we will use the initial data
    if (existingData) {
      setData(existingData);
      // there was already some data in local storage, so we will set that data to our state
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
      // there was no data in local storage, so we will set the initial data to local storage
    }
  }, []);
  // we used useEffect here because we want to run this code only once when the component mounts, we don't want to run this code every time the component re-renders, so we used an empty dependency array here
  // using it without useEffect will cause an infinite loop because we are setting the state inside the component, which will cause the component to re-render, and then it will set the state again, and this will go on indefinitely, so we need to use useEffect here to avoid that infinite loop

  // now we need to update the local storage whenever there is a change in data, so we will create a function for that

  const updateLocalStorage = (newData) => {
  const value =
    typeof newData === "function" ? newData(data) : newData;
      // set the localStorage with new data, if is is a function, then we will call that function with the current data to get the new data, otherwise we will use the new data directly


  localStorage.setItem(key, JSON.stringify(value));
  setData(value);
  // update the state with the value
};
  return [data, updateLocalStorage];
}
