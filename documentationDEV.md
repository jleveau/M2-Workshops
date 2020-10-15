# Question 1
La structure de fichier du projet :
-----------------------------------------------
* css
    
    * bootstrap.min.css
    * index.css
    * workshop.css

* ejs

    * footer.ejs
    * index.ejs
    * head.ejs
    * workshop.ejs

* js

    * index.js
    * inMemoryWorkshop.js

Cette structure n'est pas pertinente, elle ne reflète pas l'architecture du projet, on ne sait pas ce que fait chaque fichier.

Tout d'abord, le fichier index.js fait plusieurs choses différentes, qu'il vaut mieux séparer en plusieurs fichiers :
* le fichier app.js : configure le serveur et est en écoute sur le port 3000
* les fichiers controller : sont liés à une unique page et permettent de réaliser les actions demandées par l'utilisateur. Par exemple le fichier index.js affiche la page d'accueil du site et permet de rediriger l'utilisateur vers la page de création d'un atelier lorsqu'il clique sur le bouton _"Créer un atelier"_.

Ensuite, le fichier inMemoryWorkshop.js permet clairement de stocker les ateliers créés en mémoire, et agit comme une base de données. Il est donc mis dans un dossier _"data"_.

Un dossier _"public"_ est créé et contient les fichiers non sécurisés. Par exemple, les fichiers css.

On crée un dossier _"test"_ qui contiendra les futurs tests pour notre projet.

Enfin, tous les fichiers .ejs sont déplacés dans un dossier _"views"_ qui explique mieux ce que ces fichiers doivent réaliser.