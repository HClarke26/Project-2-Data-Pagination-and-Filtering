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

   // Giving the first pagination button a class of "active"
   document.querySelector(".link-list button").className = "active";

   // Listening for click and showing corresponding page
   linkList.addEventListener('click',(e) => {
      
      if (e.target.tagName === "BUTTON") {
         linkList.querySelector("button[class=active]").className = "";
         e.target.className = "active";
         showPage(list, e.target.textContent);
      }
   });
 };

<<<<<<< HEAD:js/script.js

// Function to create serach bar
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


errorMessage.className = 'errorMessage';
searchBar.parentNode.appendChild(errorMessage);


//searchFilter function is used to find a student by first or last name, errorMessage will be returned if there are no matches
/*function filterStudents(userInput, studentsList){
   const search = document.getElementById("search"); 
   const errorMessage = document.createElement('p'); 
   
   let filteredResults = [];
   errorMessage.textContent = '';
   for(let i = 0 ; i < studentsList.length; i++){
      if(studentsList[i].name.first.toLowerCase().includes(userInput.toLowerCase()) || 
      studentsList[i].name.last.toLowerCase().includes(userInput.toLowerCase()) ){
         filteredResults.push(studentsList[i]);
         errorMessage.style.display="none";
      } else if (filteredResults.length == 0) { 
         errorMessage.textContent = '" ' + userInput +' " '+ ' is not found, please try again.';
         errorMessage.style.display="block";
      }
   }
   showPage(filteredResults,1);
   addPagination(filteredResults);
}*/



/*let searchName= "";
const inputSearch = document.querySelector("#search");
inputSearch.addEventListener("keyup", (e) => {
   searchName = e.target.value;
   searchFilter(searchName, data);
 }); */


=======
>>>>>>> dc1f26af7fc90f18e03bf215e7a2d1c847598417:data-pagination-and-filtering-v1/js/script.js
// Calling functions
showPage(data, 1);
addPagination(data);

