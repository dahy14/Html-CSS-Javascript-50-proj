const APIURL = "https://api.github.com/users/";
const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("User not found");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos");

    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem Fetching Repos");
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        class="avatar"
        srcset=""
        alt="${user.name}"
      />
    </div>
    <div class="user-info">
      <h2>${user.login}</h2>
      <p>
       ${user.bio}
      </p>

      <ul>
        <li>${user.followers} &nbsp;<strong>Followers</strong></li>
        <li>${user.following} &nbsp;<strong>Following</strong></li>
        <li>${user.public_repos} &nbsp;<strong>Repos</strong></li>
      </ul>

      <div id="repos">
      </div>
    </div>
  </div>`;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `<div class="card">
    <h1> ${msg} </h1>
</div>`;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector("#repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repos");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}
