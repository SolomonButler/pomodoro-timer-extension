// Making a plan
// - Switch function:
//    - Update Title, timerText and countdown function.
//    - Reset timer.
// - Pause function:
//    - Pause timer.
//    - Disable pause button.
// - Play function:
//    - Start timer from beginning or from pause.
//    - Disable play button.


// Bit of code to make the timerTime and timerText change
// const pausePlay = (() => {

//   let timerTime = document.querySelector('.timerTime');
//   let timerText = document.querySelector('.timerText');
//   let titleText = document.querySelector('.title');

//   let startButton = document.querySelector('.start');
//   let pauseButton = document.querySelector('.pause');
//   let switchButton = document.querySelector('.reset');

//   let paused = true;
//   startButton.addEventListener('click', () => {
//     if(paused){
//       paused = !paused;
//       timerCountdown.timerStopTest;
//       timerText.classList.toggle('timerTextDisplay');
//       timerTime.classList.toggle('d-none');
//       titleText.textContent = 'Focus';
//     }
//   });
  
//   pauseButton.addEventListener('click', () => {
//     paused = !paused;
//     clearInterval(timerCountdown.timerStopTest)
//   });

//   return{
//     paused,
//   }

// })();

// // Making Timer

// const timerCountdown = (() => {
//   let timerMinsDisplay = document.querySelector('.mins');
//   let timerSecsDisplay = document.querySelector('.secs');
//   let timeFocus = 1500;
//   // let timeRelax = 300;
  
//   let circle = document.querySelector('circle');
//   let radius = circle.r.baseVal.value;
//   let circumference = radius * 2 * Math.PI;
  
//   circle.style.strokeDasharray = `${circumference} ${circumference}`;
//   circle.style.strokeDashoffset = `${circumference}`;

//   const setProgress = (percent) => {
//     let offset = circumference - percent / time * circumference;
//     circle.style.strokeDashoffset = offset;  
//   };

//   const countDown = () => {
//     timeFocus--;
//     let timeFocusMinutes = Math.floor(timeFocus / 60);
//     let timeFocusSeconds = timeFocus % 60;
//     timerMinsDisplay.textContent = timeFocusMinutes;
//     timerSecsDisplay.textContent = timeFocusSeconds;
//     setProgress(timeFocus);
//   };
  
//   let timerStopTest = setInterval(countDown, 1000);
//   return{
//     timerStopTest,
//   };
// })();
// timerCountdown.timerStopTest;












// Starting OVER!!!
// const timerController = (() => {
//   let focusRestSwitch = true;
//   let switchButton = document.querySelector('.reset');
//   let switchFunction = () => {
//     // location.reload()
//     focusRestSwitch = !focusRestSwitch;
//     let focusRest;
//     focusRestSwitch? focusRest = true: focusRest = false;
//     console.log(focusRestSwitch);
//     return {focusRest};
//   };
//   // console.log(switchFunction().focusRest)
//   switchButton.addEventListener('click', switchFunction);

//   let time = timeDecrement = switchFunction.focusRest ? 1500 : 300;

//   let circle = document.querySelector('circle');
//   let radius = circle.r.baseVal.value;
//   let circumference = radius * 2 * Math.PI;
  
//   circle.style.strokeDasharray = `${circumference} ${circumference}`;
//   circle.style.strokeDashoffset = `${circumference}`;

//   const setProgress = (percent) => {
//     let offset = circumference - percent / time * circumference;
//     circle.style.strokeDashoffset = offset;  
//   };

//   let countdown = () => {
//     timeDecrement--;
//     let timeMinutes = Math.floor(timeDecrement / 60);
//     let timeSeconds = timeDecrement % 60;
//     domController.setTime(timeMinutes, timeSeconds);
//     setProgress(timeDecrement);
//     console.log(timeDecrement);
//   };

//   return{
//     // focusRest,
//     // countdown,
//   }
// })();


// const eventController = ((focusRest) => {
  // let focusRest = true;
//   let intervalController;
//   let startButton = document.querySelector('.start');
//   let pauseButton = document.querySelector('.pause');

