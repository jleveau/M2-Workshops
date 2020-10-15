Dans l'architecture actuel on voit bien que tous les fichiers .css sont dans le répertoire /css, tous les fichiers .ejs sont dans le répertoire /ejs et que tous les fichiers .js sont dans le répertoire /js.
Egalement, dans /node_modules nous avons tout ce qu'il y a en rapport avec node.
Et à la racine nous les fichiers .json.

Cependant, l'architecture n'est pas correcte suivant notre projet.
On pourrait utiliser une architecture héxagonale avec une couche domaine, une couche application et une couche infrastucture.

La couche application est une couche technique tel qu'elle permet d'adapter les éléments extérieurs de l'application pour ainsi effectuer les appels à notre application.

cf : https://cdiese.fr/larchitecture-hexagonale-en-5-min/