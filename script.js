/* =====================================================
   MERA KAAM - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   SERVICES DATA
===================================================== */

const services = {

    domicile: {
        title: "🏠 Domicile",
        description:
            "Information about applying for a domicile certificate in Khyber Pakhtunkhwa.",

        requirements: [
            "CNIC / B-Form",
            "Father's CNIC",
            "Proof of residence",
            "Passport-size photographs",
            "Other documents if required by the relevant authority"
        ],

        steps: [
            "Check the required documents.",
            "Visit the relevant Citizen Facilitation Center or official portal.",
            "Submit your application and required documents.",
            "Pay the applicable fee, if required.",
            "Track your application through the official system."
        ],

        links: [
            {
                name: "🌐 KP Citizen Facilitation Portal",
                url: "https://cfc.kp.gov.pk/"
            },
            {
                name: "📄 Domicile Checklist",
                url: "https://cfc.kp.gov.pk/Application/Application/CheckList"
            },
            {
                name: "🔎 Domicile Verification",
                url: "https://cfc.kp.gov.pk/Domicile/DomicileVerification"
            }
        ]
    },


    birth: {
        title: "👶 Birth Certificate",
        description:
            "Information about birth registration and birth certificate services.",

        requirements: [
            "Parents' CNICs",
            "Hospital / birth record where applicable",
            "Child's birth details",
            "Required application form",
            "Additional documents if requested by the relevant authority"
        ],

        steps: [
            "Collect the required documents.",
            "Visit the relevant registration office or Citizen Facilitation Center.",
            "Submit the birth registration application.",
            "Provide supporting documents.",
            "Collect or track the certificate according to the official procedure."
        ],

        links: [
            {
                name: "🌐 KP Citizen Facilitation Portal",
                url: "https://cfc.kp.gov.pk/"
            },
            {
                name: "🏛️ KP Government Portal",
                url: "https://www.kp.gov.pk/"
            }
        ]
    },


    death: {
        title: "⚰️ Death Certificate",
        description:
            "Information about death registration and death certificate services.",

        requirements: [
            "Deceased person's CNIC where applicable",
            "Applicant's CNIC",
            "Death information / record",
            "Hospital record where applicable",
            "Required application documents"
        ],

        steps: [
            "Collect the required documents.",
            "Visit the relevant registration office or Citizen Facilitation Center.",
            "Submit the death registration application.",
            "Provide supporting documents.",
            "Follow the official procedure for certificate collection."
        ],

        links: [
            {
                name: "🌐 KP Citizen Facilitation Portal",
                url: "https://cfc.kp.gov.pk/"
            },
            {
                name: "🏛️ KP Government Portal",
                url: "https://www.kp.gov.pk/"
            }
        ]
    },


    marriage: {
        title: "💍 Marriage Certificate",
        description:
            "Information about marriage registration and marriage certificate services.",

        requirements: [
            "CNICs of bride and groom",
            "Nikah Nama / marriage record",
            "Witness information where required",
            "Required application documents",
            "Additional documents if requested"
        ],

        steps: [
            "Prepare the required documents.",
            "Visit the relevant registration office or Citizen Facilitation Center.",
            "Submit the marriage registration documents.",
            "Complete the required verification.",
            "Receive or track the certificate according to the official procedure."
        ],

        links: [
            {
                name: "🌐 KP Citizen Facilitation Portal",
                url: "https://cfc.kp.gov.pk/"
            },
            {
                name: "🏛️ KP Government Portal",
                url: "https://www.kp.gov.pk/"
            }
        ]
    },


    divorce: {
        title: "📄 Divorce Certificate",
        description:
            "Information about divorce registration and related certificate services.",

        requirements: [
            "Applicant's CNIC",
            "Relevant divorce / legal record",
            "Required application form",
            "Supporting documents",
            "Additional documents if requested by the authority"
        ],

        steps: [
            "Prepare the required documents.",
            "Visit the relevant registration authority.",
            "Submit the application and supporting documents.",
            "Complete any required verification.",
            "Collect or track the certificate according to the official procedure."
        ],

        links: [
            {
                name: "🌐 KP Citizen Facilitation Portal",
                url: "https://cfc.kp.gov.pk/"
            },
            {
                name: "🏛️ KP Government Portal",
                url: "https://www.kp.gov.pk/"
            }
        ]
    },


    vehicle: {
        title: "🚗 Vehicle Services",
        description:
            "Information about vehicle registration, ownership transfer and verification.",

        requirements: [
            "CNIC",
            "Vehicle registration documents",
            "Relevant ownership documents",
            "Sale / transfer documents where applicable",
            "Additional documents required by Excise & Taxation"
        ],

        steps: [
            "Prepare the vehicle and ownership documents.",
            "Check the applicable procedure.",
            "Submit the required application.",
            "Complete verification and payment where applicable.",
            "Follow the official process for registration or transfer."
        ],

        links: [
            {
                name: "🚗 KP Excise & Taxation",
                url: "https://www.kpexcise.gov.pk/"
            },
            {
                name: "🌐 KP Citizen Facilitation Portal",
                url: "https://cfc.kp.gov.pk/"
            }
        ]
    },


    jobs: {
        title: "💼 Government Jobs",
        description:
            "Find official information about government employment opportunities in KP.",

        requirements: [
            "Valid CNIC",
            "Educational certificates",
            "Domicile where required",
            "Updated CV / personal information",
            "Other documents mentioned in the job advertisement"
        ],

        steps: [
            "Open the official job portal.",
            "Search available vacancies.",
            "Read the advertisement carefully.",
            "Prepare the required documents.",
            "Submit the application before the closing date."
        ],

        links: [
            {
                name: "💼 KP Online Job Portal",
                url: "https://jobs.kp.gov.pk/"
            }
        ]
    },


    education: {
        title: "🎓 Education",
        description:
            "Useful official education resources and departments in Khyber Pakhtunkhwa.",

        requirements: [
            "Requirements depend on the specific education service.",
            "Keep your CNIC or B-Form available where required.",
            "Keep educational certificates and records available."
        ],

        steps: [
            "Identify the education service you need.",
            "Open the relevant official department website.",
            "Check the current requirements.",
            "Submit the application through the official procedure."
        ],

        links: [
            {
                name: "🎓 KP Elementary & Secondary Education",
                url: "https://kpese.gov.pk/"
            },
            {
                name: "🏛️ KP Higher Education Department",
                url: "https://hed.gkp.pk/"
            },
            {
                name: "🌐 KP Government Portal",
                url: "https://www.kp.gov.pk/"
            }
        ]
    },


    health: {
        title: "🏥 Health",
        description:
            "Useful official health departments and healthcare information in KP.",

        requirements: [
            "Requirements depend on the health service.",
            "Keep CNIC and relevant medical documents where required.",
            "Check the official department for current procedures."
        ],

        steps: [
            "Identify the health service you need.",
            "Open the relevant official website.",
            "Check the current procedure and requirements.",
            "Follow the official instructions."
        ],

        links: [
            {
                name: "🏥 KP Health Department",
                url: "https://www.healthkp.gov.pk/"
            },
            {
                name: "🏥 KP Health Care Commission",
                url: "https://hcc.kp.gov.pk/"
            },
            {
                name: "🌐 KP Government Portal",
                url: "https://www.kp.gov.pk/"
            }
        ]
    },


    complaints: {
        title: "📢 Complaints",
        description:
            "Find official channels for submitting complaints and grievances.",

        requirements: [
            "CNIC or contact information where required",
            "Details of your complaint",
            "Relevant department information",
            "Supporting documents or evidence where applicable"
        ],

        steps: [
            "Clearly describe your complaint.",
            "Collect relevant supporting information.",
            "Use the official complaint channel.",
            "Submit your complaint.",
            "Keep the complaint/reference number for tracking."
        ],

        links: [
            {
                name: "📢 KP Complaint Portal",
                url: "https://complaintshd.kp.gov.pk/"
            },
            {
                name: "🏛️ KP Government Portal",
                url: "https://www.kp.gov.pk/"
            }
        ]
    }

};


