function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('active');
}

// Back to top button
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Menu Filter
function filterMenu(category, btn) {
  let cards = document.querySelectorAll('.food-card');
  let btns = document.querySelectorAll('.filter-btns button');

  btns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Form Validation
function validateForm(e) {
  e.preventDefault();
  let valid = true;

  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');

  document.querySelectorAll('.error').forEach(err => err.innerHTML = '');

  if (name.value.trim() === '') {
    document.getElementById('nameError').innerHTML = 'Name is required';
    valid = false;
  }
  if (!email.value.match(/^\S+@\S+\.\S+$/)) {
    document.getElementById('emailError').innerHTML = 'Valid email required';
    valid = false;
  }
  if (subject.value.trim() === '') {
    document.getElementById('subjectError').innerHTML = 'Subject is required';
    valid = false;
  }
  if (message.value.trim().length < 10) {
    document.getElementById('msgError').innerHTML = 'Message must be 10+ characters';
    valid = false;
  }

  if (valid) {
    alert('Message sent successfully! We will contact you soon.');
    document.getElementById('contactForm').reset();
  }
  return valid;
}
