document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = event.target[0].value;
  const phone = event.target[1].value;
  const service = event.target[2].value;
  const msg = `Hi, I’d like to book a car wash for: ${name}, Phone: ${phone}, Service: ${service}`;
  window.open(`https://wa.me/27824398370?text=${encodeURIComponent(msg)}`, "_blank");
});
