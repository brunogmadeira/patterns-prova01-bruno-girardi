// ----- Produtos Abstratos -----
class Button {
  render() {}
}

class Window {
  render() {}
}

// ----- Produtos Concretos -----
class LightButton extends Button {
  render() {
    return "Botão branco criado";
  }
}

class DarkButton extends Button {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow extends Window {
  render() {
    return "Janela clara aberta";
  }
}

class DarkWindow extends Window {
  render() {
    return "Janela escura aberta";
  }
}

class UIFactory {
  createButton() {}
  createWindow() {}
}

class LightFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }
  createWindow() {
    return new LightWindow();
  }
}

class DarkFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }
  createWindow() {
    return new DarkWindow();
  }
}

function app(factory) {
  const button = factory.createButton();
  const windowUI = factory.createWindow();

  console.log(button.render());
  console.log(windowUI.render());
}

// ----- Uso -----
const theme = "dark";
let factory;

if (theme === "light") {
  factory = new LightFactory();
} else {
  factory = new DarkFactory();
}

app(factory);
