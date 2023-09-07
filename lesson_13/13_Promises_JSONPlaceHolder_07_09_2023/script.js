const users = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users.push(...data);

    const userList = document.getElementById("userList");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <button 
        type="button" 
        id="btn-${user.id}-${user.name}" 
        class="btn btn-link">
            ${user.name}
      </button>`;

      userList.appendChild(li);
    });
  })
  .catch((err) => {
    const li = document.createElement("li");
    li.textContent = "Пользователи не найдены: попробуйте повторить позднее";
    userList.appendChild(li);
  })
  .finally(console.log("Финиш"));

const findUserById = (id) => users.find((user) => user.id == id);

const userList = document.getElementById("userList");
const userDetails = document.getElementById("userDetails");
let currentUser = null;
userList.addEventListener("click", (e) => {
  if (currentUser) {
    const buttonId = `btn-${currentUser.id}-${currentUser.name}`;
    const oldButton = document.getElementById(buttonId);
    oldButton.style.color = "";
    userDetails.innerHTML = "";
  }
  if (e.target.tagName === "BUTTON") {
    const button = document.getElementById(e.target.id);
    const userId = e.target.id.split("-")[1];
    if (!currentUser || (currentUser && userId != currentUser.id)) {
      const user = findUserById(userId);
      currentUser = user;
      button.style.color = "red";
      userDetails.innerHTML = `
        <div>
          <ul style="list-style-type: disclosure-closed">
              <li>username: ${user.username}</li>
              <li>email: ${user.email}</li>
              <li>address: ${user.address.zipcode}, ${user.address.city}, ${user.address.street}, ${user.address.suite}</li>
              <li>phone: ${user.phone}</li>
              <li>website: ${user.website}</li>
              <li>company: ${user.company.name}, ${user.company.catchPhrase}</li>
          </ul>
        </div>`;
    } else {
      currentUser = null;
    }
  }
});
