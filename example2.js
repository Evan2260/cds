$("#HandicapBtn").on("click", function(evt) {
  if ($(this).prop("checked")) {
    $("[id^=Row_HandicapText]").show();
    $("#HandicapText").addClass("required");
} else {
    $("[id^=Row_HandicapText]").hide;
    $("#HandicapText").val("").removeClass("required");
  }
});
