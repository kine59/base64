/* 
Base64 - by Kine59
For Windows 93, albeit it can be used in any other website
06/05/2026 (June 5, 2026)
*/
let choice = prompt("1 - Decode\n2 - Encode\n3 - Exit") // choices for base64

switch (choice)
{
  case "1": // decode
    let base64decode = prompt("Put base64 text here");

    if (base64decode)
    {
      var decoded = atob(base64decode);
      window.alert(decoded); // atob and btoa decode and encode base64 respectivefully
      console.log(decoded)
    }
    break;
  case "2": // encode
    let base64encode = prompt("Put text here")
    if (base64encode)
    {
      var encoded = btoa(base64encode);
      window.alert(encoded);
      console.log(encoded);
    }
    break;
  case "3": // closing
    window.alert("Script aborted");
    break;
  default: // invalid choice
    window.alert("Invalid");
    break;
}
