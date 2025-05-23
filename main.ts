
// this is your "start" function
basic.forever(function () {

     input.onButtonPressed(Button.A, function() {
    
        //put your checkDirection function call here
        

     })

})



// finish your checkDirection function definition here
function checkDirection(){
    //each "if" statements 
    if ((input.compassHeading() >= 337.5 && input.compassHeading() < 360) || (input.compassHeading() >= 0 && input.compassHeading() < 22.5)) {
        basic.showString("N");
    }

    if (input.compassHeading() >= 22.5 && input.compassHeading() < 67.5) {
        basic.showString("NE");
    }

}


//starter conditionals for the checkTemperature function
    


