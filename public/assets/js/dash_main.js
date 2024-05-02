document.addEventListener("click", function (e) {

    const targetId = e.target.closest(".mb-4").id

    if (targetId === "gmail") {
        window.location.href = "/s/gmail";


    }
    else if (targetId === "yahoo") {
        window.location.href = "/s/yahoo";

    }
    else if (targetId === "yandex") {
        window.location.href = "/s/yandex";

    }
    else if (targetId === "outlook") {
        window.location.href = "/s/outlook";

    }



})