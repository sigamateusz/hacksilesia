$(document).ready(function () {
    $('.form').submit(function(e)  {
        e.preventDefault();
        var name = $('#name').val();
        var select = $('#select').val();
        var contact = $('#contact').val();
        var time = $('#time').val();
        var others = $('#others').val();
        var startCity = $('#start').val();
        var endCity = $('#end').val();
        var link = $('#name').data("link");
        var url = "/track/" + link;
        $.ajax({
            url: url,
            type: 'post',
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify({name: name,
                startCity: startCity,
                endCity: endCity,
                space:select,
                telephone:contact,
                time:time,
                other:others}),
            success: function () {
                alert("Udało ci się edytować");
                window.refresh();
            },
            error: function (e) {
                alert("Nie udało się edytować. Spróbuj ponownie!")
            }
        });
    });

    $("#remove").on('click', function (e) {
        e.preventDefault();
        var link = $('#name').data("link");
        $.ajax({
            url: "/track/remove",
            type: 'post',
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify({
                    link: link
                }),

            success: function (data) {
                alert("Udało ci się usunąć trasę!");
                window.location.href ="/tracks";
            },
            error: function (e) {
                alert("Nie udało się usunąć trasy. Spróbuj ponownie.")
            }
        });
    })

});
