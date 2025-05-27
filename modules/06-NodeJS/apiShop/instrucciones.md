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