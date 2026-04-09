
The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

Si vous travaillez sur le formulaire de contact, lancez aussi l'API SMTP dans un second terminal :

```sh
npm run contact-api
```

## Contact form MailPace
Le formulaire de demande de démonstration envoie les données vers `POST /api/contact`, puis l'API contacte MailPace en HTTPS.

Variables par défaut :

- `MAILPACE_API_URL=https://app.mailpace.com/api/v1/send`
- `MAILPACE_SERVER_TOKEN=...`
- `MAILPACE_DEBUG=false`
- `CONTACT_TO=sebastien.charnet@d2l-informatique.com`
- `CONTACT_FROM=sebastien.charnet@silage.fr`
- `SITE_URL=https://www.silao.fr`
- `SITE_NAME=SILAO`
- `CONTACT_API_PORT=8787`
- `CONTACT_MIN_FORM_FILL_MS=2500`
- `CONTACT_MAX_FORM_AGE_MS=43200000`
- `CONTACT_RATE_LIMIT_WINDOW_MS=900000`
- `CONTACT_RATE_LIMIT_MAX_REQUESTS=5`

En développement, Vite proxy `/api/*` vers `http://127.0.0.1:8787`. Vous pouvez changer cette cible avec `CONTACT_API_PROXY_TARGET`.

Le formulaire de démonstration inclut une protection anti-spam sans captcha visible :

- un champ piège caché (`honeypot`)
- un délai minimum avant soumission
- une limitation simple par IP côté API