/* =====================================================
   SEARCH SERVICE
===================================================== */
function searchService() {

    const input = document.getElementById("searchInput");

    const query = input.value.trim().toLowerCase();

    const resultSection =
        document.getElementById("searchResultSection");

    const result =
        document.getElementById("searchResult");


    if (query === "") {

        resultSection.style.display = "none";

        result.innerHTML = "";

        return;
    }


    /*
        Different words that can help
        users find the same service
    */

    const keywords = {

        domicile: [
            "domicile",
            "domicil",
            "residence",
            "permanent residence"
        ],

        birth: [
            "birth",
            "birth certificate",
            "baby",
            "child",
            "paidaish",
            "bacha"
        ],

        death: [
            "death",
            "death certificate",
            "wafat",
            "inteqal"
        ],

        marriage: [
            "marriage",
            "marriage certificate",
            "nikah",
            "shadi"
        ],

        divorce: [
            "divorce",
            "divorce certificate",
            "talaq"
        ],

        vehicle: [
            "vehicle",
            "car",
            "vehicle transfer",
            "registration",
            "verification",
            "gaari",
            "gari",
            "car registration"
        ],

        jobs: [
            "job",
            "jobs",
            "government job",
            "employment",
            "nokri",
            "naukri"
        ],

        education: [
            "education",
            "school",
            "college",
            "university",
            "student",
            "taleem"
        ],

        health: [
            "health",
            "hospital",
            "doctor",
            "medical",
            "sehat"
        ],

        complaints: [
            "complaint",
            "complaints",
            "grievance",
            "shikayat"
        ]

    };


    let foundKey = null;


    /*
        First search through keywords
    */

    for (const key in keywords) {

        const words = keywords[key];

        for (const word of words) {

            if (word.includes(query) ||
                query.includes(word)) {

                foundKey = key;

                break;
            }

        }

        if (foundKey) {
            break;
        }
    }


    /*
        If keyword search didn't find anything,
        search through service title/description
    */

    if (!foundKey) {

        for (const key in services) {

            const service = services[key];

            const searchableText =
                (
                    service.title +
                    " " +
                    service.description
                ).toLowerCase();


            if (searchableText.includes(query)) {

                foundKey = key;

                break;
            }

        }

    }


    /*
        Show result
    */

    if (foundKey) {

        const service =
            services[foundKey];


        result.innerHTML = `

            <div class="search-result-card">

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

                <button
                    onclick="openService('${foundKey}')"
                >
                    View Details →
                </button>

            </div>

        `;

    } else {

        result.innerHTML = `

            <div class="search-result-card">

                <h3>
                    🔍 Service Not Found
                </h3>

                <p>
                    We could not find this service.
                    Try searching for Domicile,
                    Birth, Vehicle, Jobs, Education
                    or Health.
                </p>

            </div>

        `;

    }


    resultSection.style.display = "block";


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}



