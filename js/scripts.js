function validate()  {
    var zipcode = $("#zipcode").val();
    if(zipcode.length != 5 || isNaN(zipcode)){
        alert("Zipcode is not valid or not in a valid format.");
        return false;
    }
}