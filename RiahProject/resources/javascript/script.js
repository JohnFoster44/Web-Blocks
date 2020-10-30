// Start Button ----------------------------------------------------------------------
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
var wWidth = window.innerWidth;
var wHeight = window.innerHeight / 2;

const desktop = document.querySelector("#dtwindow");

var windowDivAbout = document.createElement("div");
windowDivAbout.className = "draggable";
windowDivAbout.setAttribute("data-link", "about");

var windowDivLook = document.createElement("div");
windowDivLook.className = "draggable";
windowDivLook.setAttribute("data-link", "look");

var windowDivPrice = document.createElement("div");
windowDivPrice.className = "draggable";
windowDivPrice.setAttribute("data-link", "price");

var windowDivCommunity = document.createElement("div");
windowDivCommunity.className = "draggable";
windowDivCommunity.setAttribute("data-link", "community");

var windowDivProject = document.createElement("div");
windowDivProject.className = "draggable";
windowDivProject.setAttribute("data-link", "project");

var riahRadio = document.createElement("div");
riahRadio.className = "draggable";
riahRadio.setAttribute("data-link", "radio");

// innerHTML window content
var about = `
    <div id="about" class="window-header"><button id="hide">X</button>About</div>
    <div class="window-content">
    <h2>------- The Riah Hair Studio -------</h2>
    <br>
    <p>
    As we move into the future, <b>The Riah Hair Studio</b> seeks to totally transform your salon experience.
    <br>
    <br>
    <b>Dan Chapman</b> (he/him), Founder of The Riah Hair Studio and previously <em>The Riah Project</em>, began this adventure with one simple goal - <em>to promote complete inclusion within the beauty industry</em>. By ditching beauty standards we allow you beautiful beings the freedom to have a comfortable, judgement free salon experience. 
    <br>
    <br>
    <b>We’re here to help you find the best, unfiltered version of you!</b> 
    <br>
    <br>
    Through supporting local people, businesses and our community The Riah Hair Studio stands strong on creating change and supporting intersectionality, not only in the beauty industry but also this fabulous city of <b>Brighton</b> we call home.
    <br>
    <br>
    The Riah Hair Studio have joined with Dukes Beauty to offer a welcoming and safe salon experience for people from all walks of life. Our services are inclusive for those inside and outside of the binaries, all ages, ethnicities, abilities, sexualities and allies across the board. 
    <br>
    <br>
    Rest assured, all members of our team have completed specialist Inclusion and Intersectionality training, ensuring everyone of you lovely lot receives the salon experience you deserve.
    <br> 
    <br> 
    Enter The Riah Hair Studio and enjoy affordable non-gendered pricing, ethical practices and diverse hair and beauty knowledge and techniques.
    <br> 
    <br> 

    <h2>------- What Does Riah Mean? -------</h2>
    <p>As a proud, queer, neuro-diverse humxn the incorporation of queer history and misspelled words encapsulates my vision and I am so thrilled to welcome you to my world!
    <br> 
    <br>  
    The word <em>Riah</em> - meaning hair, originates from the gay sub cultural language/ cant slang, <b>Polari</b>. It was used throughout multiple centuries and industries by Queer people to identify and navigate life in a society which remained openly hostile and dangerous for them.
    <br> 
    <br> 
    In Polari, “Riah zhoosher” means hairdresser and I’ve always felt it is massively important to respect and reflect our queer history while venturing forward.
    <br> 
    <br> 
    </p> 
    </p>
  </div>
`;
var look = `
<div id="look" class="window-header"><button id="hide">X</button>Look</div>
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
  <img src="/RiahProject/resources/img/pexels-photo-3966569.jpeg" alt="">
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
var price = `
<div id="price" class="window-header"><button id="hide">X</button>Price</div>
<div class="window-content">
<h2>Price</h2>
<br>
<p>Welcome to the website, check out how cool it is - probably made by someone realllly handsome i bet idk....</p>
<br>
<br>
<p>
B-I-G P-O-P-P-A, no info for the DEA
Federal agents mad 'cause I'm flagrant
Tap my cell and the phone in the basement
My team supreme, stay clean
Triple beam lyrical dream, I be that
Cat you see at all events bent
Gats in holsters, girls on shoulders
Playboy, I told ya, mere mics to me
Bruise too much, I lose too much
Step on stage, the girls boo too much
I guess it's 'cause you run with lame dudes too much
Me lose my touch? Never that!
If I did, ain't no problem to get the gat
Where the true players at? Throw your Rollies in the sky
Wave 'em side to side and keep your hands high
While I give your girl the eye, player please
Lyrically, see B.I.G be flossing
Jig on the cover of Fortune, 5 double O
Here's my phone number, your man ain't got to know
I got the dough, got the flow down pizat
Platinum plus like thizat
Dangerous on trizacks leave your ass flizat
I don't know what they want from me
It's like the more money we come across
The more problems we see
</p>
<br>
<div class="image" >
  <img src="/RiahProject/resources/img/pexels-photo-3966569.jpeg" alt="">
