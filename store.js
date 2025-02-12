const stores = [
    {
        category: "F&B",
        storeName: "Huan Ju Dian",
        headerImage: "",
        storeLogo: "",
        time: "",
        modalI: "",
        location: "#01-05",
        contact: "N/A",
        description: "",
        website: ""
    },
    {
        category: "F&B",
        storeName: "Kei Kaisendon",
        headerImage: "",
        storeLogo: "",
        time: "",
        modalImg: "",
        location: "#01-06",
        contact: "N/A",
        description: "",
        website: ""
    },
    {
        category: "F&B",
        storeName: "Dough Magic",
        headerImage: "",
        storeLogo: "",
        time: "",
        modalImg: "",
        location: "#01-18",
        contact: "",
        description: "",
        website:"",

    },
    {
        category: "F&B",
        storeName: "Tomoro Coffee",
        headerImage: "tomoroImg.jpg",
        storeLogo: "tomoroLogo.png",
        modalImg: "tomoro1.jpg",
        time: "8:00am - 9:00pm Daily",
        location: "#01-25",
        contact: "N/A",
        description: "<strong>TOMORO COFFEE</strong> specialises in speciality coffee and aims to become a world-class coffee brand. TOMORO refers to “tomorrow” and it means “embrace the goodness and yearn for tomorrow”. TOMORO strives to make every good cup of coffee with heart and encourage everyone to follow their heart bravely, feel the life with heart while yearning for tomorrow.",
        website: "https://www.tomoro-coffee.sg"
    },

    {
        category: "F&B",
        storeName: "Toast & Roll by Swee Heng",
        headerImage: "",
        storeLogo: "",
        time: "",
        modalImg: "",
        location: "#01-26",
        contact: "N/A",
        description: "",
        website: ""
    },

    {
        category: "Health & Wellness",
        storeName: "The Braces Practice",
        headerImage: "",
        storeLogo: "",
        time: "",
        modalImg: "",
        location: "#02-01",
        contact: "N/A",
        description: "",
        website: ""
    },

    {
        category: "F&B",
        storeName: "Sushiro",
        headerImage: "",
        storeLogo: "",
        time: "",
        modalImg: "",
        location: "#02-02 to 07",
        contact: "N/A",
        description: "",
        website: ""
    },

    {
        category: "Health & Wellness",
        storeName: "New Hair Design",
        headerImage: "",
        storeLogo: "",
        time: "11:00am - 8:30pm Daily <br> 10:30am - 7:00pm Sun & PH",
        modalImg: "",
        location: "#02-08",
        contact: "N/A",
        description: "",
        website: ""
    },

    {
        category: "Health & Wellness",
        storeName: "Joyre TCMedi Spa",
        headerImage: "joyreImg.jpg",
        storeLogo: "joyreLogo.png",
        modalImg: "joyre1.jpg",
        time: "10:00am - 9:00pm Daily",
        location: "#02-10",
        contact: "+65 9836 6965",
        description: "<strong>Joyre</strong> is a pioneer in integrating Traditional Chinese Medicine with modern spa treatments and beauty aesthetics services while using advanced biomedical technology to deliver personalised treatments that match each individual’s body constitution, and lifestyle to bring about a sense of balance and total wellness.",
        website: "https://joyretcmedispa.com/"
    },

    {
        category: "Health & Wellness",
        storeName: "24/7 Fitness",
        headerImage: "",
        storeLogo: "",
        time: "",
        modalImg: "",
        location: "#02-11 to 17",
        contact: "N/A",
        description: "",
        website: ""
    },

    {
        category: "Health & Wellness",
        storeName: "Raffles Medical Clinic",
        headerImage: "",
        storeLogo: "rafflesLogo.jpg",
        time: "Mon-Fri (except Wed) 8:30am - 1:00pm | 2:00pm - 5:30pm | 6:30pm-9:30pm <br><br> Wed 8:30am - 1:00pm | 2:00pm - 5:30pm <br> Sat 8:30am - 1:00pm",
        modalImg: "",
        location: "#02-21",
        contact: "N/A",
        description: "",
        website: ""
    },
];

