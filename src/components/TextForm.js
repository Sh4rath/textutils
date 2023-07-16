import React , {useState} from 'react'


export default function TextForm(prop) {
    const [text, setText] = useState("");
    const handleOnChange = (event) =>{
        setText(event.target.value)
    };
    const handleUpClick = () => 
    {
        // console.log("UpperCase Was Clicked")
        const newText=text.toUpperCase();
        setText(newText)
        prop.showAlert('Converted To Upper Case','success')
    }
    const handleLowClick = () => {
      // console.log("UpperCase Was Clicked")
      const newText = text.toLowerCase();
      setText(newText);
      prop.showAlert("Converted To Lower Case", "success");
    };
    const handleClearClick = () => {
      // console.log("UpperCase Was Clicked")
      
      setText("");
      prop.showAlert("Cleared All Text", "warning");
    };
    const numWords = () =>{
        var x = text.split(" ").length;
        var y =parseInt(text.length);
        if(y===0)
            x=0;
        if(text.charAt(text.length-1)===' ')
            x=x-1;
        return x;
    }
  return (
    <div
      className="container"
      style={{ color: prop.mode === "light" ? "black" : "white" }}
    >
      <div
        className="container"
        style={{ color: prop.mode === "light" ? "black" : "white" }}
      >
        <h4>{prop.title}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="formInput1"
            rows="5"
            style={{
              backgroundColor: prop.mode === "light" ? "white" : "#524a67",
              color: prop.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            prop.mode === "light" ? "primary" : "dark"
          } mx-3 my-3`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-${
            prop.mode === "light" ? "warning" : "dark"
          } mx-3 my-3`}
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className={`btn btn-${
            prop.mode === "light" ? "danger" : "dark"
          } mx-3 my-3`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary:</h3>
        <p>
          {numWords()} words and {text.length} characters
        </p>
        <p>Avg Reading time : {0.008 * numWords()} mins</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text in textbox for preview"}</p>
      </div>
    </div>
  );
}
