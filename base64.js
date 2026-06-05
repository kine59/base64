/* 
Base64 - by Kine59
For Windows 93, albeit it can be used in any other website
06/05/2026 (June 5, 2026)
*/
let choice = prompt("1 - Decode\n2 - Encode\n3 - Exit") // choices for base64

if (choice == "1") // decoding
{
  let base64decode = prompt("Put base64 text here");
  if (base64decode)
  {
    // window added so it could show up in windows93, albeit you could remove this if you're using this for something else
    window.alert(atob(base64decode)); // atob and btoa decode and encode base64 respectivefully
  }
}
else if (choice == "2") // encode
{
  let base64encode = prompt("Put text here")
  if (base64encode)
  {
    window.alert(btoa(base64encode));
  }
}
