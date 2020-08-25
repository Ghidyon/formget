function validate() {
    //Define variables for input fields
    let fName = document.formGet.firstName.value;
    let lName = document.formGet.lastName.value;
    let contact = document.formGet.contactNum.value;
    let email = document.formGet.email.value;
    let dob = document.formGet.dateOfBirth.value;
    let nationality = document.formGet.country.value;
    let origin = document.formGet.origin.value;
    let limit = Date();

    //Define conditions for any empty field
    if ((fName, lName, contact, email, dob, nationality, origin == null) || (fName, lName, contact, email, dob, nationality, origin == "")) {
        alert('Fill empty fields');
        return false;
    }

    //Define conditions for registration
    if (limit.getful) {
        alert('Registration successful');
        return true;
    } else {
        alert('Registration period has ended');
    }
}