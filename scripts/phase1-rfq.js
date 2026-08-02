(() => {
  const form = document.querySelector("[data-phase1-rfq]");
  if (!form) return;

  const status = form.querySelector("[data-rfq-status]");
  const submitButton = form.querySelector('button[type="submit"]');
  const emailInput = form.querySelector('input[name="Email"]');
  const replyToInput = form.querySelector('input[name="replyto"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (replyToInput && emailInput) replyToInput.value = emailInput.value;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    status.className = "rfq-status";
    status.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Submission failed");
      status.className = "rfq-status success";
      status.textContent = "Thank you. Your RFQ has been received. Our sales team will contact you as soon as possible.";
      form.reset();
    } catch (error) {
      status.className = "rfq-status error";
      status.textContent = "The RFQ could not be sent. Please email frtcarbon@gmail.com or contact us on WhatsApp.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Request Factory Quote";
    }
  });
})();
