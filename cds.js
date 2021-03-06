// ================= Form Validations ==========================
  function validateFilledForm() {
    let firstName = document.forms["contactDetails"]["fName"].value;
    let lastName = document.forms["contactDetails"]["lName"].value;
    let email = document.forms["contactDetails"]["email"].value;
    if (firstName | lastName | email == "") {
      // The order of the variables matter above!!!
      alert("Please fill out all required fields.");
      return false;
    }
  };
// =================AlphaNumeric Validation=============================
function promoField() {
  let promoCode = document.forms["contactDetails"]["promo"].value;
  var letterNumber = /^[0-9a-zA-Z]+$/;
    if(promoCode.match(letterNumber)) {
      alert("Success!");
      return true;
    }
};
// ================= Promo / How Did You Hear ===========================
// function dropDownMenu() {
//   // onChange function
//   const menuOther = document.querySelector("select");
//   const other = document.querySelector("other");
//   let textArea = document.getElementById("hearUs");
//
//     menuOther.addEventListener('change', (event) => {
//       if(event.target.value === "other" && textArea == ""){
//         textArea.required = true;
//         textArea.style.border="1px solid red";
//         // May have to create another function to handle the submission once the text area is filled out.
//       } else {
//         textArea.required = false;
//       }
//     })
// };
// ======================= Text Area validation ============================
function textAreaValidation(){
  let menuOther = document.querySelector("select");
  let other = menuOther.value
  let textArea = document.getElementById("hearUs");
  // menuOther.value == "other"
  if(textArea.value == "" && menuOther.value == "other"){
    alert(
      "Please fill in the text box with information on how you heard about us."
    );
  } else {
    return true;
  }
};
// =================Terms and Conditions Prompt==========================
  title = ["- All cancellation requests must be received by March 1, 2022", "       - All cancellation requests are subject to a $100 cancellation fee.", "  - No one under the age of 16 will be allowed on the show floor."]

function showTerms(){
  alert(title)
};
// =================Complete Validation==========================
function ending(){
  if(validateFilledForm && promoField && textAreaValidation){
    alert("Put this logic in greenBox function or encapsulate greenBox function with this function.")
  };
};
// ========================= Green Box ================================


  // Get the modal
  var modal = document.getElementById("myModal");

  // button that opens modal
  var btn = document.getElementById("myBtn");

  //the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
// =================================================================
