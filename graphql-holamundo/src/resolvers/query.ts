import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        hola(): string {
            return 'Hola Mundo';
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola Mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo en el Curso de GrapQL';
        },
        sumaPerrona(__: void, { num1, num2 }): string {
            return 'La suma es ' + (num1 + num2);
        },
        multplicacionChingona(__: void, { num1, num2 }): string {
            return 'El producto es ' + (num1 * num2);
        },
        elevacionCuadradaYVerde(__: void, { num1 }): string {
            return 'La elevacion es ' + (num1 * num1);
        }
    }
}

export default query;