function date() {
    // SET get id /getelementbyid
    // SET Date of birth / DoB
    // SET Date length / new Date - DoB
    event.preventDefault();
    let DoB = new Date (document.getElementById("start").value);
    let dateL = (new Date().getTime() - DoB.getTime())/(1000 * 3600 *24);
    const middleAge = 6574;
    //debugger
    if (dateL > middleAge ) {
        answer = "We welcome you to the boom boom room";
        document.getElementById("hidden").style.display = "block";
    } else {
        answer = "You are not yet ready enter the boom boom room";
    }
    document.getElementById("output").innerText =`${answer}`;
}