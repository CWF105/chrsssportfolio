

function openModal(title) {
    switch(title) {
        case "julian":
            document.getElementById('myModal1').style.display = 'flex';
            break;
        case "AR":
            document.getElementById('myModal2').style.display = 'flex';
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
    }
}

