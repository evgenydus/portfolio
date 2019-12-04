const switchButton = document.querySelector('.switch-platform')


const fragment = document.createDocumentFragment();

const iframeContainer = document.createElement('div')
const iframe = document.createElement('iframe')

const body = document.querySelector('body')

fragment.append(iframeContainer)
iframeContainer.append(iframe)
body.append(fragment)
// iframe.


/* window.addEventListener('DOMContentLoaded', function () {
  init();
}); */