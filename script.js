
var signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    alert('Account created for ' + username + ' with email ' + email);
  });
}


var g1 = document.getElementById('googleLogin');
var g2 = document.getElementById('googleLogin2');
if (g1) g1.addEventListener('click', function() { window.open('https://accounts.google.com/', '_blank'); });
if (g2) g2.addEventListener('click', function() { window.open('https://accounts.google.com/', '_blank'); });

var a1 = document.getElementById('appleLogin');
var a2 = document.getElementById('appleLogin2');
if (a1) a1.addEventListener('click', function() { window.open('https://appleid.apple.com/', '_blank'); });
if (a2) a2.addEventListener('click', function() { window.open('https://appleid.apple.com/', '_blank'); });


var toggleDetails = document.getElementById('toggleDetails');
if (toggleDetails) {
  toggleDetails.addEventListener('click', function() {
    var details = document.getElementById('details');
    if (details.style.display === 'block') {
      details.style.display = 'none';
      toggleDetails.textContent = "See what's included ▼";
    } else {
      details.style.display = 'block';
      toggleDetails.textContent = "Hide details ▲";
    }
  });
}


var toggleDetails2 = document.getElementById('toggleDetails2');
if (toggleDetails2) {
  toggleDetails2.addEventListener('click', function() {
    var details2 = document.getElementById('details2');
    if (details2.style.display === 'block') {
      details2.style.display = 'none';
      toggleDetails2.textContent = "See what's included ▼";
    } else {
      details2.style.display = 'block';
      toggleDetails2.textContent = "Hide details ▲";
    }
  });
}
