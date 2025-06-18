# STUDENTS

## Recuperar todos los estudiantes

Method: GET
Url: /api/students

Response: Array de estudiantes

¿Qué puedo probar?
- Status 200
- Respuesta sea en formato JSON
- Respuesta retorne un array de Students

## Crear un nuevo estudiante

Method: POST
Url: /api/students
Body: name, email, address, phone

Respuesta: El nuevo documento creado

¿Qué puedo probar?
- Que la url existe y funciona
    - Status 200
    - Content-Type application/json
- La respuesta debe tener el campo _id
- La respuesta debe incluir todos los valores enviados en el body

## Actualización de un estudiante

Method: PUT
Url: /api/students/<STUDENT_ID>
Body: name, email, address, phone

Response: El estudiannte con los datos actualizados

¿Qué puedo probar?

- Que la URL funcione
- Que la respuesta incluye el estudiante actualizado

## Borrado de estudiante

Method: DELETE
Url: /api/students/<STUDENT_ID>

Response: El estudiante borrado

¿Qué pruebo?

- Que la URL funcione
- Que el estudiante ya no se encuentre en la BD
