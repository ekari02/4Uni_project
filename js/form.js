const backToHome = document.querySelector("#back-to-home");

const homepage = () => {
    window.location.href = "../html/homepage.html"; 
}

backToHome.addEventListener("click",homepage);

