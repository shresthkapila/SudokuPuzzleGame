var flag = false;
var flag2 = false;

document.querySelectorAll('.inactive').forEach(function(e) {
    e.addEventListener('click', function(){
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
            this.style.color = "red";
            this.innerHTML = "1";
            // check();
        }
        else {
            this.style.backgroundColor = "white";
            this.style.color = "white"
            this.innerHTML = "0";
            // check();
        }
    })
});

document.querySelectorAll('.active').forEach(function(e) {
    e.addEventListener('click', function(){
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
            this.style.color = "red";
            this.innerHTML = "1";
            // check();
        }
        else {
            this.style.backgroundColor = "white";
            this.style.color = "white"
            this.innerHTML = "0";
            // check();
        }
    })
});

function check() {
    var act = checkAllActive();
    var inact = checkAllInactive();
   
    if (act == true && inact == true) {
        document.getElementById('message').innerHTML = "CONGRATULATIONS!!!";
        window.alert("CONGRATULATIONS!!! YOU WON")
        document.getElementById('won').src = "images/giphy.gif"
    }
    else if (act == false && inact == false) {
        document.getElementById('message').innerHTML = "Not yet: Go ahead click more to win the game";
        document.getElementById('won').src = "images/giphy2.gif"
    }
    else if (act == true && inact == false) {
        document.getElementById('message').innerHTML = "Not yet: Clicked more!! Reduce some clicks to win";
        document.getElementById('won').src = "images/giphy2.gif"
    }
    else if (act == false && inact == true) {
        document.getElementById('message').innerHTML = "Not yet: Some of the correct ones are left...Keep going!!";
        document.getElementById('won').src = "images/giphy2.gif"
    }
    else {
        document.getElementById('message').innerHTML = "Nice!! Keep going";
        document.getElementById('won').src = "images/giphy2.gif"
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
        if (allInactiveButtons[i].innerHTML == 0) {
            flag2 = true;
        }
        else {
            flag2 = false;
            break;
        }
    }
    return flag2;
}

function refreshPage() {
    window.location.reload();
        // document.querySelectorAll('.inactive').forEach(function(e) {
        //     var allInactiveButtons = document.getElementsByClassName('inactive');

        //     for (var i = 0; i < allInactiveButtons.length ; i++) {
        //         // console.log(e[i]);
                
        //         this.backgroundColor = "white";
        //         this.innerHTML = "0";
        //     this.style.backgroundColor = "white";
        //     console.log(this.innerHTML);
        //     console.log(this.style.backgroundColor);
        
        // })

        // document.querySelectorAll('.active').forEach(function(e) {
        //     console.log(e);
            
        //     this.innerHTML = "0";
        //     this.style.backgroundColor = "white";
        //     console.log(this.innerHTML);
        //     console.log(this.style.backgroundColor);
            
        // })
        
        // document.querySelectorAll('.active').forEach(function(e) {
        //     this.innerHTML == "0";
        // }

        // var allActiveButtons = document.getElementsByClassName('active');
        // var allInactiveButtons = document.getElementsByClassName('inactive');

        // for (var i = 0; i < allActiveButtons.length; i++) {
        //     console.log("aaa");
        //     console.log(allActiveButtons[i]);
        //     allActiveButtons[i].innerHTML == "0";
        //     console.log(allActiveButtons[i]);
        // }

        // for (var j = 0; j < allInactiveButtons.length; j++) {
        //     console.log(allActiveButtons[j]);
        //     allInactiveButtons[j].innerHTML == "0";
        //     console.log(allActiveButtons[j]);
        // }

    }

function manageNavs(evt, cityname) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(cityname).style.display = "block";
    evt.currentTarget.className += " active";
    }