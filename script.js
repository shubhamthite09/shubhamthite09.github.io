const hamburger=document.getElementById("hamb");
const navbar_menu=document.getElementById("navbar-menu");

//Function for Hamburger navbar
hamburger.addEventListener("click", (e)=>{
    if(navbar_menu.style.display=="none"){
        navbar_menu.style.display="block";
    }else{
        navbar_menu.style.display="none";
    }
})  

//Function for Resume to open on the next tab
function resume(){
    window.open("https://drive.google.com/file/d/1Py7hJWWjmkRyat8L39qMKNzVupVjI6JT/view?usp=sharing","_blank")
  }

// Third-party library to disply GitHub Calender
// GitHubCalendar(".calendar", "shubhamthite09", {
//     responsive: true,
//     global_stats: true,
//     tooltips: true
// });
// GitHubCalendar(".calendar","shubhamthite09", {
//     proxy (username) {
//       return fetch(`https://your-proxy.com/github?user=${username}`)
//     }
//  }).then(r => r)
GitHubCalendar(".calendar", "shubhamthite09");
