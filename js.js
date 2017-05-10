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



