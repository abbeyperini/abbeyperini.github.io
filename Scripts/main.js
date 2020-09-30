let myImage = document.getElementById('this_image');

myImage.addEventListener("click", function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/laceshawl.jpg') {
      myImage.setAttribute ('src','Images/rainbow-scarf.jpg');
      myImage.setAttribute ('alt','Subtle Interruption Shawl by Espace Tricot');
    } 
    else if(mySrc === 'Images/rainbow-scarf.jpg') {
      myImage.setAttribute ('src', 'Images/nezuko.jpg');
      myImage.setAttribute ('alt', 'Abbey in a Nezuko Kamado costume - picture by Patrick Sun');
    }
    else if(mySrc === 'Images/nezuko.jpg') {
      myImage.setAttribute ('src', 'Images/violet.jpg');
      myImage.setAttribute ('alt', 'Abbey in a Violet Evergarden costume');
    }
    else if(mySrc === 'Images/violet.jpg') {
      myImage.setAttribute ('src', "Images/rings-of-change.jpg");
      myImage.setAttribute ('alt', "A crochet blanket in teal yarn made following the pattern Rings of Change by Frank O'Randle");
    }
    else if(mySrc === 'Images/rings-of-change.jpg') {
      myImage.setAttribute ('src', "Images/GLOW.jpg");
      myImage.setAttribute ('alt', "Abbey dressed as Liberty Belle from Netflix's GLOW");
    }
    else {
      myImage.setAttribute ('src','Images/laceshawl.jpg');
      myImage.setAttribute ('alt', "A knit lace shawl in burgundy sparkly yarn made following the pattern Dowland by Dee O'Keefe");
    }
})

/* add code to keep copyright date current */