

document.querySelectorAll('.inactive').forEach(function(e) {
    e.addEventListener('click', function(){
        
       // console.log(document.getElementsByClassName("inactive").value);

        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
            document.getElementsByClassName("inactive").value = "1";
           // console.log(document.getElementsByClassName("inactive").value);
        }
        else {
            this.style.backgroundColor = "white";
            document.getElementsByClassName("inactive").value = "0";
           // console.log(document.getElementsByClassName("inactive").value);
        }
    })
});

document.querySelectorAll('.active').forEach(function(e) {
    e.addEventListener('click', function(){

       // console.log(document.getElementsByClassName("active").value);
        

        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = "red";
            document.getElementsByClassName("active").outerHTML = '<button type= "button" onclick="check()" value="1" class="active">';
          //  console.log(document.getElementsByClassName("active").value);
        }
        else {
            this.style.backgroundColor = "white";
            document.getElementsByClassName("active").outerHTML = '<button type= "button" onclick="check()" value="0" class="active">';
          //  console.log(document.getElementsByClassName("active").value);
        }
    })
});


function check() {

    var arr = document.getElementsByClassName('active');

    for ( var i = 0; i < arr.length; i++) {
        if (arr[i].value == "1") {
            console.log("yes");

        }
        else {
            console.log("no");
            console.log(arr[i]);
        }
    }
}