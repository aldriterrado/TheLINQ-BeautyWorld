const stores = [
    {
        category: "F&B",
        storeName: "Huan Ju Dian",
        headerImage: "",
        storeLogo: "",
        time: "",
        location: "#01-05",
        contact: "N/A"
    },
    {
        category: "F&B",
        storeName: "Kei Kaisendon",
        headerImage: "",
        storeLogo: "",
        time: "",
        location: "#01-06",
        contact: "N/A"
    },
    {
        category: "F&B",
        storeName: "Tomoro Coffee",
        headerImage: "tomoroImg.jpg",
        storeLogo: "tomoroLogo.png",
        modalImg: "tomoro1.jpg",
        time: "8:00am - 9:00pm",
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
        location: "#01-26",
        contact: "N/A"
    },

    {
        category: "Health & Wellness",
        storeName: "The Braces Practice",
        headerImage: "",
        storeLogo: "",
        time: "",
        location: "#02-01",
        contact: "N/A"
    },

    {
        category: "F&B",
        storeName: "Sushiro",
        headerImage: "",
        storeLogo: "",
        time: "",
        location: "#02-02 to 07",
        contact: "N/A"
    },

    {
        category: "Health & Wellness",
        storeName: "New Hair Design",
        headerImage: "",
        storeLogo: "",
        time: "",
        location: "#02-08",
        contact: "N/A"
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
        location: "#02-11 to 17",
        contact: "N/A"
    },

    {
        category: "Health & Wellness",
        storeName: "Raffles Medical Clinic",
        headerImage: "",
        storeLogo: "",
        time: "",
        location: "#02-21",
        contact: "N/A"
    },
];

function displayStores(filterCategory = "All Shops") {
    const container = document.getElementById("store-container");
    const storeCount = document.getElementById("storeCount");
    container.innerHTML = ""; // Clear the container before adding new stores

    // Filter stores based on the selected category
    const filteredStores = filterCategory === "All Shops" 
        ? stores 
        : stores.filter(store => store.category === filterCategory);

    // Update the store count
    storeCount.textContent = filteredStores.length;

    // Loop through the filtered stores and display them
    filteredStores.forEach((store, index) => {
        const storeCard = document.createElement("div");
        storeCard.classList.add("col-lg-4", "mb-5");

        storeCard.innerHTML = `
            <div class="card shadow-sm" style="width: 100%">
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
                    <button class="btn btn-primary mt-4 mb-4 shadow-sm" data-bs-toggle="modal" data-bs-target="#storeModal${index}" style="background-color: #CCB186 !important; border-style: none !important; width: 150px;">Learn more</button>
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
}

// Event listeners for category buttons
document.addEventListener("DOMContentLoaded", function () {

    
    // Display all stores by default
    displayStores("All Shops");

    // All Shops button
    const allShopsLink = document.getElementById("allShops");

    // Add event listener to the "All Shops" link
    allShopsLink.addEventListener("click", function () {
        // Display all stores
        displayStores("All Shops");

        // Remove the 'active' class from all filter buttons
        document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));

        // Add 'active' class to the "All Shops" link
        allShopsLink.classList.add('active');
    });

        // Fashion & Apparel button
    document.getElementById("fashionApparel").addEventListener("click", function () {
        displayStores("Fashion & Apparel");

        // Remove 'active' class from all filter buttons and add to the clicked one
        document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
        document.getElementById("fashionApparel").classList.add('active');
    });

    // Health & Wellness button
    document.getElementById("healthWellness").addEventListener("click", function () {
        displayStores("Health & Wellness");

        // Remove 'active' class from all filter buttons and add to the clicked one
        document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
        document.getElementById("healthWellness").classList.add('active');
    });

    // Food & Beverage button
    document.getElementById("foodBeverage").addEventListener("click", function () {
        displayStores("F&B");

        // Remove 'active' class from all filter buttons and add to the clicked one
        document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
        document.getElementById("foodBeverage").classList.add('active');
    });

    // Entertainment button
    document.getElementById("entertainment").addEventListener("click", function () {
        displayStores("Entertainment");

        // Remove 'active' class from all filter buttons and add to the clicked one
        document.querySelectorAll(".filter-btn").forEach(link => link.classList.remove('active'));
        document.getElementById("entertainment").classList.add('active');
    });

    // Optional: Handle search input if needed
    document.getElementById("searchInput").addEventListener("input", function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredStores = stores.filter(store => store.storeName.toLowerCase().includes(searchTerm));
        displayStores(filteredStores);
    });
});