</div>
</div>
`;
var community = `JOHN IS COOLJOHN IS COOLJOHN IS COOLJOHN IS COOLJOHN IS COOLJOHN IS COOL`;
var project = `
<p>SNAKE</p>
<div id="game-board"></div>
<script src="snek.js" type="module"></script>`;
var radio = `
<!-- The Music Player -->
        <div>
          <div id="radio" class="window-header"><button id="hide">RHS</button>RIAH RADIO</div>
          <div class="window-content">
            <!--  -->
            <div class="player">
            
              <img class="album-art" data-amplitude-song-info="cover_art_url"/>
             
              <div class="meta-container">
             
                <div class="song-title" data-amplitude-song-info="name"></div>
                <div class="song-artist" data-amplitude-song-info="artist"></div>
             
                <div class="time-container">
             
                  <div class="current-time">
                    <span class="amplitude-current-minutes"></span>:<span
                      class="amplitude-current-seconds"></span>
                  </div>
             
                  <div class="duration">
                    <span class="amplitude-duration-minutes"></span>:<span
                      class="amplitude-duration-seconds"></span>
                  </div>
             
                </div>
             
                <progress class="amplitude-song-played-progress" id="song-played-progress"></progress>
             
                <div class="control-container">
                  <div class="amplitude-prev"></div>
                  <div class="amplitude-play-pause"></div>
                  <div class="amplitude-next"></div>

                  <div class="amplitude-volume-slider">
                    <span>-</span>
                    <input type="range"/>
                    <span>+</span>
                  </div>
                </div>
             
              </div>
             </div>
            <!--  -->
          </div>
        </div>
      <!-- The Music Player END -->
`;

// Desktop Icon Click function
document.querySelectorAll(".icon").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.dataset.link === "about") {
      desktop.appendChild(windowDivAbout);
      windowDivAbout.innerHTML = about;
      if (window.innerWidth > 768) {
        windowDivAbout.style.top = randomPos(0, wHeight / 2) + "px";
        windowDivAbout.style.left = randomPos(0, wWidth / 2) + "px";
      }
    }

    if (e.target.dataset.link === "look") {
      desktop.appendChild(windowDivLook);
      windowDivLook.innerHTML = look;
      if (window.innerWidth > 768) {
        windowDivLook.style.top = randomPos(0, wHeight / 2) + "px";
        windowDivLook.style.left = randomPos(0, wWidth / 2) + "px";
      }
    }

    if (e.target.dataset.link === "price") {
      desktop.appendChild(windowDivPrice);
      windowDivPrice.innerHTML = price;
      if (window.innerWidth > 768) {
        windowDivPrice.style.top = randomPos(0, wHeight / 2) + "px";
        windowDivPrice.style.left = randomPos(0, wWidth / 2) + "px";
      }
      console.log("u crazy son of a birtch");
    }

    if (e.target.dataset.link === "community") {
      desktop.appendChild(windowDivCommunity);
      windowDivCommunity.innerHTML = community;
      if (window.innerWidth > 768) {
        windowDivCommunity.style.top = randomPos(0, wHeight / 2) + "px";
        windowDivCommunity.style.left = randomPos(0, wWidth / 2) + "px";
      }
      console.log("u crazy son of a birtch");
    }

    if (e.target.dataset.link === "project") {
      desktop.appendChild(windowDivProject);
      windowDivProject.innerHTML = project;
      if (window.innerWidth > 768) {
        windowDivProject.style.top = randomPos(0, wHeight / 2) + "px";
        windowDivProject.style.left = randomPos(0, wWidth / 2) + "px";
      }
    }
  });
});

if (window.innerWidth > 768) {
  desktop.appendChild(riahRadio);
  riahRadio.innerHTML = radio;
  riahRadio.style.top = 10 + "px";
  riahRadio.style.left = 10 + "px";
}

// window click (bring 2 front)

document.querySelectorAll("div").forEach((divs) => {
  divs.addEventListener("click", (e) => {
    // console.log(e.target.offsetParent);

    if (e.target.offsetParent.className === "draggable") {
      // desktop.appendChild(windowDivAbout);
      console.log(e.target);
      if (e.target.offsetParent.dataset.link === "about") {
        desktop.appendChild(windowDivAbout);
      }

      if (e.target.offsetParent.dataset.link === "look") {
        desktop.appendChild(windowDivLook);
      }

      if (e.target.offsetParent.dataset.link === "price") {
        desktop.appendChild(windowDivPrice);
      }

      if (e.target.offsetParent.dataset.link === "community") {
        desktop.appendChild(windowDivCommunity);
      }
    }
  });
});

// Advert Spam Spawn
var ad = document.createElement("div");
ad.className = "draggable";

var advertCont = `<div>
<div id="ad" class="window-header"><button id="hide">X</button></div>
<div class="window-content">
  <h2>ADVERT! ADVERT! ADVERT! ADVERT!</h3>
  <br>
  <p>buy buy buy </p>
  <br>
  <p>don't want to be a fool for you just another player in your game for two</p>
</div>
</div>`;

// one every second
for (var i = 0; i < 5; i++) {
  let parent = document.createElement("div");
  parent.className = "draggable";
  parent.innerHTML = advertCont;
  parent.style.top = randomPos(0, wHeight / 0.8) + "px";
  parent.style.left = randomPos(0, wWidth / 1.4) + "px";

  setTimeout(function () {
    desktop.append(parent);
  }, 1000 * i);
}

// Load About after SPAM ADS
setTimeout(function () {
  desktop.appendChild(windowDivAbout);
  windowDivAbout.innerHTML = about;
  if (window.innerWidth > 768) {
    windowDivAbout.style.top = randomPos(0, wHeight / 2) + "px";
    windowDivAbout.style.left = randomPos(0, wWidth / 2) + "px";
  }
}, 6000);

// ------ close button ---------------------------------------
var closeButton = document.querySelector("#hide");

document.body.addEventListener("click", function (e) {
  if (e.target.id == "hide") {
    console.log(e.target.offsetParent);
    desktop.removeChild(e.target.offsetParent);
  }
});

// CLOCK ------------------------------------------------------
var clk = document.querySelector(".clock");
function clock() {
  var digital = new Date().toLocaleTimeString();
  clk.innerHTML = digital;
}
setInterval(clock, 1000);
