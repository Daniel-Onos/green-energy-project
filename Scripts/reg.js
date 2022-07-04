document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log("here")

  const formData = new FormData(e.target);

  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("psw");

  const user = { fullname, email, password };

  if (!checkUser(email)) {

    if (addUser(user)){
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        // title: "Success",
        text: "Your account has been created successfully",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        // title: "Success",
        text: "An error occurred",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }


   setTimeout(() => {
     window.history.replaceState(null, null, window.location.pathname);
     
     window.location.replace("signup.html");
   }, 900);

 }else{
   Swal.fire({
        toast: true,
       position: "top-end",
       icon: "error",
       // title: "Success",
       text: "An account already exists",
       showConfirmButton: false,
       timer: 3000,
       timerProgressBar: true,
     });
 }
});
