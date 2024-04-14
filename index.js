const url = "https://api.github.com/users";

const searchInput = document.getElementById("search-inp")
const searchButton = document.getElementById("btn")
const profileCon = document.getElementById("profile-con")
const loadingEl = document.getElementById("loading")



const generateProfile = (profile) => {
  return `
   <div class="profile-box">
   <div class="top-sec">
     <div class="left">
       <div class="avatar">
         <img alt="avatar" src="${profile.avatar_url}" />
       </div>
       <div class="self">
         <h1>${profile.name}</h1>
         <h1>@${profile.login}</h1>
       </div>
     </div>
     <a href="${profile.html_url}" target="_black">
     <button class="primary-btn">Check Profile</button>
     </a>
   </div>

   <div class="about">
     <h2>About</h2>
     <p>
     ${profile.bio}
     </p>
   </div>
   <div class="status">
     <div class="status-item">
       <h3>Followers</h3>
       <p>${profile.followers}</p>
     </div>
     <div class="status-item">
       <h3>Followings</h3>
       <p>${profile.following}</p>
     </div>
     <div class="status-item">
       <h3>Repos</h3>
       <p>${profile.public_repos}</p>
     </div>
   </div>
 </div>
   `;
};

const fectchProfile = async () => {

  const userName = searchInput.value;
  loadingEl.innerText - "loading..."
  loadingEl.style.color = "black"

  try {
    const res = await fetch(`${url}/${userName}`)
    const data = await res.json();

    if (data.bio) {
      loadingEl.innerText = "";
      profileCon.innerHTML = generateProfile(data)
    } else {
      loadingEl.innerHTML = data.message;
      loadingEl.style.color = "red"
      profileCon.innerText = ""
    }
    console.log('data', data);



  } catch (error) {
    console.log({ error });
    loadingEl.innerText = "";


  }
}

searchButton.addEventListener("click", fectchProfile)
// fectchProfile()