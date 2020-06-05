

document.querySelectorAll('.inactive').forEach(function(e) {
    e.addEventListener('click', function(){
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
        }
        else {
            this.style.backgroundColor = "white";
        }
    })
});

document.querySelectorAll('.active').forEach(function(e) {
    e.addEventListener('click', function(){
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
        }
        else {
            this.style.backgroundColor = "white";
        }
    })
});


