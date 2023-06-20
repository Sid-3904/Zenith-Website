// Show elements with animation on page load
document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector(".hero-content");
    const teamMembers = document.querySelectorAll(".team-member");
  
    setTimeout(function() {
      heroContent.classList.add("show");
    }, 500);
  
    setTimeout(function() {
      teamMembers.forEach(function(member) {
        member.classList.add("show");
      });
    }, 1000);
  });
  