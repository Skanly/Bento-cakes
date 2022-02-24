const myImage = document.querySelector('.change-img');
myImage.onclick = function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='../img/taste1.png'){
        myImage.setAttribute('src','../img/taste1zoom.png');
    } else {
        myImage.setAttribute('src', '../img/taste1.png');
    }
}
const myImage2 = document.querySelector('.change-img2');
myImage2.onclick = function(){
    let mySrc=myImage2.getAttribute('src');
    if(mySrc==='../img/taste2.png'){
        myImage2.setAttribute('src','../img/taste2zoom.png');
    } else {
        myImage2.setAttribute('src', '../img/taste2.png');
    }
}
const myImage3 = document.querySelector('.change-img3');
myImage3.onclick = function(){
    let mySrc=myImage3.getAttribute('src');
    if(mySrc==='../img/taste3.png'){
        myImage3.setAttribute('src','../img/taste3zoom.png');
    } else {
        myImage3.setAttribute('src', '../img/taste3.png');
    }
}
const myImage4 = document.querySelector('.change-img4');
myImage4.onclick = function(){
    let mySrc=myImage4.getAttribute('src');
    if(mySrc==='../img/taste5.png'){
        myImage4.setAttribute('src','../img/taste4zoom.png');
    } else {
        myImage4.setAttribute('src', '../img/taste5.png');
    }
}
const myImage5 = document.querySelector('.change-img5');
myImage5.onclick = function(){
    let mySrc=myImage5.getAttribute('src');
    if(mySrc==='../img/taste6.png'){
        myImage5.setAttribute('src','../img/taste5zoom.png');
    } else {
        myImage5.setAttribute('src', '../img/taste6.png');
    }
}