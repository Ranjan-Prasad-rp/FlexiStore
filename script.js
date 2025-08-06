const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    console.log(name, email, phone);

    // Store the form data in localStorage

    const userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.push({ name, email, phone });
    localStorage.setItem("userDetails", JSON.stringify(userData));

    console.log("User data saved to localStorage:", userData);


    // // Display the form data in an alert
    // alert(`Name: ${name}, Email: ${email}, Phone: ${phone}`);

    // Reset the form fields after submission
    form.reset();

    // show user details in browser
    let userName = document.querySelector("#userName")
    let userEmail = document.querySelector("#userEmail");
    let userPhone = document.querySelector("#userPhone");
    userName.textContent = `Name: ${name}`;
    userEmail.textContent = `Email: ${email}`;
    userPhone.textContent = `Phone: ${phone}`;
    let removeuser = document.querySelector(".removeUser");
})

