document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault();

    const usernameInput=document.getElementById("username").value;
    const passwordInput=document.getElementById("password").value;
    const errorMessage=document.getElementById("errorMessage");

    // Hardcoded credentails
    const validUsername='kavin123';
    const validPassword='password123';

    if(usernameInput === validUsername && passwordInput === validPassword){
        alert('Login successful!');
        // errorMessage.style.display="none";
    }
    else{
        errorMessage.style.display="block";
    }
})