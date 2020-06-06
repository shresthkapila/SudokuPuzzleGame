var flag = false;
var flag2 = false;


document.querySelectorAll('.inactive').forEach(function(e) {
    e.addEventListener('click', function(){
        
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "#009999";
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
            this.style.backgroundColor = "#009999";
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
   
    if (act == false && inact == false) {
        document.getElementById('message').innerHTML = "HINT: Go ahead click more to win the game";
    } 
    else if (act == true && inact == true) {
        document.getElementById('message').innerHTML = "CONGRATULATIONS";
    }
    else if (act == true && inact == false) {
        document.getElementById('message').innerHTML = "HINT: Clicked more!! Reduce some clicks to win";
    }
    else if (act == false && inact == true) {
        document.getElementById('message').innerHTML = "HINT: Some of the correct ones are left...Keep going!!";
    }
    else {
        document.getElementById('message').innerHTML = "Nice!! Keep going";
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


    function openCity(evt, cityname) {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityname).style.display = "block";
        evt.currentTarget.className += " active";
      }