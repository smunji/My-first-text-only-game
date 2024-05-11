var button1 = false;
var button2 = false;
var button3 = false;
var win = false;
var condition = false;

//The checking for button clicks
function checkWin() {
    if (button1 && button2 && button3) {
        win = true;
        console.log('The correct items have been found.')

    }
   
}

document.getElementById("button1").addEventListener('click', function(event){
        button1 = true;
        checkWin();
});
    
document.getElementById("button2").addEventListener('click', function(event){
        button2 = true;
        checkWin();
});
        
document.getElementById("button3").addEventListener('click', function(event){
        button3 = true;
        checkWin();
});


