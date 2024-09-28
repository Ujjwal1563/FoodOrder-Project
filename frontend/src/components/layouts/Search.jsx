import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search(){
    return (
    <form>
        <div className="input-group">
            <input 
            type="text" 
            placeholder="Search for your favourite Restaurants..." 
            id="search-field" 
            className="form-control" 
            />

            <div className="input-group-append">
                <button id="search_btn" className="btn" type="button">
                    <CiSearch className="ci ci-search"/>
                </button>
            </div>
        </div>
    </form>
    );
}