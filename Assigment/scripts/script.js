document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section
        const targetPosition = document.querySelector(targetId).offsetTop; // Target position
        const startPosition = window.scrollY; // Current scroll position
        const distance = targetPosition - startPosition; // Distance to scroll
        const duration = 300; // Scroll duration in milliseconds (2 seconds)
        let start = null;

        // Animation function
        function step(timestamp) {
            if (!start) start = timestamp; // Set the start time
            const progress = timestamp - start; // Elapsed time
            const progressRatio = Math.min(progress / duration, 1); // Limit to 1
            const easeInOutQuad = progressRatio < 0.5
                ? 2 * progressRatio * progressRatio
                : 1 - Math.pow(-2 * progressRatio + 2, 2) / 2; // Smooth easing function
            window.scrollTo(0, startPosition + distance * easeInOutQuad); // Scroll step

            if (progress < duration) {
                window.requestAnimationFrame(step); // Continue animation
            }
        }

        window.requestAnimationFrame(step); // Start animation
    });
});

function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      phone: document.getElementById('phone').value,
      dob: document.getElementById('dob').value
    };
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', formData);
    alert('Account created successfully!');
    closeModal();
  }

  // Close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
      closeModal();
    }
  }