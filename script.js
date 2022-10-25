$(function(){
    $( "#accordion" ).accordion({
    collapsible: true,
    active: false
    });
});

$(function(){
$("#open").button().click(function(){
    $('#dialog').dialog("open");
})

$('#dialog').dialog({
autoOpen: false,
buttons:{
        Оформить: function (event, ui) {
                $( "#confirm" ).dialog("open");

                var n = $("#name").val();
                var r = $("#row").val();
                var p = $("#place").val();
                var c = $("#comp").val();
                var d = $("#date").val();
                var price;

                switch (c){
                    case 'Глобал синема': price = 800;
                    break;
                    case 'ULTRA': price = 750;
                    break;
                    case 'Киномакс': price = 700;
                    break;
                }


                document.getElementById('cN').value = n;
                document.getElementById('R').value = r;
                document.getElementById('P').value = p;
                document.getElementById('C').value = c;
                document.getElementById('D').value = d;
                document.getElementById('Price').value = price;

            },
        Закрыть: function() {
        $(this).dialog('close');
}
},
show: {effect: "slideDown", duration: 800},
hide: {effect: "slideUp", duration: 800},
});

$("#slider").slider({
range: "min",
value: 1,
min: 1,
max: 10,
step: 1,
slide: function(event, ui) {
    $("#row").val($("#slider").slider("option", "value"));
},
change: function(event, ui) {
    $("#row").val($("#slider").slider("option", "value"));
}
});
$("#row").val($("#slider").slider("option", "value"));

$("#slider1").slider({
range: "min",
value: 1,
min: 1,
max: 37,
step: 1,
slide: function(event, ui) {
    $("#place").val($("#slider1").slider("option", "value"));
},
change: function(event, ui) {
    $("#place").val($("#slider1").slider("option", "value"));
}
});
$("#place").val($("#slider1").slider("option", "value"));

$( "#date" ).datepicker({
dateFormat: "dd.mm.yy"
});


$('#confirm').dialog({

autoOpen: false,
buttons:{
        Подтвердить: function (event, ui) {
            $( "#succ" ).dialog("open");
            $( "#dialog" ).dialog("close")
            $(this).dialog('close');
            },
        Отмена: function() {
        $(this).dialog('close');
}
},
show: {effect: "slideDown", duration: 800},
hide: {effect: "slideUp", duration: 800},
});

$('#succ').dialog({
autoOpen: false,
show: {effect: "slideDown", duration: 800},
hide: {effect: "slideUp", duration: 800},
});
})
