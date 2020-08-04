const jokeSection = document.querySelector(".joke");

async function chuckJokes(el) {
  let response = await fetch(`https://api.chucknorris.io/jokes/${el}`);
  let data = await response.json()
  return data;
}

const joke = chuckJokes("random").then(
  (data) => (jokeSection.textContent = data.value)
);


const ready = (cb) => {
  if (document.readyState != "loading") cb();
  else document.addEventListener("DOMContentLoaded", cb);
};

function addNewElement(target, position, element) {
  return target.insertAdjacentHTML(position, element);
};

ready(() => {
  let refresh = document.querySelector(".refresh-joke");
  const title = document.querySelector(".app-title");
  const description = 'To Do list';
  const newTitle = `<h1 class="title"> ${description} </h1>`;


  // btn event
  refresh.addEventListener(
    "click",
    () =>
      chuckJokes("random").then(
        (data) => (jokeSection.textContent = data.value)
      ),
    false
  );

  // insert to do title
  addNewElement(title, "afterbegin", newTitle);
  

  

});

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
const test = alphabet.slice();
const code = "KEYWORD";
// alphabet.filter((item) => !item);
const codeArr = [...code];
// console.log(codeArr);

function testArr(str){
  // console.log(test.indexOf(str, 0));
  let newStr = str.split("");
// console.log(newStr);
  newStr.filter(element => {
    let elIndex = test.indexOf(element, 0);
    if (elIndex !== -1) {
      // console.log(test.splice(elIndex, 1, element));
      // console.log(test);
      return test;
    } else {
      // console.log(elIndex, element);
    }
    
  });
  
    
} 
testArr("KABOM");
console.log(test);