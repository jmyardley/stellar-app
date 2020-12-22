/* eslint-disable prefer-arrow-callback */
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  const calendarEl = document.querySelector("#calendar");
  const confirmEl = document.querySelector("#confirmation");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    dateClick: function(info) {
      const newDate = info.dateStr;
      // alert("Selected " + newDate);
      info.dayEl.style.backgroundColor = "gray";
      console.log(newDate);
      // jquery post to /api/appointment sent text complete date userID
      $.post("/api/appointment", {
        date: newDate
      })
        .then(function() {
          console.log("success");
        })
        .catch(err => {
          console.log(err);
        });
      confirmEl.innerHTML = "You have selected " + newDate;
      confirmEl.innerHTML += " Back".link("");
    }
  });
  calendar.render();
});
