# Semana 13 dia 32 clase 01

- **HTTP Verbs, Callbacks**

  - Aplica promesas y CORS para representar la terminación o el fracaso de una operación asíncrona.

## Indice

1. [HTTP Verbs](#http-verbs)
2. [Método GET en HTTP](#método-get-en-http)
3. [Método HEAD en HTTP](#método-head-en-http)
4. [Método POST en HTTP](#método-post-en-http)
5. [Método PUT en HTTP](#método-put-en-http)
6. [Método PATCH en HTTP](#método-patch-en-http)
7. [Método DELETE en HTTP](#método-delete-en-http)
8. [Qué es un callback](#callbacks)
9. [Callback Hell](#callback-hell)
10. [Qué son las promesas](#promises-que-son)
11. [Manejando las promesas](#manejando-las-promesas)
12. [Encadenamiento de promesas](#encadenamiento-de-promesa)
13. [Otros métodos de promesas](#otros-métodos-de-promesas)
14. [Cómo funciona el CORS](#cómo-funciona-el-cors)
15. [Estructura de la CORS header](#estructura-de-la-cors-header)

## HTTP Verbs

Los verbos *HTTP*, también conocidos como métodos *HTTP*, se utilizan para indicar la acción deseada que se debe realizar sobre un recurso en la comunicación web. Los verbos más comunes incluyen:

- *GET*: Se utiliza para solicitar datos de un recurso específico.
- *POST*: Se utiliza para enviar datos a un servidor para crear un nuevo recurso.
- *PUT*: Se utiliza para actualizar un recurso existente.
- *DELETE*: Se utiliza para eliminar un recurso existente.
- *HEAD*: Se utiliza para solicitar información sobre un recurso sin descargar su contenido.
- *OPTIONS*: Se utiliza para solicitar información sobre los métodos admitidos por un recurso.
- *CONNECT*: Se utiliza para establecer una conexión a un servidor proxy.
- *PATCH*: Se utiliza para aplicar cambios parciales a un recurso existente.
- *TRACE*: Se utiliza para realizar un seguimiento de la ruta que toma una solicitud HTTP.

### Características de los Verbos HTTP

- **Seguridad:**

  - Los métodos seguros (GET, HEAD, OPTIONS, TRACE) están destinados a ser de solo lectura y no deberían cambiar el estado del servidor.
  - Los métodos inseguros (POST, PUT, DELETE, PATCH, CONNECT) pueden modificar el estado del servidor.

- **Idempotencia:**

  - Los métodos idempotentes (GET, HEAD, PUT, DELETE, OPTIONS, TRACE) se pueden llamar múltiples veces sin diferentes resultados.
  - Los métodos no idempotentes (POST, PATCH) pueden resultar en diferentes resultados con llamadas repetidas.

- **Cacheabilidad:**

  - Los métodos cacheables (GET, HEAD, POST) permiten que las respuestas se almacenen para su reutilización futura.
  - Los métodos no cacheables (PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH) no permiten el almacenamiento en caché.

### Casos de Uso Comunes

- **GET**: Se utiliza para recuperar recursos como páginas HTML, imágenes o datos de APIs.
- **POST**: Comúnmente utilizado para enviar formularios, cargar archivos o crear nuevos registros en una base de datos.
- **PUT**: Se utiliza para actualizar recursos existentes o crear nuevos recursos en una URL específica.
- **DELETE**: Se utiliza para eliminar recursos, como eliminar una cuenta de usuario o una publicación de blog.
- **PATCH**: Se utiliza para realizar actualizaciones parciales a un recurso, como cambiar un solo campo en un registro de base de datos.
- **HEAD**: Se utiliza para verificar si un recurso existe sin descargar su contenido.

>[!NOTE]
>
>Los verbos HTTP son fundamentales para la comunicación web y su uso adecuado es crucial para garantizar la seguridad, la idempotencia y la cacheabilidad de las solicitudes y respuestas HTTP.

[☝️](#semana-13-dia-32-clase-01)

## Método GET en HTTP

El método *GET* es uno de los verbos más utilizados en el protocolo HTTP. Su función principal es solicitar datos de un servidor. Aquí hay una descripción más detallada sobre el método *GET*:

### Características del Método GET

- 1)**Recuperación de Datos:**

  - Se utiliza principalmente para recuperar información de un recurso específico en el servidor, como una página web, una imagen, un documento o datos de una API.

- 2)**Idempotente:**

  - Las solicitudes GET son idempotentes, lo que significa que realizar la misma solicitud varias veces no debería cambiar el estado del servidor. Por ejemplo, si solicitas una página web varias veces, el contenido que recibas debería ser el mismo.

- 3)**Seguro:**

  - El método GET se considera seguro porque no debería modificar el estado del servidor. Su propósito es solo obtener información.

- 4)**Parámetros en la URL:**

  - Los datos pueden ser enviados al servidor como parámetros en la URL. Esto se hace comúnmente utilizando una cadena de consulta (query string), que se añade al final de la URL. Por ejemplo:

  ```bash
  GET /productos?categoria=ropa&orden=precio
  ```

- 5)**Limitaciones de Tamaño:**

  - La longitud de la URL (y por ende los parámetros) está limitada por la mayoría de los navegadores y servidores (generalmente alrededor de 2000 caracteres). Esto significa que no es adecuado para enviar grandes cantidades de datos.

- 6)**Cacheabilidad:**

  - Las respuestas a las solicitudes GET son generalmente cacheables, lo que significa que los navegadores pueden almacenar en caché la respuesta para mejorar el rendimiento en solicitudes futuras.

- 7)**Uso en APIs:**

  - En el contexto de las APIs RESTful, el método GET se utiliza para obtener recursos. Por ejemplo, al interactuar con una API para obtener información sobre usuarios, productos, o cualquier otro recurso.

### Ejemplo de Uso

Supongamos que tienes una API que proporciona información sobre libros. Una solicitud GET para obtener todos los libros podría verse así:

```bash
GET /api/libros
```

Y si deseas obtener información sobre un libro específico con el ID 123, la solicitud podría ser:

```bash
GET /api/libros/123
```

### Respuesta del Servidor

Cuando el servidor recibe una solicitud GET, devuelve una respuesta que generalmente incluye:

- **Código de Estado HTTP**: Indica el resultado de la solicitud (por ejemplo, 200 OK para una solicitud exitosa, 404 Not Found si el recurso no existe).
- **Encabezados**: Información adicional sobre la respuesta, como el tipo de contenido (Content-Type) y la fecha de la respuesta.
- **Cuerpo**: El contenido solicitado, que puede ser en formato HTML, JSON, XML, etc.

>[!NOTE]
>
>El método GET es fundamental para la recuperación de datos en la web y en las APIs. Su uso adecuado permite a los desarrolladores construir aplicaciones eficientes y efectivas que interactúan con servidores para obtener información.

[☝️](#semana-13-dia-32-clase-01)

## Método HEAD en HTTP

El método *HEAD* es un verbo HTTP que se utiliza para solicitar los encabezados de una respuesta sin el cuerpo del mensaje. Es similar al método *GET*, pero a diferencia de este último, no devuelve el contenido del recurso, solo la información sobre él.

### Características del Método HEAD

- 1)**Recuperación de Encabezados:**

  - La principal función del método HEAD es obtener los encabezados HTTP de una respuesta. Esto incluye información como el tipo de contenido, la longitud del contenido, la fecha de la última modificación, y otros metadatos relevantes.

- 2)**Idempotente:**

  - Al igual que el método GET, HEAD es idempotente. Esto significa que realizar la misma solicitud varias veces no debería tener efectos secundarios en el servidor.

- 3)**Seguro**

  - El método HEAD se considera seguro, ya que no modifica el estado del recurso en el servidor.

- 4)**Uso Eficiente de Recursos:**

  - Al no devolver el cuerpo del mensaje, el método HEAD es útil para comprobar la existencia de un recurso o para obtener información sobre él sin consumir ancho de banda innecesario.

- 5)**Verificación de Recursos:**

  - Es común utilizar HEAD para verificar si un recurso ha cambiado desde la última vez que se accedió a él. Esto es especialmente útil en aplicaciones que implementan caché, ya que permite a los clientes determinar si deben volver a solicitar el recurso completo.

### Ejemplo de Uso HEAD

Supongamos que deseas obtener información sobre una imagen en un servidor. Una solicitud HEAD podría verse así:

```bash
HEAD /images/ejemplo.jpg
```

### Respuesta del Servidor HEAD

Cuando el servidor recibe una solicitud HEAD, devuelve una respuesta que incluye:

- **Código de Estado HTTP**: Indica el resultado de la solicitud (por ejemplo, 200 OK para una solicitud exitosa, 404 Not Found si el recurso no existe).

- **Encabezados**: La respuesta incluirá todos los encabezados que normalmente se devolverían con una solicitud GET, pero sin el cuerpo del contenido. Ejemplos de encabezados que podrías recibir incluyen:

  - **Content-Type**: El tipo de contenido del recurso (por ejemplo, `image/jpeg` para una imagen JPEG).
  - **Content-Length**: La longitud del contenido en bytes.
  - **Last-Modified**: La fecha y hora en que se modificó el recurso por última vez.
  - **ETag**: Un identificador único para el recurso, que puede ser utilizado para determinar si el recurso ha cambiado desde la última vez que se accedió a él.

### Ventajas del Método HEAD

- **Eficiencia en Ancho de Banda**: Al no transferir el cuerpo del mensaje, HEAD es más eficiente en términos de ancho de banda que GET, especialmente para recursos grandes.

- **Uso de Caché**: HEAD es útil para implementar caché eficientes, ya que permite a los clientes determinar si deben volver a solicitar el recurso completo o si pueden utilizar una copia en caché.

- **Verificación de Recursos**: HEAD es ideal para verificar si un recurso ha cambiado, lo que es útil en aplicaciones que requieren actualizaciones en tiempo real.

>[!NOTE]
>
>El método HEAD es una herramienta útil en el protocolo HTTP para obtener información sobre un recurso sin necesidad de descargarlo. Su uso adecuado puede mejorar la eficiencia y la efectividad de las aplicaciones web y las interacciones con APIs.

[☝️](#semana-13-dia-32-clase-01)

## Método POST en HTTP

El método *POST* es uno de los verbos HTTP más utilizados y se emplea principalmente para enviar datos al servidor. A diferencia de otros métodos como GET, que se utilizan para recuperar información, *POST* se usa para crear o actualizar recursos en el servidor.

### Características del Método POST

- 1)**Envío de Datos:**

  - El método POST se utiliza para enviar datos al servidor en el cuerpo de la solicitud. Esto puede incluir datos de formularios, archivos, o cualquier tipo de información que se desee procesar en el servidor.

- 2)**No Idempotente:**

  - A diferencia de métodos como GET o PUT, las solicitudes POST no son idempotentes. Esto significa que enviar la misma solicitud varias veces puede resultar en diferentes efectos. Por ejemplo, si envías un formulario para crear un nuevo usuario, cada envío creará un nuevo registro.

- 3)**Uso Común en Formularios:**

  - POST es el método más común para enviar datos de formularios en aplicaciones web. Cuando un usuario completa un formulario y lo envía, generalmente se utiliza POST para enviar esos datos al servidor.

- 4)**Sin Límites de Tamaño Estricto:**

  - Aunque hay límites en el tamaño de las solicitudes POST, estos son generalmente más grandes que los límites de longitud de URL en las solicitudes GET, lo que permite enviar más datos.

- 5)**Cacheabilidad:**

  - Las respuestas a las solicitudes POST no son cacheables por defecto, aunque se pueden implementar mecanismos de caché personalizados si es necesario.

### Ejemplo de Uso de POST

Supongamos que tienes un formulario en una página web que permite a los usuarios registrarse. El formulario podría enviar una solicitud POST a la siguiente URL:

```bash
POST /api/usuarios
```

El cuerpo de la solicitud podría contener los datos en formato JSON del formulario, como el nombre, la dirección de correo electrónico y la contraseña del usuario.

```json
{
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "contraseña": "miContraseñaSegura"
}
```

### Respuesta del Servidor (POST)

Cuando el servidor recibe una solicitud POST, devuelve una respuesta que generalmente incluye:

- 1)**Código de Estado HTTP:** Indica el resultado de la solicitud (por ejemplo, 201 Created si se ha creado un recurso exitosamente, 400 Bad Request si hay un error en los datos enviados).

