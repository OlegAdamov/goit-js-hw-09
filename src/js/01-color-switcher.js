
const onStartBtn = document.querySelector('button[data-start]');
const onStoptBtn = document.querySelector('button[data-stop]');
const onBodyPage = document.querySelector('body');
const COLOR_CHANGE_DELAY = 1000;

  intervalID = null;
isActive = false;
  
const onStartChangeColorPage = () => {
        if (this.isActive) {
    return;
    }
      this.isActive = true;
  this.intervalID = setInterval(() => {

      // const onNewColor = `${getRandomHexColor()}`
      onBodyPage.style.backgroundColor = `${getRandomHexColor()}`;
  }, COLOR_CHANGE_DELAY)
}


const onStopChangeColorPage = () => {
  clearInterval(this.intervalID);
this.isActive = false;
}

onStartBtn.addEventListener('click', onStartChangeColorPage);
onStoptBtn.addEventListener('click', onStopChangeColorPage)



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};