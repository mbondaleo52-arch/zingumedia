# Zingũ Médias — Site + Espace rédaction

## Ce que contient ce dossier

| Élément | Rôle |
|---|---|
| `index.html` | Le site public |
| `admin/` | L'espace rédaction (back-office) → `votre-site.com/admin` |
| `data/` | Les contenus (articles, vidéos, dépêches, agenda, paramètres) — modifiés par le back-office |
| `images/` | Le logo + les photos envoyées par les journalistes |

> ⚠️ Les articles, vidéos et événements fournis sont des **exemples**. Supprimez-les depuis l'espace rédaction avant le lancement.

---

## Installation (une seule fois, ≈ 20 minutes)

Le back-office enregistre chaque publication dans un dépôt GitHub ; Netlify met ensuite le site à jour automatiquement (≈ 1 minute).

### Étape 1 — Mettre les fichiers sur GitHub
1. Créez un compte gratuit sur **github.com**.
2. Cliquez sur **+ → New repository**, nommez-le `zingumedia`, laissez **Public** ou choisissez **Private**, puis **Create repository**.
3. Cliquez sur **uploading an existing file**.
4. Glissez **tout le contenu** du dossier `zingumedia` (index.html, admin, data, images, LISEZMOI.md) — pas le dossier lui-même.
5. Cliquez sur **Commit changes**.

### Étape 2 — Relier GitHub à Netlify
1. Sur **app.netlify.com** : **Add new project → Import an existing project → GitHub**.
2. Autorisez Netlify, choisissez le dépôt `zingumedia`.
3. Laissez **Build command** vide et mettez **Publish directory** : `.` (un point).
4. Cliquez sur **Deploy**.
5. (Si vous aviez déjà un site créé par glisser-déposer, rattachez plutôt votre domaine à ce nouveau projet dans **Domain management**.)

### Étape 3 — Activer la connexion des journalistes
Dans votre projet Netlify, menu **Project configuration → Identity** :
1. Cliquez sur **Enable Identity**.
2. **Registration** → choisissez **Invite only** (très important : personne ne peut s'inscrire seul).
3. Plus bas, **Services → Git Gateway** → **Enable Git Gateway**.

### Étape 4 — Inviter l'équipe
1. Onglet **Identity** du projet → **Invite users**.
2. Saisissez l'e-mail de chaque journaliste.
3. Chacun reçoit un e-mail, clique sur le lien, choisit son mot de passe et arrive dans l'espace rédaction.

---

## Utilisation au quotidien

Allez sur **votre-site.com/admin** et connectez-vous.

- **📰 Articles** → *Ajouter article* : titre, rubrique, arrondissement, date, chapeau, photo, texte. Cochez **À LA UNE** pour l'article principal. Cliquez sur **Publier**.
- **🎬 Zingũ TV** : collez le lien YouTube, la miniature s'affiche toute seule.
- **⚡ Dernière minute** : les phrases du bandeau défilant.
- **📅 Agenda** : les événements passés disparaissent automatiquement.
- **⚙️ Paramètres** : liens Facebook / YouTube / TikTok, numéro WhatsApp, téléphone, e-mail.

Pour retirer un article sans le supprimer : décochez **Publié**.

**Messages des lecteurs** (« Signaler une info » et lettre d'infos) : Netlify → onglet **Forms**. Pour les recevoir par e-mail : **Forms → Form notifications → Add notification → Email notification**.

---

## Bon à savoir
- Photos : envoyez des images de moins de 1 Mo (format paysage) pour un site rapide sur mobile.
- Netlify ne fait plus évoluer le service *Git Gateway*, mais il fonctionne toujours. S'il cessait un jour, le back-office peut passer sur **Decap Turbo** ou **DecapBridge** en changeant seulement le fichier `admin/config.yml`.
