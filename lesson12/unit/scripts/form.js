// Jeremy Bowne HTML5 Unit L
function writeTy(person) {
  alert("Thanks for contacting Lakeland Reeds Bed & Breakfast "+person+" !");
  }

function checkReqFields() {
  var name=document.getElementById('nameinput').value;
  if (name==null || name=="") {
    alert("First name must be filled out");
    return false;
    }
  writeTy(name);
  document.forms('contact').reset();
  }