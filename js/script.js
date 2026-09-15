const progress = document.getElementById("progress");

function atualizarProgresso() {
    const alturaTotal =
        document.documentElement.scrollHeight - window.innerHeight;

    const percentual = alturaTotal
        ? (window.scrollY / alturaTotal) * 100
        : 0;

    progress.style.width = `${percentual}%`;
}

window.addEventListener("scroll", atualizarProgresso);


const menu = document.getElementById("menu");
const links = document.getElementById("links");

function alternarMenu() {
    links.classList.toggle("open");
}

function fecharMenu() {
    links.classList.remove("open");
}

menu.addEventListener("click", alternarMenu);

document.querySelectorAll("#links a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});


const observer = new IntersectionObserver(
    (elementos) => {
        elementos.forEach((elemento) => {
            if (elemento.isIntersecting) {
                elemento.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1
    }
);

document.querySelectorAll(".reveal").forEach((elemento) => {
    observer.observe(elemento);
});


const botoesFiltro = document.querySelectorAll(".filters button");
const telas = document.querySelectorAll(".imagens figure");

function atualizarFiltro(botaoSelecionado) {
    botoesFiltro.forEach((botao) => {
        botao.classList.remove("active");
    });

    botaoSelecionado.classList.add("active");

    const filtro = botaoSelecionado.dataset.filter;

    telas.forEach((tela) => {
        const pertenceAoFiltro =
            filtro === "all" || tela.dataset.cat === filtro;

        tela.style.display = pertenceAoFiltro ? "" : "none";
    });
}

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        atualizarFiltro(botao);
    });
});


const lightbox = document.getElementById("lightbox");
const imagemAmpliada = document.getElementById("big");
const legenda = document.getElementById("caption");
const botaoFechar = document.getElementById("close");

function abrirLightbox(tela) {
    const imagem = tela.querySelector("img");
    const titulo = tela.querySelector("b");

    imagemAmpliada.src = imagem.src;
    legenda.textContent = titulo.textContent;

    lightbox.classList.add("open");
}

function fecharLightbox() {
    lightbox.classList.remove("open");
}

document.querySelectorAll(".imagens figure").forEach((tela) => {
    tela.addEventListener("click", () => {
        abrirLightbox(tela);
    });
});

botaoFechar.addEventListener("click", fecharLightbox);

lightbox.addEventListener("click", (evento) => {
    if (evento.target === lightbox) {
        fecharLightbox();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        fecharLightbox();
    }
});


const VIDEO_URL = assets/video/video.mp4;

document.getElementById("video").href = VIDEO_URL;