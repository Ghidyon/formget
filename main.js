function validate() {
    //Define variables for input fields
    let fName = document.formGet.firstName.value;
    let lName = document.formGet.lastName.value;
    let contact = document.formGet.contactNum.value;
    let email = document.formGet.email.value;
    let dob = document.formGet.dateOfBirth.value;
    let nationality = document.formGet.country.value;
    let origin = document.formGet.origin.value;

    //Define variables for date conditions
    let realDate = new Date();
    let commencedDate = new Date(2020, 7, 29);
    let deadline = new Date(2020, 7, 31, 11, 59, 59);

    //Define conditions for any empty field
    if ((fName, lName, contact, email, dob, nationality, origin == null) || (fName, lName, contact, email, dob, nationality, origin == "")) {
        alert('Fill empty fields');
        return false;
    }

    //Define conditions for registration period
    if (realDate >= commencedDate && realDate <= deadline) {
        alert('Registration successful');
        return true;
    } else {
        alert('Registration period has ended');
        return false;
    }
}