- 2)**Encabezados**: Información adicional sobre la respuesta, como el tipo de contenido y la ubicación del nuevo recurso (en el caso de que se haya creado uno).

- 3)**Cuerpo** Opcionalmente, puede incluir información adicional, como el ID del nuevo recurso creado o un mensaje de confirmación.

### Ventajas del Método POST

- **Flexibilidad**: Permite enviar una gran cantidad de datos y diferentes tipos de contenido al servidor.

- **Interacción Dinámica**: Es fundamental para interacciones dinámicas en aplicaciones web, como la creación de nuevos registros, la carga de archivos y la actualización de datos existentes.

>[!NOTE]
>
>El método POST es esencial para la creación y actualización de recursos en aplicaciones web. Su capacidad para enviar datos al servidor de manera eficiente lo convierte en una herramienta fundamental en el desarrollo de APIs y en el manejo de formularios en aplicaciones web. Comprender su funcionamiento y características es crucial para el diseño de aplicaciones web efectivas y seguras.

[☝️](#semana-13-dia-32-clase-01)

## Método PUT en HTTP

El método *PUT* es uno de los verbos HTTP utilizados para enviar datos a un servidor, con el objetivo principal de actualizar un recurso existente o crear un nuevo recurso en una ubicación específica si no existe. Es un método importante en el diseño de APIs RESTful.

### Características del Método PUT

- 1)**Actualización de Recursos:**

  - El método PUT se utiliza principalmente para actualizar un recurso existente en el servidor. Por ejemplo, si tienes un recurso que representa un usuario, una solicitud PUT podría actualizar la información de ese usuario.

