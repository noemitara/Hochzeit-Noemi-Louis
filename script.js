const images = [
    "images_1/DSC_9077.jpeg",
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
    "images_1/DSC_9383.jpeg",
    "images_1/DSC_9389.jpeg",
    "images_1/DSC_9397.jpeg",
    "images_1/DSC_9406.jpeg",
    "images_1/DSC_9401.jpeg",
    "images_1/DSC_9410.jpeg",
    "images_1/DSC_9412.jpeg",
    "images_1/DSC_9414.jpeg",
    "images_1/DSC_9415.jpeg",
    "images_1/DSC_9428.jpeg",
    "images_1/DSC_9436.jpeg",
    "images_1/DSC_9441.jpeg",
    "images_1/DSC_9442.jpeg",
    "images_1/DSC_9448.jpeg",
    "images_1/DSC_9457.jpeg",
    "images_1/DSC_9472.jpeg",
    "images_1/DSC_9475-3.jpeg",
    "images_1/DSC_9492-2.jpeg",
    "images_1/DSC_9561-2.jpeg",
    "images_1/DSC_9568.jpeg",
    "images_1/DSC_9592.jpeg",
    "images_1/DSC_9610.jpeg",
    "images_1/DSC_9621.jpeg",
    "images_1/DSC_9646.jpeg",
    "images_1/DSC_9688-2.jpeg",
    "images_1/DSC_9676-2.jpeg",
    "images_1/DSC_9701-2.jpeg",
    "images_1/DSC_9708.jpeg",
    "images_1/DSC_9710.jpeg",
    "images_1/DSC_9718.jpeg",
    "images_1/DSC_9750.jpeg",
    "images_1/DSC_9878.jpeg",
    "images_1/DSC_9886.jpeg",
    "images_1/DSC_9972.jpeg",
    "images_2/DSC_0679-2.jpeg",
    "images_2/DSC_0688-2.jpeg",
    "images_2/DSC_0704.jpeg",
    "images_2/DSC_0709.jpeg",
    "images_2/DSC_0722-2.jpeg",
    "images_2/DSC_0766-4.jpeg",
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
