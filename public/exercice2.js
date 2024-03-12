function enregistrer(nature){
  var annee = $("#anneefor").val();
  var trimestre = $("#trimestre").val();
  var reference = $("#reference").val();
  var montant = $("#montant").val();
  var nom = $("#nom").val();
  console.log(datas[datas.length-1]);
  dernier_id = datas[datas.length-1].id;
  enre = {
    id: dernier_id+1,
    annee: annee,
    trimestre: trimestre,
    nature: nature,
    reference: reference,
    montant: parseInt(montant),
    nom: nom
  };
  console.log(enre);

  datas.push(enre);
  console.log("success");
}

// function rechercher(annee) {
//     donneeJson().then(function(data) {
//         var resultats_init = [];
//         var resultats_final = {
//             '4T': [],
//             '3T': [],
//             '2T': [],
//             '1T': []
//         };
//         data.forEach(element => {
//             if (element.annee == annee) {
//                 resultats_init.push(element);
//             }
//         });
//         resultats_init.forEach(element => {
//             if (element.trimestre == 1) {
//                 resultats_final['1T'].push(element)
//             }
//             if (element.trimestre == 2) {
//                 resultats_final['2T'].push(element)
//             }
//             if (element.trimestre == 3) {
//                 resultats_final['3T'].push(element)
//             }
//             if (element.trimestre == 4) {
//                 resultats_final['4T'].push(element)
//             }
//         })
//         console.log(resultats_final);
//         // Faites ce que vous voulez avec resultats_final
//     }).catch(function(error) {
//         console.error("Une erreur s'est produite:", error);
//     });
// }

async function rechercher(annee){
    data = await donneeJson();
    var resultats_init = [];
    var resultats_final = {
            '4T':[],
            '3T':[],
            '2T':[],
            '1T':[]
        };
    data.forEach(element => {
        if(element.annee == annee){
            resultats_init.push(element);
        }
    });
    resultats_init.forEach(element=>{
        if (element.trimestre == 1) {
            resultats_final['1T'].push(element)
        }
        if (element.trimestre == 2) {
            resultats_final['2T'].push(element)
        }
        if (element.trimestre == 3) {
            resultats_final['3T'].push(element)
        }
        if (element.trimestre == 4) {
            resultats_final['4T'].push(element)
        }
    })
    console.log(resultats_final);
    return resultats_final;
}

function tableThead(){
    var thead = `<thead>
                    <tr>
                      <th  class="cellule head">#</th>
                      <th  class="cellule head">Nature</th>
                      <th  class="cellule head">Référence</th>
                      <th  class="cellule head">Dépôt</th>
                      <th  class="cellule head">Retrait</th>
                      <th></th>
                    </tr>
                  </thead>`;
      return thead;
}

// function donneeJson() {
//     return $.ajax({
//         url: "/data-get",
//         method: "GET",
//         dataType: "json"
//     });
// }

var datas = new Array;
async function donneeJson(){
    await $.ajax({
        url: "/data-get",
        method: "GET",
        dataType: "json",
        error: err => {
            console.log();
            alert("Une erreur c'est produite.");
            return null;
        },
        success: function(resp) {
            if (resp) {
                $.each(resp, function(index, element){
                    datas.push(element);
                    //console.log(index+ " "+ element);
                });
            }
        }
    });
    console.log(datas);

    return datas;
}
