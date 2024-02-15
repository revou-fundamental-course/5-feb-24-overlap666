document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;
    if (unit === 'celsius') {
        result = (temperatureInput * 9/5) + 32;
        document.getElementById('conversionResult').innerHTML = `${temperatureInput} Celsius = ${result.toFixed(2)} Fahrenheit`;
    } else {
        result = (temperatureInput - 32) * 5/9;
        document.getElementById('conversionResult').innerHTML = `${temperatureInput} Fahrenheit = ${result.toFixed(2)} Celsius`;
    }
});