import React, { ChangeEvent, useState, KeyboardEvent } from 'react'

interface SearchBarProps{
    onSearchProduct:(text:string)=>Promise<void>,
    onListProducts:()=>Promise<void>
}


export const SearchBarComponents = ({onSearchProduct,onListProducts}:SearchBarProps) => {

    const [searchText, setSearchText] = useState<string>("")

    const onInputChange=(evt:ChangeEvent<HTMLInputElement>)=>{
        const {value}= evt.target
        setSearchText(value)
    }

    const onKeyEnterSearch=(evt:KeyboardEvent<HTMLInputElement>)=>{
        if (evt.key=="Enter") {
            onSearchProduct(searchText)
            // setSearchText("")    
        }
        if (searchText=="") {
            console.log("vacio");
            onListProducts()
        }
    }

    return (
        <div className="mb-3">
            <label htmlFor="searchData" className="form-label">Search Bar</label>
            <input type="text" className="form-control" id="searchData"
            onChange={onInputChange} value={searchText}
            onKeyDown={onKeyEnterSearch}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
    )
}
