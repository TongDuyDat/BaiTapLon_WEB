window.addEventListener("load", () => {
    const signUpButton = document.querySelector("#signUp");
    const signInButton = document.querySelector('#signIn');
    const container = document.querySelector('#container');
    console.log(signUpButton)
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });


})

function login() {
    var isLogin = true;
    user = document.getElementById("tdn").value
    pass = document.getElementById("mk").value
    console.log(user + pass)

    fetch("data.json")
        .then(response => response.json())
        .then((json) => {
            json.forEach(item => {
                // console.log(item);
                if (item.User == user && item.pass == pass) {
                    window.location.href = "/Src/Home/Home.html";
                    isLogin = false;
                }

            });

            isLogin ? alert("Tai khoan hoac mat khau khong dung") : ""
        });

}