Conduite de Projet : TD4

===================

L'architecture proposé, regroupe les fichiers par type de fichiers, .js, .ejs ect. 
Cette organisation peut facilement entrainer des problèe lors de la recherche de fichier d'un point de vue thématique puisque les différent fichiers nécessaire pour une même page web sont donc répartie dans différent dossier. 
De plus il n'y a aucune différenciation entre les fichiers de tests et les fichiers classique, pour finir il n'y a pas non plus d'emplacement prévu por stocker les résultats des tests.

Voici donc l'organisation que je propose :

* web/ (contient tout les fichiers servant à générer les différentes pages web .ejs, .js et .css)
* test/ (contient les fichiers de tests)
* result/ (contient les fichiers résultats des différents tests)
* runTest.sh (un script lançant tout les tests et les faisant s'enregistrer dans un même fichier récapitulatif stocker dans result/ )

