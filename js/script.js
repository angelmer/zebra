/**
 * Created by merimax on 02.12.2016.
 */
var imgsrc="img/flake2.gif";
var ie4=(document.all)?1:0;
var ns6=(document.getElementById&&!document.all)?1:0;
var height=(document.layers)?window.innerHeight:window.document.body.scrollHeight;
if (height<window.document.body.clientHeight) height=window.document.body.clientHeight;
var width=(document.layers)?window.innerWidth:window.document.body.clientWidth;
var col=Math.round(height/25);    //количество снежинок

amp=new Array();
x_pos=new Array();
y_pos=new Array();
stx=new Array();
sty=new Array();
deltax=new Array();
obj=new Array();

for (i=0; i<col; ++i) {
 amp[i]=Math.random()*19;
 x_pos[i]=Math.random()*(width-amp[i]-29);
 y_pos[i]=Math.random()*height;
 stx[i]=0.03+Math.random()*0.25;
 sty[i]=2+Math.random();
 deltax[i]=0;
 if (ie4||ns6) {
    document.write("<img id=\"sn"+ i +"\" style=\"position:absolute;" +
    "z-index: "+ i +"; visibility:visible; top:-50px; left:-50px;\"" +
    "src='"+imgsrc+"' border=0>");
 }
 obj[i] = document.getElementById("sn"+i);
}

function flake() {
 for (i=0; i<col; ++i) {
    y_pos[i]+=sty[i];
    if (y_pos[i]>height-49) {
        x_pos[i]=Math.random()*(width-amp[i]-29);
        y_pos[i]=0;
    }
    deltax[i]+=stx[i];
    obj[i].style.top=y_pos[i]+"px";
    obj[i].style.left=x_pos[i]+amp[i]*Math.sin(deltax[i])+"px";
 }
setTimeout("flake()", 40);
}
flake();