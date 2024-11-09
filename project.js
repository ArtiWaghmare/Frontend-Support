document.addEventListener("DOMContentLoaded", function () {
    const unitOptions = document.querySelectorAll('input[name="units"]');
    const totalDisplay = document.querySelector(".total-one");
  
    function updateTotalPrice() {
      let selectedUnit = document.querySelector('input[name="units"]:checked');
      let unitPrice = 0;
  
      if (selectedUnit) {
        // Adjusted to select the closest option container (option, option-three, most-popular)
        const selectedOption = selectedUnit.closest(".option, .option-three, .most-popular");
        const priceText = selectedOption.querySelector(".text-one").textContent;
        unitPrice = parseFloat(
          priceText.replace("$", "").replace(" USD", "").trim()
        );
      }
  
      totalDisplay.textContent = `Total: $${unitPrice.toFixed(2)} USD`;
    }
  
    unitOptions.forEach((radio) => {
      radio.addEventListener("change", updateTotalPrice);
    });
  
    // Initial call to display the total for the initially selected option
    updateTotalPrice();
  });
  

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("successModal");
  const addToCartButton = document.querySelector(".add-to-cart");
  const closeButton = document.querySelector(".close-btn");

  addToCartButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="units"]');
    const options = document.querySelectorAll('.option, .option-three, .most-popular');

    function updateSelection() {
      options.forEach(option => option.classList.remove('selected'));
      
      const selectedRadio = document.querySelector('input[name="units"]:checked');
      if (selectedRadio) {
        selectedRadio.closest('.option, .option-three, .most-popular').classList.add('selected');
      }
    }
  

    radioButtons.forEach(radio => radio.addEventListener('change', updateSelection));
  

    updateSelection();
  });
  