- 2)**Idempotente:**

  - Las solicitudes PUT son idempotentes. Esto significa que realizar la misma solicitud varias veces tendrá el mismo efecto que realizarla una sola vez. Por ejemplo, si actualizas un recurso con los mismos datos varias veces, el estado del recurso no cambiará después de la primera actualización.

- 3)**Reemplazo Completo:**

  - En general, el método PUT reemplaza completamente el recurso en la ubicación especificada. Si se envían datos incompletos, el recurso existente puede ser modificado de manera no deseada. Sin embargo, algunas implementaciones permiten actualizaciones parciales utilizando PATCH, que es otro método HTTP.

- 4)**Ubicación Específica:**

  - A diferencia de POST, que generalmente se utiliza para crear recursos sin una ubicación específica, PUT se utiliza para enviar datos a una URL específica. Esto significa que el cliente debe conocer la ubicación del recurso que desea actualizar.

- 5)**Cuerpo de la Solicitud:**

  - Los datos se envían en el cuerpo de la solicitud y pueden estar en diferentes formatos, como JSON, XML, etc.

### Ejemplo de Solicitud PUT

Supongamos que tienes un recurso que representa un usuario en una API. La URL para acceder a este usuario podría ser:

```bash
PUT /api/usuarios/123
```

El cuerpo de la solicitud podría contener datos en formato JSON que actualicen la información del usuario con ID 123:

```json
{
  "nombre": "Juan Pérez",
  "email": "juan.perez@ejemplo.com",
  "telefono": "123456789"
}
```

### Respuesta del Servidor PUT

Cuando el servidor recibe una solicitud PUT, devuelve una respuesta que generalmente incluye:

- **Código de Estado de la Respuesta (HTTP Status Code):** Indica el resultado de la solicitud. Por ejemplo, 200 OK para una solicitud exitosa o 404 Not Found si el recurso no existe.

- **Encabezados de Respuesta:** Contienen información adicional sobre la respuesta, como el tipo de contenido devuelto.

-**Cuerpo de la Respuesta:** Puede contener datos relevantes para la solicitud,

### Ventajas del Método PUT

- **Control Total sobre el Recurso:** Permite a los clientes tener un control total sobre el recurso, asegurando que se actualice completamente a un nuevo estado.

- **Idempotencia:** La naturaleza idempotente de PUT facilita la gestión de errores y la repetición de solicitudes sin efectos secundarios no deseados.

>[!NOTE]
>
>El método PUT es una herramienta esencial en el desarrollo de APIs y aplicaciones web que requieren la actualización de recursos. Su idempotencia y capacidad para reemplazar completamente un recurso hacen que sea adecuado para diversas operaciones de actualización. Comprender cómo y cuándo utilizar PUT es fundamental para el diseño efectivo de sistemas que interactúan con datos en un servidor.

[☝️](#semana-13-dia-32-clase-01)

## Método PATCH en HTTP

El método *PATCH* es un verbo HTTP utilizado para aplicar modificaciones parciales a un recurso existente en el servidor. A diferencia del método PUT, que reemplaza completamente un recurso, *PATCH* permite realizar actualizaciones específicas sin necesidad de enviar el recurso completo.

### Características del Método PATCH

- 1)**Actualización Parcial:**

  - PATCH se utiliza para modificar solo una parte del recurso. Esto es útil cuando solo se necesitan cambiar algunos atributos sin afectar el resto del recurso.

- 2)**No Idempotente (en general):**

  - Aunque PATCH puede ser idempotente, no siempre lo es. La idempotencia depende de cómo se implemente el método en el servidor. Por ejemplo, si una solicitud PATCH se aplica varias veces y produce un resultado diferente cada vez, no sería idempotente.

