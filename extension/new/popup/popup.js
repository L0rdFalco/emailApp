const bodyEl = document.getElementById("body")

const providerJSON = [
    {
        name: "gmail",
        unreadNum: 4,
        iconName: "gmailIcon24.png"
    },
    {
        name: "yahoo",
        unreadNum: 34,
        iconName: "yahooIcon24.png"
    },
    {
        name: "outlook",
        unreadNum: 24,
        iconName: "outlookIcon24.png"
    },
    {
        name: "yandex",
        unreadNum: 14,
        iconName: "yandexIcon24.png"
    }
]

let innerHTML = ""

for (let i = 0; i < providerJSON.length; i++) {

    const name = providerJSON[i].name
    const unreadNum = providerJSON[i].unreadNum
    // const iconName = providerJSON[i].iconName
    const iconName = "icon24.png"

    const sCardHtml =
        `
    <div class="box a" id="${name}Card">
    <div class="container">
        <img src="/res/${iconName}" alt="">
        <p class="par" id="unreadNum">${unreadNum}</p>

    </div>
    <p id="provider">${name}</p>

    </div>

    `

    innerHTML += sCardHtml

}

function homeDOM() {

    bodyEl.innerHTML = `
    <div class="main">
        <div class="wrapper">
    
        ${innerHTML}
    
        </>
    </>
    
    `

}

homeDOM()
const reWriteDOM = function (provider) {

    bodyEl.innerHTML = `
    <div class="sidebar">
    <div class="brand">
        <p>E<span>mailNotif</span></p>
    </div>
    <ul class="nav-list">
        <li class="nav-item">
            <a href="#">
                <span class="nav-item__icon">
                    <ion-icon name="home-outline"></ion-icon>
                </span>
                <span id="gmailMenu" class="nav-item__text">
                    gmail
                </span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#">
                <span class="nav-item__icon">
                    <ion-icon name="chatbox-outline"></ion-icon>
                </span>
                <span class="nav-item__text">
                    yahoo
                </span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#">
                <span class="nav-item__icon">
                    <ion-icon name="people-outline"></ion-icon>
                </span>
                <span class="nav-item__text">
                    outlook
                </span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#">
                <span class="nav-item__icon">
                    <ion-icon name="person-outline"></ion-icon>
                </span>
                <span class="nav-item__text">
                    yandex
                </span>
            </a>
        </li>
    </ul>
    <ul class="nav-list">
        <li class="nav-item">
            <a href="#">
                <span class="nav-item__icon logout">
                    <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="nav-item__text">
                    compose
                </span>
            </a>
        </li>
    </ul>
</div>
<div class="container">
<img id = "homeIcon" src="/res/home24.png" alt="">
<p class ="par"> message status from all your ${provider} accounts</p>
</div>
<div>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>unread</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td width="20">1</td>
                <td>Obcasyn Maruszczak</td>
                <td><a href="#">obcasyn@example.com</a></td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dżordż Roleks-Poteflon</td>
                <td><a href="#">teflon@example.com</a></td>
                <td>15</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Klara Maruszczak</td>
                <td><a href="#">klara@example.com</a></td>
                <td>25</td>
            </tr>
            <tr>
                <td width="20">1</td>
                <td>Obcasyn Maruszczak</td>
                <td><a href="#">obcasyn@example.com</a></td>
                <td>12</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dżordż Roleks-Poteflon</td>
                <td><a href="#">teflon@example.com</a></td>
                <td>7</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Klara Maruszczak</td>
                <td><a href="#">klara@example.com</a></td>
                <td>3</td>
            </tr>
            <tr>
                <td width="20">1</td>
                <td>Obcasyn Maruszczak</td>
                <td><a href="#">obcasyn@example.com</a></td>
                <td>12</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dżordż Roleks-Poteflon</td>
                <td><a href="#">teflon@example.com</a></td>
                <td>7</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Klara Maruszczak</td>
                <td><a href="#">klara@example.com</a></td>
                <td>18</td>
            </tr>
        </tbody>
    </table>
</div>

    `

}


document.addEventListener("click", function (e) {
    const homeBtn = document.getElementById("homeIcon")
    const closestEl = e.target.closest(".box");

    if (closestEl && closestEl.id === "gmailCard") {

        reWriteDOM("gmail")

    }

    else if (homeBtn) {
        homeDOM()
    }
})


