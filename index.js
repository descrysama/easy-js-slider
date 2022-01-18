let slide = new Array('img1.jpg', 'img2.jpg', 'img3.jpg','img4.jpg');
let i = 0;

function ChangeSlide(loop) {
    i = i + loop;
    if (i < 0)
        i = slide.length - 1;
    if (i > slide.length - 1)
        i = 0;
    document.getElementById("imgslider").src = slide[i];
}

setInterval('ChangeSlide(1)', 5000)