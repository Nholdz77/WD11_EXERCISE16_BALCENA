function tempCelcius() {
  let given = document.getElementById("inputNumber").value;

  let option = document.getElementById("tempOption").value;

  let resultCelcius;

  if (option === "Celcius") {
    document.getElementById("outputCelcius").innerHTML = given + " °C";
  } else if (option === "Kelvin") {
    resultCelcius = given - 273.15;
    document.getElementById("outputCelcius").innerHTML =
      Math.round(resultCelcius) + " °C";
  } else if (option === "Fahrenheit") {
    resultCelcius = (given - 32) * (5 / 9);
    document.getElementById("outputCelcius").innerHTML =
      Math.round(resultCelcius) + " °C";
  } else {
    alert("Select temperature to convert");
  }
}

function tempFahrenheit() {
  let given = document.getElementById("inputNumber").value;

  let option = document.getElementById("tempOption").value;
  
  let resultFahrenheit;

  if (option === "Celcius") {
    resultFahrenheit = Number(given) * (9 / 5) + 32;
    document.getElementById("outputFahrenheit").innerHTML =
      Math.round(resultFahrenheit) + " °F";
  } else if (option === "Kelvin") {
    resultFahrenheit = (Number(given) - 273.15) * (9 / 5) + 32;
    document.getElementById("outputFahrenheit").innerHTML =
      Math.round(resultFahrenheit) + " °F";
  } else if (option === "Fahrenheit") {
    document.getElementById("outputFahrenheit").innerHTML = given + " °F";
  } else {
    alert("Select temperature to convert");
  }
}
function tempKelvin() {
  let given = document.getElementById("inputNumber").value;

  let option = document.getElementById("tempOption").value;

  let resultKelvin;

  if (option === "Celcius") {
    resultKelvin = Number(given) + 273.15;
    document.getElementById("outputKelvin").innerHTML =
      Math.round(resultKelvin) + " °K";
  } else if (option === "Kelvin") {
    document.getElementById("outputKelvin").innerHTML = given + " °K";
  } else if (option === "Fahrenheit") {
    resultKelvin = (Number(given) - 32) * (5 / 9) + 273.15;
    document.getElementById("outputKelvin").innerHTML =
      Math.round(resultKelvin) + " °K";
  } else {
    alert("Select temperature to convert");
  }
}
