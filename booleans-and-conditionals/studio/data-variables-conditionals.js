// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "Ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "clear"
let preparedForLiftOff = true 
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Do Not Launch, crew exceeds reccomended amount.")
}
// add logic below to verify all astronauts are ready
else if (astronautStatus !== "Ready"){
    console.log("Do Not Launch, crew not READY")
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
else if (totalMassKg > maximumMassLimit) {
    console.log("Do Not Launch, Total Mass exceeds Maximum Mass Limit")
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
else if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    console.log("Do Not Launch Check Fuel Temperature.")
}
// add logic below to verify the fuel level is at 100%
else if (fuelLevel !== "100%") {
    console.log("Do Not Launch Check Fuel Levels.")
}
// add logic below to verify the weather status is clear
else if (weatherStatus !== "clear") {
    console.log("Do Not Launch Wait for a Clear Day")
}
// Verify shuttle launch can proceed based on above conditions
else {
    console.log ("Trip Statistics", "\n", "Date:" + date, "\n", "Time:" + time, "\n", "Astronaut Count:" + astronautCount, "\n", "Crew Mass:" + crewMassKg + "kg", "\n", "Fuel Mass:" + fuelMassKg + "kg", "\n", "Shuttle Mass:" + shuttleMassKg + "kg", "\n", "Total Mass" + totalMassKg + "kg", "\n", "Fuel Temp:" + fuelTempCelsius, "\n", "Weather Status" + weatherStatus, "\n", "Have a Safe Trip")
}