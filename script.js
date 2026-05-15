const images = [
    "DSC_9077.jpg",
    "DSC_9070.jpg",
    "DSC_9080.jpg",
    "DSC_9112.jpg",
    "DSC_9099.jpg",
    "DSC_9101.jpg",
    "DSC_9091.jpg",
    "DSC_9128.jpg",
    "DSC_9156.jpg",
    "DSC_9154.jpg",
    "DSC_9136.jpg",
    "DSC_9193.jpg",
    "DSC_9176.jpg",
    "DSC_9166.jpg",
    "DSC_9202.jpg",
    "DSC_9211.jpg",
    "DSC_9266.jpg",
    "DSC_9291.jpg",
    "DSC_9304.jpg",
    "DSC_9279.jpg",
    "DSC_9221.jpg",
    "DSC_9252.jpg",
    "DSC_9344.jpg",
    "DSC_9314.jpg",
    "DSC_9327.jpg",
    "DSC_9225.jpg",
    "DSC_9228-2.jpg",
    "DSC_9241.jpg",
    "DSC_9383.jpg",
    "DSC_9389.jpg",
    "DSC_9397.jpg",
    "DSC_9406.jpg",
    "DSC_9401.jpg",
    "DSC_9410.jpg",
    "DSC_9412.jpg",
    "DSC_9414.jpg",
    "DSC_9415.jpg",
    "DSC_9428.jpg",
    "DSC_9436.jpg",
    "DSC_9441.jpg",
    "DSC_9442.jpg",
    "DSC_9448.jpg",
    "DSC_9457.jpg",
    "DSC_9472.jpg",
    "DSC_9475-3.jpg",
    "DSC_9492-2.jpg",
    "DSC_9561-2.jpg",
    "DSC_9568.jpg",
    "DSC_9592.jpg",
    "DSC_9610.jpg",
    "DSC_9621.jpg",
    "DSC_9646.jpg",
    "DSC_9688-2.jpg",
    "DSC_9676-2.jpg",
    "DSC_9701-2.jpg",
    "DSC_9708.jpg",
    "DSC_9710.jpg",
    "DSC_9718.jpg",
    "DSC_9750.jpg",
    "DSC_9878.jpg",
    "DSC_9886.jpg",
    "DSC_9972.jpg",
    "DSC_9874.jpg",
    "DSC_9767.jpg",
    "DSC_9773.jpg",
    "DSC_9803.jpg",
    "DSC_9805.jpg",
    "DSC_9807.jpg",
    "DSC_9810.jpg",
    "DSC_9829.jpg",
    "DSC_9846.jpg",
    "DSC_9833.jpg",
    "DSC_9835.jpg",
    "DSC_9836.jpg",
    "DSC_9842.jpg",
    "DSC_9853.jpg",
    "DSC_9866.jpg",
    "DSC_9859.jpg",
    "DSC_0008.jpg",
    "DSC_0015.jpg",
    "DSC_0016.jpg",
    "DSC_0020.jpg",
    "DSC_0032.jpg",
    "DSC_0036.jpg",
    "DSC_0050.jpg",
    "DSC_0060.jpg",
    "DSC_0066.jpg",
    "DSC_0080.jpg",
    "DSC_0085.jpg",
    "DSC_0113.jpg",
    "DSC_0124.jpg",
    "DSC_0138.jpg",
    "DSC_0142.jpg",
    "DSC_0162.jpg",
    "DSC_0168.jpg",
    "DSC_0176.jpg",
    "DSC_0456.JPG",
    "DSC_0464.JPG",
    "DSC_0476.JPG",
    "DSC_0494.JPG",
    "DSC_0508.JPG",
    "DSC_0513.JPG",
    "DSC_0530.JPG",
    "DSC_0572.JPG",
    "DSC_0578.JPG",
    "DSC_0590.JPG",
    "DSC_0615.JPG",
    "DSC_0611.JPG",
    "DSC_0679-2.jpg",
    "DSC_0688-2.jpg",
    "DSC_0704.jpg",
    "DSC_0709.jpg",
    "DSC_0722-2.jpg",
    "DSC_0766-4.jpg",
    "DSC_0198.JPG",
    "DSC_0209.JPG",
    "DSC_0226.JPG",
    "DSC_0232.JPG",
    "DSC_0233.JPG",
    "DSC_0240.JPG",
    "DSC_0242.JPG",
    "DSC_0245.JPG",
    "DSC_0247.JPG",
    "DSC_0256.JPG",
    "DSC_0264.JPG",
    "DSC_0288.JPG",
    "DSC_0300.JPG",
    "DSC_0303.JPG",
    "DSC_0348.JPG",
    "DSC_0350.JPG",
    "DSC_0363.JPG",
    "DSC_0369.JPG",
    "DSC_0375.JPG",
    "DSC_0392.JPG",
    "DSC_0402.JPG",
    "DSC_0405.JPG",
    "DSC_0408.JPG",
    "DSC_0426.JPG",
    "DSC_0435.JPG",
    "DSC_0439.JPG",
    "DSC_0813.JPG",
    "DSC_0815.JPG",
    "DSC_0817.JPG",
    "DSC_0818.JPG",
    "DSC_0819.JPG",
    "DSC_0820.JPG",
    "DSC_0822.JPG",
    "DSC_0823.JPG",
    "DSC_0824.JPG",
    "DSC_0828.JPG",
    "DSC_0833.JPG",
    "DSC_0834.JPG",
    "DSC_0837.JPG",
    "DSC_0840.JPG",
    "DSC_0846.JPG",
    "DSC_0854.jpg",
    "DSC_0856.JPG",
    "DSC_0858.JPG",
    "DSC_0860.JPG",
    "DSC_0863.JPG",
    "DSC_0865.JPG",
    "DSC_0867.JPG",
    "DSC_0869.JPG",
    "DSC_0872.JPG",
    "DSC_0874.JPG",
    "DSC_0879.JPG",
    "DSC_0880.JPG",
    "DSC_0883.JPG",
    "DSC_0886.JPG",
    "DSC_0890.JPG",
    "DSC_0895.JPG",
    "DSC_0898.JPG",
    "DSC_0900.JPG",
    "DSC_0903.JPG",
    "DSC_0906.JPG",
    "DSC_0907.JPG",
    "DSC_0908.JPG",
    "DSC_0910.JPG",
    "DSC_0911.JPG",
    "DSC_0918.JPG",
    "DSC_0921.JPG",
    "DSC_0924.JPG",
    "DSC_0929.JPG",
    "DSC_0930.JPG",
    "DSC_0935.JPG",
    "DSC_0937.JPG",
    "DSC_0938.JPG"
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
