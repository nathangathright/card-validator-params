if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
  afterDOMLoaded();
}

function afterDOMLoaded() {
  setTimeout(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    document.querySelector('input[type="url"]').value = params[Object.keys(params)[0]];
    document.querySelector('input[type="submit"]').click();
  }
  , 100);
}
