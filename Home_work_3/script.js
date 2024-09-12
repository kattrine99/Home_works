let result = document.getElementById('Phone');

function selectCountry(){
    let Select = document.getElementById("Countries").value;
    if (Select == "Select"){
        result.value = ' ';
    }
    else if(Select == "Uzbekistan"){
        result.value = '+998';
    }
    else if(Select == "USA"){
        result.value = '+1';
    }
    else{
        result.value = '+7';
    }
    return result;
}

function Check(){
    let button = document.getElementById('Btn');
    let checkbox = document.getElementById('Checked');

    if (checkbox.checked) {
        button.hidden = false; 
    } else {
        button.hidden = true;  
    }
}
