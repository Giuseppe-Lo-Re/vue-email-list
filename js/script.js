// Descrizione:
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
    getRandomMailFromApi() {
      for(let i = 10; i > emailList.length; i--) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.randomMail = response.data.response;
          this.emailList.push(this.randomMail);
        });
      }
    }
  },
  mounted() {
    this.getRandomMailFromApi();
  }
}
);
