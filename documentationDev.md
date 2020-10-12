Pour ameliorer l'architecture de l'application, nous l'avons divisé en backend et en frontend:
    -index.js: est le point de depart de l'application (nottement le lancement du serveur node)
    -forntend: le côté frontend de l'application contient le code css et le code html
    -backend:
        -models: contiendra les moodèles de l'application (nottamment les ojbets qui devront être enregistrés dans une base de données).
        -controllers: contient la logique utilisé au niveau des routes de l'application
        -routes: contiendra toutes les routes de l'application

PS: Cette architecture n'a vraiment de l'importance que dans le mesure où l'application devrait évolué. Actuellement les certains repertoires ne contiennent qu'un fichier comme le repertoire models mais cela pourrait evolué en ajoutant par exemple des models pour les enseignants, des laboratoires ...