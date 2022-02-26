/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Function to create page with a given number of students and their infromation
function showPage(list, page) {

   const itemsPerpage = 9; // Number of students per page
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

 showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
