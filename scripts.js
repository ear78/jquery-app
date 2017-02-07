"use strict"

$(document).ready(function(){
    var $list, $newItemForm, $newItemButton;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');

    $('li').hide().each(function(index){
        $(this).delay(100 * index).fadeIn(600);
    })

    //ITEM COUNTER
    function updateCount(){
        var items = $('li[class!=complete]').length;
        $('#counter').text(items);
    }
    updateCount();

    // SETUP FORM FOR NEW ITEMS
    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    })








})
