FROM node:20.11.1-alpine AS base

FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .

RUN yarn run build

FROM nginx:1.25.3-alpine

WORKDIR /app

RUN apk update && apk upgrade

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/out /app/dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]