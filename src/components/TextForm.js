import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("uppercase was Clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!" , "success")
  };
  const handleLcClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success")
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showAlert("Copied text" , "success")
  };
  const handelOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
      >
        <h1 className="my-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            style={{
              backgroundColor: props.mode === "dark" ? "#050633" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handelOnChange}
            id="myBox"
            rows="8 "
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1"  onClick={handleUpClick}>
          Convert to UP
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" text="white"  onClick={handleLcClick}>
          Convert to LC
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" text="white" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1"  onClick={handleClearClick}>
          Reset
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {" "}
            {text.split(/\s/ ).filter((element)=>{return element.length !==0}).length} words and {text.length} characters
          </b>
        </p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutues to read completely</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Nothing to Preview"}</p>
       
      </div>
    </>
  );
}
