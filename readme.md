
### Tutoriel pour apprendre le langage TSL 
(Toy Script Language)

**Introduction**

TSL est un langage de script simple conçu pour illustrer les concepts de base de la programmation.

---

### 1. **Configuration de l'Environnement**

Avant de commencer, assurez-vous que vous avez Node.js installé sur votre machine. Vous aurez également besoin de deux fichiers :
- `TSL.js` : l'interpréteur TSL
- Un fichier source `.tsl` contenant votre code TSL

Pour exécuter un fichier TSL, utilisez la ligne de commande :
```bash
node TSL votreFichier.tsl
```

---

### 2. **Déclaration des Variables**

Les variables sont déclarées avec le mot-clé `Var`, suivi du type de la variable, du nom et de la valeur initiale.

**Syntaxe** :
```
// This is comment
# This is comment
Var <Type>:<Nom> = <Valeur>
```

**Types supportés** :
- `Int` : Entier
- `String` : Chaîne de caractères
- `boolean` : Booléen (`True` ou `False`)
- `Object` : Objet JSON

**Exemple** :
```tsl
Var Int:age = 30
Var String:name = 'Alice'
Var boolean:isStudent = True
```

---

### 3. **Affichage des Données**

Utilisez `terminal()` pour afficher des valeurs ou des chaînes de caractères.

**Syntaxe** :
```
terminal(<Message>)
```

**Exemple** :
```tsl
Var String:name = 'Alice'
terminal('Hello, World!')
terminal(name)
```

### 4. **Fonctions**

Les fonctions sont définies avec le mot-clé `func` et appelées avec `call`.

**Définition** :
```tsl
func <Nom>() {
// code de la fonction
}
```

**Appel** :
```tsl
call <Nom>()
```

**Exemple** :
```tsl
func Myfunction() {
    terminal('Hello World' )
}
call Myfunction()
```


