let myImage = document.getElementById('this_image');

myImage.addEventListener("click", function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/ami-elephants.jpg') {
      myImage.setAttribute ('src', 'Images/rainbow-scarf.jpg');
      myImage.setAttribute ('alt', "A knit shawl made in rainbow and silver/grey yarn following the patter Subtle Interruption Shawl by Espace Tricot");
    } 
    else if(mySrc === 'Images/rainbow-scarf.jpg') {
      myImage.setAttribute ('src', "Images/swoctopus.jpg");
      myImage.setAttribute ('alt', "A knit sweater in white and shades of blue and purple made following the pattern Embrace Octopus Sweater by Maia E. Sirnes");
    }
    else if(mySrc === 'Images/swoctopus.jpg') {
      myImage.setAttribute ('src', "Images/rings-of-change.jpg");
      myImage.setAttribute ('alt', "A crochet blanket in teal yarn made following the pattern Rings of Change by Frank O'Randle");
    }
    else if (mySrc === 'Images/rings-of-change.jpg') {
      myImage.setAttribute ('src','Images/laceshawl.jpg');
      myImage.setAttribute ('alt', "A knit lace shawl in burgundy sparkly yarn made following the pattern Dowland by Dee O'Keefe");
    }
    else if (mySrc === "Images/laceshawl.jpg") {
      myImage.setAttribute ('src', 'Images/pineappleHat.jpg')
      myImage.setAttribute ('alt', 'A knit hat designed to look like a pinapple following the pattern Pineapple Hat by Rachel M. Hansen')
    }
    else {
      myImage.setAttribute ('src', 'Images/ami-elephants.jpg');
      myImage.setAttribute ('alt', "Two stuffed crochet Amigurumi Elephants in pink and grey - pattern from allaboutami.com");
    }
})