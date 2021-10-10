# useReducer
- UseReducer es una alternativa a useState.
- Acepta un reducer de tipo `(state, action) => newState` y devuelve el estado actual emparejado con un método dispatch.

## ¿Que es un reducer?
- Es una funcion comun y corriente (no puede ser asincrona)
- El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado.
	- ¿Que es una funcion pura?
		- Todo lo que la funcion realice debe resolverse de manera interna.
		- Decimos que una función es pura cuando cumple los siguientes requisitos:
			- Dados los mismos inputs (argumentos) siempre retorna lo mismo (transparencia referencial).
				- Resolver todo lo que se le pide, internamente sin necesidad de llamar otras funcines.
			- No tiene efectos colaterales.
			- No debe realizar tareas asincronas.
			- Debe de retornar un estado nuevo.
			- No debe de llamar localStorage o sessionStorage.
- `(previousState, action) => newState`
    - Debe de retornar un nuevo estado.
    - Se llama reducer porque es el tipo de función que pasarías a Array.prototype.reduce(reducer, ?initialValue). 

## ¿Dispatch(action)?
- Despacha una acción. 
- Esta es la única forma de realizar un cambio de estado.
- La función función reductora es ejecutada por el resultado de getState() y el action indicado de forma síncrona. 
- El valor devuelto es considerado el siguiente estado. 
- Va a ser devuelto por getState() desde ahora, y las funciones escuchando los cambios van a ser inmediatamente notificadas.

## ¿Que es Redux?
- Redux es un contenedor predecible del estado de aplicaciones JavaScript.
- Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. 
- Es preferible a useState cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior.
- Optimiza el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks.