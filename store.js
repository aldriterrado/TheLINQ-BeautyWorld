const stores = [
    {
        category: "F&B",
        storeName: "Lao Jiang Superior Soup",
        headerImage: "laojiangImg.jpg",
        storeLogo: "laojiangLogo.png",
        time: "<p>Monday - Sunday <br> 10:00am - 11:00pm</p>",
        modalImg: "laojiang1.png",
        location: "#01-05",
        contact: "+65 8896 7623",
        description: "Lao Jiang Superior Soup is a Singaporean brand established in 2011, specializing in dry-tossed noodles and slow-simmered soups. We take pride in our housemade traditional dishes, such as vinegar pork trotter, and our signature sauces, crafted with authentic local flavors. Serving both locals and tourists, we bring the taste of Singapore’s rich culinary heritage to every meal.",
        website: "https://order.laojiangsuperiorsoup.com/"
    },
    {
        category: "F&B",
        storeName: "Kei Kaisendon",
        headerImage: "keiImg.jpg",
        storeLogo: "keiLogo.png",
        time: '<p>Monday - Sunday <br> 11:00am - 10:00pm <br><br> <span style="color: maroon;">*Last Order (9:30pm)</span></p>',
        modalImg: "kei1.jpg",
        location: "#01-06",
        contact: "TBA",
        description: `Kei Kaisendon is an authentic Japanese
                    restaurant that serves Kaisendon [Sashimi rice bowl] and various types of doburies, udon and side dishes.
                        `,        
        website: "https://www.keikaisendon.com/"
    },
    {
        category: "F&B",
        storeName: "Dough Magic",
        headerImage: "doughImg.webp",
        storeLogo: "doughLogo.png",
        time: "Coming Soon",
        modalImg: "dough1.webp",
        location: "#01-18",
        contact: "TBA",
        description: "What’s one thing that unites us all? Nostalgia. <br><br>Ms Yang Guang grew up in the beautiful coastal city Dalian in China. After immigrating to Singapore, she missed the taste of authentic Chinese pastries and found it difficult to adjust to the new and different foods. Staples like Mantou (Plain Bun) and dumplings were especially difficult for her to go without. <br><br>The best cure for homesickness is comfort food. Ms Yang Guang built the brand “扑面而来” to bring out the essence of Chinese pastries. Considering the importance of traditional production methods, she visited Taiwan to further enhance her knowledge. Through this trip, she was able to grasp the art of making Chinese pastries as well as choosing the best ingredients and bringing out the best of their natural flavors. Through countless sleepless nights testing and developing, the recipes were made and are available to you in our stores today.",
        website:"https://doughmagic.com/",

    },
    {
        category: "F&B",
        storeName: "Tomoro Coffee",
        headerImage: "tomoroImg.jpg",
        storeLogo: "tomoroLogo.png",
        modalImg: "tomoro1.jpg",
        time: "Monday - Sunday <br> 8:00am - 9:00pm",
        location: "#01-25",
        contact: "TBA",
        description: "TOMORO COFFEE specialises in speciality coffee and aims to become a world-class coffee brand. TOMORO refers to “tomorrow” and it means “embrace the goodness and yearn for tomorrow”. TOMORO strives to make every good cup of coffee with heart and encourage everyone to follow their heart bravely, feel the life with heart while yearning for tomorrow.",
        website: "https://www.tomoro-coffee.sg"
    },

    {
        category: "F&B",
        storeName: "Toast & Roll by Swee Heng",
        headerImage: "toastrollImg.jpg",
        storeLogo: "toastrollLogo.jpg",
        time: "Coming Soon",
        modalImg: "toastroll1.jpg",
        location: "#01-26",
        contact: "TBA",
        description: "Toast & Roll focuses on quality, using premium ingredients like Japanese flour and French butter. While Westies can conveniently visit, others may hope for more outlets to open across Singapore in the future",
        website: "https://www.instagram.com/toast_rollsg/"
    },

    {
        category: "Health & Wellness",
        storeName: "The Braces Practice",
        headerImage: "bracesImg.png",
        storeLogo: "bracesLogo.jpg",
        time: '<p>Monday - Friday <br> 11:00am - 8:00pm <br><br> Saturday <br> 9:00am - 5:00pm <br><br> <span style="color: maroon;">*Store is closed on Sunday</span></p>',
        modalImg: "braces1.webp",
        location: "#02-01",
        contact: "+65 8083 9293",
        closingDate: "Sunday",
        description: 'The Braces Practice specialize in orthodontic treatments, offering Invisalign/Metal/Ceramic/Damon braces and for effective teeth straightening. We also provide general dental services, including scaling & polishing, extractions, filings, wisdom tooth surgery, implants, whitening, and root canal treatments. <br><br>Additionally, we offer specialized braces for jaw surgery and custom retainers to maintain alignment post-treatment. <br><br>With tailored Student Packages, we make quality orthodontic care accessible to all. <br><br>Visit <a href="https://www.thebracespractice.com/" style="color: blue;" target="_blank">The Braces Practice</a> to lear more or book an appoinment.',
        website: "https://www.thebracespractice.com/"
    },

    {
        category: "F&B",
        storeName: "Sushiro",
        headerImage: "sushiroImg.webp",
        storeLogo: "sushiroLogo.png",
        time: "Coming Soon",
        modalImg: "sushiro1.webp",
        location: "#02-02 to 07",
        contact: "TBA",
        description: "Sushiro Singapore is part of the internationally renowned Sushiro Group, founded in Japan in 1984. Our journey began with a simple yet ambitious vision: to serve the freshest, most delectable sushi to our customers while honouring the rich traditions of Japanese cuisine. <br><br> Over the years, our dedication to this vision has allowed us to grow and expand, and we are now proud to operate multiple branches across Singapore. Each location is designed to offer a unique dining experience, blending contemporary aesthetics with the timeless beauty of Japanese culture.",
        website: "https://sushirosg.org/"
    },

    {
        category: "Beauty & Personal Care",
        storeName: "New Hair Design",
        headerImage: "newhairImg.jpeg",
        storeLogo: "newhairLogo.png",
        time: '<p>Monday - Saturday <br> 11:00am - 8:30pm <br><br> Sunday & Public Holiday <br> 10:30am - 7:00pm</p>',
        modalImg: "newhair1.jpeg",
        location: "#02-08",
        contact: "TBA",
        description: "New Hair Design don’t just create hairstyles for our clients—we help them find the most authentic way to express themselves. In this era of individualism, a hairstyle is not just an external enhancement but a reflection of one’s inner strength and self-expression. We believe every hairstyle has its own unique soul, just as each person is one of a kind. <br><br>With years of experience, we know that true beauty comes from inner confidence and fulfillment, not just surface appearance. We always listen carefully, taking time to understand each client’s personal style, lifestyle, and inner desires. Every design is a two-way conversation, aimed at helping our clients discover their most authentic and beautiful selves.",
        website: "https://newhairdesign.com.sg/"
    },

    {
        category: "Health & Wellness",
        storeName: "Joyre TCMedi Spa",
        headerImage: "joyreImg.jpg",
        storeLogo: "joyreLogo.jpg",
        modalImg: "joyre1.jpg",
        time: "Monday - Sunday <br> 10:00am - 9:00pm",
        location: "#02-10",
        contact: "+65 9836 6965",
        description: "Joyre is a pioneer in integrating Traditional Chinese Medicine with modern spa treatments and beauty aesthetics services while using advanced biomedical technology to deliver personalised treatments that match each individual’s body constitution, and lifestyle to bring about a sense of balance and total wellness.",
        website: "https://joyretcmedispa.com/"
    },

    {
        category: "Health & Wellness",
        storeName: "24/7 Fitness",
        headerImage: "247Img.jpg",
        storeLogo: "247Logo.png",
        time: "Monday - Sunday <br> Open at all times",
        modalImg: "2471.jpg",
        location: "#02-11 to 17",
        contact: "TBA",
        description: "24/7 FITNESS are proud to redefine the fitness experience by offering state-of-the-art fitness facilities with unparalleled convenience. Membership grants 24-hour access to all our facilities, spanning Singapore, Hong Kong, Chinese Mainland, Macau, Taiwan and beyond. Our smart facial recognition gym system ensures seamless access to our facilities without any joining fee or prepayment.",
        website: "https://sg.247.fitness/"
    },

    {
        category: "Health & Wellness",
        storeName: "Raffles Medical Clinic",
        headerImage: "rafflesImg.jpg",
        storeLogo: "rafflesLogo.jpg",
        time: '<p>Monday - Friday (except Wednesday) <br> 8:30am - 1:00pm <br> 2:00pm - 5:30pm <br> 6:30pm - 9:30pm <br><br> Wednesday <br> 8:30am - 1:00pm <br> 2:00pm - 5:30pm <br><br> Satuday <br> 8:30am - 1:00pm <br><br> <span style="color: maroon;">*Store is closed on Sunday</span></p>',
        modalImg: "raffles1.jpg",
        location: "#02-21",
        contact: "TBA",
        description: "Raffles Medical Group (RMG) is a leading integrated private healthcare provider in Asia, operating medical facilities in 14 cities in Singapore, China, Japan, Vietnam and Cambodia. It is the only Singapore-owned private medical provider in Singapore that owns and operates a fully integrated healthcare organisation comprising a tertiary hospital, a network of family medicine and dental clinics, insurance services, Japanese and Traditional Chinese Medicine clinics, and a consumer healthcare division. <br><br>Founded in 1976 with two clinics in central Singapore, RMG has grown consistently over the years to serve over 2 million patients and 7,000 corporate clients each year. RMG has a staff strength of more than 2,700, including close to 430 multi-specialty physicians.",
        website: "http://www.rafflesmedicalgroup.com/"
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
            <div class="card shadow-sm" style="width: 100%;">
                <img src="assets/${store.headerImage}" class="card-img-top" alt="${store.storeName}" style="width: 100% !important; height: 250px !important; object-fit: cover !important;">
                <div class="card-body ps-4">
                    <div class="card-title d-flex justify-content-center align-item-center mb-4" style="height: 75px;">
                        <img src="assets/${store.storeLogo}" alt="${store.storeName}" style="object-fit: cover;">
                    </div>
                    <div style="height: 400px">
                    <ul style="list-style: none; padding: 0;">
                        <li class="d-flex mb-3">
                            <img src="assets/store.png" alt="Time" style="height: 30px;">
                            <p class="mb-0 ms-2 d-flex align-items-center">${store.storeName}</p>
                        </li>
                        <li class="d-flex mb-3">
                            <img src="assets/time.png" alt="Time" style="height: 30px;">
                            <p class="mb-0 ms-2 d-flex align-items-center">${store.time}</p>
                        </li>
                        <li class="d-flex mb-3">
                            <img src="assets/location.png" alt="Location" style="height: 30px;">
                            <p class="mb-0 ms-2 d-flex align-items-center">${store.location}</p>
                        </li>
                        <!---- <li class="d-flex mb-3">
                            <img src="assets/phone.png" alt="Contact" style="height: 30px;">
                            <p class="mb-0 ms-2 d-flex align-items-center">${store.contact}</p>
                        </li> ---!>
                    </ul>
                    </div>
                    <button class="btn btn-primary mt-5 mb-4 shadow-sm" data-bs-toggle="modal" data-bs-target="#storeModal${index}" style="background-color: #3B3A3E !important; border-style: none !important; width: 150px;">Learn more</button>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="storeModal${index}" tabindex="-1" aria-labelledby="storeModalLabel${index}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width: 80%;">
                    <div class="modal-content overflow-hidden">
                        <div class="modal-header  border-0">
                            <button type="button" class="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="row modal-body d-flex pe-0 pt-2 pb-5">
                            <!-- Image Section -->
                            <div class="col-md-6 ps-md-5 my-auto d-flex flex-column justify-content-center store-details-container">
                                <img class="mb-3" src="assets/${store.storeLogo}" alt="${store.storeName}" style="object-fit: cover; width: 70%;">
                                <h5><strong>${store.storeName}</strong></h5>
                                <p class="mt-3">${store.description}</p>
                                <ul style="list-style: none; padding: 0;">
                                    <li class="d-flex mt-4 mb-3">
                                        <img src="assets/time.png" alt="Time" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center">${store.time}</p>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <img src="assets/location.png" alt="Location" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center">${store.location}</p>
                                    </li>
                                    <!----<li class="d-flex mb-3">
                                        <img src="assets/phone.png" alt="Contact" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center">${store.contact}</p>
                                    </li>----!>
                                    <li class="d-flex mb-3">
                                        <img src="assets/website.png" alt="Contact" style="height: 30px;">
                                        <p class="mb-0 ms-2 d-flex align-items-center"><a href=${store.website} target="_blank" style="color: blue;">${store.website}</a></p>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-6 pe-0 modal-img-container">
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
document.getElementById("beautyPersonal").addEventListener("click", function () {
    filteredStores = stores.filter(store => store.category === "Beauty & Personal Care");
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


