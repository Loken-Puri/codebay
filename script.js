function welcome() {
    alert("Bienvenido a Pinpad");
}

// Generate Pin Button
function randomNumFun() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateNum').value = randomNumber;
    document.getElementById('textMessage').innerText = "Press & Submit the Pin Code";
    show('textMessage');
    emptyValue('inputPin');
    emptyText('generateMessage');
}


// Input Number Value
function btnKey(id) {
    let prevValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = prevValue + key;
}


// Clean Value
function clean() {
    document.getElementById('inputPin').value = "";
}

// Clean Last Value
function cleanLast() {
    const inputResult = document.getElementById('inputPin').value;
    const removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = removeValue;
}


// Matchig Pin - Submit Button Condition
function submitBtn() {
    const randomNum = document.getElementById('generateNum').value;
    const typeNum = document.getElementById('inputPin').value;

    if (randomNum.length == 0) {
        document.getElementById('generateMessage').innerText = "Please Create Your Random Pin Number and refresh the page";
        shake('generateMessage');
    }
    else {
        if (typeNum.length != 4) {
            document.getElementById('textMessage').innerText = "Press the 4 digit number";
            shake('textMessage');
        }
        else {
            displayBlock('notify__content');
            if (randomNum == typeNum) {
                emptyValue('inputPin');
                emptyValue('generateNum');
                displayBlock('matched');
                displayNone('unmatched');
                emptyText('textMessage');
                displayNone('tryContent');
                show('generateMessage');
                document.getElementById('generateMessage').innerText = "Generate Number Again";
            } 
            else {
                emptyValue('inputPin');
                displayBlock('unmatched');
                displayNone('matched');
                emptyText('textMessage');
                displayBlock('tryContent');
                tryLeft('tryLeft');
            }
        }
    }
}

// Notification Close
function notifyContent() {
    displayNone('notify__content');
}


// Try Left Again
function tryLeft(id) {
    const tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if (tryAgain == "1") {
        disableBtn('submit');
        showMessage();
    }
}


// Disable button
function disableBtn(id) {
    let button = document.getElementById(id);
    button.style.cursor = "not-allowed";
    button.setAttribute('disabled', 'true');
    button.title = "Please Reload Page";
}


// Show - message
function showMessage() {
    let refresh = document.getElementById('showMessage');
    refresh.style.display = "block";
}


// Function
function emptyValue(id) {
    document.getElementById(id).value = '';
}

function emptyText(id) {
    document.getElementById(id).innerText = '';
}

function displayNone(id) {
    document.getElementById(id).style.display = "none";
}

function displayBlock(id) {
    document.getElementById(id).style.display = "block";
}

function shake(id) {
    const addClass = document.getElementById(id);
    addClass.classList.add('shake');
}


// Show & hide pincode
const eye = document.getElementById("eye");
const inputPin = document.getElementById("inputPin");

eye.addEventListener("click", () => {
    if(inputPin.type === "password") {
        inputPin.type = "text";
        eye.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        inputPin.type = "password";
        eye.classList.replace("fa-eye", "fa-eye-slash");
    }
});

// Show & hide pincode ends