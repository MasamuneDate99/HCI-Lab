function formValidation(){
    var name = document.forms.name;
    var password = document.forms.password;
    var email = document.forms.email;
    var address = document.forms.address;
    var country = document.forms.country;
    var city = document.forms.city;
    var gender = document.forms.gender;
    var TOS = document.forms.TOS;


    if(nameValidation (name)){

    }

    if(countryselect (country)){

    }

    if(passwordLength (password, 8, 30)){

    }

    function countryselect(country){
        if(country.value == "Default"){
            alert('Please select one of the country from the list !');
            country.focus();
            return false;
        }
        else
        {
            return true;
        }
    }

    function nameValidation(name){
        if(name !== ""){
            var content;
            var ban = new Array ("/","!", "@", "#","$","%","%","^","&","*",
                                      "(",")","_","+","=","-","`","~",";","<","1","2","3","4","5","6","7","8","9","0",
                                      ">",".","?","[","]","{","}",",");
            var content = ban.length;
            for(i = 0;i<name.length;i++){
                if ( name[i] == ban[i] ){
                    alert('Name cannot contain any special character or number !')
                    return false;
                }
            }
            return true;
        }
        else{
            alert('Name cannot be empty !');
        }
        return false;
    }

    function passwordLength(password, mx, my){
        var passLength = password.value.length;
        if ( passLength == 0 || passLength < mx || passLength > my){
            alert('Password cannot be empty, and must be 8 - 30 characters !')
            password.focus();
            return false;
        }
        else
        {
            return true;
        }
    }
}