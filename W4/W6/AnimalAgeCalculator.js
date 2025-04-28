//set up an event listener for submit button

var submitbutton = document.querySelector("#get-age");

submitbutton.addEventListener("click", (event)=>{
    event.preventDefault();
    calculateAnimalAge();


});

function calculateAnimalAge(){
    var firstName = document.querySelector("#first");
    var lastName = document.querySelector("#last");
    var age = document.querySelector("#age");
    var displayInfo = document.querySelector("#display-info");
    
    if(firstName.value === "" || lastName.value === "" || age.value === ""){
        alert("please enter the missing data");
        return;

    }


    var dogYears = (Number(age.value) * 7).toFixed();
    var catYears = (Number(age.value) * 4).toFixed();

    displayInfo.innerHTML = `Here is your info:
                            <br>
                            <br>
                            Your name is: ${firstname.value} ${lastName.value}
                            <br>
                            Your age in dog years: ${dogYears}
                            <br>
                            Your age in cat years: ${catYears} `
}