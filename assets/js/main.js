function getStarted() {
    alert('Getting started...');
}

function openChat() {
    alert('Chat opened...');
}

function loadPartials() {
    return Promise.all([
        fetch('partials/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
                updateHeader();
            }),
        fetch('partials/footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
                addFooterEventListeners();
            })
    ]);
}

function updateHeader() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const logoContainer = document.querySelector('.logo');

    if (loggedInUser) {
        const loginSignupDiv = document.querySelector('.login-signup');
        if (loginSignupDiv) {
            loginSignupDiv.innerHTML = `
                <span><img src="assets/images/account.png" alt="User Icon" class="user-icon"> ${loggedInUser}</span>
            `;
        }

        if (logoContainer && !document.querySelector('.school-logo')) {
            const schoolLogo = document.createElement('img');
            schoolLogo.src = "assets/images/school-logo.png";
            schoolLogo.alt = "School Logo";
            schoolLogo.className = "school-logo";

            logoContainer.parentElement.insertBefore(schoolLogo, logoContainer);
        }
    } else {
        const schoolLogo = document.querySelector('.school-logo');
        if (schoolLogo) {
            schoolLogo.remove();
        }
    }
}

function addFooterEventListeners() {
    console.log("Adding event listener to logout button");
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            logoutUser();
        });
    } else {
        console.error("Logout button not found");
    }
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', () => {
    loadPartials().then(() => {
        console.log("Partials loaded successfully");
        const getStartedButton = document.querySelector("#footer button");
        if (getStartedButton) {
            getStartedButton.addEventListener("click", getStarted);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadPartials().then(() => {
        console.log("Partials loaded successfully");
        addFooterEventListeners();
        addTablesForLoggedInUser();
    });
});

function loadDashboardCSS() {
    if (!document.getElementById("dashboardCSS")) {
        const link = document.createElement("link");
        link.id = "dashboardCSS";
        link.rel = "stylesheet";
        link.href = "assets/css/dashboard.css";
        document.head.appendChild(link);
    }
}

function addTablesForLoggedInUser() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        loadDashboardCSS();
        const tableContent = `
            <div class="table-container">
                <h2>Pending</h2>
                <div class="table-scroll">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Pending</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="table-container">
                <h2>Done</h2>
                <div class="table-scroll">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Done</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                            <tr><td>kanal na barado..</td><td>09/24/24</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        const servicesSection = document.querySelector('.services');
        if (servicesSection) {
            servicesSection.insertAdjacentHTML('afterend', tableContent);
        }
    }
}
