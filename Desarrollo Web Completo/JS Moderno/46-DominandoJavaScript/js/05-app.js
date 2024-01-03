// !Explicit binding
// Diferencia entre call, apply t

function persona(el1, el2) {
  console.log(`${this.nombre} musica ${el1} y ${el2}`);
}

const info = {
  nombre: 'Mac',
};

const musicaFav = ['Heavy Metal', 'Rock'];

// podemos utilizar la funcion con el metodo call.. el cual info lo pasamos el objeto
// y musica fav .. debemos pasar cada uno de los arreglos independientes
persona.call(info, musicaFav[0], musicaFav[1]);

// !Apply es diferente si toma todo el arreglo no ocupamos pasarlo individual
persona.apply(info, musicaFav);

// !Explicit bindin  es similar a call nomas que la funcion la guardamos en una variable y la llamamos despues

const nuevaFunc = persona.bind(info, musicaFav[0], musicaFav[1]);

nuevaFunc();
