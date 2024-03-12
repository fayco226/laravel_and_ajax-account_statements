<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="exercice2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous">
    </script>
    <script src="{{ asset('jquery-3.7.0.min.js') }}"></script>
    <script src="{{ asset('depot_form.js') }}"></script>
    <script src="{{ asset('retrait_form.js') }}"></script>
</head>

<body>
    <div id="content-wrapper " class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content" style="border: 1px solid black; border-top: 0px; margin: 20px;">
            <p class="bg-primary" style="text-align: center; font-weight: bold; font-size: 20px;">Réleve de mon compte
            </p>
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top "></nav>
            <form class=" d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <label class="form-label" for="annee"
                        style="margin-top: 5px; margin-left: 25px; font-weight: bold;">Année:</label>
                    <input type="number" class="form-control bg-light border-1 small" style="margin-left: 25px;"
                        name="annee" placeholder="Recherche" aria-label="Search" aria-describedby="basic-addon2"
                        id="anne">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" id="annee">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
            <ul class="ull">
                <button class="btn btn-success btnz" style="margin-right: 20px;" id="depot_btn" data-toggle="modal"
                    data-target="#exampleModal">Dépôt</button>
                <button class="btn btn-danger btnz" id="retrait_btn" data-toggle="modal"
                    data-target="#exampleModal">Retrait</button>
            </ul>
            </nav>
            <hr />
            <div class="container-fluid">
                <div id="conteneur"></div>
            </div>
        </div>
    </div>
    <div class="modal" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <form id="modal-form">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title" style="text-align: center;"></h5>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" id="annuler" data-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary" id="enregistrer">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="{{ asset('exercice2.js') }}"></script>
    <script src="{{ asset('function.js') }}"></script>
    <script>

    </script>
</body>

</html>