- 3)**Cuerpo de Solicitud:**

  - Los datos que se envían en una solicitud PATCH especifican las modificaciones que se deben realizar. Esto puede incluir operaciones como agregar, eliminar o modificar atributos del recurso. Los datos se suelen enviar en formatos como JSON o XML.

- 4)**Uso en APIs RESTful:**

  - PATCH es comúnmente utilizado en APIs RESTful para realizar actualizaciones de recursos de manera eficiente. Permite a los clientes actualizar solo los campos que han cambiado, lo que puede reducir el tamaño de la carga útil y mejorar el rendimiento.

- 5)**Formato de Datos:**

  - El cuerpo de la solicitud puede seguir diferentes formatos, dependiendo de cómo se defina la API. Un formato común es JSON Patch, que especifica las operaciones a realizar sobre el recurso.

### Ejemplo de Solicitud PATCH

Supongamos que tienes un recurso que representa un usuario en una API. La URL para acceder a este usuario podría ser:

```bash
PATCH /api/usuarios/123
```

Y el cuerpo de la solicitud podría contener solo los campos que deseas actualizar, como el correo electrónico:

```json
{
  "email": "nuevo.email@ejemplo.com"
}
```

### Respuesta del Servidor PATCH

Cuando el servidor recibe una solicitud PATCH, devuelve una respuesta que generalmente incluye:

- **Código de Estado HTTP:** Indica el resultado de la solicitud (por ejemplo, 200 OK si la actualización fue exitosa, 204 No Content si no hay contenido que devolver, o 404 Not Found si el recurso no existe).

- **Encabezados:** Información adicional sobre la respuesta, como el tipo de contenido.

- **Cuerpo:** Opcionalmente, puede incluir información adicional sobre el recurso actualizado.

### Ventajas del Método PATCH

- **Eficiencia:** Al permitir actualizaciones parciales, PATCH puede reducir el tamaño de la carga útil y la cantidad de datos que se deben enviar al servidor.

- **Flexibilidad:** Permite a los desarrolladores realizar cambios específicos sin la necesidad de enviar el recurso completo, lo que simplifica las actualizaciones en aplicaciones complejas.

>[!NOTE]
>
>El método PATCH es una herramienta valiosa en el desarrollo de APIs y aplicaciones web que requieren actualizaciones específicas de recursos. Su capacidad para realizar modificaciones parciales lo hace ideal para mejorar la eficiencia y flexibilidad en la gestión de datos. Comprender cómo utilizar PATCH correctamente es fundamental para diseñar sistemas que interactúan con recursos en un servidor de manera efectiva.

[☝️](#semana-13-dia-32-clase-01)

## Método DELETE en HTTP

El método *DELETE* es un verbo HTTP utilizado para eliminar un recurso existente en el servidor. Es uno de los métodos más comunes utilizados en APIs RESTful para eliminar recursos.

### Características del Método DELETE

- 1)**Eliminación de Recursos:**

  - El método DELETE se utiliza para eliminar un recurso existente en el servidor. El recurso se elimina completamente y no se devuelve en respuesta a futuras solicitudes.

- 2)**Idempotente:**

  - Las solicitudes DELETE son idempotentes. Esto significa que realizar la misma solicitud varias veces tendrá el mismo efecto que realizarla una sola vez. Si un recurso ya no existe, una solicitud DELETE adicional no tendrá efecto.

- 3)**No Cuerpo de Solicitud:**

  - En general, no se envía un cuerpo de solicitud con una solicitud DELETE, ya que no se necesita proporcionar información adicional para eliminar el recurso.

- 4)**Uso en APIs RESTful:**

  - DELETE es comúnmente utilizado en APIs RESTful para eliminar recursos de manera eficiente. Permite a los clientes eliminar recursos sin necesidad de enviar información adicional.

- 5)**Código de Estado HTTP:**

  - El código de estado HTTP devuelto por el servidor puede variar dependiendo de la implementación. Los códigos comunes incluyen 200 OK si la eliminación fue exitosa, 404 Not Found si el recurso no existe, o 405 Method Not Allowed si el método DELETE no está permitido para el recurso.

### Ejemplo de Uso DELETE

Supongamos que tienes un recurso que representa un usuario en una API. La URL para acceder a este usuario podría ser:

```bash
DELETE /api/usuarios/123
```

### Ventajas del Método DELETE

- **Sencillez:** El método DELETE es fácil de implementar y utilizar, ya que no requiere enviar información adicional para eliminar el recurso.

- **Eficiencia:** DELETE es una forma eficiente de eliminar recursos, ya que no se necesita enviar un cuerpo de solicitud ni procesar información adicional.

>[!NOTE]
>
>El método DELETE es una herramienta fundamental en el desarrollo de APIs y aplicaciones web que requieren la eliminación de recursos. Su idempotencia y simplicidad lo hacen ideal para eliminar recursos de manera eficiente. Comprender cómo utilizar DELETE correctamente es fundamental para diseñar sistemas que interactúan con recursos en un servidor de manera efectiva.

[☝️](#semana-13-dia-32-clase-01)

## Callbacks

Un *callback*  (o función de retorno) es una función que se pasa como argumento a otra función y que se ejecuta después de que se completa una operación. Los callbacks son una forma fundamental de manejar la asincronía en JavaScript, permitiendo que ciertas acciones se realicen una vez que se ha completado una tarea, como una solicitud de red, un temporizador o una operación de entrada/salida.

### Características de los Callbacks

- 1)**Asincronía:**

  Los callbacks son comúnmente utilizados en operaciones asincrónicas. Por ejemplo, si haces una solicitud a un servidor, puedes pasar un callback que se ejecutará una vez que se reciba la respuesta.

- 2)**Ejecución Diferida:**

  - La función callback no se ejecuta inmediatamente, sino que se invoca en un momento posterior, cuando se cumple una condición específica (como la finalización de una tarea).

- 3)**Control de Flujo:**

  - Permiten controlar el flujo de la aplicación, ejecutando ciertas funciones solo cuando se completan otras.

### Ejemplo de Callback

