function Application() {
  var application;
  application = this;
  application.imageLoader = new Image();
  application.imageLoader.onload = function() {
    closeupImage.src = this.src;
  };
  
  window.addEventListener('click', function(e) {
    application.handleCloseup(e);
  });
  
  backToGallery.addEventListener('click', function() {
    gallery.classList.toggle('hidden', false);
    closeup.classList.toggle('hidden', true);
  })
}

Application.prototype.handleCloseup = function(e) {
  var photo, originalSource;
  photo = e.target.dataset.photo;
  
  if (photo) {
    originalSource = './photos/orig/'+photo;
    
    this.imageLoader.src = originalSource;
    closeupImage.src = './photos/med/'+photo;
    closeupLink.href = './photos/orig/'+photo;
    gallery.classList.toggle('hidden', true);
    closeup.classList.toggle('hidden', false);
  }
};