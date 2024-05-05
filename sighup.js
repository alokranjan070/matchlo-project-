function signupfunction() {
    let name = document.querySelector("#name").value;
    let state = document.querySelector("#state").value;
    let distic = document.querySelector("#distic").value;
    let game = document.querySelector("#game").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;
    let conpass = document.querySelector("#pass").value;

    if (pass !== conpass) {
        alert("Your confirm password does not match");
        return;
    }

    pool.query('INSERT INTO userinformation (name, state, distic, game, email, password) VALUES (?, ?, ?, ?, ?, ?)', [name, state, distic, game, email, pass], (err, result, fields) => {
        if (err) {
            console.error(err);
            alert("Error occurred while signing up");
            return;
        }
        
        console.log(result);
        alert("Signup successful");
        
        // Clear input fields after successful signup
        document.querySelector("#name").value = "";
        document.querySelector("#state").value = "";
        document.querySelector("#distic").value = "";
        document.querySelector("#game").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#pass").value = "";
    });
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", signupfunction);
