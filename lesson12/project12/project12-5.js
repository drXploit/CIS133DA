// Jeremy Bowne
function writeMsg(customer) {
  document.getElementById("message").innerHTML=("Thanks "+customer+" for contacting T.A.S.K. - Your pets are our family.");
  }

function checkReqFields() {
  var name=document.getElementById('nameinput').value;
  if (name==null || name=="") {
    alert("First name must be filled out");
    document.getElementById("message").innerHTML=("");
    return false;
  }
  writeMsg(name);
  document.forms('contact').reset();
  }