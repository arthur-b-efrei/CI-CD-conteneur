# =============================================================================
# IMAGE DE BASE : nginx:alpine
#
# nginx:alpine (~25 Mo) vs nginx:latest basée sur Debian (~140 Mo) :
# - Beaucoup plus légère : idéale pour servir des fichiers statiques
# - Surface d'attaque réduite : moins de paquets systèmes installés
# - Suffisante pour notre usage : servir index.html + proxy_pass vers le backend
# =============================================================================

FROM nginx:alpine

# Supprime la configuration Nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copie notre configuration personnalisée (proxy_pass inclus)
COPY nginx.conf /etc/nginx/conf.d/vitalsync.conf

# Copie les fichiers statiques du frontend
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
