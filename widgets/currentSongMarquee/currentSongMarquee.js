let currentSongId;

function refresh() {   
    fetch('https://api.streamersonglist.com/v1/streamers/robbyleewilliams/queue')
    .then(response => response.json())
    .then(data => {
        try {
            if(data.list && data.list.length > 0) {
                var song = data.list[0].song;
                var status = data.songsPlayedToday;
                if(currentSongId === song.id) {
                    console.log('Same song is playing');
                } else {
                    currentSongId = song.id;
                    var element = `
                    <div id="current-song" >
                        <span> ${song.title} - ${song.artist} </span>
                        <span> ${song.title} - ${song.artist} </span>
                    </div>`;
                $('#song-container').empty();
                $('#song-container').removeClass("fadeOutClass").show().append(element);
                }
        } else {
            console.log('Empty Queue');
            $('#song-container').empty();
            $('#song-container').addClass("fadeOutClass");
        }
        } catch (err) {
            console.error(err);
        }
    });
    // make Ajax call here, inside the callback call:
    setTimeout(refresh, 10000);
    // ...
}


// initial call, or just call refresh directly
setTimeout(refresh, 10000);