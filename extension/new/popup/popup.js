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

const providerDOM = function (provider) {

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
                    reply
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
            <tr class = "tabRow"  id="1">
                <td width="20">1</td>
                <td>Obcasyn Maruszczak</td>
                <td><a href="#">obcasyn@example.com</a></td>
                <td>0</td>
            </tr>
            <tr  class = "tabRow" id="2">
                <td>2</td>
                <td>Dżordż Roleks-Poteflon</td>
                <td><a href="#">teflon@example.com</a></td>
                <td>15</td>
            </tr>
            <tr class = "tabRow"  id="3">
                <td>3</td>
                <td>Klara Maruszczak</td>
                <td><a href="#">klara@example.com</a></td>
                <td>25</td>
            </tr>
            <tr  class = "tabRow" id="4">
                <td width="20">4</td>
                <td>Obcasyn Maruszczak</td>
                <td><a href="#">obcasyn@example.com</a></td>
                <td>12</td>
            </tr>
            <tr  class = "tabRow" id="5">
                <td>5</td>
                <td>Dżordż Roleks-Poteflon</td>
                <td><a href="#">teflon@example.com</a></td>
                <td>7</td>
            </tr>
            <tr class = "tabRow"  id="6">
                <td>6</td>
                <td>Klara Maruszczak</td>
                <td><a href="#">klara@example.com</a></td>
                <td>3</td>
            </tr>
            <tr  class = "tabRow" id="7">
                <td width="20">7</td>
                <td>Obcasyn Maruszczak</td>
                <td><a href="#">obcasyn@example.com</a></td>
                <td>12</td>
            </tr>
            <tr  class = "tabRow" id="8">
                <td>8</td>
                <td>Dżordż Roleks-Poteflon</td>
                <td><a href="#">teflon@example.com</a></td>
                <td>7</td>
            </tr>
            <tr  class = "tabRow" id="9">
                <td>9</td>
                <td>Klara Maruszczak</td>
                <td><a href="#">klara@example.com</a></td>
                <td>18</td>
            </tr>
        </tbody>
    </table>
</div>

    `

}

const unredEmailsDOM = function (emailID) {

    bodyEl.innerHTML = `
    <div class="email-wrapper">


    <div class="row">
        <div class="column column-2">
            <button class="email-button"> star</button>
            <button class="email-button">see thread</button>

        </div>
        <div class="column column-4">

            <p class="email-par">from:dfsdfsd@sdgfsdg.com</p>
        </div>
        <div class="column column-2">
            <button class="email-button"> read</button>
            <button class="email-button"> archive</button>
        </div>
        <div class="column column-3">
            <button class="email-button">reply</button>
            <button class="email-button">del</button>
            <button class="email-button">12:12am</button>

        </div>
        <div class="column column-1">
            <button class="email-button"> spam</button>

        </div>
    </div>

    <div class="row">
        <div class="column column-2">
            <img class="email-img" src="/res/icon64.png" alt="">
        </div>
        <div class="column column-10">

            <p class="email-par">There is nothing more common than the wish to be remarkable There is nothing
                more
                common
                than the
                wish to be remarkable There is nothing more common than the wish to be remarkable</p>
        </div>
    </div>

</div>

<div class="email-wrapper">


<div class="row">
    <div class="column column-2">
        <button class="email-button"> star</button>
        <button class="email-button">see thread</button>

    </div>
    <div class="column column-4">

        <p class="email-par">from:dfsdfsd@sdgfsdg.com</p>
    </div>
    <div class="column column-2">
        <button class="email-button"> read</button>
        <button class="email-button"> archive</button>
    </div>
    <div class="column column-3">
        <button class="email-button">reply</button>
        <button class="email-button">del</button>
        <button class="email-button">12:12am</button>

    </div>
    <div class="column column-1">
        <button class="email-button"> spam</button>

    </div>
</div>

<div class="row">
    <div class="column column-2">
        <img class="email-img" src="/res/icon64.png" alt="">
    </div>
    <div class="column column-10">

        <p class="email-par">There is nothing more common than the wish to be remarkable There is nothing
            more
            common
            than the
            wish to be remarkable There is nothing more common than the wish to be remarkable</p>
    </div>
</div>

</div>
<div class="email-wrapper">


<div class="row">
    <div class="column column-2">
        <button class="email-button"> star</button>
        <button class="email-button">see thread</button>

    </div>
    <div class="column column-4">

        <p class="email-par">from:dfsdfsd@sdgfsdg.com</p>
    </div>
    <div class="column column-2">
        <button class="email-button"> read</button>
        <button class="email-button"> archive</button>
    </div>
    <div class="column column-3">
        <button class="email-button">reply</button>
        <button class="email-button">del</button>
        <button class="email-button">12:12am</button>

    </div>
    <div class="column column-1">
        <button class="email-button"> spam</button>

    </div>
</div>

<div class="row">
    <div class="column column-2">
        <img class="email-img" src="/res/icon64.png" alt="">
    </div>
    <div class="column column-10">

        <p class="email-par">There is nothing more common than the wish to be remarkable There is nothing
            more
            common
            than the
            wish to be remarkable There is nothing more common than the wish to be remarkable</p>
    </div>
</div>

</div>
    
    `

}


document.addEventListener("click", function (e) {
    const homeBtn = document.getElementById("homeIcon")
    const closestProvEl = e.target.closest(".box");
    const closetAccEl = e.target.closest(".tabRow")

    if (closestProvEl && closestProvEl.id === "gmailCard") {

        providerDOM("gmail")

    }

    else if (closetAccEl) {
        unredEmailsDOM(closetAccEl.id)
    }


    else if (homeBtn) {
        homeDOM()
    }
})


