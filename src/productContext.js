import React, { useState, useContext, useReducer,useEffect } from "react";
import axios from 'axios'
import { intialFilterState,filterReducer } from "./reducers/filterreducer";

export const Context = React.createContext("productContext");

const ProductContext = ({children})=>{
    const [products,setproducts] = useState([]);
    const [currentGender,setCurrentGender] = useState([]);
    const [currentSize,setCurrentSize] = useState([]);
    const [currentBrand,setCurrentBrand] = useState([]);
    const [filterState, dispatchFilter] = useReducer(filterReducer,intialFilterState);
    const [cactiveprice,setCactiveprice] = useState('');
    const [iffilterisclear,setIfFilterisclear] = useState(false)

    useEffect(() => {
        axios
          .get('https://json-server-iota-nine.vercel.app/products')
          .then(response => {
            setproducts(response.data)
          })
      }, [])

    let contextvalue={
        products,
        currentGender,
        setCurrentGender,
        filterState,
        dispatchFilter,
        currentSize,
        setCurrentSize,
        currentBrand,
        setCurrentBrand,
        cactiveprice,setCactiveprice,
        iffilterisclear,setIfFilterisclear
    }

    return(
        <>
        <Context.Provider value={contextvalue}>
            {children}
        </Context.Provider>
        </>
    )
}

export default ProductContext
export const useProduct = () => useContext(Context)