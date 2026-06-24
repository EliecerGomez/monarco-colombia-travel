# Guía de despliegue — Monarco Viajes

Sitio **estático** (prerenderizado con TanStack Start) publicado en **ColombiaHosting**
(cPanel / LiteSpeed). El despliegue es **automático**: cada cambio que llega a la rama
`main` reconstruye el sitio y lo sube al hosting mediante **GitHub Actions + FTP**.

```
develop  ──(trabajo diario)──►  Pull Request / merge  ──►  main  ──► GitHub Actions ──FTP──► public_html
```

---

## 1. Ramas

| Rama      | Para qué sirve                                  | ¿Despliega? |
| --------- | ----------------------------------------------- | ----------- |
| `develop` | Desarrollo y pruebas                            | No          |
| `main`    | Producción (lo que ve el público)               | Sí, al instante |

**Regla de oro:** nunca trabajes directo en `main`. Trabaja en `develop`, prueba, y cuando
esté listo lo pasas a `main` (merge), lo que dispara el despliegue.

---

## 2. Configuración por única vez

### 2.1 Secrets en GitHub (credenciales FTP)

El robot de despliegue necesita las credenciales FTP de tu hosting. Se guardan **cifradas**
en GitHub (nunca en el código).

1. En cPanel de ColombiaHosting entra a **Cuentas FTP** y crea (o usa) una cuenta FTP.
   Anota: **servidor/host**, **usuario** y **contraseña**.
   - Host: suele ser `ftp.tudominio.com` o la IP del servidor (aparece en cPanel).
   - El **directorio raíz** de esa cuenta FTP idealmente debe ser `public_html`.
2. En GitHub abre el repo → **Settings → Secrets and variables → Actions → New repository secret**
   y crea estos 4 secrets:

   | Nombre del secret | Valor                                                        |
   | ----------------- | ------------------------------------------------------------ |
   | `FTP_HOST`        | `ftp.tudominio.com` (o la IP del servidor)                   |
   | `FTP_USERNAME`    | el usuario FTP completo (p. ej. `deploy@tudominio.com`)      |
   | `FTP_PASSWORD`    | la contraseña de esa cuenta FTP                              |
   | `FTP_REMOTE_DIR`  | carpeta destino, casi siempre `/public_html/`               |

   > Nota sobre `FTP_REMOTE_DIR`: si creaste la cuenta FTP **apuntando directamente** a
   > `public_html`, entonces el destino es `/`. Si la cuenta FTP es la principal de cPanel,
   > el destino es `/public_html/`. En la duda, prueba primero con `/public_html/`.

### 2.2 FTPS vs FTP

El workflow usa **FTPS** (FTP cifrado) por defecto. Si el primer despliegue falla con un
error de conexión/TLS, edita [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
y cambia `protocol: ftps` por `protocol: ftp`.

---

## 3. Dominio y DNS (ColombiaHosting)

El dominio aún **no apunta** al hosting. Para conectarlo:

1. **Si compraste el dominio Y el hosting en ColombiaHosting:** normalmente ya quedan
   enlazados. Verifica en cPanel → **Dominios** que tu dominio aparezca apuntando a
   `public_html`. Si no, agrégalo como dominio principal o "Addon Domain".
2. **Si el dominio está en otro proveedor (GoDaddy, Namecheap, etc.):** entra al panel de
   ese proveedor y cambia los **nameservers** (DNS) por los de ColombiaHosting
   (los encuentras en el correo de bienvenida o en el dashboard de ColombiaHosting,
   suelen ser tipo `ns1.colombiahosting.com.co` / `ns2.colombiahosting.com.co`).
   - Alternativa sin cambiar nameservers: crear un registro **A** apuntando a la **IP** del
     servidor (la ves en cPanel, sección "Información general"), y un registro **CNAME**
     para `www`.
3. Los cambios de DNS pueden tardar de minutos a 24–48 h en propagarse.
4. Cuando el dominio resuelva, instala el **SSL gratuito (Let's Encrypt / AutoSSL)** desde
   cPanel → **SSL/TLS Status** → *Run AutoSSL*. El `.htaccess` ya fuerza HTTPS.

> Si quieres fijar www o sin-www como versión canónica, descomenta el bloque
> correspondiente en [`public/.htaccess`](public/.htaccess).

---

## 4. Flujo de trabajo diario

```bash
# 1. Sitúate en develop y actualiza
git checkout develop
git pull

# 2. Trabaja, prueba en local
bun install          # (o npm install) la primera vez
bun run dev          # (o npm run dev)  -> http://localhost:3000

# 3. Compila para verificar que todo construye bien (opcional pero recomendado)
bun run build        # genera dist/client/ (salida estática)

# 4. Guarda los cambios
git add -A
git commit -m "describe el cambio"
git push origin develop

# 5. Cuando quieras publicar a producción: pasa develop -> main
git checkout main
git merge develop
git push origin main      # 👈 esto dispara el despliegue automático
```

Puedes seguir el progreso del despliegue en GitHub → pestaña **Actions**.
También puedes lanzar un despliegue manual ahí con **Run workflow** (workflow_dispatch).

---

## 5. ¿Cómo se construye el sitio?

- `bun run build` genera un sitio **100 % estático** en `dist/client/`:
  - `index.html` ya viene **prerenderizado** con el contenido y los meta/OG tags
    (bueno para SEO y para las vistas previas al compartir en WhatsApp/redes).
  - `/assets/...` imágenes, CSS y JS con hash en el nombre (caché eterna segura).
  - `.htaccess` con HTTPS forzado, fallback de rutas y reglas de caché.
- No se requiere Node.js en el servidor: es hosting estático puro.
- Todas las imágenes están **auto-hospedadas** (ya no dependen del CDN de Lovable).

---

## 6. Alternativa: despliegue por Git de cPanel (no recomendado aquí)

cPanel tiene "Git Version Control", pero en hosting compartido **no puede compilar** un
proyecto Vite (no hay Node garantizado) y **no despliega solo al hacer push** (requiere
hacer clic en "Deploy" o configurar webhooks). Por eso usamos GitHub Actions + FTP, que sí
cumple el objetivo de *"push a main → producción se actualiza sola"*. Si más adelante tu
plan tiene Node y SSH, se puede migrar a build-on-server.

---

## 7. Despliegue manual de emergencia (sin GitHub)

Si necesitas subir a mano:

```bash
bun run build
```

Luego, en cPanel → **Administrador de archivos** → `public_html`, sube **el contenido de
`dist/client/`** (no la carpeta, su contenido), incluyendo el archivo oculto `.htaccess`
(activa "Mostrar archivos ocultos" en el Administrador de archivos).
