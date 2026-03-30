# Déploiement OVH FTP-only

## Ce qui est prêt

- `npm run build:ovh` génère un paquet statique dans `dist-ovh`.
- Le site garde ses URLs propres (`/offres`, `/accompagnement`, etc.).
- Le formulaire envoie vers `/api/contact`, réécrit côté Apache vers `api/contact.php`.

## Préparation locale

1. Lancez `npm run build:ovh`.
2. Ouvrez `dist-ovh/api/contact-config.php`.
3. Renseignez au minimum :
   - `mailpace_server_token`
   - `contact_to`
   - `contact_from`
   - ajustez si besoin les seuils anti-spam (`min_form_fill_ms`, `rate_limit_*`)
4. `dry_run` est activé par défaut dans le package généré : gardez-le à `true` pour le premier test.

## Bascule sûre sur OVH

1. Sauvegardez le contenu actuel de `/www`.
2. Créez un dossier de préparation, par exemple `/www_next`.
3. Envoyez le contenu de `dist-ovh` dans `/www_next`.
4. Vérifiez dans `/www_next/api` que `contact.php`, `contact-config.php` et `.htaccess` sont présents.
5. Quand tout est prêt, renommez :
   - `/www` en `/www_backup_YYYYMMDD`
   - `/www_next` en `/www`

Cette méthode réduit le temps d'indisponibilité au strict minimum.

## Vérifications après mise en ligne

- `https://www.silao.fr/`
- `https://www.silao.fr/offres`
- `https://www.silao.fr/secteur/handicap`
- `https://www.silao.fr/plan-du-site`
- `https://www.silao.fr/api/contact`

Résultat attendu pour `GET /api/contact` : réponse JSON `405 Method not allowed`.

## Test du formulaire

1. Mettez `dry_run` à `true`.
2. Envoyez une demande depuis la modale de démonstration.
3. Vérifiez que le message de succès apparaît.
4. Remettez `dry_run` à `false`.
5. Refaites un test réel et confirmez la réception de l'email.

Si le test réel échoue, passez temporairement `debug` à `true` dans `api/contact-config.php` pour faire remonter la cause technique exacte dans la réponse JSON.

## Point d'attention

- N'envoyez pas le dossier `dist/server` sur OVH : il n'est utile que pour le pré-rendu local.
