// Animações sutis para o site da carta

// Função para animar o scroll suave
document.addEventListener('DOMContentLoaded', function () {
    // Animação de entrada da página
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';

    setTimeout(() => {
        container.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);

    // Efeito de brilho sutil no coração
    const heartIcon = document.querySelector('.heart-icon');
    if (heartIcon) {
        setInterval(() => {
            heartIcon.style.textShadow = '0 0 10px rgba(231, 76, 60, 0.5)';
            setTimeout(() => {
                heartIcon.style.textShadow = 'none';
            }, 500);
        }, 4000);
    }

    // Efeito de brilho nas bordas do container
    const letterWrapper = document.querySelector('.letter-wrapper');
    if (letterWrapper) {
        letterWrapper.addEventListener('mouseenter', () => {
            letterWrapper.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        });

        letterWrapper.addEventListener('mouseleave', () => {
            letterWrapper.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
    }

    // Animação de parallax sutil no background
    const body = document.body;
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        body.style.backgroundPosition = `center ${rate}px`;
    });

    // Efeito de digitação para o título (opcional)
    const title = document.querySelector('.letter-header h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Iniciar efeito de digitação após 500ms
        setTimeout(typeWriter, 500);
    }
});


// Efeito de hover suave no container (substitui a respiração)
const letterWrapper = document.querySelector('.letter-wrapper');
if (letterWrapper) {
    letterWrapper.addEventListener('mouseenter', () => {
        letterWrapper.style.transform = 'translateY(-3px) scale(1.005)';
        letterWrapper.style.transition = 'all 0.3s ease';
    });

    letterWrapper.addEventListener('mouseleave', () => {
        letterWrapper.style.transform = 'translateY(0) scale(1)';
    });
}

// Dados da Galeria de Memórias
const galleryData = [
    {
        title: "Mimollete",
        description: "A primeira vez que fomos ao Mimollete, olhando pra essa foto agora e vendo você linda, eu não imaginava o quão importante você seria pra mim."
    },
    {
        title: "Passeios De Bike Elétrica",
        description: "Eu amava esses passeios com você. Lembra quando eu te levava de manhã cedo pra Urca? Eram passeios simples, mas a sua presença fazia toda a diferença."
    },
    {
        title: "Sua Formatura",
        description: "Esse é um momento importante na sua vida, e assim como em tantos outros, eu faço questão de estar presente. Acredito que esses marcos fortalecem ainda mais a nossa relação. E que venham muitos outros momentos marcantes pra vivermos juntos."
    },
    {
        title: "Ilha Grande",
        description: "Você sabe o quanto eu gosto desse lugar, mas ele fica mil vezes melhor quando posso compartilhar com você."
    },
    {
        title: "Arraial - Primeira Baleia",
        description: "Lembro da gente avistando as baleias do mirante, com binóculos e câmera. Eu poderia passar o dia inteiro fazendo isso com você sem me cansar. E depois ainda ir pro Fixi, só pra aproveitar uma tarde tranquila do seu lado. Sou muito grato por viver tudo isso com você."
    },
    {
        title: "Arraial - Whale Watching",
        description: "E, como se não pudesse melhorar, foi indescritível ver as baleias de perto. O tamanho delas só não é maior do que a sua importância na minha vida. Espero que venham muitos outros momentos assim pra gente aproveitar juntos."
    },
    {
        title: "Seu Primeiro Emprego",
        description: "Esse é mais um marco. Eu lembro que, quando a moça te ligou oferecendo o trabalho, a gente se abraçou e começou a pular de alegria. Vendo essa foto agora me deixa emocionado e me faz lembrar o quão foda você é e o quanto eu tenho sorte de poder compartilhar esses momentos com você."
    },
    {
        title: "Canadá",
        description: "Nossa primeira viagem internacional juntos. Sem palavras pra descrever o que essa viagem significou pra mim. Ela foi simplesmente magnífica, extraordinária. Se eu pudesse, repetiria tudo de novo com você. A destilaria, o Parque Omega, ser acordado pelo uivo dos lobos… tudo isso e muito mais, sempre com você do meu lado."
    },
    {
        title: "Canadá - Again",
        description: "Mais uma vez, pra deixar registrado a importância dessa viagem com você na minha vida. Nesse dia, especificamente, estávamos apenas passeando pela cidade em direção ao jogo dos Leafs. Eu não achei que fosse ser um dia tão especial pra mim, mas o fato de poder passear com você pelas ruas, cada um com seu pumpkin spice, a experiência de comprar as camisas, assistir ao jogo e voltar de madrugada passeando fez desse um dos dias mais marcantes da minha vida. E eu agradeço muito por ter sido com você."
    }
];

// Galeria de Memórias - Modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalClose = document.querySelector('.modal-close');

// Abrir modal
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const index = parseInt(item.getAttribute('data-index'));

        // Buscar dados correspondentes
        const data = galleryData[index];

        modalImg.src = imgSrc;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modal.classList.add('active');

        // Permitir scroll interno no modal, mas evitar scroll da página
        document.body.style.overflow = 'hidden';

        // Ajustar posição do modal para ficar visível na viewport atual
        const modalContent = document.querySelector('.modal-content');
        const viewportHeight = window.innerHeight;
        const modalHeight = modalContent.offsetHeight;
        const scrollTop = window.pageYOffset;

        // Posicionar o modal no centro da viewport visível
        const topPosition = scrollTop + (viewportHeight / 2) - (modalHeight / 2);

        // Garantir que o modal não fique muito alto ou muito baixo
        const minTop = scrollTop + 50;
        const maxTop = scrollTop + viewportHeight - modalHeight - 50;

        let finalTop = Math.max(minTop, Math.min(maxTop, topPosition));

        // Aplicar a posição calculada
        modalContent.style.position = 'fixed';
        modalContent.style.top = finalTop + 'px';
        modalContent.style.left = '50%';
        modalContent.style.transform = 'translateX(-50%)';
    });
});

// Fechar modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

// Fechar ao clicar fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Efeito de zoom suave nas miniaturas
galleryItems.forEach(item => {
    const img = item.querySelector('img');

    item.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    item.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Animação de entrada da galeria
const gallerySection = document.querySelector('.gallery-section');
if (gallerySection) {
    gallerySection.style.opacity = '0';
    gallerySection.style.transform = 'translateY(30px)';

    setTimeout(() => {
        gallerySection.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        gallerySection.style.opacity = '1';
        gallerySection.style.transform = 'translateY(0)';
    }, 500);
}
