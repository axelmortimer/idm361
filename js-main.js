var historyTab = 0;


function pageSetUp() {
  //console.log('pageSetUp');
  // document.getElementById("result").innerHTML = "00";
}

function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}


// jquery

$(document).ready(function() {
    console.log( "ready!" );

    $('.historyNavDaily').mousedown(function() {
      $('.dailyEntryContainer').css('display', 'inline');
      $('.weeklyEntryContainer').css('display', 'none');
    });
    $('.historyNavWeekly').mousedown(function() {
      $('.dailyEntryContainer').css('display', 'none');
      $('.weeklyEntryContainer').css('display', 'inline');
    });

    $('.historyDelete').mousedown(function() {
      $(this).parent().css('display', 'none');

    });

});
