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
        $newItemButton.fadeOut('slow');
        $newItemForm.delay(600).fadeIn('slow');
    });

    // ADDING A NEW LIST ITEMS
    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var text = $('input:text').val();// GET TEXT VALUE
        $list.append('<li>' + text + '</li>');//APPEND LIST ITEM WITH TEXT VALUE
        $('input:text').val('');// RESET INPUT FIELD
        updateCount();
    });

    //CLICK HANDLING FOR DELEGATION ON <UL> ELEMENT
    $list.on('click', 'li', function(){
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if(complete === true) {
            $this.animate({
                opacity: 0.0,
                paddingLeft: '+=180'
            },500, 'swing', function(){
                $this.remove();
            });
        } else {
            item = $this.text();
            $this.remove();
            $list
                .append('<li class=\"complete\">' + item + '<i class="material-icons">delete</i></li>')
                .hide().fadeIn(2000);
            updateCount();
        }
    })

    //RESET BUTTON
    $('#resetButton').on('click', function(){
        $('li').remove();
        updateCount();
    })

})
