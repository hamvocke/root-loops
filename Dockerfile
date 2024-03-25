FROM mcr.microsoft.com/playwright:v1.42.1-focal

COPY . /playwright
WORKDIR /playwright

RUN npm install
RUN npx playwright install --with-deps

CMD npm run test:integration


