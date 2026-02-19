const body = document.getElementsByTagName("body")[0];
const dropdown = document.getElementsByTagName("select")[0];
const input = document.getElementsByTagName("textarea")[0];
const output = document.getElementById("output");
const Encryption = document.getElementById("ENCRYPT");
const Decryption = document.getElementById("DECRYPT");

function genDropdownOpts(){
    for (let i=0; i<26; i++){
        const newOpt = document.createElement("option");
        newOpt.value = i+1;
        newOpt.textContent = i+1;
        dropdown.appendChild(newOpt)
    }
}

function genOutput(){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let outputResult = "";
    const inputText = input.value;
    let keyShift = Number(dropdown.value)-1;
    if (Encryption.style.backgroundColor == "yellow"){
        keyShift = 26 - keyShift
    }
    for(let i=0; i<inputText.length; i++){
        let asciiNum = (inputText.charCodeAt(i));
        if ( 96 < asciiNum && asciiNum < 123){
           var shiftWith = lowercase;
        } else if ( 64 < asciiNum && asciiNum < 91){
           var shiftWith = uppercase;
        } else{
           var shiftWith = null;
        } if (shiftWith == null){
           outputResult += inputText[i];
        } else{
            if (shiftWith == lowercase){
                asciiNum -= 96;
            } else{
                asciiNum -= 64;
            }
            /// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z //// a b c d e f g h i j k l m n o p q r s t u v w x y z
            let newAlphabetInd = (Math.abs(asciiNum + keyShift))%26
            console.log(asciiNum)
            outputResult += shiftWith[newAlphabetInd]
            console.log(newAlphabetInd-1)
        }
        
    }
    output.textContent = outputResult;

}

function changeSelection(makeEncrypt){
    if (makeEncrypt == true){
        var selected = Encryption
        var prevSelected = Decryption
    } else{
        var selected = Decryption
        var prevSelected = Encryption
    }
    prevSelected.style.backgroundColor = "yellow";
    selected.style.backgroundColor = "blueviolet";
    prevSelected.style.color = "black";
    selected.style.color = "white";
}