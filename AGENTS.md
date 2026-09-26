# Wissem Home — consignes de projet

Wissem Home est le portfolio public de Wissem’s Industries, actuellement en génération produit V3, servi sur `www.wissem.pro`.

## Produit et contenu

- Le site présente le profil, les projets, l’expérience, la formation et le contact, en français et en anglais sur les routes canoniques partagées.
- Utiliser `@wissem-industries/ui` comme Nuxt Layer et conserver les pages et la logique métier du produit dans ce dépôt.
- Le formulaire transmet les demandes à Telegram seulement lorsque les variables serveur sont configurées. Sans ces variables, l’API indique l’indisponibilité et ne stocke pas les messages.
- Plausible est optionnel et configurable. Ne pas ajouter de suivi tiers non demandé.
- `V3` désigne la génération du produit; les tags `v0.x.y` restent les versions SemVer. Ne pas créer un tag `v3.0.0` uniquement pour numéroter la refonte.
- Les branches `archive/v1` et `archive/v2` préservent l’ancien historique. Ne pas réécrire, déplacer ou supprimer leurs refs.

## Stack et livraison

- Nuxt 4, Vue 3, TypeScript, Bun 1.4.x, Biome 2 et `@wissem-industries/ui`. Installer avec `bun install --frozen-lockfile`; utiliser `bun run check` avant une livraison pertinente.
- Le contact utilise les variables `NUXT_TELEGRAM_BOT_TOKEN` et `NUXT_TELEGRAM_CHAT_ID`; Plausible utilise ses variables publiques documentées dans `.env.example`. Ne jamais copier de valeurs réelles dans Git ou les logs.
- Woodpecker vérifie push/PR. Les tags `v*` alignés sur `package.json.version` publient l’image GHCR et déclenchent le webhook Dokploy.
- Garder les images Alpine et les étapes CI Bun selon les consignes communes de [`../Wissem's Industries/AGENTS.md`](../Wissem's%20Industries/AGENTS.md).
- Mettre à jour ce fichier automatiquement pour chaque nouvelle règle durable de Wissem Home; reporter les règles transverses au dépôt central.
