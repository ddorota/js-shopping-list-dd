
function addNewItem(itemName) {
  
  // Create var with string (all element html)
  let elementHtml = 
    '<div class="list-element"> ' +

      '<div class="icons">' +
        '<div class="done">' +
          '<input type="checkbox"/>'+
        '</div>' +
        '<div class="delete"></div>' +
      '</div>' +
      '<div class="text">' +
      itemName +
    '</div>' +
    
    '</div>';

  // Append created string to end of .list div html
  // @todo make it ID not class
  $('.list').prepend(elementHtml);

  // add delete event listener
  // We need to do it every time we add new div .delete
  $('.delete').click(function () {
    $(this).parent().parent().remove();
  });
//   $('#checkbox').change(function () {
// });
// $(function () {
//   $('input:checkbox').on('change', function () {
//       if (this.checked) {
//           $(input).css('textDecoration', 'line-through');
//       } else {
//           $(input).css('textDecoration', 'none');
//       }
//   })
// })
if(checked){
  itemText.style.textDecoration = "line-through";
  }
  else{
  itemText.style.textDecoration = "none";
  }
}

// document is ready
$(function () {
  $('#add-button').click(function () {
    addNewItem($('#new-item').val());
  });
});


// $("input[type='checkbox']").on('change', function() {
//   if ($(this).is(":checked")) {
//     $(this).addClass('completed')
//   } else {
//     $(this).css({
//       'text-decoration': 'none',
//     })
//   }
// });
