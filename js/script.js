const species = [

    {
        name: "Tiger",
        category: "Mammal",
        population: 3900,
        status: "Endangered"
    },

    {
        name: "Asian Elephant",
        category: "Mammal",
        population: 48000,
        status: "Endangered"
    },

    {
        name: "Lion",
        category: "Mammal",
        population: 23000,
        status: "Vulnerable"
    },

    {
        name: "Giant Panda",
        category: "Mammal",
        population: 1864,
        status: "Vulnerable"
    },

    {
        name: "Peacock",
        category: "Bird",
        population: 100000,
        status: "Least Concern"
    },

    {
        name: "Bald Eagle",
        category: "Bird",
        population: 316000,
        status: "Least Concern"
    }

];


const speciesContainer =
    document.getElementById("speciesContainer");


function displaySpecies(speciesList) {

    speciesContainer.innerHTML = "";

    speciesList.forEach(function (animal) {

        speciesContainer.innerHTML += `

            <div class="col-md-4">

                <div class="topic-card h-100">

                    <div class="topic-number">
                        ${animal.category}
                    </div>

                    <h3>
                        ${animal.name}
                    </h3>

                    <p>
                        Population:
                        ${animal.population.toLocaleString()}
                    </p>

                    <p>
                        Status:
                        ${animal.status}
                    </p>

                </div>

            </div>

        `;

    });

}


if (speciesContainer) {

    displaySpecies(species);

}


const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.toLowerCase();

        const filteredSpecies =
            species.filter(function (animal) {

                return animal.name
                    .toLowerCase()
                    .includes(searchText);

            });

        displaySpecies(filteredSpecies);

    });

}

const categoryFilter =
    document.getElementById("categoryFilter");


if (categoryFilter) {

    categoryFilter.addEventListener("change", function () {

        const selectedCategory =
            categoryFilter.value;

        if (selectedCategory === "all") {

            displaySpecies(species);

            return;

        }

        const filteredSpecies =
            species.filter(function (animal) {

                return animal.category === selectedCategory;

            });

        displaySpecies(filteredSpecies);

    });

}

const chartCanvas =
    document.getElementById("populationChart");
if (chartCanvas && typeof Chart !== "undefined") {

    const chartLabels =
        species.map(function (animal) {

            return animal.name;

        });


    const chartData =
        species.map(function (animal) {

            return animal.population;

        });


    new Chart(chartCanvas, {

        type: "bar",

        data: {

            labels: chartLabels,

            datasets: [

                {
                    label: "Estimated Population",

                    data: chartData,

                    borderWidth: 1
                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: true

                },

                title: {

                    display: true,

                    text: "Population Comparison"

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    title: {

                        display: true,

                        text: "Population"

                    }

                },

                x: {

                    title: {

                        display: true,

                        text: "Species"

                    }

                }

            }

        }

    });

}

const tigerYears = [
    "2010",
    "2012",
    "2014",
    "2016",
    "2018",
    "2020"
];


const tigerPopulation = [
    3200,
    3400,
    3500,
    3600,
    3800,
    3900
];

const tigerCanvas =
    document.getElementById("tigerGrowthChart");


if (tigerCanvas && typeof Chart !== "undefined") {
  new Chart(tigerCanvas, {

    type: "line",

    data: {

        labels: tigerYears,

        datasets: [

            {
                label: "Tiger Population",

                data: tigerPopulation,

                tension: 0.3,

                fill: false,

                borderWidth: 2,

                pointRadius: 5
            }

        ]

    },

    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: false,

                title: {

                    display: true,

                    text: "Population"

                }

            },

            x: {

                title: {

                    display: true,

                    text: "Year"

                }

            }

        }

    }

  });
}
const ecosystemRoles = [

    {
        role: "Producers",

        description:
            "Producers create their own food using sunlight. Plants and algae are common examples."
    },

    {
        role: "Consumers",

        description:
            "Consumers depend on other organisms for food. Herbivores, carnivores and omnivores are consumers."
    },

    {
        role: "Decomposers",

        description:
            "Decomposers break down dead organisms and return nutrients to the environment."
    }

];
const roleContainer =
    document.getElementById("roleContainer");


function displayRoles() {

    ecosystemRoles.forEach(function (item) {

        roleContainer.innerHTML += `

            <div class="col-md-4">

                <div class="role-card">

                    <h3>
                        ${item.role}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                </div>

            </div>

        `;

    });

}

if(roleContainer){
  displayRoles();
} 

const balanceButton =
    document.getElementById("balanceButton");


const balanceMessage =
    document.getElementById("balanceMessage");


