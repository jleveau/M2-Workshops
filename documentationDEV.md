
## Documentation de l'architecture
<pre>
├── app.js  
├── package.json  
├── README.md 
├── documentationDEV.md  
├── controllers  
│   ├── index.js
│   ├── create-workshop.js
│   ├── remove-workshop.js
│   ├── update-workshop.js
│   └── get-specific-workshop.js
│
├── data  
│   └── inMemoryWorkshop.js  
│
├── public  
│   ├── css  
│   │   ├── bootstrap.min.css  
│   │   ├── index.css  
│   │   └── workshop.css  
│   └── js  
│       │ ...  
│
├── view  
│   ├── footer.ejs  
│   ├── head.ejs  
│   ├── index.ejs  
│   └── workshop.ejs  
│
├── script 
│   │ ...  
│
├── tests  
│   │ ...  
│
└── node_modules/  
    │ ...  
</pre>
* Racine du projet : les fichiers auxquels on veut directement avoir accès
    * *app.js* : lance le serveur en local et associe des routes à des comportements décrits dans d'autre fichiers
    * *package.json* : fichier de configuration
    * *README.md* et *documentationDEV.md* : documentation
* controller : dossier contenant un comportement de route par fichier
    * *index.js* : affiche tous les ateliers de la base de données sur la route */* 
    * *create-workshop.js* : affiche une page contenant un formulaire permettant de créer un atelier sur la route */workshop*
    * *remove-workshop* : permet de supprimer un atelier sur la route */remove-workshop*
    * *remove-workshop* : permet de modifier un atelier sur la route */update-workshop*
    * *get-specific-workshop.js* : permet d'accéder aux informations d'un atelier en particulier sur la route */workshop/:name*, name étant le nom de l'atelier
* data : dossier contenant la base de données
* public : dossier contenant les fichiers qui sont accessibles depuis le navigateur
* view : dossier contenant les fichiers template utilités pour la génération des pages HTML
* script : dossier contenant les scripts indépendants
* test : dossier contenant les fichiers liés aux tests 
* node_modules : dossier contenant les modules importés.