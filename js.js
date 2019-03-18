
function addNewItem(itemName) {
  var id = uuidv4();
  // Create var with string (all element html)
  let elementHtml =
    '<div class="list-element" id="' + id + '"> ' +
    '<div class="icons" id="icons">' +
    '<div class="done" id "done">' +
    '<input class="make-it-done" type="checkbox" id="make-it-done" onchange="makeDone(\'' + id + '\')" />' +
    '</div>' +
    '<div class="delete" onclick="deleteItem(\'' + id + '\')"></div>' +
    '</div>' +
    '<div class="text" id="text">' +
    itemName +
    '</div>' +
    '</div>';

  // Append created string to end of .list div html
  $('#list').prepend(elementHtml);
}

// document is ready
$(function () {
  $('#add-button').click(function () {
    addNewItem($('#new-item').val());
  });
});

/**
 * @see https://stackoverflow.com/a/2117523
 */
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function deleteItem(id) {
  $("#" + id).remove();
}

function makeDone(id) {
  var list = $('#list');
  var container = $("#" + id);
  let textContainer = container.find('.text');
  let checkbox = container.find(".make-it-done");
  if (checkbox.is(":checked")) {
    list.append(container);
    textContainer.css({
      'text-decoration': 'line-through'
    });
  } else {
    list.prepend(container);
    textContainer.css({
      'text-decoration': 'none'
    })
  }


}
