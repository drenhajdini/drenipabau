function shuffleValues() {
  const form = document.getElementById("myForm");
  const checkboxes = Array.from(form.elements.option);
  checkboxes.sort(() => Math.random() - 0.5); 
  checkboxes.forEach((checkbox) => {
    form.appendChild(checkbox.parentNode); 
    
  });
}

function changeValues() {
  const form = document.getElementById("myForm");
  const checkboxes = Array.from(form.elements.option);
  checkboxes.forEach((checkbox) => {
    checkbox.value = "Erdh vera"; // 
    
  });
}

function showSelectedValues() {
  const form = document.getElementById("myForm");
  const checkboxes = Array.from(form.elements.option);
  const selectedValues = checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  document.getElementById("selectedValues").textContent = "Selected Values: " + selectedValues.join(", ");
}