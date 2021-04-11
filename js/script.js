$(document).ready(function() {

    var dropdown = $('.dropdown-with');
    var dropdownLink = dropdown.children('a');
    var dropdownMenu = dropdown.children('.dropdown_menu')

    // problema: la funzione toggle() inserisce un display:block direttamente inline
    // sovrascrivendomi il display:flex del menu feature. per ovviare devo, al caricamento
    // della pagina, chiudere preventivamente tutti i menu, così posso evitare
    // di utilizzare il display:none di default. non credo sia una solizione ottimale.
    // dropdownMenu.hide();

    dropdownLink.click(function(e) {

        var menu = $(this).next('.dropdown_menu');
        dropdownMenu.not(menu).hide();
        menu.toggle();
    })



    // end document ready
}
)