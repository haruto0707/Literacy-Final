document.addEventListener("DOMContentLoaded", function () {
    const modalBtns = document.querySelectorAll(".modalOpen");
    modalBtns.forEach(function (btn) {
        btn.onclick = function () {
            var modal = btn.getAttribute('data-modal');
            document.getElementById(modal).style.display = "block";
        };
    });
    const closeBtns = document.querySelectorAll(".modalClose");
    closeBtns.forEach(function (btn) {
        btn.onclick = function () {
            var modal = btn.closest('.modal');
            modal.style.display = "none";
        };
    });

    window.onclick = function (event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };
    var videoHeight = document.getElementById('video').offsetHeight;
    document.querySelector('.main').style.marginTop = videoHeight + 'px';
});

const CLASSNAME = "-visible";
const TIMEOUT = 100;
const $target = $(".bg");

setInterval(() => {
    $target.addClass(CLASSNAME);

}, TIMEOUT * 2);

window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".header");
    header.style.zIndex = "9999";
});