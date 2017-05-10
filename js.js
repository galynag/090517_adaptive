/**
 * Created by UpscaleAcademy on 10.05.2017.
 */

var block=document.getElementsByClassName('valight-wrapper');

var ttt = document.getElementsByClassName('valight');

function h() {
    for (var i=0; i<block.length; i++) {
        ttt[i].style.marginTop='auto';
        ttt[i].style.marginTop=(block[i].offsetHeight-ttt[i].offsetHeight)/2+'px';
    }
}

h();

window.onresize = h;

// document.querySelector('.mousemoving').onmousewheel = function (event) {
//     console.log(event);
//     return false;
// }

<!--task3.1-2-->
var mousewheel = document.querySelector('.mousemoving');
mousewheel.onmousewheel = function (event) {
    console.log(event);
        console.log(event.deltaY);

        var i=0;
        if (event.deltaY>0) {
            mousewheel.style.background='red';
            i=i+20;
            mousewheel.style.width=mousewheel.offsetWidth+i+'px';
            mousewheel.style.height=mousewheel.offsetHeight+i+'px';
            // mousewheel.style.left=

        } else if (event.deltaY<0) {
            mousewheel.style.background='grey';
            i=i-20;
            mousewheel.style.width=mousewheel.offsetWidth+i+'px';
            mousewheel.style.height=mousewheel.offsetHeight+i+'px';
        }
        return false;
}

<!--task3.3-->
var sliderBox = document.querySelector('.slider-box');
var slider = document.querySelector('.slider');
sliderBox.onmousewheel = function (event) {
    console.log(slider.style.top);
    console.log(event);
    var i=0;
    if (event.deltaY>0 && slider.offsetTop<0) {
        i=i+30;
        slider.style.top=slider.offsetTop+i+'px';
    } else if (event.deltaY<0 && slider.offsetTop<=0 && slider.offsetTop>-200) {
        i=i-30;
        slider.style.top=slider.offsetTop+i+'px';
    }
    return false;
}

<!--task3.4-->
var slider2 = document.querySelector('#images');
var img= document.getElementById('images').getElementsByTagName('img');
console.log(img);
var x=0;
img[x].style.background='black';
slider2.onmousewheel = function (event) {
    console.log(event);
    console.log(x);
    // img[x].style.background='black';
        if (event.deltaY<0) {
            if (x<(img.length-1) && x>=0){
            img[x].style.background='none';
            x++;
                console.log(x);
            img[x].style.background='black';
            }
            else if (x==(img.length-1)) {
                    img[x].style.background='none';
                    x=0;
                console.log(x);
                    img[x].style.background='black';
            }
            }
        else if (event.deltaY>0) {

            if (x > 0 && x < img.length) {
                   img[x].style.background = 'none';
                    x--;
                console.log(x);
                    img[x].style.background = 'black';
            }
            else if (x == 0) {
                    img[x].style.background = 'none';
                    x = Number(img.length) - 1;
                console.log(x);
                    img[x].style.background = 'black';
            }
        }
         return false;
    }



