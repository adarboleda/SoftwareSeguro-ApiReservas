# SoftwareSeguro-ApiReservas

API REST para la Gestión de Reservas de Hotel desarrollada en Node.js, Express, Sequelize y MySQL.

## Cómo ejecutar el proyecto

### 1. Ubicarse en el directorio del proyecto

```bash
cd reservas-orm
```

### 2. Instalar dependencias

Asegurarse de tener instalado [Node.js](https://nodejs.org/). Luego, instalar las dependencias mediante npm:

```bash
npm install
```

### 3. Configurar la Base de Datos

El proyecto requiere una base de datos MySQL.

1. **Crear base de datos y tablas:** Puedes ejecutar el script `hotel_reservas.sql` (ubicado dentro de la carpeta `reservas-orm`) en el servidor MySQL.
   - _(Opcional)_ Si necesitas información inicial, puedes ejecutar también `datos_prueba.sql`.
   - _(Nota)_ Sequelize está configurado para sincronizar los modelos de la base de datos automáticamente (`sequelize.sync()`), pero es recomendable asegurar que la DB `hotel_reservas` exista.
2. **Variables de entorno:** Configurar el archivo `.env` en la raíz de la carpeta `reservas-orm`. Debería tener la siguiente estructura:

```env
DB_HOST=localhost
DB_PORT=3096       # Ajustar el puerto según la configuración de MySQL (usualmente 3306)
DB_USER=root       # Usuario de base de datos
DB_PASSWORD=       # Contraseña de base de datos
DB_NAME=hotel_reservas
PORT=3000
```

### 4. Puerto de escucha

El servidor utilizará el puerto definido en la variable `PORT` de tu `.env`. Por defecto, está configurado para escuchar en el puerto **3000**.

### 5. Iniciar el servidor

Para entorno de desarrollo (utiliza `nodemon` para reinicios automáticos):

```bash
npm run dev
```

Para inicio estándar:

```bash
npm start
```

Una vez que la aplicación esté corriendo, se deberá ver en consola el mensaje `Servidor ejecutándose en el puerto 3000`.
Se puede probar la conexión accediendo en el navegador a http://localhost:3000/.
