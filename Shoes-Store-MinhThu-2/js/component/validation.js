let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let email = $('#email');
let password = $('#password');
let username = $('#name');
let phone = $('#phone');
let passConfirm = $('#passConfirm');


// Check is Empty
let isEmpty = (listSelector) => {
    let isChecked = false;

    listSelector.forEach(input => {
        if (input.value === '') {
            showMsgError(input, 'Trường này không được để trống');
            isChecked = false;
        }
        else {
            successCase(input)
            isChecked = true;
        }
    })
    return isChecked;
}

// Check email value 
const isEmail = (email) => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let isChecked = false;

    if (regex.test(email.value)) {
        successCase(email)
        isChecked = true;

    } else {
        showMsgError(email, 'Giá trị nhập vào phải là email')
        isChecked = false;
    }
    return isChecked;
}
// Check input value is String
const isString = (selector) => {
    let regex = /[a-zA-Z]+$/;
    let isChecked = false;


    if (regex.test(selector.value)) {
        successCase(selector)
        isChecked = true;

    } else {
        showMsgError(selector, 'Giá trị nhập vào phải là chuỗi')
        isChecked = false;
    }
    return isChecked;
}


const isPhoneNumber = (phoneNumber) => {
    let regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
    let isChecked = false;

    if (regex.test(phoneNumber.value)) {
        successCase(phoneNumber)
        isChecked = true;

    } else {
        showMsgError(phoneNumber, 'Giá trị nhập vào phải là số điện thoại')
        isChecked = false;
    }
    return isChecked;
}

// Check input value is String
const isMatchPassword = (passConfirm) => {
    if (passConfirm.value === password.value) {
        successCase(passConfirm)
        isChecked = true;

    } else {
        showMsgError(passConfirm, 'Mật khẩu không tương thích')
        isChecked = false;
    }
    return isChecked;
}

// Show message error
const showMsgError = (selector, mess) => {
    let parent = selector.parentElement;
    let errorMsg = parent.querySelector('.msg');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = mess;
}
const successCase = (selector) => {
    let parent = selector.parentElement;
    let errorMsg = parent.querySelector('.msg');

    errorMsg.classList.remove('error');
    errorMsg.innerHTML = '';
}

// onblur event
$('#email').onblur = () => {
    let checkEmpty = isEmpty([email]);
    if (checkEmpty) {
        isEmail(email);
    }
}

$('#password').onblur = () => {
    isEmpty([password]);
    
}

$('#name').onblur = () => {
    let checkEmpty = isEmpty([username]);
    if (checkEmpty) {
        isString(username);
    }
}

$('#phone').onblur = () => {
    let checkEmpty = isEmpty([phone]);
    if (checkEmpty) {
        isPhoneNumber(phone);
    }
}

$('#passConfirm').onblur = () => {
    let checkEmpty = isEmpty([passConfirm]);
    if (checkEmpty) {
        isMatchPassword(passConfirm);
    }
}




