function genPas (){
    console.log("Hi");
    const readline = require('readline-sync');
    let num = readline.question("What is the longest password to generate?");
    if (Number.isInteger(+num) && +num !== 0) {

        let pass = "";
        for (let index = 0; index < +num; index++) {
            
            const char = '!qW1eR?2tY3.uI4o,P5aS_6dF7(gH8jK9)lZ0xCvBnM';
            let flag = false;
            while (flag !== true) {
                const randomChar = Math.floor(Math.random() * char.length);
                if (!pass.includes(char[randomChar])) {
                    pass += char[randomChar]; 
                    flag = true
                }
            }
            // console.log(pass);
        }


       return pass;
    } else {
        console.log("Enter the correct value");
    }
    
}

module.exports = {genPas};


