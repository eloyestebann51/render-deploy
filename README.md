# render-deploy — Pipeline CI/CD completo

## Descripción
Aplicación web estática con pipeline CI/CD completo usando GitHub Actions + Render.

## Flujo del Pipeline
Git Push → GitHub Actions (tests) → Render (deploy automático)

## Hitos implementados

### Hito 1 — Integración Render + Git
- Repositorio conectado a Render mediante OAuth
- Auto Deploy configurado: cada push a main dispara un despliegue
- Primera versión desplegada correctamente

### Hito 2 — Tests automáticos antes del deploy
- Framework: Jest
- Tests unitarios sobre funciones matemáticas (math.js)
- Build Command en Render: npm install && npm test
- Si los tests fallan, Render bloquea el despliegue
- Mini-reto: test roto a propósito, deploy bloqueado, fix, deploy correcto

### Hito 3 — Rollback
- Fallo provocado: dependencia inexistente en package.json
- Render detecta el fallo en Build y no sustituye la versión estable
- Rollback manual ejecutado desde el panel de Render
- Versión anterior restaurada correctamente

### Hito 4 — Pipeline completo
- GitHub Actions ejecuta los tests en cada push
- Render despliega solo si los tests pasan
- Rollback disponible desde el historial de Events en Render

## Estructura del proyecto
render-deploy/
├── index.html
├── math.js
├── math.test.js
├── package.json
├── .github/workflows/ci.yml
└── README.md

## Comandos
npm install
npm test

## Entornos
- Local: desarrollo y tests en WSL
- GitHub: control de versiones y GitHub Actions (CI)
- Render: despliegue automático (CD)

## Estrategia CI/CD
1. El desarrollador hace git push a main
2. GitHub Actions ejecuta los tests automáticamente
3. Si los tests pasan, Render detecta el push y despliega
4. Si el deploy falla, la versión anterior sigue activa
5. Rollback manual disponible desde Render → Events
