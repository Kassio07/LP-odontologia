/* =====================================================
   ODONTOLOGIA — SCRIPT PRINCIPAL
   Funcionalidades: menu fixo/hambúrguer, scroll suave,
   accordion FAQ, contadores animados, reveal on scroll,
   botão voltar ao topo, validação de formulário.
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. HEADER: sombra ao rolar ---------- */
  const header = document.getElementById('header');
  const toggleHeaderState = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  toggleHeaderState();
  window.addEventListener('scroll', toggleHeaderState, { passive: true });

  /* ---------- 2. MENU HAMBÚRGUER (mobile) ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  const closeMenu = () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fecha o menu ao clicar em qualquer link
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- 3. SCROLL SUAVE PARA ÂNCORAS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 90;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- 4. ANIMAÇÃO "REVEAL" AO ROLAR A PÁGINA ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- 5. CONTADORES ANIMADOS (estatísticas do Hero) ---------- */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easing suave (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('pt-BR');
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('pt-BR');
      }
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(el => counterObserver.observe(el));

  /* ---------- 6. ACCORDION (FAQ) ---------- */
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    const panel = item.querySelector('.accordion__panel');

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Fecha todos os outros itens (comportamento tipo "sanfona" exclusivo)
      accordionItems.forEach(other => {
        if (other !== item) {
          other.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
          other.querySelector('.accordion__panel').style.maxHeight = null;
        }
      });

      // Alterna o item clicado
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
    });
  });

  /* ---------- 7. BOTÃO VOLTAR AO TOPO ---------- */
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- 8. ANO ATUAL NO RODAPÉ ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 9. VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---------- */
  const form = document.getElementById('contact-form');

  const validators = {
    name: (value) => {
      if (!value.trim()) return 'Por favor, informe seu nome.';
      if (value.trim().length < 3) return 'Informe seu nome completo.';
      return '';
    },
    email: (value) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) return 'Por favor, informe seu e-mail.';
      if (!re.test(value.trim())) return 'Informe um e-mail válido.';
      return '';
    },
    phone: (value) => {
      const digits = value.replace(/\D/g, '');
      if (!digits) return 'Por favor, informe um telefone.';
      if (digits.length < 10) return 'Informe um telefone válido com DDD.';
      return '';
    },
    message: (value) => {
      if (!value.trim()) return 'Conte um pouco sobre o que você procura.';
      if (value.trim().length < 10) return 'Sua mensagem está muito curta.';
      return '';
    }
  };

  const showError = (field, message) => {
    const row = form.querySelector(`#${field}`).closest('.form__row');
    const errorSpan = form.querySelector(`[data-error-for="${field}"]`);
    row.classList.toggle('has-error', Boolean(message));
    errorSpan.textContent = message;
  };

  // Validação em tempo real ao sair do campo
  Object.keys(validators).forEach(field => {
    const input = form.querySelector(`#${field}`);
    input.addEventListener('blur', () => {
      showError(field, validators[field](input.value));
    });
  });

  // Validação completa ao enviar
  form.addEventListener('submit', (e) => {
    let isValid = true;

    Object.keys(validators).forEach(field => {
      const input = form.querySelector(`#${field}`);
      const error = validators[field](input.value);
      showError(field, error);
      if (error) isValid = false;
    });

    if (!isValid) {
      e.preventDefault();
      const firstError = form.querySelector('.has-error input, .has-error textarea');
      if (firstError) firstError.focus();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
  });

});
