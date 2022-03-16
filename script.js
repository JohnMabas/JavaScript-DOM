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

const ligth = document.querySelector("#light")
const Dark = document.querySelector("#Dark")


ligth.addEventListener("click", function(){
      const body =document.body;
      body.classList.add("light");
      document.getElementById("light").style.backgroundColor =('red');
      console.log("I am clicked")

});

Dark.addEventListener("click", function(){
      const body =document.body;
      body.classList.add("dark");
      console.log("I am clicked")

});

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
