# CarambarNext

Une application web moderne pour afficher des blagues aléatoires dans l'esprit des célèbres papiers Carambar !

## Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Pour un code typé et robuste
- **MySQL** - Base de données pour stocker les blagues
- **CSS Modules** - Styles modulaires et encapsulés

## Installation

1. **Cloner le projet**

   ```bash
   git clone https://github.com/Salvak613/CarambarNext.git
   cd CarambarNext
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configuration de la base de données**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement (avec Turbopack)
- `npm run build` - Build de production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Vérification du code avec ESLint
- `npm run db:migrate` - Migration de la base de données
- `npm run db:seed` - Alimentation de la base avec des données de test

## Fonctionnalités

- Affichage de blagues aléatoires
- Animation fluide d'apparition des réponses
- Interface responsive et moderne
- Design inspiré de l'univers Carambar
- Navigation simple : "Voir la réponse" → "Nouvelle blague"

## Démarrage rapide

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
src/
├── app/              # Pages et routes de l'application
├── ui/               # Composants d'interface
├── lib/              # Logique métier et utilitaires
├── model/            # Modèles de données
├── service/          # Services et API calls
└── data/             # Données statiques et constantes
```

## License

Ce projet est sous aucune license parceque bon, soyons honnête, c'est pas un vrai projet.

---

_Fait avec ❤️ pour perpétuer la tradition des blagues Carambar !_
