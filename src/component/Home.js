import React from 'react'

function Home (props) {
    //console.warn("home" ,props.data)
    return(
        <div>

        
        <h1>Home component</h1>
        <div className='card'>
        <div className='img-wrapper item'>
        <img src="data:image/jpeg;base64,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"></img>
        </div>
        <div className='text item'>
   <span>
   I-Phone
   </span>
   <span>
   Price: $1000.00
   </span>
        </div>
        <div className='btn item'>
       
<button 
onClick={()=>
    props.addtocardHandler({price:1000, name:'I phone 11'})}>

Add to Card </button>

<button className='remove-btn'
onClick={()=>
    props.removeToCardHandler()}>

Remove To Card </button>
        </div>
        </div>
        </div>
    )
}
export default Home