function CorrectName() {
    let yourname = document.getElementById('name').value;
    let correctName = yourname.substr(0, 1).toUpperCase() + yourname.substr(1).toLowerCase();
    console.log(correctName);
    let avatar = document.getElementById('avatar').value;
    document.getElementById('finalname').innerHTML = correctName
    document.getElementById('finalavatar').src = avatar
}

function CorrectComment() {
    let yourcomment = document.getElementById('comment').value;
    let correctedComment = yourcomment.replace(/viagra/i, "*").replace(/sex/i, "***");
    console.log(correctedComment);
    document.getElementById('finalcomment').innerHTML = correctedComment
}