# Wissem Home

<p align="center">
  <strong>Wissem Home V3 — le portfolio personnel de Wissem.</strong><br />
  Présentation, projets et contact sur <a href="https://www.wissem.pro">wissem.pro</a>.
</p>

<p align="center">
  <a href="https://ci.wissem.pro/repos/3"><img alt="Woodpecker CI" src="https://ci.wissem.pro/api/badges/3/status.svg" /></a>
  <a href="https://github.com/Wissem-Industries/Wissem-Home/releases"><img alt="Latest version" src="https://img.shields.io/github/v/tag/Wissem-Industries/Wissem-Home?sort=semver&label=version" /></a>
  <a href="https://ghcr.io/wissem-industries/wissem-home"><img alt="Production image on GHCR" src="https://img.shields.io/badge/GHCR-production-2496ED?logo=docker&logoColor=white" /></a>
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/github/license/Wissem-Industries/Wissem-Home" /></a>
</p>

<p align="center">
  <img alt="Nuxt 4" src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white" />
  <img alt="Vue 3" src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white" />
  <img alt="Bun 1.4" src="https://img.shields.io/badge/Bun-1.4-FBF0DF?logo=bun&logoColor=000" />
  <img alt="Biome" src="https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=white" />
</p>

This is a production site from **Wissem’s Industries**, built with Nuxt 4 and
the shared Wissem UI design system.

`V3` identifies the third generation of the portfolio. Release tags such as
`v0.1.4` identify deployment versions and remain a separate version sequence.

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
variable. Local builds use the BuildKit secret in `docker-compose.yml`.
Woodpecker reads `github_packages_token` for the private UI dependency and GHCR;
the token is passed to BuildKit as a secret, not as a Docker build argument.

Starting with `v0.1.5`, tagged releases publish
`ghcr.io/wissem-industries/home:<version>` and `:latest` through Woodpecker,
trigger the production Dokploy webhook, create a GitHub Release, and record the
deployment under `production`. The former `wissem-home` package remains available
with its old versions for rollback; GitHub does not offer a direct rename control
for this container package. The new `home` image carries OCI title, description,
source, URL and version metadata.

## Content

Localized structured content lives in `shared/content`. Interface language is
selected from `Accept-Language` on the first visit and then persisted in the
`site_locale` cookie. Both languages intentionally share the same canonical
URLs.

The DGFiP logo is used only to identify the internship organization and was
sourced from the CCI Paris Île-de-France institutional website.
