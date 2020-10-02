export interface ProductoInterface {
		 userId: string; // Contiene la frase
  title: string;
  id: string; // Identificador la frase aleatoria
  completed: string; // URL que contiene el ID y permite recuperar la frase
  checked?: boolean;
}
