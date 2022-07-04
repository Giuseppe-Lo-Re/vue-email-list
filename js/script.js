// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
  {
      el: '#root',
      data: {
        emailList: [],
        randomMail: null
  },
  methods : {
    
    // Scarica 10 mail random dall'API
    getRandomMailFromApi() {

      // ciclo for per 10 volte:
      for(let i = 0; i < 10; i++) {
        // Chiamata API:
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          // Salva la mail random in una variabile:
          this.randomMail = response.data.response;
          // Pusha la mail random nell'array:
          this.emailList.push(this.randomMail);
        });
      }
    }
  },

  // Lancia al caricamento della pagina:
  mounted() {

    // richiama la funzione che scarica 10 mail random dall'API:
    this.getRandomMailFromApi();
  }
}
);
