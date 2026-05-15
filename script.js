const images = [
     <img src="images_1/DSC_9077.jpeg" class="landscape" onclick="openLightbox(0)">
    "images_1/DSC_9070.jpeg",
    "images_1/DSC_9080.jpeg",
    "images_1/DSC_9112.jpeg",
    "images_1/DSC_9099.jpeg",
    "images_1/DSC_9101.jpeg",
    "images_1/DSC_9091.jpeg",
    "images_1/DSC_9128.jpeg",
    "images_1/DSC_9156.jpeg",
    "images_1/DSC_9154.jpeg",
    "images_1/DSC_9136.jpeg",
    "images_1/DSC_9193.jpeg",
    "images_1/DSC_9176.jpeg",
    "images_1/DSC_9166.jpeg",
    "images_1/DSC_9202.jpeg",
    "images_1/DSC_9211.jpeg",
    "images_1/DSC_9266.jpeg",
    "images_1/DSC_9291.jpeg",
    "images_1/DSC_9304.jpeg",
    "images_1/DSC_9279.jpeg",
    "images_1/DSC_9221.jpeg",
    "images_1/DSC_9252.jpeg",
    "images_1/DSC_9344.jpeg",
    "images_1/DSC_9314.jpeg",
    "images_1/DSC_9327.jpeg",
    "images_1/DSC_9225.jpeg",
    "images_1/DSC_9228-2.jpeg" ,
    "images_1/DSC_9241.jpeg",
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    console.log("Index:", currentIndex);
    
    document.getElementById("lightbox").style.display = "flex";
    
    updateImage();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
  currentIndex = currentIndex + step;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  updateImage();
}

function updateImage() {
    document.getElementById("lightbox-img").src = images[currentIndex];
    
    document.getElementById("downloadBtn").href = images[currentIndex];
}

function downloadImage() {
    const link = document.createElement("a");
    link.href = images[currentIndex];
    
    link.download = "hochzeit.jpg";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
