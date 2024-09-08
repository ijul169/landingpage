setTimeout(function() {
    alert("selamat datang di toko online kami");
}, 3000);

const heroText = dokument.queryselector("hero h2");
const color = ["#FF5733", "#33FF57", "#3357FF"]
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.style.color = colors[colorIndex];
    colorIndex = (colorindex + 1) % color.length;
} 

setInterval(changeHeroTextColor, 2000);
let currentImageIndex = 0;
const image =["img/bg.jpg", "img/1.jpg", "img/2.jpg"];

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1)% image.lengeth;
    document.queryselector(
        "#hero"
    ).style.backgroundImage = `url('${image[currentImageIndex]}')`;
}

setInterval(changeHeroImage, 2000);
const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((image => {
    image.addEventListener("click", () => {
        image.style.transfrom = "scale(1.5)";
        image.style.transition = "transfrom 0.5s";
    });
    image.addEventListener("mouseLeave", () => {
        image.style.transfrom = "scale(1)";
    });
}));

document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefalut();
        alert("Terima kasih telah membeli produk kami");
    });
});

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "^";
scrollToTopBtn.id = "scrollToToopBtn";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    })
});

