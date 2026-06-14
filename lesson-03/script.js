// fetch all active vehicles from CVVJ API and render them in the list
async function fetchVehicles() {
    const response = await fetch("http://localhost:8000/vehicles/actives/true")
    
    // convert response to JSON
    const data = await response.json()

    // iterate over vehicles and add a list item for each one
    for (let vehicle of data.message) {
        document.querySelector("#vehicle-list").innerHTML += `<li>${vehicle.model} | ${vehicle.kind} | ${vehicle.date} | ${vehicle.plate}</li>`
    }
}

fetchVehicles()