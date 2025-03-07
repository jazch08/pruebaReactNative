# PRUEBA TÉCNICA DE REACT NATIVE (1 HORA)

## INSTRUCCIONES

- Tiempo: 60 minutos
- Entrega: Repositorio Git con el código completo
- Objetivo: Crear una aplicación móvil simple que muestre una lista de tareas

## REQUISITOS FUNCIONALES

1. Crear una pantalla principal que muestre las tareas desde JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos)
2. Permitir agregar nuevas tareas mediante un formulario (POST a JSONPlaceholder)
3. Permitir marcar tareas como completadas (PUT/PATCH a JSONPlaceholder)
4. Permitir eliminar tareas (DELETE a JSONPlaceholder)
5. Implementar navegación básica entre pantallas

## ELEMENTOS A IMPLEMENTAR

### 1. Componentes
- `TaskItem`: Para mostrar cada tarea individual
- `TaskList`: Para mostrar la lista completa de tareas
- `TaskForm`: Para crear nuevas tareas
- `Header`: Encabezado de la aplicación

### 2. Navegación
- Implementar React Navigation
- Configurar al menos 2 pantallas (Lista de tareas y Formulario)

### 3. Estado y API
- Gestionar el estado de las tareas usando useState o useReducer
- Implementar llamadas a la API JSONPlaceholder (fetch o axios)
- Gestionar estados de carga y errores
- Implementar contexto para compartir datos entre componentes (opcional)

### 4. Estilos
- Utilizar StyleSheet para definir estilos
- Hacer que la interfaz sea responsive



## CRITERIOS DE EVALUACIÓN

1. **Funcionalidad (40%)**: ¿La aplicación cumple todos los requisitos?
2. **Estructura del código (25%)**: ¿Está bien organizado y sigue buenas prácticas?
3. **Integración API (20%)**: ¿Se manejan correctamente las peticiones, estados de carga y errores?
4. **UI/UX (10%)**: ¿La interfaz es intuitiva y agradable?
5. **Extras (5%)**: Funcionalidades adicionales o mejoras


## CONSEJOS PARA EL DESARROLLO

1. Empieza creando la estructura básica del proyecto
2. Configura un servicio o helper para manejar las llamadas a la API JSONPlaceholder
3. Implementa primero los componentes principales
4. Configura la navegación entre pantallas
5. Agrega la lógica para gestionar las tareas y su integración con la API
6. Añade los estilos y mejoras visuales
7. Si hay tiempo, implementa las funcionalidades extras

## URLs DE JSONPLACEHOLDER
- GET todos: https://jsonplaceholder.typicode.com/todos
- GET todo específico: https://jsonplaceholder.typicode.com/todos/1
- POST nuevo todo: https://jsonplaceholder.typicode.com/todos
- PUT/PATCH actualizar todo: https://jsonplaceholder.typicode.com/todos/1
- DELETE todo: https://jsonplaceholder.typicode.com/todos/1
- GET usuarios: https://jsonplaceholder.typicode.com/users

¡Buena suerte!
