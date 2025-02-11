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
        headerImage: "",
        storeLogo: "",
        time: "",
        location: "#02-10",
        contact: "N/A"
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

function displayStores() {
    const container = document.getElementById("store-container");

    stores.forEach((store, index) => {
        const storeCard = document.createElement("div");
        storeCard.classList.add("col-md-4", "mb-5");

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
    <div class="modal-dialog modal-dialog-centered" style="max-width: 60%;">
        <div class="modal-content overflow-hidden">
            <div class="row modal-body d-flex pe-0 pt-5 pb-5">
                <!-- Image Section -->

                <!-- Text Content Section -->
                <div class="col-6 ps-5 my-auto d-flex flex-column">
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

                <div class="col-6 pe-0">
                    <img src="assets/${store.modalImg}" class="" alt="${store.storeName}" style="width: 100%; height: auto; object-fit: cover;">
                </div>
                   
            </div>
        </div>
    </div>
</div>

        `;

        container.appendChild(storeCard);
    });
}

document.addEventListener("DOMContentLoaded", displayStores);