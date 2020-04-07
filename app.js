var app = new Vue({
  el: "#app",
  data: {
    perguntas: [],
    perguntasExibidas: [],
    indice: 0,
    selecionado: 0,
    vidas: 3,
  },
  methods: {
    aumentarIndice: function () {
      return this.indice++;
    },
    enviarResposta: function () {
      if (Number(this.selecionado) === this.pergunta["certa"]) {
        return this.aumentarIndice();
      } else {
        (this.vidas = this.vidas - 1), this.aumentarIndice();
      }
    },
    gameOver: function () {
      return (this.indice = 0), (this.vidas = 3);
    },
  },
  computed: {
    pergunta: function () {
      return this.perguntas[this.indice];
    },
  },
  mounted: function () {
    fetch("db.json").then((res) => {
      res.json().then((json) => {
        this.perguntas = json;
      });
    });
  },
});
