import './App.css';
import React, { useEffect} from "react";


function App() {
 useEffect(() => {

   setInterval(runClock, 1000)
 }, [])
 // Declare and Initialize your variables and make references to the id defined in the html file, as needed.
  

  // Declare and Initialize the inbuilt date function
  const date = new Date();

  //
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
  // Declare and Initialize your variables and create positions for each.
let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60;

// Create a function that actually run the clock
const runClock = () => {
  const HOURHAND = document.querySelector("#hour");
  const MINUTEHAND = document.querySelector("#minute");
  const SECONDHAND = document.querySelector("#second");
  // Set each position when the function is called
  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  // Set the transformation for each arm
 
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  
  
};

// Use the inbuilt setInterval function to invoke the method we created earlier


  return (
    <div className="App">
         <main className="main">
      <div className="clockbox">
        <svg
          id="clock"
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="200"
          viewBox="0 0 600 600"
        >
          <g id="face">
            <circle className="circle" cx="300" cy="300" r="253.9" />
            <path
              className="hour-marks"
              d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
            />
            <circle className="mid-circle" cx="300" cy="300" r="16.2" />
          </g>
          <g id="hour">
            <path className="hour-arm" d="M300.5 298V142" />
            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
          <g id="minute">
            <path className="minute-arm" d="M300.5 298V67" />
            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
          <g id="second">
            <path className="second-arm" d="M300.5 350V55" />
            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
        </svg>
      </div>
      
    </main>
    </div>
  );
}

export default App;
