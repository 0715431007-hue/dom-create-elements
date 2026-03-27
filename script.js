console.log("script started");

function start() {
    console.log("click");

    // create h1 heading
    let heading = document.createElement("h1");

    // set up text and styles
    heading.innerText = "Attendance";
    heading.style.color = "purple";
    heading.style.textDecoration = "underline";

    // add the h1 to the page
    document.body.appendChild(heading);

    // prompting user for name
    let userName = prompt("What is your name?");
    //new prompt for last name
    let userLastname = prompt("what is your last name?");

    console.log(userName);

    // addName function to add name
    addName(userName);
    addName(userLastname);

}


function addName(newName) {
    
    console.log(newName);
    
    //creates h2 element
    let h2 = document.createElement("h2");

    //sets h2 as newName
    h2.innerText = newName;

    //prints h2 out
    document.body.appendChild(h2);
}