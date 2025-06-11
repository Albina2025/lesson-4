//function

// function getProduct(){
//     alert ("Hello Bekjan")
// }
// getProduct()
// getProduct()

// let text = "Hello Okurmen"

// function info(){
//     let text = "Hello Mirbek"
//     alert(text)
// }
// info()
// alert(text)

// function about () {
//     let age = 18;
//     function setAbout () {
//         let sum = age + 15
//         alert(sum)
//     }
//     setAbout()
// }
// about()

// getNumber()
//Function Declaration
function getNumber () {
    alert("Hi")
}
// getNumber()


//Function Expression
let check = function (){
    alert ("Hello world")
}
// check()
// servise = check
// servise()


//Arroow Function
let getInfo = () => alert("Okuu,okuu jana okuu")
// getInfo()


//Parametr
let showMessage = (title) => alert(title)
// showMessage("Asiya")
// showMessage("Bekjan")

// function show(a=3,b=5){
//     if(a < b){
//     alert (a + b)
//     }else {
//         alert(a - b)
//     }
// }
// show(4,9)//13
// show(65, 42)//23
// show(2, 7)//9
// show(12)//7
// show()//8


// function checkOven(number){
//     if(number % 2 ==0){
//         alert("kaldyk jok")
//     }else{
//         alert("Kaldyk bar")
//     }
// }
// checkOven(9)//kaldyk bar
// checkOven(12)//kaldyk jok
// checkOven(15)//kaldyk bar
// checkOven(22)//kaldyk jok


let number = prompt("жашыңыз канчада");

if (number >= 18) {
    alert("сизге кирүүгө болот");
} else if (number >= 12) {
    alert("ата-энеңиз уруксат бердиби");
} else {
    alert("сизге кирүүгө болбойт");
}