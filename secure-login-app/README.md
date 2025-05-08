# Secure Login App (Node.js)

Una pequeña aplicación con login protegido y acceso seguro a archivos, lista para desplegar en **Railway**.

## 🚀 Cómo desplegar en Railway

1. Ve a [https://railway.app](https://railway.app) y crea una cuenta.
2. Crea un nuevo proyecto → "Deploy from GitHub" o sube este ZIP como nuevo repo.
3. Añade una variable de entorno en la pestaña "Variables":
   - **Nombre:** `SESSION_SECRET`
   - **Valor:** `una-clave-secreta-dificil-de-adivinar`

4. Railway detectará automáticamente tu aplicación Node.js.
5. Haz clic en "Deploy" y accede a tu URL pública. ¡Listo!

## 👤 Credenciales por defecto

- **Usuario:** `admin`
- **Contraseña:** `1234`

Modifica esto en `server.js` si lo deseas.

## 📁 Estructura protegida

Los archivos dentro de `/protected` solo pueden verse después de iniciar sesión.

---
