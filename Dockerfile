FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY ./next.config.js ./
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs ./.next/static ./.next/static

USER 1001
ENV PORT 3000
EXPOSE 3000

CMD ["node", "server.js"]
