/* not active code - here to remind me to animate my galleries */


let myImage = document.getElementById('this_image');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lace-shawl.jpg') {
      myImage.setAttribute ('src','images/rainbow-shawl.jpg');
      myImage.setAttribute ('alt','Subtle Interruption Shawl by Espace Tricot');
    } 
    else if(mySrc === 'images/rainbow-shawl.jpg') {
      myImage.setAttribute ('src', 'images/nezuko.jpg');
      myImage.setAttribute ('alt', 'Abbey in a Nezuko Kamado costume - picture by Patrick Sun');
    }
    else if(mySrc === 'images/nezuko.jpg') {
      myImage.setAttribute ('src', 'images/violet.jpg');
      myImage.setAttribute ('alt', 'Abbey in a Violet Evergarden costume');
    }
    else {
      myImage.setAttribute ('src','images/lace-shawl.jpg');
      myImage.setAttribute ('alt', "Dowland by Dee O'Keefe");
    }
}

/* add code to keep copyright date current */