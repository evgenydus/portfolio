const iframeContainer = document.querySelector('.iframe-container')
const iframe = document.querySelector('.iframe')
const switchButton = document.querySelector('.switch-platform')


const platform = {
  mobile: '640px',
  desktop: '1300px'
}

switchButton.addEventListener('click', () => {

  if (iframeContainer.style.width === platform.mobile) {
    iframeContainer.style.width = '100%';
    iframe.height = 1848
    switchButton.innerText = 'Mobile'
  } else {
    iframeContainer.style.width = '640px'
    iframe.height = 1554
    switchButton.innerText = 'Desktop'
  }
})