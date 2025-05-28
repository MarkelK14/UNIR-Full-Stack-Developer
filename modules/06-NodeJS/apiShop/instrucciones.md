## Recuperar todos los productos

**Method**: GET

**URL**: /api/products

**Headers**: ---

**Body**: ---

**Response**: Un array con todos los productos

## Crear un nuevo producto

**Method**: POST

**URL**: /api/products

**Headers**: ---

**Body**: name, description, price, stock, department, available

**Response**: Un objeto con los datos del nuevo producto

## Actualizar un producto

**Method**: PUT

**URL**: /api/products/<PRODUCTID>

**Headers**: ---

**Body**: name, description, price, stock, department, available

**Response**: El objeto producto después de la actualización

## Borrar un producto

**Method**: DELETE

**URL**: /api/products/<PRODUCTID>

**Headers**: ---

**Body**: ---

**Response**: El objeto borrado

## Recuperar todos los productoss de un departamento

**Method**: GET

**URL**: /api/products/dept/<DEPARTMENT>

**Headers**: ---

**Body**: ---

**Response**: Un array con todos los productos de ese departamento

## Recuperar los productos en un rango de precios

**Method**: GET

**URL**: /api/products/price/min/<MINPRICE>/max/<MAXPRICE>

**Headers**: ---

**Body**: ---

**Response**: Un array con todos los productos cuyo precio está en ese rango

## Recuperar todos los productos activos

- Los productos activos tienen available -> true y stock >=10

**Method**: GET

**URL**: /api/products/actives

**Headers**: ---

**Body**: ---

**Response**: Un array con todos los productos activos

## Registro de usuarios

**Method**: POST

**URL**: /api/users/register

**Headers**: ---

**Body**: username, email, password, role?

**Response**: El nuevo usuario creado

## Login de usuarios

**Method**: POST

**URL**: /api/users/login

**Headers**: ---

**Body**: email, password

**Response**: El token de acceso a la aplicación