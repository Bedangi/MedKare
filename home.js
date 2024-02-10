//animation tagline 
const eleRef= document.getElementById("sentence");
async function typeSentence(sentence, eleRef, delay = 80) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(80);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
}
const carouselList = [
    {text: `BECAUSE MENTAL HEALTH COMES FIRST...`, color: "white"},
    {text: `WE'LL TAKE KARE OF IT.`, color: "rgb(8, 8, 132)"}
]
  
async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1000);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
}

carousel(carouselList, eleRef);


//login and signup
document.getElementById('loginButton').addEventListener('click', openlogin);
document.getElementById('SignUpButton').addEventListener('click', opensignup);

function openlogin() {
    document.getElementById('loginPopup').style.display = 'block';
}
function closelogin() {
    document.getElementById('loginPopup').style.display = 'none';
}
function opensignup() {
    document.getElementById('SignUpPopup').style.display = 'block';
}
function closesignup() {
    document.getElementById('SignUpPopup').style.display = 'none';
}
