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

**Headers**: { Authorization: TOKEN }

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

## Actualización completa de un restaurante

**Method**: PUT

**URL**: /api/restaurantes/<RESTAURANTE_ID>

**Headers**: ---

**Body**: nombre, direccion, tipo_cocina, telefono, valoracion. capacidad

**Response**: El objeto que con los datos del restaurante actualizados

## Borrado de un restaurante

**Method**: DELETE

**URL**: /api/restaurantes/<RESTAURANTE_ID>

**Headers**: ---

**Body**: ---

**Response**: El objeto restaurante borrado

## Recuperar todos los restaurantes con sus mesas

**Method**: GET

**URL**: /api/restaurantes/

**Headers**: ---

**Body**: ---

**Response**:
```json
[
    {
        "id": 1,
        "nombre": "Casa Pepe",
        "mesas": [
            {
                "capacidad": 12,
                "numero": 1
            }
        ]
    },
    {
        "id": 2,
        "nombre": "Casa Luis",
        "mesas": [
            {
                "capacidad": 12,
                "numero": 1
            }
        ]
    }
]
```

## Registrar usuarios

**Method**: POST

**URL**: /api/usuarios/registro

**Headers**: ---

**Body**: username, email, password

**Response**: Los datos del nuevo usuario creado

## Login usuarios

**Method**: POST

**URL**: /api/usuarios/login

**Headers**: ---

**Body**: email, password

**Response**: Login correcto

## Recuperar el perfil de usuario

**Method**: GET

**URL**: /api/usuarios/perfil

**Headers**: { Authorization: TOKEN }

**Body**: ---

**Response**: Un objeto con los datos del usuario logueado