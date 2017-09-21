function main() {
  window.addEventListener('click', displayCloseup);
  backToGallery.addEventListener('click', hideCloseup);
}

main.currentCloseup = undefined;

function displayCloseup(e) {
  var photo;
  
  main.currentCloseup = photo = e.target.dataset.photo;
  
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
main();