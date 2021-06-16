JSON_FILEPATH = "/music/!music.json";
MUSIC_FOLDERPATH = "/music/";
ORIGINALS_DIV = "#originals";
COVERS_DIV = "#covers";
AUDIO_ELEM = document.getElementById("audio");

$(function() {
    console.log("MUSIC");
    $.getJSON(JSON_FILEPATH, function(json) {
        makeTrackElems(json);
        $(".track").click(function() {
            let parser = document.createElement('a');
            parser.href = AUDIO_ELEM.src;
            // Switch tracks when different track is clicked
            if (parser.pathname != $(this).data("track")) {
                $(`[data-track="${parser.pathname}"]`).removeClass("active paused");
                $(this).addClass("active");
                AUDIO_ELEM.src = $(this).data("track");
                AUDIO_ELEM.play();
            // Play clicked track if it is paused
            } else if (AUDIO_ELEM.paused) {
                AUDIO_ELEM.play();
                $(this).removeClass("paused");
                $(this).addClass("active");
            // Pause clicked track if it is playing
            } else {
                AUDIO_ELEM.pause();
                $(this).removeClass("active");
                $(this).addClass("paused");
            }
        });
    });
});

function makeTrackElems(json) {
    let originals = json["originals"];
    let covers = json["covers"];

    for (let i in originals) {
        let filepath = MUSIC_FOLDERPATH + originals[i].title.toLowerCase().replace(/\s/g, '').replace(/'/g, '');
        let html = 
            `<div class="track" data-track="${filepath}.mp3" style="background-image: url(${filepath}.jpg)">
                <p class="title">${originals[i].title}</p>
                <p class="artist">${originals[i].artist}</p>
                <p class="date">${originals[i].date}</p>
            </div>`
        $(ORIGINALS_DIV).append(html);
    }

    for (let i in covers) {
        let filepath = MUSIC_FOLDERPATH + covers[i].title.toLowerCase().replace(/\s/g, '').replace(/'/g, '');
        let html = 
            `<div class="track" data-track="${filepath}.mp3" style="background-image: url(${filepath}.jpg)">
                <p class="title">${covers[i].title}</p>
                <p class="artist">${covers[i].artist}</p>
                <p class="date">${covers[i].date}</p>
            </div>`
        $(COVERS_DIV).append(html);
    }
}