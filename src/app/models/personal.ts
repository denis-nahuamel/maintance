export interface PersonalInterface {
  /*value: string; // Contiene la frase
  icon_url: string;
  id: string; // Identificador la frase aleatoria
  url: string; // URL que contiene el ID y permite recuperar la frase*/
 userId: string; // Contiene la frase
  title: string;
  id: string; // Identificador la frase aleatoria
  completed: string; // URL que contiene el ID y permite recuperar la frase
  checked?: boolean;
}
