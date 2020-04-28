// 3. Create an HTML page with traffic lights and a button that switches the color to the next one.
let switchBtn = document.getElementById('switch');
let currentLight = 0;

switchBtn.onclick = function() {
  let lights = document.getElementsByClassName('light');
  for(let i = 0; i < lights.length; i++) {
  }
  lights[currentLight].style.backgroundColor='#828282';
  currentLight++;

  if (currentLight > 2) {
    currentLight= 0;
  }

  if (currentLight == 0) {
    lights[currentLight].style.backgroundColor='red';
  } else if (currentLight == 1) {
    lights[currentLight].style.backgroundColor='yellow';
  } else {
    lights[currentLight].style.backgroundColor='green';
  }
}
  