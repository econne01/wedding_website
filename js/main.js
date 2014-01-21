$('#sidebar').affix({
    offset: {
        top: $('header').height()
    }
});

$(document).ready(function() {
    console.log('js ready to act');
});
