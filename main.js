function validate() {
    //Define variables for input fields
    let fName = document.formGet.firstName.value;
    let lName = document.formGet.lastName.value;
    let contact = document.formGet.contactNum.value;
    let email = document.formGet.email.value;
    let dob = document.formGet.dateOfBirth.value;
    let origin = document.formGet.origin.value;

    //Define variables for date conditions
    let currentDate = new Date();
    let commence = new Date(2020, 7, 29);
    let deadline = new Date(2020, 8, 1, 11, 59, 59);

    //Define conditions for any empty field
    if (fName == "" && lName == "" && contact == "" && email == "" && dob == "" && origin == "") {
        alert('Please fill empty fields.')
        return false; //checks if all input fields are empty
    } else if (fName == null || fName == "" || fName == " ") {
        alert('Please fill first name field.');
        return false; //checks if first name field is empty
    } else if (lName == null || lName == "" || lName == " ") {
        alert('Please fill last name field.');
        return false; //checks if last name field is empty
    } else if (contact == null || contact == "" || contact == " ") {
        alert('Please fill contact field.');
        return false; //checks if contact name field is empty
    } else if (email == null || email == "" || email == " ") {
        alert('Please fill email field.');
        return false; //checks if email field is empty
    } else if (dob == null || dob == "" || dob == " ") {
        alert('Please fill date of birth field.');
        return false; //checks if date of birth field is empty
    } else if (origin == null || origin == "" || origin == " ") {
        alert('Please fill state of origin field.');
        return false;  //checks if state of origin field is empty
    }

    //Define conditions for registration period
    if (currentDate >= commence && currentDate <= deadline) {
        alert('Registration successful.');
        return true;
    } else {
        alert('Registration period has ended');
        return false;
    }
}



