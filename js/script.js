$(document).ready(function() {

    var dropdown = $('.dropdown-with');
    var dropdownLink = dropdown.children('a');
    var dropdownMenu = dropdown.children('.dropdown_menu')

    dropdownLink.click(function(e) {

        var menu = $(this).next('.dropdown_menu');
        dropdownMenu.not(menu).hide();
        menu.toggle();
    })
    // end document ready
}
)