if (balanceButton && balanceMessage) {

    balanceButton.addEventListener("click", function () {

        balanceMessage.textContent =
            "A healthy ecosystem depends on balanced relationships between organisms and their environment.";

    });

}

const foodWebContainer =
    document.getElementById("foodWebContainer");

const foodWebResult =
    document.getElementById("foodWebResult");


if (foodWebContainer && foodWebResult) {

    const foodWeb = [

        {
            name: "Plants",
            type: "Producer",
            eats: "Plants make their own food using sunlight.",
            eatenBy: "Deer, Rabbit and Insects"
        },

        {
            name: "Deer",
            type: "Herbivore",
            eats: "Plants",
            eatenBy: "Tiger"
        },

        {
            name: "Rabbit",
            type: "Herbivore",
            eats: "Plants",
            eatenBy: "Fox"
        },

        {
            name: "Insects",
            type: "Herbivore",
            eats: "Plants",
            eatenBy: "Birds"
        },

        {
            name: "Birds",
            type: "Consumer",
            eats: "Insects",
            eatenBy: "Eagle"
        },

        {
            name: "Tiger",
            type: "Carnivore",
            eats: "Deer",
            eatenBy: "Few natural predators"
        },

        {
            name: "Fox",
            type: "Carnivore",
            eats: "Rabbit",
            eatenBy: "Larger predators"
        },

        {
            name: "Eagle",
            type: "Carnivore",
            eats: "Birds",
            eatenBy: "Few natural predators"
        }

    ];


    foodWeb.forEach(function (organism) {

        foodWebContainer.innerHTML += `

            <div class="col-md-3">

                <div class="food-card"
                     data-name="${organism.name}">

                    <h3>
                        ${organism.name}
                    </h3>

                    <p>
                        ${organism.type}
                    </p>

                </div>

            </div>

        `;

    });


    const foodCards =
        document.querySelectorAll(".food-card");


    foodCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const selectedName =
                card.getAttribute("data-name");


            const selectedOrganism =
                foodWeb.find(function (organism) {

                    return organism.name === selectedName;

                });
                if (selectedOrganism) {


                   foodWebResult.innerHTML = `

                    <h3>
                      ${selectedOrganism.name}
                     </h3>

                  <p>
                    <strong>Type:</strong>
                    ${selectedOrganism.type}
                  </p>

                  <p>
                    <strong>Food:</strong>
                    ${selectedOrganism.eats}
                  </p>

                  <p>
                    <strong>Eaten by:</strong>
                    ${selectedOrganism.eatenBy}
                  </p>

                  `;
                }  

        });

    });

}

const solutionsContainer =
    document.getElementById("solutionsContainer");


if (solutionsContainer) {

    const solutions = [

        {
            title: "Protect Natural Habitats",
            description:
                "Protect forests, wetlands and other natural habitats to support biodiversity."
        },

        {
            title: "Plant More Trees",
            description:
                "Planting and protecting trees can support biodiversity and help maintain healthy environments."
        },

        {
            title: "Reduce Pollution",
            description:
                "Reducing waste and pollution can help protect air, water, soil and living organisms."
        },

        {
            title: "Use Resources Responsibly",
            description:
                "Using water, energy and other natural resources responsibly can reduce environmental pressure."
        },

        {
            title: "Protect Wildlife",
            description:
                "Wildlife conservation can help maintain species populations and ecosystem relationships."
        },

        {
            title: "Spread Environmental Awareness",
            description:
                "Education and awareness can encourage people to make more responsible environmental choices."
        }

    ];


    solutions.forEach(function (solution, index) {

        solutionsContainer.innerHTML += `

            <div class="col-md-4">

                <div class="solution-card">

                    <div class="solution-number">
                        0${index + 1}
                    </div>

                    <h3>
                        ${solution.title}
                    </h3>

                    <p>
                        ${solution.description}
                    </p>

                </div>

            </div>

        `;

    });

}

const actionButton =
    document.getElementById("actionButton");

const actionMessage =
    document.getElementById("actionMessage");


if (actionButton && actionMessage) {

    actionButton.addEventListener("click", function () {

        actionMessage.innerHTML = `

            <div class="action-item">
                Reduce unnecessary electricity and water use.
            </div>

            <div class="action-item">
                Avoid unnecessary plastic waste.
            </div>

            <div class="action-item">
                Plant and protect trees and local vegetation.
            </div>

            <div class="action-item">
                Respect wildlife and natural habitats.
            </div>

            <div class="action-item">
                Learn about environmental issues and
                share responsible practices with others.
            </div>

        `;

    });

}
