// Nav Button ----------------------------------------------------------------------
var dropButton = document.querySelector(".dropbtn");

dropButton.addEventListener("click", function menuButton() {
  document.getElementById("myDropdown").classList.toggle("show");
});
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// interact.js ---------------------------------------------------------------------
const position = { x: 0, y: 0 };

interact(".draggable").draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: false,
    }),
  ],
  // enable autoScroll
  autoScroll: false,

  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,
  },

  allowFrom: ".window-header",
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

// Window POPOP --------------------------------------------------------------------
var randomPos = (min, max) => Math.floor(Math.random() * (min, max + 1) + min);
var wWidth = window.innerWidth / 2;
var wHeight = window.innerHeight / 2;

const desktop = document.querySelector("#dtwindow");

var windowDivAbout = document.createElement("div");
windowDivAbout.className = "draggable";

var windowDivLook = document.createElement("div");
windowDivLook.className = "draggable";

var windowDivLook = document.createElement("div");
windowDivLook.className = "draggable";

// innerHTML window content
var about = `
    <div class="window-header"><button id="hide">X</button>About</div>
    <div class="window-content">
    <h2>Hello!</h2>
    <br>
    <p>Welcome to the website, check out how cool it is - probably made by someone realllly handsome i bet idk....</p>
    <br>
    <p>
      Yo, we gotta take the power back!//
      Bam! Here's the plan//
      Motherfuck Uncle Sam//
      Step back, I know who I am//
      Raise up your ear, I'll drop the style and clear//
      It's the beats and the lyrics they fear//
      The rage is relentless//
      We need a movement with a quickness//
      You are the witness of change//
      And to counteract//
      We gotta take the power back
    </p>
    <br>
    <p>The present curriculum//
      I put my fist in 'em//
      Eurocentric every last one of 'em//
      See right through the red, white and blue disguise//
      With lecture I puncture the structure of lies//
      Installed in our minds and attempting//
      To hold us back//
      We've got to take it back//
      Holes in our spirit causin' tears and fears//
      One-sided stories for years and years and years//
      I'm inferior? Whose inferior?//
      Yeah, they need to check the interior//
      Of the system, who gets em about only one culture//
      And that is why//
      We gotta take the power back!!!</p></div>
`;
var look = `
<div class="window-header"><button id="hide">X</button>Look</div>
<div class="window-content">
<h2>yehhhhh</h2>
<br>
<p>Welcome to the website, check out how cool it is - probably made by someone realllly handsome i bet idk....</p>
<br>
<p>
  Yo, we gotta take the power back!//
  Bam! Here's the plan//
  Motherfuck Uncle Sam//
  Step back, I know who I am//
  Raise up your ear, I'll drop the style and clear//
  It's the beats and the lyrics they fear//
  The rage is relentless//
  We need a movement with a quickness//
  You are the witness of change//
  And to counteract//
  We gotta take the power back
</p>
<br>
<div class="image" >
  <img src="/RiahProject/resources/pexels-photo-3966569.jpeg" alt="">
</div>
<br>
<p>The present curriculum//
  I put my fist in 'em//
  Eurocentric every last one of 'em//
  See right through the red, white and blue disguise//
  With lecture I puncture the structure of lies//
  Installed in our minds and attempting//
  To hold us back//
  We've got to take it back//
  Holes in our spirit causin' tears and fears//
  One-sided stories for years and years and years//
  I'm inferior? Whose inferior?//
  Yeah, they need to check the interior//
  Of the system, who gets em about only one culture//
  And that is why//
  We gotta take the power back!!!</p>
</div>
`;

// Icons Clicked
document.querySelectorAll(".icon").forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.dataset);

    if (e.target.dataset.link === "about") {
      desktop.appendChild(windowDivAbout);
      windowDivAbout.innerHTML = about;
      windowDivAbout.style.top = randomPos(0, wHeight / 2) + "px";
      windowDivAbout.style.left = randomPos(0, wWidth / 2) + "px";
    }

    if (e.target.dataset.link === "look") {
      desktop.appendChild(windowDivLook);
      windowDivLook.innerHTML = look;
      windowDivLook.style.top = randomPos(0, wHeight / 2) + "px";
      windowDivLook.style.left = randomPos(0, wWidth / 2) + "px";
    }

    if (e.target.dataset.link === "price") {
      console.log("u crazy son of a birtch");
    }

    if (e.target.dataset.link === "community") {
      console.log("u crazy son of a birtch");
    }

    if (e.target.dataset.link === "project") {
      console.log("u crazy son of a birtch");
    }
  });
});

// Advert Spawn
var advertCont = `<div>
<div class="window-header">WWW!</div>
<div class="window-content">
  <h2>ADVERT! ADVERT! ADVERT! ADVERT!</h3>
  <br>
  <p>buy buy buy </p>
  <br>
  <p>don't want to be a fool for you just another player in your game for two</p>
</div>
</div>`;

var ad = document.createElement("div");
ad.className = "draggable";

var clonedAd = ad.cloneNode(true)
clonedAd.className = 'draggable'

window.onload = function () {
  setTimeout(adLoad, 1000);
};

function adLoad() {
  desktop.appendChild(ad);
  desktop.appendChild(clonedAd)

  ad.innerHTML = advertCont;
  ad.style.top = randomPos(0, wHeight) + "px";
  ad.style.left = randomPos(0, wWidth) + "px";

  clonedAd.innerHTML = advertCont;
  clonedAd.style.top = randomPos(0, wHeight / 2) + "px";
  clonedAd.style.left = randomPos(0, wWidth / 2) + "px";
}

// ------ close button
var closeButton = document.querySelector("#hide");

document.body.addEventListener("click", function (event) {
  console.log(event)
  if (event.target.id == "hide") {
    desktop.removeChild(event.target);
  }
});