let currentPage = 1;
const storesPerPage = 6;  // Show 6 stores per page
let filteredStores = stores;  // Default to all stores


function displayStores(filteredStores) {
    const container = document.getElementById("store-container");
    const storeCount = document.getElementById("storeCount");
    const paginationContainer = document.getElementById("pagination-container");

    container.innerHTML = "";  // Clear the container before adding new stores

    // Calculate the number of stores to show for the current page
    const startIndex = (currentPage - 1) * storesPerPage;
    const endIndex = startIndex + storesPerPage;
    const storesToDisplay = filteredStores.slice(startIndex, endIndex);


    // Update the store count
    storeCount.textContent = `Showing ${storesToDisplay.length} out of ${filteredStores.length} stores`;

    if(storesToDisplay.length == filteredStores.length){
        paginationContainer.style.setProperty('display', 'none', 'important');
    }else {
        paginationContainer.style.setProperty('display', 'flex', 'important');
    }
  
   
    // Loop through the stores for the current page and display them
    storesToDisplay.forEach((store, index) => {
        const storeCard = document.createElement("div");
        storeCard.classList.add("col-lg-4", "mb-5");
        storeCard.innerHTML = `
            <div class="card shadow-sm" style="width: 100%; height: 700px;">
                <img src="assets/${store.headerImage}" class="card-img-top" alt="${store.storeName}" style="width: 100% !important; height: 300px !important; object-fit: cover !important;">
                <div class="card-body ps-4">
                    <div class="card-title d-flex justify-content-center align-item-center mb-3">
                        <img src="assets/${store.storeLogo}" alt="${store.storeName}" style="object-fit: cover; height: 100px;">
                    </div>
                    <ul style="list-style: none; padding: 0;">
                        <li class="d-flex mb-3">
                            <img src="assets/time.png" alt="Time" style="height: 30px;">
                            <p class="mb-0 ms-2 d-flex align-items-center">${store.time}</p>
                        </li>
                        <li class="d-flex mb-3">
                            <img src="assets/location.png" alt="Location" style="height: 30px;">
                            <p class="mb-0 ms-2 d-flex align-items-center">${store.location}</p>
                        </li>
                        <li class="d-flex mb-3">
                            <img src="assets/phone.png" alt="Contact" style="height: 30px;">
                            <p class="mb-0 ms-2 d-flex align-items-center">${store.contact}</p>
                        </li>
                    </ul>
                    <button class="btn btn-primary mt-4 mb-4 shadow-sm" data-bs-toggle="modal" data-bs-target="#storeModal${index}" style="background-color: #3B3A3E !important; border-style: none !important; width: 150px;">Learn more</button>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="storeModal${index}" tabindex="-1" aria-labelledby="storeModalLabel${index}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="max-width: 80%;">
                    <div class="modal-content overflow-hidden">
                        <div class="modal-header  border-0">
                            <button type="button" class="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="row modal-body d-flex pe-0 pt-2 pb-5">
                            <!-- Image Section -->
                            <div class="col-md-6 ps-md-5 my-auto d-flex flex-column justify-content-center">
                                <img src="assets/${store.storeLogo}" alt="${store.storeName}" style="object-fit: cover; width: 70%;">
                                <p class="">${store.description}</p>
                                <ul style="list-style: none; padding: 0;">
                                    <li class="d-flex mt-4 mb-3">
                                        <img src="assets/time.png" alt="Time" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center">${store.time}</p>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <img src="assets/location.png" alt="Location" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center">${store.location}</p>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <img src="assets/phone.png" alt="Contact" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center">${store.contact}</p>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <img src="assets/website.png" alt="Contact" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center"><a href=${store.website} target="_blank" style="color: blue;">${store.website}</a></p>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-6 pe-0">
                                <img src="assets/${store.modalImg}" class="" alt="${store.storeName}" style="width: 100%; height: 600px; object-fit: cover;">
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(storeCard);
    });

    // Render pagination controls
    renderPagination(filteredStores.length);
}

function renderPagination(totalStores) {
    const totalPages = Math.ceil(totalStores / storesPerPage);
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";  // Clear pagination controls

    // Create "Previous" button
    const prevButton = document.createElement("a");
    prevButton.textContent = "Previous";
    prevButton.style.textAlign = "center";
    prevButton.style.border = "none";
    prevButton.href = "#filter-section";
    prevButton.style.width = "150px";
    prevButton.classList.add('p-3', 'shadow-sm', 'prevBtn');
    prevButton.style.borderRadius = "20px";
    if(currentPage === 1) {
        prevButton.disabled;
        prevButton.style.backgroundColor = "#f0f0f0";
        prevButton.style.cursor = "default";
        prevButton.style.color = "#c0c0c0";
        prevButton.classList.remove('shadow-sm');
    }else {
        prevButton.style.backgroundColor = "#CCB186";
        prevButton.style.cursor = "pointer";
        prevButton.style.color = "white";
        prevButton.classList.add('shadow-sm');
    }
    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            displayStores(filteredStores);
        }
    });

    // Create "Next" button
    const nextButton = document.createElement("a");
    nextButton.textContent = "Next";
    nextButton.style.border = "none";
    nextButton.style.textAlign = "center";
    nextButton.style.width = "150px";
    nextButton.href = "#filter-section";
    nextButton.classList.add('p-3', 'shadow-sm', 'nextBtn');
    nextButton.style.borderRadius = "20px";
    if(currentPage === totalPages) {
        nextButton.disabled;
        nextButton.style.backgroundColor = "#f0f0f0";
        nextButton.style.cursor = "default";
        nextButton.style.color = "#c0c0c0";
        nextButton.classList.remove('shadow-sm')
    }else {
        nextButton.style.backgroundColor = "#CCB186";
        nextButton.style.cursor = "pointer";
        nextButton.style.color = "white";
        nextButton.classList.add('shadow-sm')
    }
    nextButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            displayStores(filteredStores);
        }
    });

    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(nextButton);
}



// Display all stores by default
displayStores(filteredStores);

// All Shops button
document.getElementById("allShops").addEventListener("click", function () {
    filteredStores = stores;  // All stores
    currentPage = 1;  // Reset to page 1
    displayStores(filteredStores);

    document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
    this.classList.add('active');
});

// Fashion & Apparel button
document.getElementById("fashionApparel").addEventListener("click", function () {
    filteredStores = stores.filter(store => store.category === "Fashion & Apparel");
    currentPage = 1;
    displayStores(filteredStores);

    document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
    this.classList.add('active');
});

// Health & Wellness button
document.getElementById("healthWellness").addEventListener("click", function () {
    filteredStores = stores.filter(store => store.category === "Health & Wellness");
    currentPage = 1;
    displayStores(filteredStores);

    document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
    this.classList.add('active');
});

// Food & Beverage button
document.getElementById("foodBeverage").addEventListener("click", function () {
    filteredStores = stores.filter(store => store.category === "F&B");
    currentPage = 1;
    displayStores(filteredStores);

    document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
    this.classList.add('active');
});

// Entertainment button
document.getElementById("entertainment").addEventListener("click", function () {
    filteredStores = stores.filter(store => store.category === "Entertainment");
    currentPage = 1;
    displayStores(filteredStores);

    document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
    this.classList.add('active');
});

document.getElementById("searchInput").addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();

    // Filter stores by search term and selected category
    const searchFilteredStores = filteredStores.filter(store => 
        store.storeName.toLowerCase().includes(searchTerm)
    );

    // Reset page to 1 when search changes
    currentPage = 1;

    // Update the display with the filtered results
    displayStores(searchFilteredStores);
});


