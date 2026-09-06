    // function abrir() {
    //     var meun= document.getElementById("meun")
        

    //     if (meun.style.display==="none") {
    //         meun.style.display="block"
    //     } else
    //         if(meun.style.display==="block"){
    //         meun.style.display="none"
    //     }
    // }
    

    function abrir() {
    var meun = document.getElementById("meun");

    if (meun.style.display== "none" || meun.style.display=="") {
        meun.style.display = "block";
    } else if (meun.style.display == "block") {
        meun.style.display = "none";
    }
}