```js
// Asincrono = Que no tiene lugar en completa correspondencia temporal con otro proceso o con la causa que lo produce.
    
function hacerAlgoAsincrono(callback) {
    setTimeout(() => {
        console.log("Hice algo asincrónico");
        callback(); // Llama al callback cuando la operación termina
    }, 1000);
}

function miCallback() {
    console.log("Esto se ejecuta después de hacer algo asincrónico");
}

hacerAlgoAsincrono(miCallback);
```

En este ejemplo, `hacerAlgoAsincrono` simula una operación que toma tiempo (1 segundo) y luego llama a `miCallback`.

### Ventajas de los Callbacks

- Permiten manejar la asincronía de manera efectiva.

- Son simples de implementar para operaciones sencillas.

### Desventajas de los Callbacks

- Pueden llevar a la "callback hell" (infierno de los callbacks) si se anidan múltiples callbacks, lo que hace que el código sea difícil de leer y mantener.

- El manejo de errores puede volverse complicado, ya que cada callback necesita su propia gestión de errores.

>[!NOTE]
>
>Los callbacks son una parte fundamental de JavaScript y se utilizan ampliamente en la programación asincrónica. Aunque son muy útiles, es importante tener cuidado con su uso para evitar problemas de legibilidad y mantenimiento en el código. Con el tiempo, se han desarrollado alternativas más modernas, como las promesas y async/await, que abordan algunas de las limitaciones de los callbacks.

[☝️](#semana-13-dia-32-clase-01)

## Callback Hell

El *Callback Hell* (infierno de los callbacks) es un término que se utiliza para describir un problema común en la programación JavaScript que surge cuando se anidan múltiples funciones de callback. Este patrón puede hacer que el código sea difícil de leer, mantener y depurar, ya que la estructura del código se convierte en una serie de callbacks anidados, lo que a menudo resulta en una jerarquía profunda y desordenada.

### Ejemplo de Callback Hell

Aquí hay un ejemplo que ilustra el concepto de Callback Hell:

```js
hacerAlgoAsincrono(function(result1) {
    hacerOtroAlgoAsincrono(result1, function(result2) {
        hacerTercerAlgoAsincrono(result2, function(result3) {
            hacerCuartoAlgoAsincrono(result3, function(result4) {
                console.log("Resultado final: " + result4);
            });
        });
    });
});
```

### Problemas del Callback Hell

- **Legibilidad**: El código se vuelve difícil de leer y seguir. La indentación profunda puede hacer que sea complicado entender el flujo de la lógica.

- **Mantenimiento*: Realizar cambios en el código se vuelve más complicado, ya que cualquier modificación puede requerir cambios en múltiples niveles de anidación.

- **Manejo de Errores**: El manejo de errores se complica, ya que cada callback puede necesitar su propio bloque de manejo de errores, lo que puede llevar a un código aún más desordenado.

### Soluciones al Callback Hell

#### 1. Promesas

Las promesas proporcionan una forma más limpia de manejar la asincronía, permitiendo encadenar operaciones sin necesidad de anidar múltiples callbacks.

```js
hacerAlgoAsincrono()
    .then(result1 => hacerOtroAlgoAsincrono(result1))
    .then(result2 => hacerTercerAlgoAsincrono(result2))
    .then(result3 => hacerCuartoAlgoAsincrono(result3))
    .then(result4 => console.log("Resultado final: " + result4))
    .catch(error => console.error("Error: " + error));
```

#### 2. Async/Await

Esta es una sintaxis más moderna que permite escribir código asincrónico de manera más similar al código síncrono, lo que mejora la legibilidad.

```js
async function ejecutarTodo() {
    try {
        const result1 = await hacerAlgoAsincrono();
        const result2 = await hacerOtroAlgoAsincrono(result1);
        const result3 = await hacerTercerAlgoAsincrono(result2);
        const result4 = await hacerCuartoAlgoAsincrono(result3);
        console.log("Resultado final: " + result4);
    } catch (error) {
        console.error("Error: " + error);
    }
}

ejecutarTodo();
```

>[!NOTE]
>
>El Callback Hell es un problema que puede surgir fácilmente en la programación asincrónica en JavaScript, pero hay soluciones efectivas, como el uso de promesas y la sintaxis async/await, que ayudan a mantener el código limpio y manejable. Estas herramientas permiten un manejo más estructurado de la asincronía y evitan los problemas de legibilidad y mantenimiento que pueden surgir con los callbacks anidados.

[☝️](#semana-13-dia-32-clase-01)

## Promises, que son

Una *promise* (promesa) es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante. Las promesas permiten un manejo más limpio y estructurado de las operaciones asincrónicas en comparación con los callbacks, especialmente cuando se trata de encadenar múltiples operaciones.

### Estados de una Promesa

- **Pending (Pendiente)**: El estado inicial, ni cumplida ni rechazada.

- **Fulfilled (Cumplida)**: La operación se completó exitosamente.

- **Rejected (Rechazada)**: La operación falló.

### Ejemplo de Promesa

```js
function hacerAlgoAsincronoConPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia a false para simular un error
            if (exito) {
                resolve("Operación exitosa");
            } else {
                reject("Ocurrió un error");
            }
        }, 1000);
    });
}

hacerAlgoAsincronoConPromise()
    .then((resultado) => {
        console.log(resultado); // Se ejecuta si la promesa se cumple
    })
    .catch((error) => {
        console.error(error); // Se ejecuta si la promesa se rechaza
    });
```

En este ejemplo, `hacerAlgoAsincronoConPromise` retorna una promesa. Si la operación es exitosa, se llama a `resolve`, y si hay un error, se llama a `reject`. Luego, se pueden usar los métodos `.then()` y `.catch()` para manejar el resultado.

### Comparación

- **Legibilidad**: Las promesas son más legibles y manejables que los callbacks, especialmente cuando se encadenan múltiples operaciones.

- **Manejo de Errores**: Las promesas permiten un manejo de errores más claro a través de .catch(), mientras que los callbacks pueden llevar a la "callback hell" si no se manejan adecuadamente.

- **Encadenamiento**: Las promesas permiten encadenar operaciones de forma sencilla, mientras que con callbacks puede volverse complicado.

>[!NOTE]
>
>El método DELETE es una herramienta fundamental en el desarrollo de APIs y aplicaciones web que requieren la eliminación de recursos. Su idempotencia y simplicidad lo hacen ideal para eliminar recursos de manera eficiente. Comprender cómo utilizar DELETE correctamente es fundamental para diseñar sistemas que interactúan con recursos en un servidor de manera efectiva.

[☝️](#semana-13-dia-32-clase-01)

## Manejando las promesas

Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante. En otras palabras, es una forma de manejar operaciones que pueden tardar un tiempo en completarse, como solicitudes de red, lectura de archivos, etc.

### Estados de una promesa

Una promesa puede estar en uno de tres estados:

- **Pendiente** (Pending): El estado inicial, ni cumplida ni rechazada.

- **Cumplida (Fulfilled):** La operación se completó con éxito.

- **Rechazada (Rejected):** La operación falló.

### Creación de una promesa

Puedes crear una promesa utilizando el constructor Promise. Aquí hay un ejemplo básico:

```js
const miPromesa = new Promise((resolve, reject) => {
    // Simulamos una operación asincrónica, como una solicitud de red
    const exito = true; // Cambia a false para simular un error

    setTimeout(() => {
        if (exito) {
            resolve("¡Operación exitosa!");
        } else {
            reject("Ocurrió un error.");
        }
    }, 2000); // Simulamos un retraso de 2 segundos
});
```

### Manejo de promesas

Para manejar el resultado de una promesa, se utilizan los métodos `.then()` y `.catch().`

- `.then()`: Se llama cuando la promesa se cumple.

- `.catch()`: Se llama cuando la promesa es rechazada.

Aquí tienes un ejemplo de cómo usar la promesa que creamos anteriormente:

```js
miPromesa
    .then((resultado) => {
        console.log(resultado); // "¡Operación exitosa!"
    })
    .catch((error) => {
        console.error(error); // "Ocurrió un error."
    });
```

### Encadenamiento de promesas

Puedes encadenar múltiples promesas usando `.then()`. Cada `.then()` devuelve una nueva promesa, lo que permite encadenar operaciones:

```js
miPromesa
    .then((resultado) => {
        console.log(resultado);
        return "Paso 2"; // Devuelve un nuevo valor para el siguiente then
    })
    .then((resultado) => {
        console.log(resultado); // "Paso 2"
    })
    .catch((error) => {
        console.error(error);
    });
```

### Promesas y `async/await`

A partir de ES2017, puedes usar `async` y `await` para trabajar con promesas de una manera más legible. `async` convierte una función en una función asincrónica, y `await` se utiliza para esperar el resultado de una promesa.

Aquí tienes un ejemplo:

```js
const funcionAsincrona = async () => {
    try {
        const resultado = await miPromesa; // Espera a que la promesa se resuelva
        console.log(resultado); // "¡Operación exitosa!"
    } catch (error) {
        console.error(error); // Maneja el error si la promesa es rechazada
    }
};

funcionAsincrona();
```

>[!NOTE]
>
>Las promesas son una forma poderosa de manejar operaciones asincrónicas en JavaScript. Te permiten escribir código más limpio y fácil de seguir en comparación con las callbacks tradicionales. Además, con `async/await`, puedes trabajar con promesas de manera aún más intuitiva.

[☝️](#semana-13-dia-32-clase-01)

## Encadenamiento de promesa

El encadenamiento de promesas es una característica poderosa de JavaScript que te permite ejecutar múltiples operaciones asincrónicas de manera secuencial. Cada promesa en la cadena puede depender del resultado de la promesa anterior, lo que facilita el manejo de flujos de trabajo complejos.

### Cómo funciona el encadenamiento de promesas

Cuando llamas al método `.then()` en una promesa, este devuelve una nueva promesa. Esto significa que puedes encadenar múltiples llamadas a `.then()`, y cada una de ellas puede manejar el resultado de la promesa anterior.

### Ejemplo básico de encadenamiento de promesas

Aquí tienes un ejemplo simple que ilustra el encadenamiento de promesas:

```js
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resultado de la primera promesa");
    }, 1000);
});

const promesa2 = (mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${mensaje} y resultado de la segunda promesa`);
        }, 1000);
    });
};

