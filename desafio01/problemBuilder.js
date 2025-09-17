class Lanche {
  constructor(pao, carne, queijo, salada, molho) {
    this.pao = pao;
    this.carne = carne;
    this.queijo = queijo;
    this.salada = salada;
    this.molho = molho;
  }

  show() {
    console.log("Lanche:", {
      pao: this.pao,
      carne: this.carne,
      queijo: this.queijo,
      salada: this.salada,
      molho: this.molho,
    });
  }
}

class LancheBuilder {
  constructor() {
    this.pao = false;
    this.carne = false;
    this.queijo = false;
    this.salada = false;
    this.molho = false;
  }

  addPao() {
    this.pao = true;
    return this;
  }

  addCarne() {
    this.carne = true;
    return this;
  }

  addQueijo() {
    this.queijo = true;
    return this;
  }

  addSalada() {
    this.salada = true;
    return this;
  }

  addMolho() {
    this.molho = true;
    return this;
  }

  build() {
    return new Lanche(this.pao, this.carne, this.queijo, this.salada, this.molho);
  }
}

// Uso do Builder
const lancheSimples = new LancheBuilder()
  .addPao()
  .addCarne()
  .build();

const lancheCompleto = new LancheBuilder()
  .addPao()
  .addCarne()
  .addQueijo()
  .addSalada()
  .addMolho()
  .build();

lancheSimples.show();
lancheCompleto.show();
