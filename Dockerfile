# syntax=docker/dockerfile:1.7
FROM oven/bun:1.4.2-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lock ./
COPY .npmrc ./
RUN --mount=type=secret,id=github_packages_token,required=true \
    npm config set //npm.pkg.github.com/:_authToken "$(cat /run/secrets/github_packages_token)" && \
    bun install --frozen-lockfile && \
    rm -f /root/.npmrc

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1.4.2-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

COPY --from=build --chown=bun:bun /app/.output ./.output

USER bun
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
