function main() {
  window.addEventListener('click', function(e) {
    handleCloseup(e);
  });
  
  backToGallery.addEventListener('click', function() {
    gallery.classList.toggle('hidden', false);
    closeup.classList.toggle('hidden', true);
  });
}

function handleCloseup(e) {
  var photo, preloader, originalSource;
  photo = e.target.dataset.photo;
  
  if (photo) {
    closeupImage.src = './photos/med/'+photo;
    preloader = new Image();
    preloader.onload = function() {
      closeupImage.src = this.src;
    };
    preloader.src = './photos/orig/'+photo;
    closeupLink.href = './photos/orig/'+photo;
    gallery.classList.toggle('hidden', true);
    closeup.classList.toggle('hidden', false);
  }
}

main();