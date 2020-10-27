# Tâches

## #1

> Créer une page `update-workshop` (définie par le fichier `app/src/views/update-workshop.ejs`).

**DoD :** Un nouveau fichier nommé `update-workshop.ejs` est présent dans le dossier `app/src/views/`. Ce fichier contient la définition minimum d'une page `ejs` (suivant le modèle de `workspace.ejs`). Cette page est accessible lorsque le serveur tourne.

## #2

> Ajouter à la page `update-workshop`, un formulaire avec pour action `/update-workshop/<%= workshop.name %>` et méthode `post`.

**DoD :** Un formulaire avec pour action `/update-workshop/<%= workshop.name %>` et pour méthode `post` est présent dans la page `update-workshop`.

## #3

> Ajouter à la page `update-workshop`, dans son formulaire, un champ "Name" ayant un label du même nom, qui est pré-remplit avec l'attribut `name` de l'atelier à mettre à jour.

**DoD :** Un nouveau champ nommé "Name" est présent dans le formulaire de la page `update-workshop`.

## #4

> Ajouter à la page `update-workshop`, dans son formulaire, un champ "Description" ayant un label du même nom, qui est pré-remplit avec l'attribut `description` de l'atelier à mettre à jour.

**DoD :** Un nouveau champ nommé "Description" est présent dans le formulaire de la page `update-workshop`.

## #5

> Ajouter à la page `update-workshop`, dans son formulaire, un bouton "Save" ayant pour type `submit`, ce qui permet d'envoyer la requête de mise à jour ainsi que de rediriger vers la page d'accueil.

**DoD :** Un nouveau bouton nommé "Save" est présent dans le formulaire de la page `update-workshop`. Une fois cliqué il envoie le formulaire, ce qui applique les éventuelles modifications à l'atelier et redirige vers la page d'accueil.

## #6

> Ajouter à la page `update-workshop`, dans son formulaire, un lien avec comme label "Cancel" permettant de retourner sur la page d'accueil.

**DoD :** Un nouveau bouton nommé "Cancel" est présent dans le formulaire de la page `update-workshop`. Une fois cliqué il redirige vers la page d'accueil.

## #7

> Pour chaque atelier de la liste, ajouter un bouton "Update" amenant sur la page `update-workshop`.

**DoD :** Chaque atelier de la liste (dans la page d'accueil), doit avoir un bouton "Update" redirigeant sur la page `update-workshop`.
