//   data fetch kr rhe hai localhost surver se 
fetch('http://localhost:3000/getPool')
    .then(response => response.json())  // server side ka pool abject ko receive kr rhe hai 
    .then(data => {
        // Handle the received data here
        console.log('Received pool object:', data.pool);
    })
    .catch(error => {
        console.error('Error:', error);  // in case of errro occuare any
    });


 console.dir(document.querySelector('.headings'));   //using dir
console.log("ram is god");                            // using log


    const anchorTags = document.querySelectorAll('.menu a');  //using document.querySelectorAll
    console.dir(anchorTags);                                       





console.log("rahne de bhai ");                  // using selector and learning only not important 
console.log(document.querySelector("#email"));
let rahim = document.querySelectorAll('.menu ul li');



function loginFunction() {
    event.preventDefault(); // Prevent default form submission behavior
    
    let username = document.getElementById("email");
    
    let pass = document.getElementById("pass");
    let user = username.value;

    console.log(username.value);
    console.log(pass.value);
    username.value="";          // esse placeholder pahle jaisa dikhne lagega 
    pass.value="";
   
     
    let form = document.querySelector(".form");
        // console.dir(form);
        alert('Welcome, '+  user);        // agar userid and password correct hai to 
        form.hidden = true;                          // log in page ko off karna padega na.
//   unblurecontent();
    
}
let bttn = document.querySelector(".btn");

// Add event listener to the button
bttn.addEventListener("click", loginFunction);  // jb bttn click ho to loginFunction ko call kr do 



