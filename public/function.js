$(document).ready(function () {
    $('#conteneur').empty();
    var thead = tableThead();
    $("#annee").on('click', async function () {
        $('#conteneur').empty();
        var annee = $("#anne").val();
        var data = await rechercher(annee);
        console.log(data);
        var sommeTDepot = 0;
        var sommeTRetrait = 0;
        var table = $('<table >');
        var a = [];
        $.each(data, function (key, value) {
            if (value.length >= 1) {
                a.push(1);
            }
            else {
                a.push(0)
            }
        });
        if (a.includes(1)) {
            $.each(data, function (key, value) {
                var sommeDepot = 0;
                var sommeRetrait = 0;
                if (value.length >= 1) {
                    table.append(thead);
                    tabletbody = $('<tbody>');
                    var row = $('<tr style="font-weight: bold; font-size: 25px;">');

                    row.append($('<td colspan="5" class="cellule">').text(key + annee));
                    row.append($('<td>'));
                    tabletbody.append(row);
                    var countloop = 1;
                    $.each(value, function (index, item) {
                        var row1 = $('<tr >');
                        row1.append($('<td class="cellule">').text(countloop));
                        if (item.nature == 'depot') {
                            row1.append($('<td class="cellule">').text('Depot'));
                        }
                        else {
                            row1.append($('<td class="cellule">').text('Retrait'));
                        }
                        row1.append($('<td class="cellule cl">').text(item.reference));
                        if (item.nature == 'depot') {
                            sommeDepot += item.montant;
                            row1.append($('<td class="cellule">').text(item.montant));
                            row1.append($('<td class="cellule">').text(''));
                        }
                        else {
                            sommeRetrait += item.montant;
                            row1.append($('<td class="cellule">').text(''));
                            row1.append($('<td class="cellule">').text(item.montant));
                        }
                        tabletbody.append(row1);
                        countloop += 1;
                    });
                    var row3 = $('<tr class="cellule" style="font-weight: bold; font-size: 25px;">');
                    row3.append($('<td colspan="3" class="cellule">').text('Sous-Total'))
                    row3.append($('<td class="cellule">').text(sommeDepot))
                    row3.append($('<td class="cellule">').text(sommeRetrait))
                    row3.append($('<td style="width: 200px;">').text(sommeDepot - sommeRetrait))
                    var row4 = $('<tr >');
                    row4.append($('<td colspan="6" style="height: 40px;">'));
                    tabletbody.append(row3);
                    tabletbody.append(row4);
                    table.append(tabletbody);
                    $('#conteneur').append(table);
                    sommeTDepot += sommeDepot;
                    sommeTRetrait += sommeRetrait;
                }
            });
            var row4 = $('<tr class="cellule" style="font-weight: bold; font-size: 30px;">');
            row4.append($('<td colspan="3" class="cellule">').text('Total Generale'));
            row4.append($('<td class="cellule">').text(sommeTDepot));
            row4.append($('<td class="cellule">').text(sommeTRetrait));
            row4.append($('<td style="width: 200px;">').text(sommeTDepot - sommeTRetrait));
            row4.append($('<td>'));
            tabletbody.append(row4);
            table.append(tabletbody);
            $('#conteneur').append(table);
        }
        else {
            $('#conteneur').empty();
        }
    });
    $('#conteneur').empty();

    $('#depot_btn').on('click', function () {
        $('#conteneur').empty();
        $(".modal-title").empty();
        $(".modal-title").append("Dépot d'argent");
        var depot_formulaire = depot_form();
        $(".modal-body").empty();
        $(".modal-body").html(depot_formulaire);
    });
    $('#retrait_btn').on('click', function () {
        $('#conteneur').empty();
        $(".modal-title").empty();
        $(".modal-title").append("Rétrait d'argent");
        var retrait_formulaire = retrait_form();
        $(".modal-body").empty();
        $(".modal-body").html(retrait_formulaire);
    });
    $('#modal-form').submit(function(e) {
        e.preventDefault();
        $('#conteneur').empty();
        var nature = $("#natur").data('nature');
        enregistrer(nature);
        var div = $('<p class="bg-success" style="color: white; height: 50px"; text-align: center;>');
        div.text("Operation reussi avec succès");
        $("#conteneur").append(div);
        $("#annuler").trigger('click');
        $(".modal-body").empty();
    })
});