//   let startButtonController =  () => {
//     domController.setText();
//     pauseButton.disabled = false;
//     startButton.disabled = true;
//     intervalController = setInterval(timerController.countdown, 1000);
//   }
//   startButton.addEventListener('click', startButtonController);

//   let pauseButtonController = () => {
//     domController.setText();
//     pauseButton.disabled = true;
//     startButton.disabled = false;
//     clearInterval(intervalController);
//   };
//   pauseButton.addEventListener('click', pauseButtonController)



//   return{
//     startButton,
//     pauseButton,
//     focusRest,
//   }
// })();
// eventController.pauseButton;

// const domController = (() => {
//   let timerTime = document.querySelector('.timerTime');
//   let timerText = document.querySelector('.timerText');
//   let titleText = document.querySelector('.title');

//   let timerMinsDisplay = document.querySelector('.mins');
//   let timerSecsDisplay = document.querySelector('.secs');

//   const setTime = (timeMinutes, timeSeconds) => {
//     timerMinsDisplay.textContent = timeMinutes;
//     timerSecsDisplay.textContent = timeSeconds;
//   };

//   const setText = () => {
//     titleText.textContent = 'Focus';
//     timerText.classList.toggle('timerTextDisplay');
//     timerTime.classList.toggle('d-none');
//   };

//   return{
//     setTime,
//     setText,
//   }
// })();
// domController.setText()


let switchButton = document.querySelector('.reset');
let startButton = document.querySelector('.start');
let pauseButton = document.querySelector('.pause');

let timerTime = document.querySelector('.timerTime');
let timerText = document.querySelector('.timerText');
let titleText = document.querySelector('.title');

let timerMinsDisplay = document.querySelector('.mins');
let timerSecsDisplay = document.querySelector('.secs');
let progressRing = document.querySelector('.progress-ring');

let intervalSwitch = true;
let intervalController;
let time;
let timeDecrement;
time = timeDecrement = 1500;

let timerSound = new Audio('/sounds/timerNoise.wav');
// Making the circle work

let circle = document.querySelector('circle');
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

const setProgress = (percent) => {
  let offset = circumference - percent / time * circumference;
  circle.style.strokeDashoffset = offset;  
};

// Making circle work

const countdown = () => {
  timeDecrement--;
  let timeMinutes = Math.floor(timeDecrement / 60);
  let timeSeconds = timeDecrement % 60;
  setProgress(timeDecrement);
  setTime(timeMinutes, timeSeconds);
  timeDecrement <= 0? (switchInterval(), pauseButtonController(), timerSound.play()):'';
  console.log(timeDecrement);
};

const setTime = (timeMinutes, timeSeconds) => {
  timerMinsDisplay.textContent = timeMinutes;
  timerSecsDisplay.textContent = timeSeconds;
};

const setText = () => {
  intervalSwitch ? 
  (titleText.textContent = 'Focus', timerText.textContent = 'Start Focus') 
  : (titleText.textContent = 'Rest', timerText.textContent = 'Start Rest');
};

const switchInterval = () => {
  intervalSwitch = !intervalSwitch;
  intervalSwitch? time = timeDecrement = 1500:time = timeDecrement = 3;
  timerTime.classList.add('d-none');
  progressRing.classList.add('d-none');
  timerText.classList.remove('d-none');
  setText();
};
switchButton.addEventListener('click', switchInterval);

const startButtonController =  () => {
  countdown();
  intervalController = setInterval(countdown, 1000);
  timerTime.classList.remove('d-none');
  progressRing.classList.remove('d-none');
  timerText.classList.add('d-none');
  pauseButton.disabled = false;
  startButton.disabled = true;
  switchButton.disabled = true;
};
startButton.addEventListener('click', startButtonController);

const pauseButtonController = () => {
  pauseButton.disabled = true;
  startButton.disabled = false;
  switchButton.disabled = false;
  clearInterval(intervalController);
};
pauseButton.addEventListener('click', pauseButtonController);
