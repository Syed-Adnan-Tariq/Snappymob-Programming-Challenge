FROM node:18

WORKDIR /app

COPY challengeB.js .
COPY random_objects.txt .

RUN mkdir -p /app/output

CMD ["node", "challengeB.js"]

VOLUME ["/app/output"]
