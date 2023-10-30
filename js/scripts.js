// UI
window.addEventListener("load", () => {
    document.querySelector("form#places-form").addEventListener("submit", handleForm);
    document.querySelector("div#places-list").addEventListener("click", displayPlacesDetails)
});

function handleForm(e) {
    e.preventDefault();
    const city = document.querySelector("input#city-name").value;
    const landmark = document.querySelector("input#landmark-name").value;
    const time = document.querySelector("input#time-of-year").value;
    const notes = document.querySelector("input#notes").value;

    let newPlace = new Place(city, landmark, time, notes);
    let pElement = document.createElement("p");
    pElement.innerText = ` City: ` + newPlace.city
    // pElement.innerText = `City: ${newPlace.city}, Landmark: ${newPlace.landmark}, Time: ${newPlace.time}, Notes: ${newPlace.notes}`;
    document.querySelector("div#places-list").append(pElement);
}

function displayPlacesDetails() {

}

// Business Logic
function Place(city, landmark, time, notes) {
    this.city = city;
    this.landmark = landmark;
    this.time = time;
    this.notes = notes;
}