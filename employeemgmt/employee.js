const employeelistcreateuserpopupsection = document.querySelector(
  ".employeelist-adduser-form-section"
);

// createuserpopupsection
const employeelistcreateuserbtn = document.querySelector(
  ".main-container-create-section-btn"
);
const employeelistcreateuserclosebtn = document.querySelector(
  ".employeelist-adduser-close-btn"
);

employeelistcreateuserclosebtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const modal = document.getElementById("myModal");

employeelistcreateuserbtn.addEventListener("click", () => {
  modal.style.display = "block";
  var sidebarStatus = document.querySelector(".main-container-sidebar-btn");
  if (sidebarStatus.classList.contains("sidebarOpen")) {
    employeelistcreateuserpopupsection.classList.remove("showfullwidth");
  } else {
    employeelistcreateuserpopupsection.classList.add("showfullwidth");
  }
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// edit-delete form

const editbtn = document.querySelectorAll(".edit-btn");

editbtn.forEach((eachbtn) => {
  eachbtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});
