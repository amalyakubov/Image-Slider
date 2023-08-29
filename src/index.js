let index = 0;
const IMAGESARRAY = Array.from(document.querySelectorAll("img"));
function Next() {
  console.log(IMAGESARRAY);
  if (index !== IMAGESARRAY.length - 1) {
    const IMAGE = IMAGESARRAY[index];
    IMAGE.classList.add("hidden");
    index += 1;
  }
}

function Previous() {
  if (index !== 0) {
    const IMAGE = IMAGESARRAY[index - 1];
    if (IMAGE.classList.contains("hidden")) {
      IMAGE.classList.remove("hidden");
    }
    const CURRENTIMAGE = IMAGESARRAY[index];
    if (CURRENTIMAGE.classList.contains("hidden")) {
      CURRENTIMAGE.classList.remove("hidden");
    }
    index -= 1;
  }
}

const LEFTBUTTON = document.getElementById("left");
LEFTBUTTON.addEventListener("click", () => {
  Previous();
});
const RIGHTBUTTON = document.getElementById("right");
RIGHTBUTTON.addEventListener("click", () => {
  Next();
});
