import { useState } from "react";

export function useFilter(dataList, callbackFn) {
    // here we are using a datalist, it is an array of objects having all the data which we will filter
    // callback function will be used when we want to be flexible, eg. filter by category (here), or filter by title or filter by amount

    const [query, setQuery] = useState('') // '' means All categories
    // query is the selected on which we filter. Eg. Grocery, Bills, All etc.
    
    const filteredData = dataList.filter((data) => callbackFn(data).toLowerCase().includes(query))

    return [filteredData, setQuery]
}