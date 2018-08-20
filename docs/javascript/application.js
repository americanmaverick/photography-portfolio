function main() {
  on('hashchange', window, handlePageState);
  handlePageState();
  on('keyup', window, cyclePhoto)
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

function nextPhoto () {
  var images = document.querySelectorAll('.image-tile'),
      re = new RegExp(main.currentCloseup),
      cycleImageIsCurrent = false,
      nextImage;

  images.forEach(function(tile) {
    var imageSrc = tile.children[0].src;

    if (cycleImageIsCurrent) {
      nextImage = tile;
    }

    if (re.test(imageSrc)) {
      cycleImageIsCurrent = true;
    } else {
      cycleImageIsCurrent = false;
    }
  });

  if (!nextImage) {
    nextImage = images[0];
  }

  window.location = nextImage.href;
}

function cyclePhoto(e) {
  if (!main.currentCloseup) return;
  var keyCode = e.keyCode;

  if (keyCode == 39) nextPhoto();
  else if (keyCode == 27) window.location = '#';
  else return;

  e.stopPropagation()
  e.preventDefault()
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
