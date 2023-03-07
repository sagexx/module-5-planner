$(function () {
    // Add a listener for click events on the save button.
    $(".saveBtn").on("click", function () {
      // Use the id in the containing time-block as a key to save the user input in local storage.
      const id = $(this).closest(".time-block").attr("id");
      const text = $(this).siblings(".description").val().trim();
      localStorage.setItem(id, text);
    });
  
    // Apply the past, present, or future class to each time block by comparing the id to the current hour.
    function updateHourlyBlocks() {
      const currentHour = dayjs().hour();
      $(".time-block").each(function () {
        const blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).addClass("past").removeClass("present future");
        } else if (blockHour === currentHour) {
          $(this).addClass("present").removeClass("past future");
        } else {
          $(this).addClass("future").removeClass("past present");
        }
      });
    }
    updateHourlyBlocks();
  
    // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
    $(".time-block").each(function () {
      const id = $(this).attr("id");
      const text = localStorage.getItem(id);
      if (text) {
        $(this).find(".description").val(text);
      }
    });
  
    // Display the current date in the header of the page.
    const currentDate = dayjs().format
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // Add a listener for click events on the save button. This code should use
    // the id in the containing time-block as a key to save the user input in local
    // storage.
    $('.saveBtn').on('click', function() {
      // `this` references the save button that was clicked.
      // Use DOM traversal to get the "hour-x" id of the time-block containing
      // the button that was clicked.
      const timeBlockId = $(this).parent().attr('id');
      // Use the timeBlockId as a key to save the user input in local storage.
      const userInput = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, userInput);
    });
  
    // Add code to apply the past, present, or future class to each time block by
    // comparing the id to the current hour.
    const currentHour = dayjs().hour();
    $('.time-block').each(function() {
      const timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  
    // Add code to get any user input that was saved in localStorage and set the
    // values of the corresponding textarea elements.
    $('.time-block').each(function() {
      const timeBlockId = $(this).attr('id');
      const userInput = localStorage.getItem(timeBlockId);
      if (userInput) {
        $(this).find('.description').val(userInput);
      }
    });
  
    // Add code to display the current date in the header of the page.
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  });
})