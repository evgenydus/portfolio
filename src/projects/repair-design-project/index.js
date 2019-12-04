const iframeContainer = document.querySelector('.iframe-container')
const iframe = document.querySelector('.iframe')
const switchButton = document.querySelector('.switch-platform')


const platform = {
  mobile: '375px',
  desktop: '1300px'
}

switchButton.addEventListener('click', () => {

  if (iframeContainer.style.width === platform.mobile) {
    iframeContainer.style.width = '100%';
    iframe.height = 10192
    switchButton.innerText = 'Mobile'
  } else {
    iframeContainer.style.width = '375px'
    iframe.height = 9196
    switchButton.innerText = 'Desktop'
  }
})