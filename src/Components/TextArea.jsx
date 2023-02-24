import React, {useState}from 'react'
//rfc
export default function TextArea(props) {
//to use state first declare the variable for reference refer documentation
const[Text,setText]=useState("");
//we can only update text using setText 
const handleOnUpperClick=()=>{
    console.log("button is clicked"+Text)
    let word = Text.toUpperCase();
    setText(word)
    props.showAlert("you have switched to upper case","success")
}
const handleOnLowerClick=()=>{
  console.log("button is clicked"+Text)
  let word = Text.toLowerCase();
  setText(word)
  props.showAlert("you have switched to lower case","success")
}
const handleOnInvertedTextClick=()=>{
  console.log("button is clicked"+Text)
  let word = reverse(Text);
  setText(word)
  props.showAlert("you have inverted the text","success")
}
const reverse=(str)=>{
 let newStr = "";
 for(let i=0;i<str.length;i++){
  newStr=str[i]+newStr;
 }
 return newStr;
}
// const reverseSentence = (str)=>{
//   let newStr="";
//   for(let i=0;i<str.length;i++){
//     if(str[i]==" "){

//     }
//   }
// }
const handleOnChange=(event)=>{
    console.log("change has happened")
    setText(event.target.value)
    //When we will change the value in textArea of our web page state of the web page will be changed
    //hence new text will be formed in other words new event will be formed
    //In order to allow user to change value in text area we have used function onChange to detect the change
    //To set the updated or new text , the event will set the target value
}
  return ( 
   <>
   <div className="container mt-5" style={{color :props.mode==='dark'?'white':'black'}}>
   <h1>{props.title}</h1>
<div className="mb-3" >
  <textarea className="form-control"style={{backgroundColor :props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1"  value ={Text} onChange={handleOnChange}  rows="6"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleOnUpperClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleOnLowerClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleOnInvertedTextClick}>Convert to Inverted Text </button>
   </div>
  
 {/* <div className="container my-3" style={{backgroundColor :props.mode==='dark'?'#042743':'white' ,color :props.mode==='dark'?'white':'black'}}> */}
  <div className={`container my-3 text-${props.mode==='dark'?'white':'black'}`}>
  <h1>Text Summary </h1>
  <p>{Text.split(" ").filter((element)=>{return element.length!==0;}).length} words and {Text.length} characters</p>
  <p>{0.008*Text.split(" ").length} minutes to read </p>
  <h2>Preview </h2>
  <p>{Text.length>0?Text:"Enter text in text box to see the preview"}</p>
  </div>
  

 {/* </div> */}
</>
        
        
      
 
  )
}
