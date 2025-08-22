
# DEVATA Next.js Starter

Каркас фронтенда под платформу DEVATA (App Router, Tailwind). Включает ключевые страницы и компоненты:
- QR-онбординг, запись, курсы/группы,
- кабинеты: партнёр (дерево 5 уровней, выплаты из 26%), лектор/ассистент (пулы 25/30% и 10%), специалист,
- админ-панель подтверждений.

## Быстрый старт
```bash
npm i
npm run dev   # http://localhost:3000
```

## Переменные окружения
Создайте `.env.local` и добавьте:
```
NEXT_PUBLIC_API_BASE=https://api.devata.ru/v1
```

## Развёртывание на GitHub + Vercel (пошагово)
1. Создайте репозиторий на GitHub (например, `devata-web`).
2. Загрузите файлы из этого архива в репозиторий (кнопка **Add file → Upload files**).
3. Зайдите в Vercel → **Add New → Project** → выберите ваш репозиторий.
4. Нажмите **Deploy**. После сборки сайт будет доступен по адресу `https://<project>.vercel.app`.
5. В **Settings → Domains** добавьте `app.devata.ru` и создайте CNAME у вашего регистратора (NIC.RU).
6. Переменные окружения (опционально): `NEXT_PUBLIC_API_BASE=https://api.devata.ru/v1`.

## Безопасность (минимум)
- Включить MFA на бекенде для ролей partner/specialist/lecturer/assistant/admin.
- Все действия выплат/структуры отображать в UI с плашкой «Требуется подтверждение» при необходимости.
- Не хранить токены в localStorage — только httpOnly cookies.
