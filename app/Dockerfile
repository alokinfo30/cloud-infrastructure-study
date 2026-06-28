# Change FROM line to use a simpler base image
FROM node:18-slim

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Use npm install instead of npm ci (more forgiving)
RUN npm install --omit=dev

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]