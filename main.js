if (document.getElementById("tempOption").value === "Celcius");{

  function tempCelcius() {
    let inputNumber = document.getElementById("inputNumber").value;
    
    // document.getElementById("outputFahrenheit").innerHTML = (Number(inputNumber *  9/5)) + 32 +" °F";
    // document.getElementById("outputKelvin").innerHTML = Number(inputNumber) + 273.15 +" °K";
    document.getElementById("outputCelcius").innerHTML = inputNumber + " °C";
    }
}
// function tempFahrenheit() {
//   let inputNumber = document.getElementById("inputNumber").value;
  
//   document.getElementById("outputFahrenheit").innerHTML = (Number(inputNumber *  9/5)) + 32 +" °F";
//   // document.getElementById("outputKelvin").innerHTML = Number(inputNumber) + 273.15 +" °K";
//   // document.getElementById("outputCelcius").innerHTML = inputNumber + " °C";
//   }
// function tempKelvin() {
//   let inputNumber = document.getElementById("inputNumber").value;
  
//   // document.getElementById("outputFahrenheit").innerHTML = (Number(inputNumber *  9/5)) + 32 +" °F";
//   document.getElementById("outputKelvin").innerHTML = Number(inputNumber) + 273.15 +" °K";
//   // document.getElementById("outputCelcius").innerHTML = inputNumber + " °C";
  // }