var flag = false;
var flag2 = false;


document.querySelectorAll('.inactive').forEach(function(e) {
    e.addEventListener('click', function(){
        
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
            this.innerHTML = "1";
            console.log(this.innerHTML);
            check();
        }
        else {
            this.style.backgroundColor = "white";
            this.innerHTML = "0";
            console.log(this.innerHTML);
            check();
        }
    })
});

document.querySelectorAll('.active').forEach(function(e) {
    e.addEventListener('click', function(){
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
            this.innerHTML = "1";
            console.log(this.innerHTML);
            check();
        }
        else {
            this.style.backgroundColor = "white";
            this.innerHTML = "0";
            console.log(this.innerHTML);
            check();
        }
    })
});


function check() {
    var act = checkAllActive();
    var inact = checkAllInactive();

    // console.log(act);
    // console.log(inact);
   
    if (act == false && inact == false) {
        console.log("click more to win");
    } 
    else if (act == true && inact == true) {
        console.log("CONGRATULATIONS");
    }
    else if (act == true && inact == false) {
        console.log("check again: reduce some of them to win");
    }
    else if (act == false && inact == true) {
        console.log("check again: some of the correct ones are left");
    }

    return;   
}


function checkAllActive() {
    var allActiveButtons = document.getElementsByClassName('active');

    for (var i = 0; i < allActiveButtons.length; i++) {
        if (allActiveButtons[i].innerHTML == 1) {
            flag = true;
        }
        else {
            flag = false;
            break;
        }
    }
    return flag;
}

function checkAllInactive() {

    var allInactiveButtons = document.getElementsByClassName('inactive');
    for (var i = 0; i < allInactiveButtons.length; i++) {
        // console.log("inax");
        // console.log(allInactiveButtons[i].innerHTML);
        if (allInactiveButtons[i].innerHTML == 0) {
            flag2 = true;
        }
        else {
            flag2 = false;
            // console.log("no");
            break;
        }
    }

    return flag2;
}