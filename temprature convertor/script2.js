function convert(unit) {
    const temperatureInput = document.getElementById("temperature");
    const resultElement = document.getElementById("result");

    if (temperatureInput.value === "") {
        resultElement.textContent = "Please enter a temperature.";
        return;
    }

    const temperature = parseFloat(temperatureInput.value);
    let convertedTemperature;
    let resultUnit;

    switch (unit) {
        case "celsius":
            convertedTemperature = temperature;
            resultUnit = "°C";
            break;
        case "fahrenheit":
            convertedTemperature = (temperature * 9/5) + 32;
            resultUnit = "°F";
            break;
        case "kelvin":
            convertedTemperature = temperature + 273.15;
            resultUnit = "K";
            break;
        default:
            return;
    }

    resultElement.textContent = `${temperature}° is ${convertedTemperature.toFixed(2)}${resultUnit}`;
}
