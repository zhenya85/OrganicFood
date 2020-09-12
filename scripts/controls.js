function moveElement() {
    document.getElementsByClassName('point-active')[0].classList.remove('point-active');
    document.getElementsByClassName('dialog_show')[0].classList.remove('dialog_show');
    document.getElementsByClassName('people_show')[0].classList.remove('people_show');
}

function addElement(num) {
    document.getElementById('nav-' + num).classList.add('point-active');
    document.getElementById('dialog-' + num).classList.add('dialog_show');
    document.getElementById('people-' + num).classList.add('people_show');
}

let pointNav = document.getElementsByClassName('people-say__navigate__point');
for (let i = 0; i < pointNav.length; i++) {
    pointNav[i].onclick = function () {
        moveElement();
        addElement(i + 1);
    }
}

function buttonLeft(sideNav) {
    let navPosition = document.getElementsByClassName('point-active')[0].id.split('-')[1];
    let colElement = document.getElementsByClassName('people-say__navigate__point').length;
    let activeElement = navPosition;
    if (sideNav > 0) activeElement++;
    else activeElement--;
    if (activeElement > colElement) activeElement = 1;
    else if (activeElement == 0) activeElement = colElement;
    moveElement();
    addElement(activeElement);
}