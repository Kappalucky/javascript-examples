// General validation function to check if input is Ascii and zip, email, password, date
// and phone number is valid.
// Returns object person containing information validated for passing to back-end.
// Bind to submit button and or bind to 'input' in form labels
// Adds styling to labels based on result...written for Playbookkids.com
function validation(event){

    const person = {
        //Set
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        //Get
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    var targetId = event.currentTarget.id;
    var password = person.password;

    if (targetId.includes("name") == true){
        nameTest(event.target.value);

        function nameTest(name){
            if (nameValidation(name) == true) {
                if (name.includes(" ")) {
                    var usr = name.split(" ", 2);
                    person.firstName = usr[0];
                    person.lastName = usr[1];
                }
                else {
                    person.firstName = name;
                }
                $(event.currentTarget).addClass('pass');
                $(event.currentTarget).removeClass('error');
                return true;
            }
            if (event.target.value.length == 0){
                $(event.currentTarget).removeClass('pass');
                $(event.currentTarget).removeClass('error');
            }
            else {
                $(event.currentTarget).removeClass('pass');
                $(event.currentTarget).addClass('error');
                return false;
            }
        }
    }
    else if (targetId.includes("email") == true){

        if (emailValidation(event.target.value) == true){
            person.email = event.target.value;
            $(event.currentTarget).addClass('pass');
            $(event.currentTarget).removeClass('error');
            return true;
        }
        if (event.target.value.length == 0){
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).removeClass('error');
        }
        else {
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).addClass('error');
            return false;
        }
    }
    else if (targetId.includes("phone") == true){
        if (phoneValidation(event.target.value) == true){
            person.phone = event.target.value;
            $(event.currentTarget).addClass('pass');
            $(event.currentTarget).removeClass('error');
            return true;
        }
        if (event.target.value.length == 0){
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).removeClass('error');
        }
        else {
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).addClass('error');
            return false;
        }
    }
    else if (targetId.includes("zip") == true){
        if (zipCodeValidation(event.target.value) == true){
            person.zipCode = event.target.value;
            $(event.currentTarget).addClass('pass');
            $(event.currentTarget).removeClass('error');
            return true;
        }
        if (event.target.value.length == 0){
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).removeClass('error');
        }
        else {
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).addClass('error');  
            return false;
        }
    }
    else if (targetId.includes("password") == true){
        if (passwordValidation(event.target.value) == true){
            person.password = event.target.value;
            $(event.currentTarget).addClass('pass');
            $(event.currentTarget).removeClass('error');
            return true;
        }
        if (event.target.value.length == 0){
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).removeClass('error');
        }
        else {
            $(event.currentTarget).removeClass('pass');
            $(event.currentTarget).addClass('error');  
            return false;
        }
    }
}

function isAscii(str) {
    const ascii = /^[\x00-\x7F]*$/;
    //may add first if to error function
    if (str === null || str === '')
        return true;
    else if (ascii.test(str) === false) {
        str = removeNonAscii(str);
        return true;
    }
    else
        return true;

    function removeNonAscii(str) {
        let newStr = str.toString();
        return newStr.replace(/[^\x00-\x7F]g/, '');
    }
}

function dateValidation(dateStr) {
    var dateElems = dateStr.split("-");
    if (dateElems.length != 3)
        return false;
    else if (dateElems[0].length != 4)
        return false;
    else if (dateElems[1].length < 1)
        return false
    else if (dateElems[2].length < 1)
        return false
    return true;
}

function phoneValidation(phoneStr) {
    removeChars = "";
    phoneStr = phoneStr.replace(/-/g, "").replace(/\(|\)|\s/g, "");
    var numDigits = phoneStr.length;
    if (numDigits < 10 || numDigits > 11)
        return false;
    return true;
}

function nameValidation(userName)
{
    while (isAscii(userName) == true) {
        if ((/^[a-z\A-Z\u00C0-\u02AB'´`\s\-]+\.?([a-z\A-Z\u00C0-\u02AB'´`]+\.?\s?)+$/.test(userName)) == true) {
            return true;
        }
        else
            return false;
    }
}

function emailValidation(userEmail)
{
    while (isAscii(userEmail) == true) {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) == true){
            return true;
        }
        else
            return false;
    }
}

function passwordValidation(password, level=1)
{
    //simple password. No requirements
    if (level == 1) {
        while (isAscii(password) == true) {
            if (event.target.value.length != 0 && event.target.value.length > 5)
                return true;
            else
                return false;
        }
    }
    //Med password. 6 characters. 1 number, 1 upper & 1 lower-case, 1 symbol
    else if (level == 2) {
        while (isAscii(password) == true) {
            if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(password)) == true)
                return true;
            else
                return false;
        }
    }
    //Strong password. 8 characters. Med requirements
    else if (level == 3) {
        while (isAscii(password) == true) {
            if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) == true)
                return true;
            else
                return false;
        }
    }
}

function zipCodeValidation(input)
{
    let zipCode = input;

    while (isAscii(zipCode) == true) { 
        if ((/^\d{5}(?:[-\s]\d{4})?$/.test(zipCode)) == true)
            return true;
        else
            return false;
    }
}