let myImage = document.getElementById('this_image');
let menuContainer = document.getElementById("menu-container");
let menu = document.getElementById("menu");
let dropdown = document.getElementById("dropdown");
let dropdownMenu = document.getElementById("dropdown-menu")

let sources = ['Images/rainbow-scarf.jpg', 'Images/nezuko.jpg', 
  'Images/violet.jpg', "Images/rings-of-change.jpg", "Images/GLOW.jpg", 'Images/laceshawl.jpg'];
let alts = ['Subtle Interruption Shawl by Espace Tricot', 'Abbey in a Nezuko Kamado costume - picture by Patrick Sun', 
  'Abbey in a Violet Evergarden costume', "A crochet blanket in teal yarn made following the pattern Rings of Change by Frank O'Randle", 
  "Abbey dressed as Liberty Belle from Netflix's GLOW", "A knit lace shawl in burgundy sparkly yarn made following the pattern Dowland by Dee O'Keefe"];

let faSources = ['Images/rainbow-scarf.jpg', "Images/swoctopus.jpg", "Images/rings-of-change.jpg", 'Images/laceshawl.jpg', 
  'Images/pineappleHat.jpg', 'Images/ami-elephants.jpg']
let faAlts = ["A knit shawl made in rainbow and silver/grey yarn following the patter Subtle Interruption Shawl by Espace Tricot",
  "A knit sweater in white and shades of blue and purple made following the pattern Embrace Octopus Sweater by Maia E. Sirnes",
  "A crochet blanket in teal yarn made following the pattern Rings of Change by Frank O'Randle",
  "A knit lace shawl in burgundy sparkly yarn made following the pattern Dowland by Dee O'Keefe",
  'A knit hat designed to look like a pinapple following the pattern Pineapple Hat by Rachel M. Hansen',
  "Two stuffed crochet Amigurumi Elephants in pink and grey - pattern from allaboutami.com"];

let cosSources = ['Images/violet.jpg', 'Images/nezuko.jpg', 'Images/sailor-moon.jpg', 'Images/overhaul.jpg',
'Images/GLOW.jpg', 'Images/goodOmens.jpg', 'Images/BB.jpg'];
let cosAlts = ['Abbey dressed as Violet Evergarden', 'Abbey in a Nezuko Kamado costume - picture by Patrick Sun',
  'Abbey dressed as Sailor Moon - photo by Chris Wold', 'Abbey dressed as Overhaul from My Hero Academia', "Abbey dressed as Liberty Belle from Netflix's GLOW",
  'Abbey dressed as Aziraphale from Good Omens', "Abbey dressed as Bombshell Batwoman - Away Game Variant"];

let counter = 0;

window.setInterval(() => {
  let sourceArray = sources;
  let altArray = alts;

  if (document.URL.includes("cosplay.html")) {
    sourceArray = cosSources;
    altArray = cosAlts;
  } else if (document.URL.includes("fiber-arts.html")) {
    sourceArray = faSources;
    altArray = faAlts;};

  myImage.setAttribute ('src', sourceArray[counter]);
  myImage.setAttribute ('alt', altArray[counter]);

  if (counter > sources.length - 2) {
    counter = 0;
  } else {
    counter++; };
}, 2000);

var handle = ally.style.focusWithin();

handle.disengage();