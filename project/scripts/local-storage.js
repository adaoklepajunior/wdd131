
  // Add to the info counter
  if (localStorage.getItem("infoCount")) {
    localStorage.setItem("infoCount", Number(localStorage.getItem("infoCount")) + 1);
  } else {
    localStorage.setItem("infoCount", 1);
  }
  
  // Display the current info count
  document.getElementById("infoCount").textContent = localStorage.getItem("infoCount");

   // Set footer information dynamically
   document.getElementById("year").textContent = new Date().getFullYear();
   document.getElementById("lastModified").textContent = document.lastModified;