const promesa3 = (mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${mensaje} y resultado de la tercera promesa`);
        }, 1000);
    });
};

// Encadenamos las promesas
promesa1
    .then(resultado => {
        console.log(resultado); // "Resultado de la primera promesa"
        return promesa2(resultado); // Pasamos el resultado a la siguiente promesa
    })
    .then(resultado => {
        console.log(resultado); // "Resultado de la primera promesa y resultado de la segunda promesa"
        return promesa3(resultado); // Pasamos el resultado a la siguiente promesa
    })
    .then(resultado => {
        console.log(resultado); // "Resultado de la primera promesa y resultado de la segunda promesa y resultado de la tercera promesa"
    })
    .catch(error => {
        console.error("Error:", error); // Manejo de errores
    });
```

### Manejo de errores en el encadenamiento

Si alguna de las promesas en la cadena es rechazada, el control se pasará al primer `.catch()` que encuentre. Esto significa que no necesitas manejar errores en cada paso de la cadena, lo que simplifica el código.

Aquí hay un ejemplo que muestra cómo manejar errores:

```js
const promesaConError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Hubo un error en la promesa");
        }, 1000);
    });
};

// Encadenamos las promesas
promesa1
    .then(resultado => {
        console.log(resultado);
        return promesaConError(); // Esta promesa será rechazada
    })
    .then(resultado => {
        console.log(resultado); // Este bloque no se ejecutará
    })
    .catch(error => {
        console.error("Error:", error); // Captura el error de promesaConError
    });
```

### Uso de `async/await` con encadenamiento

El encadenamiento de promesas se puede simplificar aún más utilizando `async/await`. Aquí tienes un ejemplo de cómo se vería el mismo flujo de trabajo utilizando `async/await`:

```js
const ejecutarEncadenamiento = async () => {
    try {
        const resultado1 = await promesa1;
        console.log(resultado1);
        
        const resultado2 = await promesa2(resultado1);
        console.log(resultado2);
        
        const resultado3 = await promesa3(resultado2);
        console.log(resultado3);
    } catch (error) {
        console.error("Error:", error); // Manejo de errores
    }
};

ejecutarEncadenamiento();
```

>[!NOTE]
>
>El encadenamiento de promesas te permite manejar múltiples operaciones asincrónicas de manera clara y estructurada. Puedes pasar resultados entre promesas y manejar errores de manera centralizada utilizando .catch(). Además, con async/await, puedes escribir código asincrónico que se asemeje más al código síncrono, lo que facilita su comprensión.

[☝️](#semana-13-dia-32-clase-01)

## Otros métodos de promesas

Además de los métodos básicos como .then(), .catch() y el encadenamiento de promesas, JavaScript ofrece varios métodos adicionales para trabajar con promesas que pueden ser muy útiles en diferentes situaciones.

### 1. `Promise.all()`

Promise.all() toma un iterable (como un array) de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas en el iterable se han cumplido, o se rechaza si alguna de las promesas se rechaza.

Ejemplo:

```js
const promesa1 = Promise.resolve(3);
const promesa2 = new Promise((resolve) => setTimeout(resolve, 1000, '¡Hola!'));
const promesa3 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Error en promesa 3'));

Promise.all([promesa1, promesa2])
    .then(resultados => {
        console.log(resultados); // [3, '¡Hola!']
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Si una de las promesas se rechaza, Promise.all se rechaza inmediatamente
Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        console.log(resultados);
    })
    .catch(error => {
        console.error("Error en Promise.all:", error); // "Error en promesa 3"
    });
```

### 2. `Promise.allSettled()`

Promise.allSettled() también toma un iterable de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas se han completado, independientemente de si se han cumplido o rechazado. El resultado es un array de objetos que describen el resultado de cada promesa.

Ejemplo:

```js
Promise.allSettled([promesa1, promesa2, promesa3])
    .then(resultados => {
        console.log(resultados);
        /*
        [
            { status: 'fulfilled', value: 3 },
            { status: 'fulfilled', value: '¡Hola!' },
            { status: 'rejected', reason: 'Error en promesa 3' }
        ]
        */
    });
```

### 3. `Promise.any()`

Promise.any() toma un iterable de promesas y devuelve una nueva promesa que se resuelve tan pronto como una de las promesas se resuelve. Si todas las promesas se rechazan, devuelve una promesa rechazada con un AggregateError, que es un error que agrupa múltiples errores.

Ejemplo:

```js
const promesa4 = Promise.reject('Error en promesa 4');
const promesa5 = Promise.reject('Error en promesa 5');
const promesa6 = Promise.resolve('¡Éxito en promesa 6!');

Promise.any([promesa4, promesa5, promesa6])
    .then(resultado => {
        console.log(resultado); // "¡Éxito en promesa 6!"
    })
    .catch(error => {
        console.error("Todas las promesas fueron rechazadas:", error);
    });
```

### 4. `Promise.race()`

Promise.race() toma un iterable de promesas y devuelve una nueva promesa que se resuelve o se rechaza tan pronto como una de las promesas en el iterable se resuelve o se rechaza. Esto es útil para situaciones donde quieres saber cuál promesa se completa primero.

Ejemplo:

```js
const promesaRapida = new Promise((resolve) => setTimeout(resolve, 100, 'Promesa rápida'));
const promesaLenta = new Promise((resolve) => setTimeout(resolve, 1000, 'Promesa lenta'));

Promise.race([promesaRapida, promesaLenta])
    .then(resultado => {
        console.log(resultado); // "Promesa rápida"
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

>[!NOTE]
>
>Los métodos adicionales de promesas como Promise.all(), Promise.allSettled(), Promise.any(), y Promise.race() son herramientas poderosas que te permiten manejar múltiples promesas de manera efectiva. Cada uno tiene su propio uso y puede ser útil dependiendo de la situación específica que estés manejando en tu código.

[☝️](#semana-13-dia-32-clase-01)

## Cómo funciona el CORS

CORS, que significa Cross-Origin Resource Sharing (Compartición de Recursos entre Orígenes Cruzados), es un mecanismo que permite a los navegadores web realizar solicitudes a dominios diferentes del dominio desde el que se cargó la página. Esto es importante para la seguridad de las aplicaciones web, ya que evita que scripts maliciosos accedan a recursos de otros dominios sin permiso.

### ¿Por qué existe CORS

Por razones de seguridad, los navegadores implementan una política de mismo origen (Same-Origin Policy), que restringe las solicitudes que pueden realizarse entre diferentes orígenes. Un origen se define por el esquema (http o https), el dominio (ejemplo.com) y el puerto (80, 443, etc.). Si una página web intenta hacer una solicitud a un recurso que está en un origen diferente, el navegador bloqueará la solicitud a menos que el servidor de destino permita explícitamente el acceso.

### ¿Cómo funciona CORS

CORS funciona mediante el uso de encabezados HTTP que permiten que un servidor indique si un recurso puede ser compartido con un origen específico. Aquí están los pasos básicos de cómo funciona:

- **Solicitud de origen cruzado:** Cuando un navegador realiza una solicitud a un recurso en un origen diferente, incluye un encabezado Origin en la solicitud que indica el origen de la solicitud.

  ```http
  GET /recurso HTTP/1.1
  Host: api.ejemplo.com
  Origin: https://mi-sitio.com
  ```

- **Respuesta del servidor:** El servidor de destino puede decidir si permite la solicitud de origen cruzado. Para ello, debe incluir encabezados CORS en su respuesta. Los encabezados más comunes son:

  - `Access-Control-Allow-Origin`: Especifica qué orígenes están permitidos. Puede ser un origen específico (por ejemplo, <https://mi-sitio.com>) o un asterisco (*), que permite todos los orígenes.

  - `Access-Control-Allow-Methods`: Especifica qué métodos HTTP (GET, POST, PUT, DELETE, etc.) están permitidos para las solicitudes de origen cruzado.

  - `Access-Control-Allow-Headers`: Especifica qué encabezados pueden ser utilizados en la solicitud.

  - `Access-Control-Allow-Credentials`: Indica si se permiten credenciales (como cookies o encabezados de autenticación) en la solicitud.

  Un ejemplo de respuesta CORS podría ser:

  ```http
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: https://mi-sitio.com
  Access-Control-Allow-Methods: GET, POST
  Access-Control-Allow-Headers: Content-Type
  ```

- **Preflight Request:** Para ciertos tipos de solicitudes (como las que utilizan métodos HTTP diferentes de GET o POST, o que incluyen encabezados personalizados), el navegador envía primero una solicitud de preflight (OPTIONS) al servidor para verificar si la solicitud real está permitida. El servidor debe responder con los encabezados CORS adecuados para permitir la solicitud.

 Ejemplo de solicitud de preflight:

  ```http
  OPTIONS /recurso HTTP/1.1
  Host: api.ejemplo.com
  Origin: https://mi-sitio.com
  Access-Control-Request-Method: POST
  Access-Control-Request-Headers: Content-Type
  ```
  
  Respuesta del servidor a la solicitud de preflight:
  
  ```http
  HTTP/1.1 204 No Content
  Access-Control-Allow-Origin: https://mi-sitio.com
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Headers: Content-Type
  ```

- **Acceso a los recursos:** Si el servidor permite la solicitud, el navegador procederá a realizar la solicitud real. Si no, el navegador bloqueará la solicitud y no permitirá que el script acceda a la respuesta.

### Ejemplo práctico

Supongamos que tienes un frontend en <https://mi-sitio.com> y quieres hacer una solicitud a una API en <https://api.ejemplo.com>. El servidor en <https://api.ejemplo.com> debe estar configurado para permitir el acceso desde <https://mi-sitio.com> mediante los encabezados CORS apropiados.

### Consideraciones de seguridad

- **Restricciones:** No se debe usar Access-Control-Allow-Origin: * si se están utilizando credenciales. En su lugar, se debe especificar un origen específico.

- **Validación del origen:** Los servidores deben validar el origen de las solicitudes CORS para evitar ataques como el Cross-Site Request Forgery (CSRF).

- **Configuración del servidor:** La configuración de CORS debe hacerse en el servidor, y no en el cliente. El cliente no puede forzar CORS; es el servidor el que debe permitir el acceso a través de los encabezados adecuados.

>[!NOTE]
>
>CORS es un mecanismo esencial para la seguridad en la web que permite a los navegadores gestionar solicitudes entre diferentes orígenes. Al utilizar encabezados HTTP específicos, los servidores pueden controlar qué orígenes tienen acceso a sus recursos, lo que ayuda a prevenir ataques y a proteger la información sensible.

[☝️](#semana-13-dia-32-clase-01)

## Estructura de la CORS header

Los encabezados CORS (Cross-Origin Resource Sharing) son utilizados por un servidor para indicar a los navegadores que permite solicitudes de recursos desde orígenes diferentes.

### Estructura de los encabezados CORS

- `Access-Control-Allow-Origin`: Este encabezado especifica qué orígenes están permitidos para acceder al recurso. Puede ser un origen específico o un asterisco (`*`) para permitir todos los orígenes.

  ```http
  Access-Control-Allow-Origin: https://mi-sitio.com
  ```

- `Access-Control-Allow-Methods`: Indica qué métodos HTTP están permitidos para las solicitudes de origen cruzado. Esto puede incluir métodos como GET, POST, PUT, DELETE, etc.

  ```http
  Access-Control-Allow-Methods: GET, POST, PUT
  ```

- `Access-Control-Allow-Headers`: Este encabezado especifica qué encabezados pueden ser utilizados en la solicitud de origen cruzado. Es útil cuando se envían encabezados personalizados.

  ```http
  Access-Control-Allow-Headers: Content-Type, Authorization
  ```

- `Access-Control-Allow-Credentials`: Indica si se permiten credenciales (como cookies o encabezados de autenticación) en la solicitud. Este encabezado debe ser true si se permite el uso de credenciales.

  ```http
  Access-Control-Allow-Credentials: true
  ```

- `Access-Control-Expose-Headers`: Este encabezado permite que el servidor especifique qué encabezados pueden ser accedidos por el cliente en la respuesta. Por defecto, solo se pueden acceder a ciertos encabezados.

  ```http
  Access-Control-Expose-Headers: X-Custom-Header
  ```

- `Access-Control-Max-Age`: Este encabezado indica el tiempo en segundos que el navegador puede almacenar en caché la respuesta de la solicitud de preflight. Esto puede ayudar a reducir la cantidad de solicitudes de preflight que se realizan.

  ```http
  Access-Control-Max-Age: 86400
  ```

### Ejemplo de respuesta CORS completa

Un ejemplo de respuesta CORS que incluye varios de estos encabezados podría ser:

  ```http
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: https://mi-sitio.com
  Access-Control-Allow-Methods: GET, POST, PUT
  Access-Control-Allow-Headers: Content-Type, Authorization
  Access-Control-Allow-Credentials: true
  Access-Control-Expose-Headers: X-Custom-Header
  Access-Control-Max-Age: 86400
  ```

>[!NOTE]
>
>Los encabezados CORS son fundamentales para controlar el acceso a los recursos en un servidor desde diferentes orígenes. Al configurar correctamente estos encabezados, los desarrolladores pueden garantizar que sus aplicaciones web sean seguras y que solo los orígenes autorizados puedan interactuar con sus recursos.

[☝️](#semana-13-dia-32-clase-01)
