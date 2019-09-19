const formBtn = document.querySelector(".form-btn");
const errorSpanNumber = document.querySelector(".error-number");
const errorSpanCheck = document.querySelector(".error-check");
const inputNumber = document.querySelector(".input-number");
const inputPhoto = document.getElementById("inputPhoto");

formBtn.addEventListener("click", function() {
  if (inputNumber.value === "" || inputPhoto.value === "") {
    errorSpanNumber.style.zIndex = "0";
    errorSpanCheck.style.zIndex = "0";
  } else {
    errorSpanNumber.style.zIndex = "-22";
    errorSpanCheck.style.zIndex = "-22";
    $(".check-popup").css("visibility", "visible");
    $(".check-popup__box").addClass("check-popup__active");
  }
  const inputNumberValue = inputNumber.value;
  console.log();

  if (inputNumberValue === "") {
    errorSpanNumber.style.zIndex = "0";
  } else {
    errorSpanNumber.style.zIndex = "-22";
  }
  if (inputPhoto.value === "") {
    errorSpanCheck.style.zIndex = "0";
  } else {
    errorSpanCheck.style.zIndex = "-22";
  }
});

function readFile() {
  if (this.files && this.files[0]) {
    var FR = new FileReader();

    FR.addEventListener("load", function(e) {
      document.getElementById(
        "asd"
      ).style.backgroundImage = `url('${e.target.result}')`;
    });

    FR.readAsDataURL(this.files[0]);
  }
}

inputPhoto.addEventListener("change", readFile);

$(".close-popup").click(function() {
  inputNumber.value = "";
  inputPhoto.value = "";
  document.getElementById("asd").style.backgroundImage = `url('')`;
  $(".check-popup__box").removeClass("check-popup__active");
  $(".check-popup").css("visibility", "hidden");
});
