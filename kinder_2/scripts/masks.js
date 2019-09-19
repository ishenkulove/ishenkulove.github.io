var inputPhone = document.querySelectorAll(".input-number");

Inputmask({
  mask: "+\\7(999) 999-99-99",
  showMaskOnHover: false
}).mask(inputPhone);
