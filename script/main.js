$(function() {
    console.log("!!!!!!!!!!!!!!!!");
    console.log("S4LT");
    console.log("!!!!!!!!!!!!!!!!");
    loadBars();

});

function loadBars() {
    $("#nav").load("/template/nav.html", function(){
        let pathname = window.location.pathname; 
        switch(pathname) {
            case "/page/music.html":
                $("#music").addClass("active");
                break;
            case "/page/art.html":
                $("#art").addClass("active");
                break;  
            case "/page/writing.html":
                $("#writing").addClass("active");
                break;
        }
    });
    $("#footer").load("/template/footer.html");
}
