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
        title: "Momentos Inesquecíveis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Nossos Sorrisos",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
        title: "Alegria do Cotidiano",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    },
    {
        title: "Instantes Especiais",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
        title: "Compartilhando a Vida",
        description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
    },
    {
        title: "Juntos Sempre",
        description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
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
