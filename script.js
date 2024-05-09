function validateSyntax() {
  let input = document.getElementById("petInput").value;
//   const inputStartsWith = /^pet_[a-zA-Z0-9]+$/;
  //   const isAlphanumeric = /^[a-zA-Z0-9]+$/;
  // let inputAfterStart = input.charAt(4)
  let result = ""; // Placeholder for validation result
  let i;
  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters
  if (inputStartsWith.test(input)) {
    for (i = 0; i < input.length; i++) {
      let len = input.charAt(i);
      let cc = len.charCodeAt(0);
      if (
        (cc > 47 && cc < 58) ||
        (cc > 64 && cc < 91) ||
        (cc > 96 && cc < 123)
      ) {
          result = "Valid Syntax";
      }else{
        result = "Invalid Syntax"
      }
    }

    // if( /[^a-zA-Z0-9]/.test( input ) ) {
    //     result = "Valid Syntax"
    //  }
    console.log(result);
  } else {
    result = "Invalid Syntax";
    console.log(result);
  }

  document.getElementById("result").innerText = result;
}
