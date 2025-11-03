# ---- Build stage ----
FROM node:20.12-alpine AS builder

# Optionnel mais utile dans CI
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Copie package* d'abord pour profiter du cache
COPY package.json package-lock.json ./
RUN npm ci

# Copie du code
COPY . .

# Toujours utile pour diagnostiquer
RUN node -v && npm -v

# Build Next.js
RUN npm run build

# ---- Runtime stage (serveur Next) ----
FROM node:20.12-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Si tu utilises next start (mode serveur)
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm","run","start"]
