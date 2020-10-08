Conduite de Projet : TD4

===================

L'architecture proposé, regroupe les fichiers par type de fichiers, .js, .ejs ect. 
Cette organisation peut facilement entrainer des problèe lors de la recherche de fichier d'un point de vue thématique puisque les différent fichiers nécessaire pour une même page web sont donc répartie dans différent dossier. 
De plus il n'y a aucune différenciation entre les fichiers de tests et les fichiers classique, pour finir il n'y a pas non plus d'emplacement prévu por stocker les résultats des tests.

Voici donc l'organisation que je propose :

* web/ (contient les dossier des pages web)
* web/index (contient tout les fichiers pour la page d'accueil principale)
* web/usr (contient tout les fichiers pour les pages web de l'utilisateur, page profil d'utilisateur et page de récapitulatif des workshops de l'utilisateur)
* web/wkshp (contient tout les fichiers pour les pages d'actions par rapport au workshop, ajout, suppression et modification)
* test/ (contient les fichiers de tests)
* result/ (contient les fichiers résultats des différents tests)
* runTest.sh (un script lançant tout les tests et les faisant s'enregistrer dans un même fichier récapitulatif stocker dans result/ )

