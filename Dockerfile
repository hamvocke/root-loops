FROM node:22-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:21-alpine

WORKDIR /app
COPY --from=build /app/package.json package.json
COPY --from=build /app/package-lock.json package-lock.json

RUN npm ci --omit dev

COPY --from=build /app/build build/

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "build"]