/* =====================================================
   ENTER KEY SEARCH
===================================================== */

function handleEnter(event) {

    if (event.key === "Enter") {

        searchService();

    }

}


/* =====================================================
   OPEN SERVICE
===================================================== */

function openService(serviceKey) {

    if (!services[serviceKey]) {

        return;

    }

    showService(serviceKey);

}


/* =====================================================
   SHOW SERVICE DETAILS
===================================================== */

function showService(serviceKey) {

    const service =
        services[serviceKey];

    const detailsSection =
        document.getElementById("serviceDetails");

    const content =
        document.getElementById("serviceDetailsContent");


    let requirementsHTML = "";

    service.requirements.forEach(item => {

        requirementsHTML += `
            <li>${item}</li>
        `;

    });


    let stepsHTML = "";

    service.steps.forEach(item => {

        stepsHTML += `
            <li>${item}</li>
        `;

    });


    let linksHTML = "";

    service.links.forEach(link => {

        linksHTML += `

            <a
                href="${link.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="official-link"
            >
                ${link.name}
            </a>

        `;

    });


    content.innerHTML = `

        <div class="service-detail-card">

            <h1>
                ${service.title}
            </h1>

            <p class="description">
                ${service.description}
            </p>


            <div class="detail-columns">


                <div class="detail-box">

                    <h3>
                        📋 Requirements
                    </h3>

                    <ul>
                        ${requirementsHTML}
                    </ul>

                </div>


                <div class="detail-box">

                    <h3>
                        📝 Basic Steps
                    </h3>

                    <ul>
                        ${stepsHTML}
                    </ul>

                </div>


            </div>


            <div class="official-links">

                <h3>
                    🔗 Official Sources
                </h3>

                ${linksHTML}

            </div>


            <div class="important-box">

                <strong>
                    ⚠️ Important
                </strong>

                <p>
                    Requirements, fees and procedures can
                    change. Please verify the latest
                    information with the relevant official
                    department before applying.
                </p>

            </div>


        </div>

    `;


    detailsSection.style.display = "block";


    detailsSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   GO BACK
===================================================== */

function goBack() {

    const detailsSection =
        document.getElementById("serviceDetails");

    detailsSection.style.display = "none";


    document
        .getElementById("services")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   OFFICE DATA
===================================================== */

const offices = {

    peshawar: {

        city: "Peshawar",

        name:
            "Citizen Facilitation Center - Peshawar",

        address:
            "Peshawar, Khyber Pakhtunkhwa",

        map:
            "https://www.google.com/maps/search/?api=1&query=Citizen+Facilitation+Center+Peshawar"

    },


    mardan: {

        city: "Mardan",

        name:
            "Citizen Facilitation Center - Mardan",

        address:
            "Mardan, Khyber Pakhtunkhwa",

        map:
            "https://www.google.com/maps/search/?api=1&query=Citizen+Facilitation+Center+Mardan"

    },


    swat: {

        city: "Swat",

        name:
            "Citizen Facilitation Center - Swat",

        address:
            "Swat, Khyber Pakhtunkhwa",

        map:
            "https://www.google.com/maps/search/?api=1&query=Citizen+Facilitation+Center+Swat"

    },


    abbottabad: {

        city: "Abbottabad",

        name:
            "Citizen Facilitation Center - Abbottabad",

        address:
            "Abbottabad, Khyber Pakhtunkhwa",

        map:
            "https://www.google.com/maps/search/?api=1&query=Citizen+Facilitation+Center+Abbottabad"

    }

};


/* =====================================================
   SHOW OFFICE FINDER
===================================================== */

function showOfficeFinder() {

    const officeSection =
        document.getElementById("office-section");


    officeSection.style.display = "block";


    officeSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   FIND OFFICE
===================================================== */

function findOffice() {

    const city =
        document.getElementById("citySelect").value;

    const result =
        document.getElementById("officeResult");


    if (city === "") {

        result.innerHTML = `

            <div class="office-result-card">

                <h3>
                    Please Select a City
                </h3>

                <p>
                    Select your city from the list above.
                </p>

            </div>

        `;

        return;
    }


    const office =
        offices[city];


    result.innerHTML = `

        <div class="office-result-card">

            <h3>
                📍 ${office.name}
            </h3>

            <p>
                <strong>City:</strong>
                ${office.city}
            </p>

            <p>
                <strong>Address:</strong>
                ${office.address}
            </p>

            <a
                href="${office.map}"
                target="_blank"
                rel="noopener noreferrer"
                class="map-button"
            >
                🗺️ Open in Google Maps
            </a>

        </div>

    `;

}