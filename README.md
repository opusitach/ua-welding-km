# UA WELDING-KM s.r.o. — сайт

Сайт-визитка https://welding-km.com на чешском языке. Next.js 16 со статическим экспортом (`output: "export"`):
`npm run build` собирает обычные HTML/CSS/JS в `out/`. На сервере Node не нужен — файлы отдаёт nginx
в одном Docker-контейнере (сжатие, кэш, заголовки безопасности). HTTPS и домен — на внешнем reverse proxy.

Сайт не делает сторонних запросов и не ставит cookies: шрифты лежат локально (`public/fonts/`), аналитики нет, форм нет.

## Структура

| Путь | Что это |
|---|---|
| `src/` | страницы и компоненты (Next.js App Router) |
| `public/fonts/` | шрифты woff2 (Montserrat, Barlow) |
| `scripts/optimize-images.mjs` | генерирует `public/images/*` (WebP + JPG/PNG), OG-картинку и favicon из `design/assets/` (запускается автоматически перед `build`) |
| `design/` | утверждённый макет (референс) и исходные картинки |
| `Dockerfile`, `docker-compose.yml`, `nginx.conf`, `.env.example` | деплой |

## Локальная разработка

Нужен Node.js 20.9+ (LTS).

```bash
npm ci            # или npm i
npm run images    # один раз: сгенерировать public/images и иконки
npm run dev       # http://localhost:3000
npm run lint
```

## Сборка статики

```bash
npm run build     # prebuild (картинки) + next build → out/
```

Папку `out/` можно залить на любой статический хостинг как есть (запасной вариант — OVH через FTP/SFTP:
содержимое `out/` → в корень сайта, обычно `www/`). Учтите, что заголовки безопасности, кэширование,
редиректы и брендированная 404 настроены в `nginx.conf`; на OVH их придётся повторить в `.htaccess`.

## Docker

Один контейнер, поднимается через Compose. Образ собирается в три стадии: `npm ci` → `npm run build` →
`nginxinc/nginx-unprivileged:alpine` с содержимым `out/`. Итоговый образ ~85 МБ, без Node, nginx работает не от root.

На сервере (сеть `edge` создаётся один раз в [infra-websites](https://github.com/opusitach/infra-websites) через `make network`):

```bash
docker compose up -d --build
docker compose ps         # статус должен стать healthy
```

Порт на хост не публикуется. Контейнер отдаёт только HTTP, а TLS-сертификаты, HSTS и редирект
`www.welding-km.com` → `welding-km.com` делает общий Caddy из infra-websites: он ходит в контейнер
по сети `edge` на `welding-km-app:8080`.

Локально, без Caddy, порт публикуется отдельным файлом. Сайт будет на http://localhost:8080, порт на хосте меняется переменной `PORT`:

```bash
docker network create edge   # один раз
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build
```

### Что настроено в nginx.conf

- `trailingSlash: true`: страницы лежат в `/<page>/index.html`; `/privacy` → `/privacy/`.
- Старые адреса макета: `/privacy.html` → `/privacy/`, `/index.html` → `/` (301).
- 404 — брендированная страница `404.html`.
- Кэш: `/_next/static/*` и `/fonts/*` — год, immutable; `/images/*` — 30 дней; HTML и прочее — `max-age=0, must-revalidate`.
- Заголовки: CSP (`default-src 'self'`; `'unsafe-inline'` для скриптов нужен статическому экспорту Next.js),
  X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy, COOP; версия nginx скрыта.
  HSTS выставляется на reverse proxy.
- gzip.
- Логи доступа в stdout, IP-адреса усечены (IPv4 /24, IPv6 /48).
- `/healthz` — для HEALTHCHECK.

Контейнер работает с `read_only`, `no-new-privileges`, `cap_drop: ALL`, ротацией логов 10 МБ × 3.

## Обновление

```bash
git pull && docker compose up -d --build
```

## Логи и диагностика

```bash
docker compose logs -f web          # логи nginx
docker compose ps                   # статус и health
docker compose exec web nginx -t    # проверка конфигурации
```

## Что запросить у заказчика

- Логотип в векторе (SVG/AI/PDF) — текущий PNG низкого разрешения.
- Фото в высоком разрешении (текущее вырезано из визитки).
- Фото реальных работ, если появится блок «Realizace».
