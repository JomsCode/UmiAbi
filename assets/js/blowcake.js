
let c = 0
let candles = document.getElementById("candles")
let flame = document.getElementById("flame")
let flame2 = document.getElementById("flame2")
let flame3 = document.getElementById("flame3")
let greetingCon = document.getElementById("greetCon")
let bearPaw = document.getElementById("paw")

let concon = document.getElementById("concon")



let flameFader = (flameObject, animation) => {

    flameObject.addEventListener("click", () => {
        flameObject.style.animation = animation;
        flameObject.style.opacity = 0
        c = c + 1
    })



}




flameFader(flame, "fadingFire 1s")
flameFader(flame2, "fadingFire 1s")
flameFader(flame3, "fadingFire 1s")

candles.addEventListener("click", () => {
    if (c >= 3) {

        concon.style.visibility = "visible"
        bearPaw.style.animation = "wave 0.5s infinite linear alternate"

        const bdaySong = document.getElementById("bdaysong")
        bdaySong.play();
        bdaySong.volume = 0.5;
        greetingCon.removeChild(greetingCon.children[0])

        let header = document.createElement("h2")
        header.id = "bdayGreeting"
        header.innerHTML = "Happy Birthday Babyyyy koo"
        header.setAttribute("data-aos", "fade-up")

        // header.style.fontSize = "1rem"
        header.style.fontFamily = "Ananda"
        // header.style.backgroundImage = "linear-gradient(315deg, #6617cb 0%, #cb218e 74%);"
        // header.style.backgroundClip = "text"
        // header.style.color = "transparent"
        greetingCon.appendChild(header)

    }

})



// <h2 id="bdayGreeting" style="visibility: hidden">
//
// </h2>