// user profile and sigout popup section
const userlistprofile = document.querySelector(
  ".main-container-image-section img"
);
const userlistlogoutsection = document.querySelector(
  ".main-container-logout-section"
);
const userlogoutsection = document.querySelector(
  ".main-container-logout-section-close-btn"
);

window.addEventListener("click", (e) => {
  const userlistprofileimgsection = document.querySelector(
    ".main-container-user-profile-img "
  );
  const userlistprofileimg = document.querySelector(
    ".main-container-user-profile-img img"
  );
  const userlistprofilename = document.querySelector(
    ".main-container-logout-section h3"
  );
  const userlistuseremail = document.querySelector(
    ".main-container-user-email"
  );
  const userlistprofilefooter = document.querySelector(
    ".main-container-logout-footer-section"
  );
  const userlistprofilefooterh3 = document.querySelector(
    ".main-container-logout-footer-section h3"
  );
  const userlistprofilelogoutbtn = document.querySelector(
    ".main-container-logout-btn"
  );

  if (e.target == userlistprofile) {
    userlistlogoutsection.classList.toggle("show");
  } else if (e.target == userlistprofileimgsection) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofileimg) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilename) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistuseremail) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilefooter) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilefooterh3) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistlogoutsection) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilelogoutbtn) {
    userlistlogoutsection.classList.add("show");
  } else {
    userlistlogoutsection.classList.remove("show");
  }
});

// function for sigout
function newDoc() {
  window.location.assign("http://127.0.0.1:5500/login.html");
}