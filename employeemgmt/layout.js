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

const sidebarbtn = document.querySelector(".main-container-sidebar-btn");
const sidebarsection = document.querySelector(".sidebar");
const userlist = document.querySelector(".main-container");
const sidebarclosebtn = document.querySelector(".sidebar-close-btn");

sidebarbtn.addEventListener("click", () => {
  sidebarsection.classList.toggle("showsidebar");
  sidebarsection.classList.toggle("hide");
  userlist.classList.toggle("active");
  sidebarbtn.classList.toggle("sidebarOpen");
});

// sidenav-container

const sidenavHeader = document.getElementsByClassName("sidenav-header");
// console.log(sidenavsubHeader[0].innerHTML);

var i;

for (i = 0; i < sidenavHeader.length; i++) {
  sidenavHeader[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// let retrievedData = localStorage.getItem("achorKey");
// let retrievedsideNavSubHeadValue = JSON.parse(retrievedData);
// console.log(retrievedsideNavSubHeadValue[1]);

// let allAchorValue = [];
// sidenavsubHeader.forEach((eachAnchorTag) => {
//   allAchorValue = [...allAchorValue, eachAnchorTag.innerHTML];

//   eachAnchorTag.addEventListener("click", (eachTag) => {
//     for (let i = 0; i < retrievedsideNavSubHeadValue.length; i++) {
//       if (retrievedsideNavSubHeadValue[i].innerHTML === e.target.innerHTML) {
//         sidenavsubHeader[i].classList.add = "active";
//       }
//     }
//   });
// });
// console.log(allAchorValue);

// let setEachsideNavSubHeadValue = () => {
//   localStorage.setItem("achorKey", JSON.stringify(allAchorValue));
// };
// setEachsideNavSubHeadValue();

// let retrievedData = localStorage.getItem("achorKey");
// let retrievedsideNavSubHeadValue = JSON.parse(retrievedData);
// console.log(retrievedsideNavSubHeadValue);
// let eachClickAchorTagValue;
// // let allAchorValue = [];
// sidenavsubHeader.forEach((eachAnchorTag) => {
//   // allAchorValue = [eachAnchorTag.innerHTML];
//   console.log(eachAnchorTag);

//   eachAnchorTag.addEventListener("click", (eachTag) => {
//     // console.log(eachTag.target.innerHTML);
//     fun(eachTag.target.innerHTML);
//     eachClickAchorTagValue = eachTag.target.innerHTML;
//     localStorage.setItem("achorKey", eachTag.target.innerHTML);
//   });
// });
// console.log(allAchorValue);

// localStorage.clear();

// const achorTag = document.getElementsByTagName("a");
// console.log(achorTag);

// console.log(eachClickAchorTagValue);

// window.addEventListener("DOMContent",()=>{
//   if(){}
// });

// let fun = (a) => {
//   console.log(a);
// };

const currentLocation = location.href;
// const sidenavsubHeader = document.querySelectorAll(".sidenav-subheader a");
const sidenavsubHeader = document.querySelectorAll("a");
console.log(sidenavsubHeader);
const sidenavsubHeaderLength = sidenavsubHeader.length;
console.log(sidenavsubHeaderLength);

for (i = 0; i < sidenavsubHeaderLength; i++) {
  if (sidenavsubHeader[i].href === currentLocation) {
    sidenavsubHeader[i].className = "active";
    sidenavsubHeader[i].parentElement.style.display = "block";
  }
}
