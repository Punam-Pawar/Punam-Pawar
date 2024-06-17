import React from 'react'

function Header (props) {
    //console.warn("home" ,props.data)
    return(
        <div>
        <div className='add-to-card'>
        <span className='card-count'>{props.data.length}</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5kvDGsNUmHWBUK5SCGzf5KrBthr4FVY1wTNzd0QAWdxcMA1Lu1DSS7sRN0bZIyQxqvc&usqp=CAU"></img>
        </div>
        
        
        </div>
        
    )
}
export default Header;