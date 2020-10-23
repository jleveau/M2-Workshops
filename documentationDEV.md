# Structure des fichiers

La structure proposée n'est pas maintenable, car si l'application évolue on se
retrouvera vite avec des dossiers contenant un grand nombre de fichiers.

Ayant travaillé avec Vue.js, la structure de fichiers en *modules* et *vues* me
plaît et me semble bien adaptée à tout projet web.

## `app/`

Dans cette nouvelle structure, toute l'application est stockée dans le dossier
`app/`. On y retrouve les modules nodeJS ainsi que le fichier `package.json` car
on souhaite lancer nos commandes *dans* le dossier de l'application.

### `app/public/`

Ce dossier stocke ce que l'on considère *accessible par l'utilisateur*, c'est
donc pour cela qu'on y trouve le dossier `styles/` contenant les fichiers
`.css`.

### `app/src/`

C'est ici que l'on va stocker notre code. Ce terme est très abstrait, et c'est
voulu, car on y stocke le code général de l'application dans `index.js` ainsi
que dans d'autres sous-dossiers.

#### `app/src/components/`

Vue.js est organisé sous forme de composants, bien que l'on ne l'utilise pas
ici, on remarque vite qu'un type de fichiers existe. Ceux concernant les
ateliers, on les stockent ainsi dans leur propre dossier `workshop/`.

#### `app/src/views/`

Souvent décrit comme *front-end* ou *user-interface*, la partie vue de
l'application a son propre dossier. On retrouve donc les différents éléments de
l'interface (fichiers `.ejs`) dans ce dossier.
