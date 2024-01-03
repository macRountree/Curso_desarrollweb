// ! Patrones de diseño en JS

//  Son soluciones ti´picas comunes en  DS .. cada patron es como un plano personalizado para resolver un problema
//  de diseño de código

// Son soluciones universales
//  Sus beneficios :
/**
 * ! Son soluciones probadas ... si serepiten mucho código podemos adoptar diseño de patrones
 * !  Sonm soluciones conocidas por todos ... evitamos escribir código que cada quien entiende
 * !
 * !
 *
 * !Cataegorias de patrones
 * 1.- De creacion :  Permiten crear objetos y reutilizacion de código
 * 2- Estructura ... Explican como deben comunicarse los objetos y clases en grandes proyectos
 * 3- Comportamiento : ... Se encargan de como se comportan y comunican los objetos
 *
 *
 */

// !class Pattern : es un patron de diseño de creación

class Persona {
  constructor(nombre, emai) {
    this.nombre = nombre;
    this.emai = emai;
  }
}

const persona = new Persona('Mac', ' mac1492@gmail.com');

console.log(persona);
