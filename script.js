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

// Galeria de Memórias - Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

// Abrir lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const imgAlt = item.querySelector('img').alt;

        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = imgAlt;
        lightbox.classList.add('active');

        // Prevenir scroll do body quando lightbox estiver aberto
        document.body.style.overflow = 'hidden';
    });
});

// Fechar lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

lightboxClose.addEventListener('click', closeLightbox);

// Fechar ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
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
