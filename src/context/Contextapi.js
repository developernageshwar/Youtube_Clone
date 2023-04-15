
import React ,{useState,useEffect, createContext}from "react";
import {fetchDataFromApi} from '../utlis/Api.js'

 export const context = createContext();
 
  export const ContextApi = (props)=>{
const [loading,setLoading] = useState(false)
const  [mobileMenu,setMobileMenu] = useState(false)
const [searchResult,setSearchResult] = useState(false);
const [selectCategories,setSelectCategories] = useState(false)



useEffect(()=>{
    fetchSelectedCategoryData(selectCategories)

},[selectCategories])

const fetchSelectedCategoryData = (query)=>{
    setLoading(true)
    fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
console.log(contents);
setSearchResult(contents)
setLoading(false);
    });
       
    };

return(
    <context.Provider value={{
        loading,
        setLoading,
        mobileMenu,
        setMobileMenu,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories
    }}>
        {props.children}
</context.Provider>
    
)



}


