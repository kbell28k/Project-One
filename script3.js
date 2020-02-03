function showCityDivs (select){
    if (select.value==1){
        document.getElementById('denDiv').style.display = "block";
    }
    else {
        document.getElementById('denDiv').style.display = "none";
    }

    if (select.value==2){
        document.getElementById('chiDiv').style.display = "block";
    }
    else {
        document.getElementById('chiDiv').style.display = "none";
    }

    if (select.value==3){
        document.getElementById('nyDiv').style.display = "block";
    }
    else {
        document.getElementById('nyDiv').style.display = "none";
    }
}