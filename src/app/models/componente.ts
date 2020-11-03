export interface ComponenteInterface {
  codComponente: string; // Contiene la frase
  estado: string;
  ubicacion: string; // URL que contiene el ID y permite recuperar la frase
  codEquipo: string;
  codCtgoComponente: string;
  checked?: boolean;
}
