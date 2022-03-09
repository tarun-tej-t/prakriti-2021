var URL = window.location.href;
var URLon = URL.split("?");
var rcodevalue = "";
URLon.forEach(function (item) {
  var tmp = item.split("=");
  if (tmp[0] === "rcode") {
    rcodevalue = decodeURIComponent(tmp[1]);
  }
});
document.getElementById("me_widget").src =
  "https://www.meraevents.com/ticketWidget?eventId=248437&ucode=organizer&wcode=D11717-11785D-333333-11785D-&dateTime=1&location=1&directDetails=0&redirectUrl=https://prkrt.co.in/postregistration&theme=1&t=2&tid=354137&rcode=" +
  rcodevalue;
