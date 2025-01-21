const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navs');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

function openModal(title) {
    switch(title) {
        case "julian":
            document.getElementById('myModal1').style.display = 'flex';
            break;
        case "AR":
            document.getElementById('myModal2').style.display = 'flex';
            break;
        case "case":
            document.getElementById('myModal3').style.display = 'flex';
            break;
    }
}

function closeModal(title) {
    switch(title) {
        case "julian":
            document.getElementById('myModal1').style.display = 'none';
            break;
        case "AR":
            document.getElementById('myModal2').style.display = 'none';
            break;
        case "case":
            document.getElementById('myModal3').style.display = 'none';
            break;
    }
}

