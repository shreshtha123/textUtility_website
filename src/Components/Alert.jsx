import React from 'react'

export default function Alert(props) {
    // const Capitalize=(word)=>{
    //     var lower = word.toLowerCase();
    //     return (lower.charAt(0).toUpperCase()+ lower.slice(1));

    // }
    let myheight = {
      height:'10px'
      
    
    }
  return (
    <div>
        <>
        <div  style={myheight}>
        <div className="alert alert-success" role="alert">
<strong>{props.alert.type}</strong>:{props.alert.msg} 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </div>
     
        </>
      
    </div>
  )
}
