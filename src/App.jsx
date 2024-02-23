import "./App.css";
import { useState } from "react";


function App() {
  
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] =useState(``); 
  const [message, setMessage] = useState(``);

  //logic for bmi calculation

  let calBmi = (e) => {

    e.preventDefault();
    if(weight === 0 || height === 0){
      alert("Please enter correct weight and height");
    }
    else{
      let ht= (height/100)
      let bmi = (weight/(ht*ht))

      setBmi(bmi.toFixed(1))

      if(bmi>= 18.5 && bmi<24.9){
        setMessage("NORMAL")
      }
      else if( bmi>=25 && bmi<29.9){
        setMessage("OVERWEIGHT")
      }
      else if(bmi>=30 && bmi<39.9){
        setMessage("OBESE")
      }
      else if(bmi>40){
        setMessage("Your life is on the line")
      }
      else{
        setMessage("UNDERWEIGHT or incorrect value")
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }


   

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (kgs)</label>
            <input 
            type="text" 
            placeholder="Enter your weight in kgs" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input 
            type="text" 
            placeholder="Enter your height in cm" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit" onClick={calBmi}>
              {" "}
              Submit
            </button>

            <button type="reset" className="btn2 btn-outline" onClick={reload}>
              Reset
            </button>

          </div>

          <div className="center">
            <h3>Your BMI is {bmi} </h3>
            <p>{message}</p>
          </div>

        </form>

      </div>
      <div>
        <br />
        <h5>For more information refer to image below</h5><br /> <br />
        <img src="https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/calculator/life-planning-tools/bmi-calculator/banner-image-bmi.png" alt="" className="img1"/>
        <img src="https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/calculator/life-planning-tools/bmi-calculator/bmi-chart-desktop-new.jpeg" alt="img" className="img2"/>
      </div>
    </div>
    
  );
}

export default App;
