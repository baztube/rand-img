function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  let fileList = {};
  let currentImageIndex = -1; // Initialize to -1 to avoid out-of-bounds error on first click
  
  document.getElementById("fileInput").addEventListener("change", function () {
    fileList = Array.from(event.target.files);  // Convert FileList to a proper array
    document.getElementById("fileInput").style.visibility = "hidden";
    document.getElementById("fileInput").style.height = "0px";
    document.getElementById("fileInput").style.fontSize = "0px";
    document.getElementById("next").style.visibility = "visible";
  
    // Display a random image initially (optional)
    currentImageIndex = rand(0, fileList.length - 1);
    document.getElementById("image").src = URL.createObjectURL(fileList[currentImageIndex]);
  });
  
  document.getElementById("next").addEventListener("click", function () {
    if (fileList.length === 0) {
      // Handle empty file list scenario (optional)
      alert("No images selected!");
      return;
    }
  
    currentImageIndex = (currentImageIndex + 1) % fileList.length;  // Wrap around to the beginning if necessary
    document.getElementById("image").src = URL.createObjectURL(fileList[currentImageIndex]);
  });