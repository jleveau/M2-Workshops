# Backlog
* US1: En tant qu'utilisateur, j'aimerais modifier un workshop pour le mettre à jour
* US2: En tant qu'utilisateur, j'aimerais supprimer un workshop

# Liste des listes

| ID | US | Description | Definition Of Done | Status | Type |
|----|----|----|----|----|-----|
| 1 | * | Refactoring | Implémenter l'architecture qui se trouve dans documentationDEV | Done | * |
| 2 | 1 | Ajout du bouton de modification | Ajout du bouton dans index.esj qui redirigera le client vers workshop-update.ejs. Chaque workflow devra avoir son propre bouton | En Cours | Fonctionnalité |
| 3 | 1 | Implémenter la methode get de la modification | Lorsque le client cliquera sur le bouton de modification, Une requette get sera envoyée avec comme paramètre le nom du workshop et le client sera rediriger vers workshop-update  | En Cours | Fonctionnalité |
| 4 | 1 | Création du fichier workshop-update.ejs | La page contiendra un formulaire composé de champs nom et description qui seront pré-remplis en se servant du workshop passé en paramètre depuis la méthode get de workshop-update. La page contiendra également un bouton de soumission et d'annulation. | En Cours | Fonctionnalité |
| 5 | 1 | Implémenter la methode post de la modification | Lorsque le client cliquera sur le bouton de soumission sur la page de modification, Une requette post sera envoyée et le client sera rediriger vers la page d'accueil. Implementer la methode post qui recupère le contenu des champs puis les persistes dans la bdd. Implementer la methode updateWorkshop dans inMemoryworkshop:(params:(oldName, newName, descr) return:(error, void))  | En Cours | Fonctionnalité |
| 6 | 2 | Ajout du bouton de modification | Ajout d'un champ de formulaire caché qui aura comme valeur le nom du workshop et un bouton de soumission dans index.esj. Chaque workflow devra avoir son propre bouton. L'action de cliquer aura pour effet d'envoyer une requette post via la route /workshop-remove. | En Cours | Fonctionnalité |
| 7 | 2 | Implémenter la methode post suppression | Lorsque le client cliquera sur le bouton de suppression, Une requette post sera envoyée et le client sera rediriger vers la page d'accueil actualisée. Implementer la methode post qui recupère le contenu du champ puis envoie la requette de suppression dans la bdd. Implementer la methode removeWorkshopByName dans inMemoryworkshop:(params:(name) return:(workshops list)) | En Cours | Fonctionnalité |