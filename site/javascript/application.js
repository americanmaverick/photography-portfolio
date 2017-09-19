function main() {
  window.addEventListener('click', function(e) {
    handleCloseup(e);
  });
  
  backToGallery.addEventListener('click', function() {
    gallery.classList.toggle('hidden', false);
    closeup.classList.toggle('hidden', true);
  });
}

main.closeup = undefined;

function handleCloseup(e) {
  var photo, preloader;
  
  photo = e.target.dataset.photo;
  main.closeup = photo;
  
  if (photo) {
    closeupImage.src = './photos/med/'+photo;
    preloader = new Image();
    preloader.onload = function() {
      if (main.closeup === photo) closeupImage.src = this.src;
    };
    preloader.src = './photos/lg/'+photo;
    closeupLink.href = './photos/orig/'+photo;
    gallery.classList.toggle('hidden', true);
    closeup.classList.toggle('hidden', false);
  }
}

main();