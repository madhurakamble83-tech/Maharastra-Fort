const forts = [

    {
        name: "Lohagad Fort",
        location: "Lonavala, Pune",
        type: "Hill",
        image: "images/lohagad.jpg",
        description:
            "A spectacular hill fort in the Sahyadris, known for its impressive fortification walls and scenic trekking route."
    },

    {
        name: "Murud-Janjira Fort",
        location: "Murud, Raigad",
        type: "Coastal",
        image: "images/murud.jpg",
        description:
            "A famous sea fort rising from the Arabian Sea, known for its massive stone walls and coastal architecture."
    },

    {
        name: "Panhala Fort",
        location: "Panhala, Kolhapur",
        type: "Hill",
        image: "images/panhala.jpg",
        description:
            "A historic Deccan fort surrounded by the Sahyadri landscape and associated with Maratha history."
    },

    {
        name: "Pratapgad Fort",
        location: "Mahabaleshwar, Satara",
        type: "Hill",
        image: "images/pratapgad.jpg",
        description:
            "A historic mountain fort associated with Chhatrapati Shivaji Maharaj and the Battle of Pratapgad."
    },

    {
        name: "Raigad Fort",
        location: "Mahad, Raigad",
        type: "Hill",
        image: "images/raigad.jpg",
        description:
            "The historic capital of Chhatrapati Shivaji Maharaj's Swarajya, situated high above the surrounding valleys."
    },

    {
        name: "Rajgad Fort",
        location: "Pune District",
        type: "Hill",
        image: "images/rajgad.jpg",
        description:
            "A magnificent Sahyadri fort that served as an important capital of Swarajya and offers spectacular mountain views."
    }

];

const fortGrid = document.getElementById("fortGrid");
const searchInput = document.getElementById("fortSearch");
const emptyState = document.getElementById("emptyState");

let activeFilter = "All";


function displayForts() {

    const searchText =
        searchInput.value.trim().toLowerCase();

    const filteredForts = forts.filter(fort => {

        const matchesFilter =
            activeFilter === "All" ||
            fort.type === activeFilter;

        const matchesSearch =
            fort.name.toLowerCase().includes(searchText) ||
            fort.location.toLowerCase().includes(searchText) ||
            fort.type.toLowerCase().includes(searchText);

        return matchesFilter && matchesSearch;

    });


    fortGrid.innerHTML = filteredForts.map(fort => `

        <article class="fort-card">

            <div class="fort-image">

                <img
                    src="${fort.image}"
                    alt="${fort.name}"
                    loading="lazy"
                >

                <span class="fort-type">
                    ${fort.type.toUpperCase()} FORT
                </span>

            </div>

            <div class="fort-info">

                <h3>${fort.name}</h3>

                <div class="location">
                    📍 ${fort.location}
                </div>

                <p>${fort.description}</p>

                <a href="#about" class="fort-link">
                    EXPLORE HERITAGE ↗
                </a>

            </div>

        </article>

    `).join("");


    emptyState.hidden = filteredForts.length !== 0;

}


// FILTER BUTTONS

document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", function () {

        document.querySelectorAll(".filter").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        activeFilter = this.dataset.filter;

        displayForts();

    });

});


// SEARCH

searchInput.addEventListener("input", displayForts);


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// LOAD FORTS

displayForts();