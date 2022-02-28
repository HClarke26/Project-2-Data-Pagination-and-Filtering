/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerpage = 9; // Number of students per page

// Function to create page with a given number of students and their infromation
function showPage(list, page) {

   let startIndex = (page * itemsPerpage) - itemsPerpage ;
   let endIndex = page * itemsPerpage ;

   let studentList = document.querySelector('.student-list');

   studentList.innerHTML = '';
 
   // For loop to create elements for each student in list 
   for (i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentItem =  
         `<li class="student-item cf">
            <div class="student-details">
                <img class="avatar" src= ${list[i].picture.medium} alt="Profile Picture">
                <h3>${list[i].name.first} ${list[i].name.last}</h3>
                <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date"> Joined - ${list[i].registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML('beforeend', studentItem); // Inserting into the DOM
      };
   };
 };


// addPagination function to create and insert/append the elements needed for the pagination buttons
function addPagination(list) {

   // Calculating number of pages required 
   numOfPages = Math.ceil(list.length / itemsPerpage)

   linkList = document.querySelector('.link-list')
   linkList.innerHTML = '';
      // Looping to create the correct amount of buttons
     for (i = 1; i <= numOfPages ; i++) {
         let button =  
         `<li>
         <button type="button">${i}</button>
         </li>`;
         linkList.insertAdjacentHTML("beforeend", button);
      }

   // giving the first pagination button a class of "active"
   document.querySelector(".link-list button").className = "active";

   // listening for click and showing corresponding page
   linkList.addEventListener('click',(e) => {
      
      if (e.target.tagName === "BUTTON") {
         linkList.querySelector("button[class=active]").className = "";
         e.target.className = "active";
         showPage(list, e.target.textContent);
      }
   });
 };


// Adding search bar function
function addSearchBar() {
   // Selecting header class
   const selectHeader = document.querySelector(".header");
   // Creating search bar
   const searchBar = `
         <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>
       `;
   // Inserting search bar to the DOM.
   selectHeader.insertAdjacentHTML("beforeend", searchBar);
}


// Calling functions
showPage(data, 1);
addPagination(data);
addSearchBar();
