import React, { useState } from 'react'

export default function TextForm(props) {

     const[text, setText] = useState(''); 
     const handleOnChange = (event) => { 
          setText(event.target.value)
     }
     const handleUpClick = () => {
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to uppercase.","success")
     }
     const handleLowClick = () => {
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to lowercase.","success")
     }
     const handleCopyClick = () => {
          let text = document.getElementById("myBox")
          text.select();
          navigator.clipboard.writeText(text.value)
     }
     const handleExtrasplacesClick = () => { 
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "))
     }
     const handleClearClick = () => { 
          setText("")
     }
     const textColor = props.mode==='light'?'black':'white';
  return (
     <>
          <div className='container'>
               <h4>{props.heading}</h4>
               <div className="mb-3"> 
                    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'black',color : textColor}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
               </div>
               <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
               <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
               <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
               <button className="btn btn-primary mx-1" onClick={handleExtrasplacesClick}>Clear extra spaces</button>
               <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
          </div> 
          <div className="container my-3">
               <h5>Your text summery</h5>
               <p>{text.split(" ").length} words and {text.length} characters</p>
          </div>

          <div className="container my-3">
               <h3>Preview</h3>
               <p>{text}</p>
          </div>
     </>
  )
}
