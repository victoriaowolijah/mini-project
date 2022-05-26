// 1. API Url
const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch users from the API Url
function FetchUsers() {
  //make use of the browser fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // 2.2 Passing the user data to the renderUsers function
      renderUsers(data);
    });
}

//3.Render the users in the DOM
function renderUsers(usersData) {
  const ul = document.getElementById("user-input");

  // 3.1 Render an li tag for each of the users
  usersData.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
       <span>${index + 1}</span>
       <span>${user.name}</span>
       <span>-</span>
       <span class="username">${user.username}</span>
       `;
    //Append the current user li tag to the UL tag
    ul.appendChild(li);
  });
}

// 4. Add a search function to the DOM
function searchUsersByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-input");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li");

  //loop through all the users and render the ones that match the search
  for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch) {
      usersList[index].style.display = "block";
    } else {
      usersList[index].style.display = "none";
    }
  }
}

//calling the fetch function
FetchUsers();
