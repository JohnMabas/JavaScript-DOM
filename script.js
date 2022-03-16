// // HTML DOM Methods...

// const h1 = document.querySelector("h1");
// h1.innerHTML = "we are good";
// // or
// h1.setAttribute("id", "heading-2");
// console.log(h1);

// // DOM css
// h1.style.backgroundColor ="blue";
// h1.style.color ="pink";

// const body  = document.body

// body.classList.add ("dark-mode");
// // body.classList.remove ("dark-mode")

const mode = document.querySelector("#mode")
// const Dark = document.querySelector("#Dark")

const body =document.body;

body.className = localStorage.getItem("mode")
console.log(localStorage.getItem("mode"))
mode.addEventListener("click", function(){

     if(mode.innerHTML == "Dark Mode"){
           mode.innerHTML = "Light Mode"
           localStorage.removeItem("mode")
           localStorage.setItem("mode","dark")
     }else{
      mode.innerHTML = "Dark Mode"
      localStorage.removeItem("mode")

      localStorage.setItem("mode","light")


     }
      body.classList.toggle("dark");
//      mode.style.backgroundColor =('blck');
      console.log("I am clicked")

});

// Dark.addEventListener("click", function(){
//       const body =document.body;
//       body.classList.add("dark");
//       console.log("I am clicked")

// });

const ul = document.querySelector("ul");
Array.from(ul.children).forEach(function(li){
      li.style.color="green";
      li.addEventListener('click',function(){
      li.remove();
      })

});

const button = document.querySelector("#btn");
button.addEventListener("click", function(){
      ul.append(textContent = "mabas");

});
