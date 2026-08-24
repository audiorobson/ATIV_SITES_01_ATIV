/** ATIV — tokens de marca para Tailwind
 *  Gerado a partir de brand/tokens/ativ-ui.css. Fonte de verdade: o CSS.
 *  Se um valor divergir, o CSS vence — regenere este arquivo, não o contrário.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: {
          profundo: '#1B1F3B',
          DEFAULT:  '#4B4FA6',
          900:      '#12152C',
          800:      '#262B4D',
          700:      '#2E3358',
          600:      '#3B4170',
          300:      '#B6BAD0'
        },
        ambar: { DEFAULT: '#F5A623', 400: '#FFB53D' },
        ardosia: { DEFAULT: '#6E7686', 400: '#8A90A6', 800: '#3A3F5C' },
        gelo: { DEFAULT: '#F1F2F6', 300: '#DCDEE8', 200: '#E7E9F0' },
        estado: {
          aprovado:  '#1F8A4C',
          ativo:     '#5DD68A',
          atencao:   '#B0731A',
          reprovado: '#C0392B'
        }
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        corpo:   ['IBM Plex Sans', 'sans-serif'],
        dados:   ['IBM Plex Mono', 'monospace']
      },
      // escala de espaço da ATIV — base 4px, passo não-linear
      spacing: {
        'e-1': '4px',   'e-2': '8px',   'e-3': '12px',  'e-4': '16px',
        'e-5': '24px',  'e-6': '32px',  'e-7': '48px',  'e-8': '72px',
        'e-9': '96px',  'e-10': '144px'
      },
      borderRadius: {
        controle: '6px',
        menu:     '4px',
        cartao:   '10px',
        pilula:   '100px'
      },
      maxWidth: {
        grade: '1180px',
        medida: '68ch',
        'medida-curta': '46ch',
        'medida-titulo': '22ch'
      },
      transitionDuration: {
        instante: '90ms',
        rapido:   '180ms',
        padrao:   '280ms',
        amplo:    '460ms',
        cena:     '900ms'
      },
      transitionTimingFunction: {
        entrada: 'cubic-bezier(0, 0, .2, 1)',
        saida:   'cubic-bezier(.4, 0, 1, 1)',
        padrao:  'cubic-bezier(.2, 0, 0, 1)',
        firme:   'cubic-bezier(.16, 1, .3, 1)'
      },
      outlineWidth: { foco: '3px' },
      outlineOffset: { foco: '2px' },
      keyframes: {
        'ativ-entra': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'none' }
        },
        'ativ-revela': {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to:   { clipPath: 'inset(0 0 0 0)' }
        }
      },
      animation: {
        entra:  'ativ-entra 460ms cubic-bezier(0,0,.2,1) both',
        revela: 'ativ-revela 460ms cubic-bezier(.16,1,.3,1) both'
      }
    }
  }
};
