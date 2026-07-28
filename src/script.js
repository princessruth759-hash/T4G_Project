document.addEventListener("DOMContentLoaded", () => {
  const checkoutModal = document.getElementById("checkout-modal");
  const checkoutSummary = document.getElementById("checkout-summary");
  const checkoutForm = document.getElementById("checkout-form");
  const checkoutMessage = document.getElementById("checkout-message");
  const closeModalBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".price-tag").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.dataset.product || "this product";
      const price = button.dataset.price || "";
      if (checkoutSummary) {
        checkoutSummary.textContent = `You are purchasing ${product} for ${price}.`;
      }
      if (checkoutMessage) {
        checkoutMessage.textContent = "";
      }
      if (checkoutForm) {
        checkoutForm.reset();
      }
      if (checkoutModal) {
        checkoutModal.classList.add("active");
        checkoutModal.setAttribute("aria-hidden", "false");
      }
    });
  });

  function closeCheckout() {
    if (!checkoutModal) return;
    checkoutModal.classList.remove("active");
    checkoutModal.setAttribute("aria-hidden", "true");
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeCheckout);
  }

  if (checkoutModal) {
    checkoutModal.addEventListener("click", (event) => {
      if (event.target === checkoutModal) {
        closeCheckout();
      }
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("buyer-name").value.trim();
      const email = document.getElementById("buyer-email").value.trim();
      const card = document.getElementById("card-number").value.trim();
      const expiry = document.getElementById("expiry").value.trim();
      const cvv = document.getElementById("cvv").value.trim();

      if (!name || !email || !card || !expiry || !cvv) {
        checkoutMessage.textContent = "Please complete all payment details.";
        return;
      }

      checkoutMessage.textContent = `Payment successful! Thank you, ${name}.`;
      checkoutForm.reset();
      setTimeout(closeCheckout, 1400);
    });
  }

  const slides = Array.from(document.querySelectorAll(".hero-image img"));
  const prevBtn = document.querySelector(".slideshow-controls .prev");
  const nextBtn = document.querySelector(".slideshow-controls .next");
  let slideIndex = 0;

  function showSlide(index) {
    if (!slides.length) return;
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  if (slides.length) {
    showSlide(slideIndex);

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
      });
    }
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const fullName = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const message = contactForm.querySelector("textarea").value.trim();

      if (!fullName || !email || !message) {
        alert("Please complete all fields before submitting.");
        return;
      }

      alert("Thank you for contacting NCESS Cosmetics!");
      contactForm.reset();
    });
  }

  const signupForm = document.querySelector(".signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const password = signupForm.querySelector("#password").value;
      const confirmPassword = signupForm.querySelector("#confirm-password").value;

      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      alert("Account created successfully!");
      signupForm.reset();
    });
  }

  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();

      if (!email || !password) {
        alert("Please enter your email and password.");
        return;
      }

      alert("Welcome back to NCESS Cosmetics!");
      loginForm.reset();
    });
  }
});
