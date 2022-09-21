import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectSearch, setSearch } from "../../store/slices/search/searchSlice"
import { FiSearch } from "react-icons/fi"
import "./Search.css"

function Search() {

const search = useSelector(selectSearch)
const dispatch = useDispatch()
  return (
    <div className="search">
      <label>
        <input value={search} onChange={e => dispatch(setSearch(e.target.value))} className="search_field" />
        <FiSearch />
      </label>
        
    </div>
  )
}

export default Search