# =============================================================================
# MULTI-STAGE BUILD - Pourquoi cette approche ?
#
# SECURITE : Le stage de build contient les devDependencies (jest, supertest,
# nodemon) et les outils de test qui ne doivent JAMAIS atterrir en production.
# Moins de paquets = moins de surface d'attaque et moins de vulnerabilites CVE.
#
# TAILLE : L'image finale ne contient que le strict necessaire (code + deps de
# prod). On passe typiquement de ~500 Mo (image complete) a ~80 Mo (alpine prod).
# Moins de donnees a transferer, demarrage plus rapide en CI/CD et en prod.
#
# IMAGE DE BASE node:20-alpine vs node:20 :
# - node:20 est basee sur Debian (~350 Mo) avec des outils systeme inutiles en prod.
# - node:20-alpine est basee sur Alpine Linux (~50 Mo), minimaliste et securisee,
#   suffisante pour faire tourner une API Express.
# =============================================================================

# ---- Stage 1 : BUILD & TEST ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm test

# ---- Stage 2 : PRODUCTION ----
FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/server.js ./

EXPOSE 3000

CMD ["node", "server.js"]
