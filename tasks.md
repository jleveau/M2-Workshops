## Liste des tâches

1. Modifier le fichier *index.ejs* pour intégrer un bouton "Modifier" à côté de chaque atelier de la liste des ateliers sur l'index. Le bouton redirigera à l'adresse */update-workshop/:name*.  
DoD : Un bouton est présent à côté de chaque atelier de la liste des ateliers sur l'index. Lorsque je clique sur ce bouton je suis redirigé à l'adresse */update-workshop/:name*

2. Créer le fichier *update-workshop.js* qui implémente la route */upade-workshop/:name* en GET et en POST. Respectivement pour afficher la page de modification de l'atelier généré par le fichier *edit.ejs* et pour appeler la fonction qui modifie l'atelier dans la base de données et qui redirige sur l'index. Créer le fichier *edit.ejs* dans le dossier *view* affichant deux inputs "nom" et "description" pré-remplis par les valeurs de l'atelier qu'on souhaite éditer. La route de la requête post est */update-workshop/:name*. 
DoD : Lorsque j'arrive sur la page de modification d'un atelier je vois que les champs sont pré-remplis et lorsque j'appuie sur "Save" je suis redirigé sur l'index et je peux observer ma modification

3. Modifier le fichier *index.ejs* pour intégrer un bouton "Supprimer" à côté de chaque atelier de la liste des ateliers sur l'index. Le bouton redirigera à l'adresse */delete-workshop/:name*.  
DoD : Un bouton est présent à côté de chaque atelier de la liste des ateliers sur l'index. Lorsque je clique sur ce bouton je suis redirigé à l'adresse */delete-workshop/:name*

4. Créer le fichier *remove-workshop.js* qui implémente la route */delete-workshop/:name* en GET. Cette route supprime l'atelier qui a pour nom *:name* et redirige vers l'index.
DoD : Lorsque je clique sur le bouton "Remove" à côté d'un atelier j'observe que mon navigateur charge pendant un instant car il a fait 2 redirections et je vois ensuite que l'atelier pour lequel j'ai cliqué sur "Remove" a bien été supprimé.