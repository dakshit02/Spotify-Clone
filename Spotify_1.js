let flag = 0;
let audio = null;
let currentIndex = 0;
let seekbarcircle = document.querySelector(".seekbarcircle");
// seekbarcircle.style.backgroundColor = "red";
const seekbar = document.querySelector(".seekbar");
let pausebutton = document.querySelector(".fa-pause");
let playbutton = document.querySelector(".fa-circle-play");
let previousbut = document.querySelector(".fa-backward");
let nextbut = document.querySelector(".fa-forward");

async function getSongs() {

    let a = await fetch("./Songs/");

    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    // console.log(as)
    let songsArray = [];
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songsArray.push(element.href)
        }
    }
    // console.log(songsArray);
    return songsArray;

}

async function main(index) {


    let songs = await getSongs();


    if (flag == 1) {
        audio.pause()
    }

    currentIndex = index;

    if (index == 0) {
        seekbarcircle.style.left = 0 + "%"
        audio = new Audio(songs[3]);
        audio.play();

        audio.addEventListener("loadedmetadata", () => {
            timeDisplay.innerText = `00:00 / ${formatTime(audio.duration)}`;
        });
        audio.addEventListener("timeupdate", () => {
            timeDisplay.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
            seekbarcircle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
        });



        flag = 1
    }

    else if (index == 1) {
        seekbarcircle.style.left = 0 + "%"
        audio = new Audio(songs[1]);
        audio.play();
        audio.addEventListener("loadedmetadata", () => {
            timeDisplay.innerText = `00:00 / ${formatTime(audio.duration)}`;
        });
        audio.addEventListener("timeupdate", () => {
            timeDisplay.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
            seekbarcircle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
        });


        flag = 1
    }
    else if (index == 2) {

        seekbarcircle.style.left = 0 + "%"
        audio = new Audio(songs[0]);
        audio.play();
        audio.addEventListener("loadedmetadata", () => {
            timeDisplay.innerText = `00:00 / ${formatTime(audio.duration)}`;
        });
        audio.addEventListener("timeupdate", () => {
            timeDisplay.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
            seekbarcircle.style.left = (audio.currentTime / audio.duration) * 100 + "%";

        });

        console.log("hi");
        flag = 1
    }
    else if (index == 3) {
        seekbarcircle.style.left = 0 + "%"
        audio = new Audio(songs[2]);
        audio.play();
        audio.addEventListener("loadedmetadata", () => {
            timeDisplay.innerText = `00:00 / ${formatTime(audio.duration)}`;
        });
        audio.addEventListener("timeupdate", () => {
            timeDisplay.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
            seekbarcircle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
        });


        flag = 1
    }
    else if (index == 4) {
        seekbarcircle.style.left = 0 + "%"
        audio = new Audio(songs[4]);
        audio.play();
        audio.addEventListener("loadedmetadata", () => {
            timeDisplay.innerText = `00:00 / ${formatTime(audio.duration)}`;
        });
        audio.addEventListener("timeupdate", () => {
            timeDisplay.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
            seekbarcircle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
        });


        flag = 1
    }
    else if (index == 5) {
        seekbarcircle.style.left = 0 + "%"
        audio = new Audio(songs[5]);
        audio.play();
        audio.addEventListener("loadedmetadata", () => {
            timeDisplay.innerText = `00:00 / ${formatTime(audio.duration)}`;
        });
        audio.addEventListener("timeupdate", () => {
            timeDisplay.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
            seekbarcircle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
        });


        flag = 1
    }



}

function formatTime(seconds) {

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}



var timeDisplay = document.getElementById("song_info");

const songCoverPicBox = document.querySelectorAll(".songCoverPicBox");

songCoverPicBox.forEach((box, index) => {
    box.addEventListener("click", () => {

        playbutton.style.display = "none";
        pausebutton.style.display = "flex";
        pausebutton.addEventListener("click", () => {




            playbutton.style.display = "flex";
            pausebutton.style.display = "none";
            // console.log("Audio Duration :",audio.duration);

            if (!audio.paused) {
                audio.pause();
                console.log("Paused the song");
                console.log(audio.currentTime);
                // Optionally, toggle play/pause icon

            }
            if (audio.paused) {
                playbutton.addEventListener("click", () => {
                    playbutton.style.display = "none";
                    pausebutton.style.display = "flex"
                    audio.play();
                })

            }

        })
        main(index);


    })

})





seekbar.addEventListener("click", (e) => {
    const rect = seekbar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * audio.duration;
    audio.currentTime = newTime;
});

nextbut.addEventListener("click", async () => {
    let songs = await getSongs();
    currentIndex = (currentIndex + 1) % songs.length; // Loop back to 0 if end
    main(currentIndex);
});

previousbut.addEventListener("click", async () => {
    let songs = await getSongs();
    currentIndex = (currentIndex - 1 + songs.length) % songs.length; // Loop to last if -1
    main(currentIndex);
});



