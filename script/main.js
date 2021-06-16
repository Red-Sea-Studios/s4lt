$(function() {
    console.log("!!!!!!!!!!!!!!!!");
    console.log("S4LT");
    console.log("!!!!!!!!!!!!!!!!");
    loadBars();
    let pathname = window.location.pathname; 
    switch(pathname) {
        case 

    }
    $("#music").addClass("active");



});


function loadBars() {
    $("#nav").load("/template/nav.html");
    $("#footer").load("/template/footer.html");
}
