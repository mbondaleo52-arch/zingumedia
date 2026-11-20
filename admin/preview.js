/* Aperçu en direct des articles, au style du site Zingũ */
(function () {
  if (!window.CMS) return;
  var h = window.h, createClass = window.createClass;
  CMS.registerPreviewStyle("/admin/preview.css");

  var RUB = { politique: "Politique", societe: "Société", culture: "Culture & Traditions", economie: "Économie",
    sport: "Sport", education: "Éducation", sante: "Santé", faitsdivers: "Faits divers" };

  function fmt(v) {
    if (!v) return "Date non définie";
    var d = new Date(v);
    if (isNaN(d)) return String(v);
    return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) +
      " à " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }

  var ArticlePreview = createClass({
    render: function () {
      var entry = this.props.entry;
      var g = function (k) { return entry.getIn(["data", k]); };
      var img = g("image"), src = "";
      if (img) { try { var a = this.props.getAsset(img); src = a ? String(a.url || a) : img; } catch (e) { src = img; } }
      var titre = g("titre"), chapo = g("chapo"), corps = (g("corps") || "");
      var mots = String(corps).split(/\s+/).filter(Boolean).length;

      return h("div", { className: "z-page" },
        h("div", { className: "z-bar" },
          h("span", { className: "z-logo" }, "ZINGŨ"),
          h("span", { className: "z-sub" }, "MÉDIAS / TV"),
          h("span", { className: "z-badge" }, "Aperçu")
        ),
        h("article", { className: "z-art" },
          src ? h("img", { className: "z-img", src: src, alt: "" })
              : h("div", { className: "z-noimg" }, h("span", null, "Pas de photo"), h("small", null, "Une illustration « " + (RUB[g("rubrique")] || "Rubrique") + " » sera affichée")),
          g("legende") ? h("div", { className: "z-legende" }, g("legende")) : null,
          h("div", { className: "z-txt" },
            h("div", { className: "z-tag" }, (RUB[g("rubrique")] || "Rubrique") + (g("arrondissement") ? " · " + g("arrondissement") : ""),
              g("une") ? h("span", { className: "z-une" }, "★ À la une") : null,
              g("publie") === false ? h("span", { className: "z-cache" }, "Masqué") : null),
            h("h1", { className: titre ? "" : "z-vide" }, titre || "Le titre de votre article"),
            h("div", { className: "z-meta" }, h("b", null, g("auteur") || "Rédaction Zingũ"), " · " + fmt(g("date")) + " · ⏱ " + Math.max(1, Math.round(mots / 200)) + " min de lecture"),
            h("p", { className: "z-chapo" + (chapo ? "" : " z-vide") }, chapo || "Le chapeau : 1 ou 2 phrases qui résument l'article."),
            h("div", { className: "z-corps" }, this.props.widgetFor("corps"))
          )
        )
      );
    }
  });
  CMS.registerPreviewTemplate("articles", ArticlePreview);
})();
