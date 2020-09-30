let cosImage = document.getElementById('cos_image');

cosImage.addEventListener("click", function() {
    let cosSrc = cosImage.getAttribute('src');
    if(cosSrc === 'Images/BB.jpg') {
      cosImage.setAttribute ('src','Images/violet.jpg');
      cosImage.setAttribute ('alt','Abbey dressed as Violet Evergarden');
    } 
    else if(cosSrc === 'Images/violet.jpg') {
      cosImage.setAttribute ('src', 'Images/nezuko.jpg');
      cosImage.setAttribute ('alt', 'Abbey in a Nezuko Kamado costume - picture by Patrick Sun');
    }
    else if(cosSrc === 'Images/nezuko.jpg') {
      cosImage.setAttribute ('src', 'Images/sailor-moon.jpg');
      cosImage.setAttribute ('alt', 'Abbey dressed as Sailor Moon - photo by Chris Wold');
    }
    else if(cosSrc === 'Images/sailor-moon.jpg') {
      cosImage.setAttribute ('src', 'Images/overhaul.jpg');
      cosImage.setAttribute ('alt', 'Abbey dressed as Overhaul from My Hero Academia');
    }
    else if(cosSrc === 'Images/overhaul.jpg') {
      cosImage.setAttribute ('src', 'Images/GLOW.jpg');
      cosImage.setAttribute ('alt', "Abbey dressed as Liberty Belle from Netflix's GLOW");
    }
    else if(cosSrc === 'Images/GLOW.jpg') {
      cosImage.setAttribute ('src', 'Images/goodOmens.jpg');
      cosImage.setAttribute ('alt', 'Abbey dressed as Aziraphale from Good Omens')
    }
    else {
      cosImage.setAttribute ('src','Images/BB.jpg');
      cosImage.setAttribute ('alt', "Abbey dressed as Bombshell Batwoman - Away Game Variant");
    }
})