// Rassemble les articles (un fichier par article, écrits par l'espace rédaction)
// en un seul fichier data/articles.json lu par le site. Lancé par Netlify à chaque publication.
const fs = require("fs");
const path = require("path");

const dossier = path.join(__dirname, "content", "articles");
const articles = [];

if (fs.existsSync(dossier)) {
  for (const f of fs.readdirSync(dossier)) {
    if (!f.endsWith(".json")) continue;
    try {
      const a = JSON.parse(fs.readFileSync(path.join(dossier, f), "utf8"));
      a.fichier = f.replace(/\.json$/, "");
      articles.push(a);
    } catch (e) {
      console.warn("Article ignoré (fichier illisible) :", f, e.message);
    }
  }
}

articles.sort((a, b) => new Date(b.date) - new Date(a.date));
fs.mkdirSync(path.join(__dirname, "data"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "data", "articles.json"), JSON.stringify({ articles }, null, 1));
console.log(`✔ ${articles.length} article(s) assemblé(s) dans data/articles.json`);
