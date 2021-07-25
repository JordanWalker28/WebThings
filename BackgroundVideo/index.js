const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");

btn.addEventListener("click", () => {
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause")
        video.play()
    }else{
        btn.classList.add("pause")
        video.pause()
    }
})