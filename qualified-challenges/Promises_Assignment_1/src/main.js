const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
    const pass = [];
const result = tell(question)
    .then((result) => {
        
        pass.push("Your question was: " + question);
        pass.push("Your fortune is: " + result);

            //console.log(`pass: ${pass}`);
            return pass;
        })
    .catch((error) => {
       // console.log(`There was an error: ${error}`);
        return    "There was an error: " + error;
    })

    return result;
}

function fullSession(question) {
    
    // the array contain:
   //  wellcom message
   // question ask
   // respond
   // goodbye message

    
if (question) {
    const pass = [];
    const result =  welcome()
    .then( (welcomeMessage) => {
        console.log(`welcomeMessage: ${welcomeMessage}`);
        pass.push(welcomeMessage);

    console.log(`pass: ${pass}`);
            console.log(`result: ${result}`);
        return pass;
        })
    .then(
            tell(question)
                    .then( (result) => {
                        pass.push("Your question was: " + question);
                        pass.push("Your fortune is: " + result);
                
                        console.log(`pass: ${pass}`);
                        console.log(`result: ${result}`);
                            return pass;
                    })
                    .catch((error) => {
                        console.log(`pass: ${pass}`);
                       return "There was an error: " + error;
                       
                     }))
    
    .then(

        goodbye().then( (goodbyeMessage) => {
            console.log(`pass: ${pass}`);
            console.log(`result: ${result}`);
            return pass.push(goodbyeMessage);
            
        })
    )
    console.log(`result: ${result}`);

        return result;
} else {
    const pass = [];
    const result =  welcome()
    .then( (welcomeMessage) => {
        console.log(`welcomeMessage: ${welcomeMessage}`);
        pass.push(welcomeMessage);

    console.log(`pass: ${pass}`);
            console.log(`result: ${result}`);
        return pass;
        })

    .catch( 
        tell().catch ( (error) => {
            return pass.push( "There was an error: " + error);
        })
    )
   
    .then(

        goodbye().then( (goodbyeMessage) => {
             
          let last =  pass.push(goodbyeMessage);
          console.log(`pass: ${pass}`);
            console.log(`result: ${result}`);
            return last;
        }))

        console.log(`result: ${result}`);

        return result;
}
  
   
   
}

module.exports = { getFortune, fullSession };
