const btn = document.getElementById("btn");
const card = document.querySelector(".card");

     if(localStorage.getItem('mode') === 'dark'){
         document.body.classList.add("darkmode");
   }
  

btn.addEventListener("click" , function () {
   document.body.classList.toggle("darkmode");
   const mode =document.body.classList.contains('darkmode')? 'dark' : 'light';
   localStorage.setItem('mode' , mode);
});