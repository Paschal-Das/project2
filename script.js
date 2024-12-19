// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("applicationForm");
    const outputSection = document.getElementById("output");
    const submitBtn = document.getElementById("submitBtn");

    // Event listener for the submit button
    submitBtn.addEventListener("click", function () {
        // Validate the form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dob = document.getElementById("dob").value.trim();
        const address = document.getElementById("address").value.trim();

        if (name === "" || email === "" || phone === "" || dob === "" || address === "") {
            alert("All fields are required. Please fill in the form completely.");
            return;
        }

        // Display the output section
        document.getElementById("outputName").innerText = name;
        document.getElementById("outputEmail").innerText = email;
        document.getElementById("outputPhone").innerText = phone;
        document.getElementById("outputDOB").innerText = dob;
        document.getElementById("outputAddress").innerText = address;

        outputSection.classList.remove("hidden");

        // Clear the form
        form.reset();
    });
});