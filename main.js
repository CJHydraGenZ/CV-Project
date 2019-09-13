const det = document.querySelector('.determinate.a');
const detB = document.querySelector('.determinate.b');
console.log(det);
const bi = document.querySelector('#bi');
const bing = document.querySelector('#Bing');





det.addEventListener('mouseenter', function (e) {

    console.log('berasil');
    // e.target.style.width = "100%";

    let couner = 5;
    let progres = 25;
    const id = setInterval(freme, 50);

    function freme() {
        if (progres == 500 && couner == 100) {
            clearInterval(id)
        } else {
            progres += 5;
            couner += 1;

            e.target.style.width = progres + "%";
            bi.textContent = couner + "%";
        }
    }


    // setTimeout(() => {
    //     // e.target.style.width = "100%";
    //     // bi.textContent = e.target.style.width = "100%";
    // }, 500)


})



det.addEventListener('mouseleave', function (e) {
    console.log('berasil leave');
    // e.target.style.width = "90%";

    // setTimeout(() => {
    //     // e.target.style.width = "90%";
    // }, 500)

    let couner = 1;
    let progres = 1;
    const id = setInterval(freme, 50);

    function freme() {
        if (progres == 90 && couner == 90) {
            clearInterval(id)
        } else {
            progres += 1;
            couner += 1;

            e.target.style.width = progres + "%";
            bi.textContent = couner + "%";
        }
    }

})



detB.addEventListener('mouseenter', function (e) {

    console.log('berasil');
    // e.target.style.width = "100%";

    let couner = 1;
    let progres = 1;
    const id = setInterval(freme, 50);

    function freme() {
        if (progres == 80 && couner == 80) {
            clearInterval(id)
        } else {
            progres += 1;
            couner += 1;

            e.target.style.width = progres + "%";
            bing.textContent = couner + "%";
        }
    }


    // setTimeout(() => {
    //     // e.target.style.width = "100%";
    //     // bi.textContent = e.target.style.width = "100%";
    // }, 500)


})



detB.addEventListener('mouseleave', function (e) {
    console.log('berasil leave');
    // e.target.style.width = "90%";

    // setTimeout(() => {
    //     // e.target.style.width = "90%";
    // }, 500)

    let couner = 1;
    let progres = 1;
    const id = setInterval(freme, 50);

    function freme() {
        if (progres == 60 && couner == 60) {
            clearInterval(id)
        } else {
            progres += 1;
            couner += 1;

            e.target.style.width = progres + "%";
            bing.textContent = couner + "%";
        }
    }

})