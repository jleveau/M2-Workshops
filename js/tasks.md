#Tâches pour la modification d'Ateliers

- Compléter la fonction updateWorkshop(name_old, name, description) du fichier `inMemoryWorkshop.js`.
- Ajouter le bouton de modification à la page `index.ejs` qui redirige vers `/workshop/:name`.
- Dans le fichier `index.js`, créer la route `/workshop/:name` qui va récupérer le nom de l'atelier pour le passer à la page `workshop-update` et afficher la page.
- Créer le fichier `workshop-update.ejs` qui reprend le formulaire de création d'atelier avec les champs préremplis. Rediriger l'action du formulaire sur `/update-workshop`.
- Dans le fichier `index.js`, créer la route `/update-workshop` qui va récupérer l'ancier nom d'atelier, le nouveau et la description pour la passer à la fonction   `updateWorkshop`. Redirigier vers la racine.
- Dans le fichier `inMemoryWorkshop.js`, coder la fonction `updateWorkshop` qui vérifier les paramètres et mets à jour les champs.


#Tâche pour la suppression d'Ateliers

- Compléter la fonction removeWorkshopByName(name) du fichier `inMemoryWorkshop.js`.
- Ajouter le bouton de suppression à la page `index.ejs`.
- Compléter la gestion de la redirection lors de la soumission d'une demande de suppresion d'un atelier dans le fichier `index.js`.
  Récupération du nom de l'atelier et appel de la fonction `removeWorkshopByName`.
  
   