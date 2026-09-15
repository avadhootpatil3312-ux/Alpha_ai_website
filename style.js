/* =========================================
   ALPHA AI — MAIN JAVASCRIPT
========================================= */


/* =========================================
   CONFIGURATION
========================================= */

// Add your Supabase project details here later.
// DO NOT put your Supabase service_role key here.

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";


/* =========================================
   ELEMENTS
========================================= */

const loginBtn = document.querySelector(".login-btn");
const userMenu = document.querySelector(".user-menu");
const logoutBtn = document.querySelector(".logout-btn");

const notifyForm = document.querySelector(".form");
const formStatus = document.querySelector("#formStatus");


/* =========================================
   GOOGLE LOGIN
========================================= */

async function loginWithGoogle() {

    try {

        // Supabase will be connected here.
        // Example:

        /*
        const { error } =
            await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: window.location.origin
                }
            });

        if (error) {
            console.error(error);
        }
        */

        console.log("Google login will be handled by Supabase.");

    } catch (error) {

        console.error(
            "Google login error:",
            error
        );

    }

}


/* =========================================
   LOGOUT
========================================= */

async function logoutUser() {

    try {

        // Supabase logout will be added here.

        /*
        const { error } =
            await supabase.auth.signOut();

        if (error) {
            console.error(error);
        }
        */

        console.log("Logout requested.");

    } catch (error) {

        console.error(
            "Logout error:",
            error
        );

    }

}


/* =========================================
   LOGIN BUTTON
========================================= */

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        loginWithGoogle
    );

}


/* =========================================
   LOGOUT BUTTON
========================================= */

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        logoutUser
    );

}


/* =========================================
   UPDATE USER UI
========================================= */

function showLoggedInUser(user) {

    if (!loginBtn || !userMenu) return;

    loginBtn.style.display = "none";

    userMenu.style.display = "flex";

    const avatar =
        document.querySelector(".user-avatar");

    if (avatar && user?.user_metadata?.avatar_url) {

        avatar.src =
            user.user_metadata.avatar_url;

    }

}


function showLoggedOutUser() {

    if (!loginBtn || !userMenu) return;

    loginBtn.style.display = "block";

    userMenu.style.display = "none";

}


/* =========================================
   WAITLIST / FEEDBACK FORM
========================================= */

if (notifyForm) {

    notifyForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const email =
                notifyForm.querySelector(
                    'input[type="email"]'
                )?.value.trim();

            const message =
                notifyForm.querySelector(
                    "textarea"
                )?.value.trim();


            if (!email) {

                setFormStatus(
                    "Please enter your email."
                );

                return;

            }


            setFormStatus(
                "Sending..."
            );


            try {

                /*
                 * Supabase database submission
                 * will be connected here.
                 *
                 * Example table:
                 *
                 * waitlist
                 *
                 * columns:
                 * id
                 * email
                 * message
                 * created_at
                 */

                console.log({
                    email,
                    message
                });


                await new Promise(
                    resolve =>
                        setTimeout(resolve, 700)
                );


                setFormStatus(
                    "You're on the Alpha AI list. We'll be in touch."
                );


                notifyForm.reset();


            } catch (error) {

                console.error(error);

                setFormStatus(
                    "Something went wrong. Please try again."
                );

            }

        }
    );

}


/* =========================================
   FORM STATUS
========================================= */

function setFormStatus(message) {

    if (!formStatus) return;

    formStatus.textContent = message;

}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) return;

            const target =
                document.querySelector(
                    targetId
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector("nav");


window.addEventListener(
    "scroll",
    function () {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(0, 0, 0, 0.88)";

        } else {

            navbar.style.background =
                "rgba(0, 0, 0, 0.68)";

        }

    },
    {
        passive: true
    }
);


/* =========================================
   BUTTON RIPPLE / CLICK FEEDBACK
========================================= */

document.querySelectorAll(
    "button"
).forEach(button => {

    button.addEventListener(
        "click",
        function () {

            this.style.transform =
                "scale(0.97)";

            setTimeout(() => {

                this.style.transform =
                    "";

            }, 120);

        }
    );

});


/* =========================================
   YEAR
========================================= */

const yearElement =
    document.querySelector("#year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   INITIAL STATE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showLoggedOutUser();

        console.log(
            "Alpha AI website initialized."
        );

    }
);