// UI
let visitedLocations = new VisitedLocations();

window.addEventListener("load", () => {
    document.querySelector("form#places-form").addEventListener("submit", handleForm);
    document.querySelector("div#places-list").addEventListener("click", displayPlacesDetails)
});

function listPlaces(visitedLocationsToDisplay) {
    let placesDiv = document.querySelector("div#places-list");
    placesDiv.innerText = null;
    const ul = document.createElement("ul");
    Object.keys(visitedLocationsToDisplay.places).forEach(function (key) {
        const place = visitedLocationsToDisplay.findPlace(key);
        const li = document.createElement("li");
        li.append(place.city);
        li.setAttribute("id", place.id);
        ul.append(li);
    });
    placesDiv.append(ul);
}

function handleForm(e) {
    e.preventDefault();
    const city = document.querySelector("input#city-name").value;
    const landmark = document.querySelector("input#landmark-name").value;
    const time = document.querySelector("input#time-of-year").value;
    const notes = document.querySelector("input#notes").value;

    let newPlace = new Place(city, landmark, time, notes);
    visitedLocations.addPlace(newPlace);
    listPlaces(visitedLocations);
    // let pElement = document.createElement("p");
    // pElement.innerText = 'City:' + newPlace.city
    // // pElement.innerText = `City: ${newPlace.city}, Landmark: ${newPlace.landmark}, Time: ${newPlace.time}, Notes: ${newPlace.notes}`;
    // document.querySelector("div#places-list").append(pElement);
}

function displayPlacesDetails(event) {
    const place = visitedLocations.findPlace(event.target.id);
    const detailsContainer = document.querySelector("div#places-details");

    detailsContainer.innerHTML = "";
    for (const key in place) {
        if (key !== "id") {
            const span = document.createElement("span");
            span.innerText = `${key}: ${place[key]}\n`;
            detailsContainer.appendChild(span);
        }
    }
}

// document.querySelector("span#city-output").innerText = place.city;
// document.querySelector("span#landmark-ouput").innerText = place.landmark;
// document.querySelector("span#time-output").innerText = place.time;
// document.querySelector("span#notes-output").innerText = place.notes;
// document.querySelector("div#places-details").removeAttribute("class");
// }

// Business Logic

function VisitedLocations() {
    this.places = {};
    this.currentId = 0;
}

VisitedLocations.prototype.addPlace = function (place) {
    place.id = this.assignId();
    this.places[place.id] = place;
}

VisitedLocations.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

VisitedLocations.prototype.findPlace = function (id) {
    if (this.places[id] !== undefined) {
        return this.places[id];
    }
    return false;
};

function Place(city, landmark, time, notes) {
    this.city = city;
    this.landmark = landmark;
    this.time = time;
    this.notes = notes;
}