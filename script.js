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
    "images_1/DSC_9874.jpeg",
    "images_1/DSC_9767.jpeg",
    "images_1/DSC_9773.jpeg",
    "images_1/DSC_9803.jpeg",
    "images_1/DSC_9805.jpeg",
    "images_1/DSC_9807.jpeg",
    "images_1/DSC_9810.jpeg",
    "images_1/DSC_9829.jpeg",
    "images_1/DSC_9846.jpeg",
    "images_1/DSC_9833.jpeg",
    "images_1/DSC_9835.jpeg",
    "images_1/DSC_9836.jpeg",
    "images_1/DSC_9842.jpeg",
    "images_1/DSC_9853.jpeg",
    "images_1/DSC_9866.jpeg",
    "images_1/DSC_9859.jpeg",
    "images_1/DSC_0008.jpeg",
    "images_1/DSC_0015.jpeg",
    "images_1/DSC_0016.jpeg",
    "images_1/DSC_0020.jpeg",
    "images_1/DSC_0032.jpeg",
    "images_1/DSC_0036.jpeg",
    "images_1/DSC_0050.jpeg",
    "images_1/DSC_0060.jpeg",
    "images_1/DSC_0066.jpeg",
    "images_1/DSC_0080.jpeg",
    "images_1/DSC_0085.jpeg",
    "images_1/DSC_0113.jpeg",
    "images_1/DSC_0124.jpeg",
    "images_1/DSC_0138.jpeg",
    "images_1/DSC_0142.jpeg",
    "images_1/DSC_0162.jpeg",
    "images_1/DSC_0168.jpeg",
    "images_1/DSC_0176.jpeg",
    "images_2/DSC_0456.jpeg",
    "images_2/DSC_0464.jpeg",
    "images_2/DSC_0476.jpeg",
    "images_2/DSC_0494.jpeg",
    "images_2/DSC_0508.jpeg",
    "images_2/DSC_0513.jpeg",
    "images_2/DSC_0530.jpeg",
    "images_2/DSC_0572.jpeg",
    "images_2/DSC_0578.jpeg",
    "images_2/DSC_0590.jpeg",
    "images_2/DSC_0615.jpeg",
    "images_2/DSC_0611.jpeg",
    "images_2/DSC_0679-2.jpeg",
    "images_2/DSC_0688-2.jpeg",
    "images_2/DSC_0704.jpeg",
    "images_2/DSC_0709.jpeg",
    "images_2/DSC_0722-2.jpeg",
    "images_2/DSC_0766-4.jpeg",
    "images_2/DSC_0198.jpeg",
    "images_2/DSC_0209.jpeg",
    "images_2/DSC_0226.jpeg",
    "images_2/DSC_0232.jpeg",
    "images_2/DSC_0233.jpeg",
    "images_2/DSC_0240.jpeg",
    "images_2/DSC_0242.jpeg",
    "images_2/DSC_0245.jpeg",
    "images_2/DSC_0247.jpeg",
    "images_2/DSC_0256.jpeg",
    "images_2/DSC_0264.jpeg",
    "images_2/DSC_0288.jpeg",
    "images_2/DSC_0300.jpeg",
    "images_2/DSC_0303.jpeg",
    "images_2/DSC_0348.jpeg",
    "images_2/DSC_0350.jpeg",
    "images_2/DSC_0363.jpeg",
    "images_2/DSC_0369.jpeg",
    "images_2/DSC_0375.jpeg",
    "images_2/DSC_0392.jpeg",
    "images_2/DSC_0402.jpeg",
    "images_2/DSC_0405.jpeg",
    "images_2/DSC_0408.jpeg",
    "images_2/DSC_0426.jpeg",
    "images_2/DSC_0435.jpeg",
    "images_2/DSC_0439.jpeg",
    "images_2/DSC_0813.jpeg",
    "images_2/DSC_0815.jpeg",
    "images_2/DSC_0817.jpeg",
    "images_2/DSC_0818.jpeg",
    "images_2/DSC_0819.jpeg",
    "images_2/DSC_0820.jpeg",
    "images_2/DSC_0822.jpeg",
    "images_2/DSC_0823.jpeg",
    "images_2/DSC_0824.jpeg",
    "images_2/DSC_0828.jpeg",
    "images_2/DSC_0833.jpeg",
    "images_2/DSC_0834.jpeg",
    "images_2/DSC_0837.jpeg",
    "images_2/DSC_0840.jpeg",
    "images_2/DSC_0846.jpeg",
    "images_2/DSC_0854.jpeg",
    "images_2/DSC_0856.jpeg",
    "images_2/DSC_0858.jpeg",
    "images_2/DSC_0860.jpeg",
    "images_2/DSC_0863.jpeg",
    "images_2/DSC_0865.jpeg",
    "images_2/DSC_0867.jpeg",
    "images_2/DSC_0869.jpeg",
    "images_2/DSC_0872.jpeg",
    "images_2/DSC_0874.jpeg",
    "images_2/DSC_0879.jpeg",
    "images_2/DSC_0880.jpeg",
    "images_2/DSC_0883.jpeg",
    "images_2/DSC_0886.jpeg",
    "images_2/DSC_0890.jpeg",
    "images_2/DSC_0895.jpeg",
    "images_2/DSC_0898.jpeg",
    "images_2/DSC_0900.jpeg",
    "images_2/DSC_0903.jpeg",
    "images_2/DSC_0906.jpeg",
    "images_2/DSC_0907.jpeg",
    "images_2/DSC_0908.jpeg",
    "images_2/DSC_0910.jpeg",
    "images_2/DSC_0911.jpeg",
    "images_2/DSC_0918.jpeg",
    "images_2/DSC_0921.jpeg",
    "images_2/DSC_0924.jpeg",
    "images_2/DSC_0929.jpeg",
    "images_2/DSC_0930.jpeg",
    "images_2/DSC_0935.jpeg",
    "images_2/DSC_0937.jpeg",
    "images_2/DSC_0938.jpeg"
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
    
    link.download = "hochzeit-noemi-louis.jpg";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
