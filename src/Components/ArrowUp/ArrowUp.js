import React from "react"
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import "./ArrowUp.css"

function ArrowUp() {

  const goTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div id="go-top" onClick={goTop} >
		  <p className="arrow-icon">
        <BsFillArrowUpSquareFill />         
      </p>
	</div>   
  )
}

export default ArrowUp

