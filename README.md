# Wissem Home

Personal portfolio for [wissem.pro](https://www.wissem.pro), rebuilt for
Wissem's Industries with Nuxt 4 and the shared Wissem UI design system.

## Stack

- Nuxt 4 and Vue 3
- `@wissem-industries/ui` 0.5
- Nuxt I18n with French and English on the same routes
- Plausible Analytics
- Bun for development, tests, builds, and production
- Biome for formatting and linting

## Requirements

- Bun 1.4 or newer
- Access to the `@wissem-industries` GitHub Packages scope

Create a GitHub Packages token with `read:packages` access. For local work, keep
it in the user-level `.npmrc`; the repository only configures the package scope.
CI and container builds use isolated secrets instead.

## Development

```bash
bun install
cp .env.example .env
bun run dev
```

The application is available at `http://localhost:3000` by default.

## Environment

```dotenv
NUXT_PUBLIC_SITE_URL=https://www.wissem.pro
APP_PORT=3000
NUXT_TELEGRAM_BOT_TOKEN=
NUXT_TELEGRAM_CHAT_ID=
NUXT_PUBLIC_PLAUSIBLE_DOMAIN=
NUXT_PUBLIC_PLAUSIBLE_API_HOST=
```

Telegram values are required only for live contact-form delivery. The form
returns a service-unavailable response when they are absent and never stores
submitted messages.

## Quality checks

```bash
bun run lint
bun run test
bun run typecheck
bun run build
bun run check
```

## Production

Build and run the Docker image with:

```bash
docker compose up -d --build
```

The container exposes the Bun-powered Nitro server on port `3000`. Deploy a
separate Dokploy service for preproduction, validate it with dedicated secrets,
then attach `wissem.pro` after acceptance.

Docker builds require BuildKit and the `GITHUB_PACKAGES_TOKEN` environment
variable. Configure `github_packages_token` as a Woodpecker repository secret
and `GITHUB_PACKAGES_TOKEN` as a Dokploy build secret.

Tagged releases publish `ghcr.io/wissem-industries/wissem-home:<version>` and
`ghcr.io/wissem-industries/wissem-home:latest` through Woodpecker CI.

## Content

Localized structured content lives in `shared/content`. Interface language is
selected from `Accept-Language` on the first visit and then persisted in the
`site_locale` cookie. Both languages intentionally share the same canonical
URLs.

The DGFiP logo is used only to identify the internship organization and was
sourced from the CCI Paris Île-de-France institutional website.
