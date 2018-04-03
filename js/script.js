var button = document.querySelector(".search-button");
var popup = document.querySelector(".form-shadow");
var show = document.querySelector(".form-show");
var arrival = popup.querySelector("[name=date-of-arrival]");
var departure = popup.querySelector("[name=date-of-departure]");
var people = popup.querySelector("[name=people");
var form = popup.querySelector(".booking-form");


popup.classList.add("form-show");

button.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.add("form-show");
arrival.focus();
popup.classList.toggle("active");
});

form.addEventListener("submit", function(evt) {
if (!arrival.value || !departure.value || !people.value) {
evt.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
}
});
