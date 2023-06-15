function showImage(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

  console.log("Hello, Jose")


  document.getElementById('hireMe').addEventListener('click', function() {
    var email = 'gojosearias@gmail.com';
    var subject = 'Let\'s Work Together!';
    var message = 'Hello,\n\nI came across your contact information and I am interested in discussing potential opportunities with you. I have attached my idea-proposal for your review.\n\nLooking forward to hearing from you soon!\n\nBest regards,\n[Your Name]\n[Phone Number]';

    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);

    window.open(mailtoLink);
  });
  
  
  
  
  
  