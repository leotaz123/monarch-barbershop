const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


// HERO PARALLAX

const heroPhoto =
    document.querySelector(".hero-photo");

const heroContent =
    document.querySelector(".hero-content");


window.addEventListener("scroll", () => {

    const y =
        window.scrollY;


    if (
        heroPhoto &&
        y < window.innerHeight
    ) {

        heroPhoto.style.transform =
            `scale(${1.04 + y * 0.00005})
             translateY(${y * 0.04}px)`;

    }


    if (
        heroContent &&
        y < window.innerHeight
    ) {

        heroContent.style.transform =
            `translateY(${y * 0.08}px)`;

        heroContent.style.opacity =
            Math.max(
                1 - y / 800,
                0
            );

    }

});


// BOOKING FORM

const bookingForm =
    document.getElementById("bookingForm");

const formMessage =
    document.getElementById("formMessage");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const service =
                document.getElementById("service").value;

            const barber =
                document.getElementById("barber").value;

            const date =
                document.getElementById("date").value;

            const time =
                document.getElementById("time").value;


            let message =
                `Thanks ${name}. Your ${service} request for ${date} at ${time}`;

            if (barber) {
                message += ` with ${barber}`;
            }

            message +=
                " has been received.";

            formMessage.textContent =
                message;

            bookingForm.reset();

        }
    );

}