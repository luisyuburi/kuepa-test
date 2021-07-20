# kuepa-test

1. Clonar repositorio actual.
2. Dentro de la carpeta kuepa-test, encontrará la siguiente estructura de directorios:
  - backend: Proyecto backend con NodeJS.
  - frontend: Proyecto frontend con ReactJS.
  - docker-compose.yml: Configuración para el contenedor de la base de datos con PostgreSQL.
3. En la carpeta raiz, ejecutar el comando `docker-compose up` para inicializar el contenedor de docker con la base de datos.
4. Entrar en las carpetas de frontend y backend e instalar dependencias con `npm install`.
5. Ejecutar las migraciones para la base de datos, con el comando `npx prisma migrate dev --name init`.
6. Ejecutar seeders con el comando `npx prisma db seed --preview-feature`. Usuarios:
  - usuario: jonh@prisma.io contraseña: 123456 rol: moderador
  - usuario: bob@prisma.io contraseña: 123456 rol: estudiante
  - usuario: alice@prisma.io contraseña: 123456 rol: estudiante
7. Puede visualizar y administrar la información de la base de datos con `npx prisma studio`
8. En cada carpeta del proyecto, (frontend y backend) ejecutar el comando `npm start` para iniciar los servidores.
9. Ingresar al navegador, especificamente a la url `http://localhost:3000/` e iniciar sesion con alguno de los usuarios ya mencionados (paso 6)


 
