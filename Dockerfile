FROM node:25.6-alpine AS base

WORKDIR /app
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Enable Corepack to use Yarn
RUN rm -rf /usr/local/bin/yarn* \
    && npm install -g corepack \
    && corepack enable \
    && corepack prepare yarn@stable --activate

# Install dependencies only when needed
FROM base AS deps

WORKDIR /app
COPY package.json yarn.lock* .yarnrc.yml ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn run build

# Production image, copy all the files and run nginx
FROM nginx:1.25.3-alpine AS runner

WORKDIR /app
RUN apk update && apk upgrade
COPY --from=builder /app/out /app/dist
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
