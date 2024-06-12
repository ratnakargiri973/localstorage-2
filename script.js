

let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let country = document.getElementById("country");
let phone_number = document.getElementById("phone-number");
let state = document.getElementById("state");
let city = document.getElementById("city");
let village = document.getElementById("village");


function userInput(){
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    localStorage.setItem("userInformation", JSON.stringify(userInfo));
    first_name.textContent=userInfo.firstName;
    last_name.textContent=userInfo.lastName;
    country.textContent=userInfo.country;
    phone_number.textContent=userInfo.phoneNumber;
    state.textContent=userInfo.state;
    city.textContent=userInfo.city;
    village.textContent=userInfo.village;
}

let userStoredInput = localStorage.getItem("userInformation");

if(userStoredInput){
    let userInfo = JSON.parse(userStoredInput);
    first_name.textContent=userInfo.firstName;
    last_name.textContent=userInfo.lastName;
    country.textContent=userInfo.country;
    phone_number.textContent=userInfo.phoneNumber;
    state.textContent=userInfo.state;
    city.textContent=userInfo.city;
    village.textContent=userInfo.village;
}
else{
    userInput();
}

//dark and light mode

const toggleTheam = document.getElementById("switch");
const body = document.body;
const cuurTheam = body.getAttribute('data-theam');
body.setAttribute('data-theam', "light");
localStorage.setItem('theam', "light");

toggleTheam.addEventListener("click", () => {
    const currTheam =localStorage.getItem('theam');
     const newTheam = currTheam === "dark" ? "light" : "dark";
     localStorage.setItem('theam', newTheam);
     body.setAttribute('data-theam', newTheam);
})