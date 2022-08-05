



  function tempCelcius() {
    let given = (document.getElementById('inputNumber').value);

    let option = (document.getElementById('tempOption').value);
    
    let result;

    if(option === 'Celcius'){
      document.getElementById("outputCelcius").innerHTML = given + " °C";
    }else if (option === 'Kelvin'){
      result = given - 273.15;
      document.getElementById("outputCelcius").innerHTML = result + " °C";
    }else if (option === 'Fahrenheit'){
      result = (given - 32) * (5/9);
      document.getElementById("outputCelcius").innerHTML = result + " °C";

    }


        }




// if (document.getElementById("tempOption").value === "Celcius");{

//   function tempCelcius() {
//     let inputNumber = document.getElementById("inputNumber").value;
    
//     // document.getElementById("outputFahrenheit").innerHTML = (Number(inputNumber *  9/5)) + 32 +" °F";
//     // document.getElementById("outputKelvin").innerHTML = Number(inputNumber) + 273.15 +" °K";
//     document.getElementById("outputCelcius").innerHTML = inputNumber + " °C";
//     }
// }
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