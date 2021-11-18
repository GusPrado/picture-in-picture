const videoEl = document.getElementById('video');
const buttonEl = document.getElementById('button');

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (err) {
    console.log(err);
  }
};

buttonEl.addEventListener('click', async () => {
  buttonEl.disabled = true;
  await videoEl.requestPictureInPicture();
  buttonEl.disabled = false;
});

selectMediaStream();
