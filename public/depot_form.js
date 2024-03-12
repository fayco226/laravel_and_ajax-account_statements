
function depot_form(){
var depot = `

            <div class="row justify-content-center  ff">
                <fieldset class="col-8 col-md-6 p-3 border rounded" id="natur" data-nature="depot" >
                    <legend class="legend1"> Période</legend>
                    <div class="row justify-content-center">
                        <div class="form-group col-sm-9 col-lg-6">
                            <label for="annee">Année</label>
                            <div class="input-group">
                                <input type="number" name="annee" id="anneefor" required>
                            </div>
                        </div>
                        <div class="form-group col-sm-9 col-lg-6" style="margin-left: 0px;">
                            <label for="trimestre">Trimestre</label>
                            <div class="input-group">
                                <select name="trimestre" id="trimestre" style="width: 200px; height: 30px" required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="col-8 col-md-6 p-3 border rounded" >
                    <legend class="legend2">Dépôt</legend>
                    <div class="row justify-content-center">
                        <div class="form-group col-sm-9 col-lg-6">
                            <label for="nom">Déposer par</label>
                            <div class="input-group">
                                <input type="text" id="nom" required>
                            </div>
                        </div>
                        <div class="form-group col-sm-9 col-lg-6">
                            <label for="reference" >Référence</label>
                            <div class="input-group">
                                <input type="text" id="reference" required>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="row justify-content-center zz" >
            <p style="background-color: green; color: white; text-align: center; height: 35px;" id="referencef">Afficher la référence</p>
            </div>
            <div class="row justify-content-center zz">
            <span style="margin-left:10px;">
                <div class="form-group col-sm-9 col-lg-6">
                            <label for="montant">Montant</label>
                <div class="form-group col-sm-9 col-lg-6">
                        <div class="input-group">
                            <input type="number" id="montant" required>
                        </div>
                </div>
            </span>
            </div>
            <script>
            $("#reference").on('input', function(){
                var refere = $(this).val();
                $("#referencef").empty();
                $("#referencef").text(refere);
            });
            </script>
            `;
return depot;
}
