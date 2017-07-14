// added event listener to the the window object to check for a click then run arrRandom
window.addEventListener("click", arrRandom);
//defined the variable pics to equal an array of two images
let pics = ["images/img1.png", "images/img2.png"];

//defined the function arrRandom 
function arrRandom() {
    //defined the variable randomArrow as a pseudo-random number [0,1] inclusive of 0 but exclusive of 1 and * the result by the length of the array pics and rounds that number to the next lowest integer
    // logic and example found at https://www.codecademy.com/en/forum_questions/50c386a4a122749bc1006ca6
    let randomArrow = pics[Math.floor(Math.random() * pics.length)];
    // places the concatenation of the string template literal into the page element
    page.innerHTML = `<img id="pic" src=${randomArrow}>`;


}
