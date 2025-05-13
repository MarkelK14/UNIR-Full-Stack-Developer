# API Rest

- Debemos usar los métodos tal y como están especificados (GET, PORT, PUT/PATCH, DELETE)
- Todas nuestras respuestas deben ir en formato JSON
- Se debe responder SIEMPRE a la petición
- La comunicación entre cliente - servidor se cierra con una petición - respuesta
- Debemos mantener una unidad en las URLs

# API Restaurante

## Recuperar todos los restaurantes

**Method**: GET

**URL**: /api/restaurantes

**Headers**: ---

**Body**: ---

**Response**: Un array con todos los restaurantes

## Recuperar un restaurante a partir de su ID

**Method**: GET

**URL**: /api/restaurantes/<RESTAURANTE_ID>

**Headers**: ---

**Body**: ---

**Response**: Un objeto con los datos del restaurante
**Error Response**: 404 + Mensaje

## Crear un nuevo restaurante

**Method**: POST

**URL**: /api/restaurantes/

**Headers**: ---

**Body**: nombre, direccion, tipo_cocina, telefono, valoracion. capacidad

**Response**: El objeto que representa el nuevo objeto creado
**Error Response**: 404 + Mensaje