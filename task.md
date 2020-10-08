Conduite de Projet : TD4

========================

Task 1 : Remove inMemoryWorkshop.js

Implémenter la fonction removeWorkshopByName dans inMemoryWorkshop.js, cette fonction doit supprimer le workshop si il existe et renvoyé un message d'erreur sinon.

Définition Of Done :

* Ouvrir le fichier inMemoryWorkshop.js
* Ajouté la suppression de l'atelier si il existe
* Ajouté l'envoie d'une erreur si il n'existe pas

Task 2 : Remove index.js

Implémenter la requête post de '/remove-workshop' de manière à pouvoir supprimer un workshop ainsi que d'afficher le message d'erreur si il y en à un.

Définition Of Done :

* Ouvrir le fichier inMemoryWorkshop.js
* Ajouté la tentative de requête
* Ajouté la gestion du cas d'erreur

Task 3 : Update inMemoryWorkshop.js

Implémenter la fonction updateWorkshop dans inMemoryWorkshop.js, cette fonction doit mettre à jour un workshop si il existe et renvoyé un message d'erreur sinon.

Définition Of Done :

* Ouvrir le fichier inMemoryWorkshop.js
* Ajouté la modification de l'atelier si il existe
* Ajouté l'envoie d'une erreur si il n'existe pas

Task 4 : Update index.js

Implémenter la requête post de '/update-workshop' de manière à pouvoir supprimer un workshop ainsi que d'afficher le message d'erreur si il y en à un.

Définition Of Done :

* Ouvrir le fichier inMemoryWorkshop.js
* Ajouté la tentative de requête
* Ajouté la gestion du cas d'erreur

Task 5 : Test suppression d'atelier

Créer un fichier .js testant la suppression d'un atelier en utilisant SéléniumWebDriver

Définition Of Done :

* Créer un fichier testDeleteWorkshop.js
* Ajouté un test de suppression d'un atelier

Task 6 : Test de modification d'atelier

Créer un fichier .js testant la suppression d'un atelier en utilisant SéléniumWebDriver

Définition Of Done :

* Créer un fichier testModifyWorkshop.js
* Ajouté un test de modification d'un atelier

Task 7 : Ajout boutton suppression

Ajouté un boutton par workshop dans index.ejs permettant de supprimer le workshop

Définition Of Done :

* Ouvrir index.ejs
* Ajouté un boutton de suppression par workshop
* Faire en sorte que l'activation du boutton ouvre un popup de confirmation
* Faire en sorte que la confirmation fasse appel à la fonction de suppression d'atelier et que l'annulation ne change rien à l'atelier

Task 8 : Ajout boutton modification

Ajouté un boutton par workshop dans index.ejs ouvrant un boite demandant les nouvelles donnée du workshop

Définition Of Done :

* Ouvrir index.ejs
* Ajouté un boutton de modification par workshop
* Faire en sorte que l'activation du boutton fasse appel à une fonction ouvrant un popup avec deux champs pour les nouvelles valeurs et avec un boutton modifier et annuler
* Le popup ne nécessite qu'un seul des deux champs soit remplis pour appliqué des modification (l'utilisateur à le choix de ne changer que le nom, que la description ou les
deux en même temps)
* Faire en sorte que l'activation du boutton modification du popup fasse appel à la fonction changeant les données du workshop et que l'annulation ne change rien à l'atelier