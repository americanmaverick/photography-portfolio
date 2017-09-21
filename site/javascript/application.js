function main() {
  on('hashchange', window, handlePageState);
  handlePageState();
}

main.currentCloseup = undefined;

function handlePageState() {
  var photo;
  photo = window.location.hash.substr(1);
  
  if (photo === '') {
    hideCloseup()
  } else {
    displayCloseup(photo)
  }
}

function displayCloseup(photo) {
  main.currentCloseup = photo;
  
  if (photo) {
    closeupImage.src = size('med', photo);
    
    preload(photo);
    
    closeupLink.href = size('orig', photo);
    gallery.classList.toggle('hidden', true);
    closeup.classList.toggle('hidden', false);
  }
}

function hideCloseup() {
  gallery.classList.toggle('hidden', false);
  closeup.classList.toggle('hidden', true);
}

function preload(photo) {
  var preloader;
  preloader = new Image();
  preloader.onload = function() {
    if (main.currentCloseup === photo) closeupImage.src = this.src;
  };
  preloader.src = size('lg', photo);
}

function size(sizeName, photo) {
  return './photos/'+sizeName+'/'+photo;
}

function on(eventName, target, callback) {
  target.addEventListener(eventName, callback);
}

main();