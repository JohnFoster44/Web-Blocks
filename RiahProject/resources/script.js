// Nav Button -------------------------------------------------------------------
var dropButton = document.querySelector('.dropbtn');

dropButton.addEventListener('click', function menuButton() {
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

interact(".draggable")
  .allowFrom(".window-header")
  .draggable({
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

// Window POPOP

const desktop = document.querySelector('#dtwindow');
var icons = document.querySelector('.icons');

const about = `
  <div data='about' id="drag-1" class="draggable">
    <div class="window-header"><button id="hide">X</button>About</div>
    <div class="window-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatibus, dignissimos ea deleniti eius dolore fuga! Iusto dolore consequuntur dolorum, voluptatem laborum distinctio, maiores placeat et maxime voluptates, laudantium quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi illo illum vitae excepturi ducimus nemo inventore, nobis velit explicabo consequatur alias non! Voluptatem beatae repellendus ab sapiente iste corporis.</div>
  </div>
`

const look = `
  <div id="drag-2" class="draggable">
    <div class="window-header"><button id="hide">X</button>Look</div>
    <div class="window-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatibus, dignissimos ea deleniti eius dolore fuga! Iusto dolore consequuntur dolorum, voluptatem laborum distinctio, maiores placeat et maxime voluptates, laudantium quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi illo illum vitae excepturi ducimus nemo inventore, nobis velit explicabo consequatur alias non! Voluptatem beatae repellendus ab sapiente iste corporis.</div>
  </div>
`
icons.addEventListener('click', function() {
  desktop.innerHTML = about;

});
