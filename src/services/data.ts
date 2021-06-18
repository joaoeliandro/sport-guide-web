import nadoImg from '../assets/nado-olimpico.png';
import futebolImg from '../assets/futebol.png';
import basqueteImg from '../assets/basquete.png';
import voleibolImg from '../assets/voleibol.png';
import halterofilismoImg from '../assets/halterofilismo.png';

const sports = [
  {
    name: 'Futebol',
    description: 'Um desporto de equipe com dois times de 11 jogadores e um árbitro que aplica as normas corretamente.',
    logo: futebolImg,
    wikipedia: 'https://pt.wikipedia.org/wiki/Futebol',
    links: [
      {
        font: "https://mrvnoesporte.com.br/futebol-no-brasil-conheca-os-maiores-marcos-do-esporte-no-nosso-pais/",
        image: "https://mrvnoesporte.com.br/wp-content/uploads/2018/05/195150-futebol-no-brasil-conheca-os-maiores-marcos-do-esporte-no-nosso-pais-1.jpg",
      },
      {
        font: "https://agenciabrasil.ebc.com.br/esportes/noticia/2020-04/fifpro-diz-que-coronavirus-ameaca-crescimento-do-futebol-feminino",
        image: "https://imagens.ebc.com.br/Ve-e8FLePxk2eUe4-0gYVxUzUNk=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/brasil_holanda_futebol_feminino_torneio_franca.jpg",
      },
      {
        font: "https://www.verminososporfutebol.com.br/viagem-no-tempo/5-jogos-de-futebol-que-valem-a-pena-rever/",
        image: "https://www.verminososporfutebol.com.br/wp-content/uploads/2020/03/brazil-holland-1998.jpg",
      },
      {
        font: "https://www.redebrasilatual.com.br/esportes/2019/12/justica-do-trabalho-libera-jogos-de-futebol-em-horario-contestado-pelo-ministerio-publico/",
        image: "https://www.redebrasilatual.com.br/wp-content/uploads/2019/12/copa-2014.jpg",
      },
    ]
  },
  {
    name: 'Nado Olímpico',
    description: 'Esporte tradicional dos Jogos Olímpicos, onde o participante enfrenta provas no meio aquático em diferentes disntâncias.',
    logo: nadoImg,
    wikipedia: 'https://pt.wikipedia.org/wiki/Nata%C3%A7%C3%A3o_nos_Jogos_Ol%C3%ADmpicos',
    links: [
      {
        font: "https://www.oitomeia.com.br/esporte/2018/07/09/toquio-2020-teresinense-pode-ser-tonar-o-nadador-olimpico-mais-jovem-do-brasil/",
        image: "https://www.oitomeia.com.br/wp-content/uploads/2018/07/Joab-nadador-750x500.jpg",
      },
      {
        font: "https://www.surtoolimpico.com.br/2016/03/torneio-qualificatorio-olimpico-de-nado_6.html",
        image: "https://1.bp.blogspot.com/-xzm2XiRgtEI/VtyVJKLDhwI/AAAAAAAAOBw/ClNvZVhCJyI/s1600/synchro-day-3-italy.jpg",
      },
      {
        font: "https://cbda.org.br/media/galeria/576/Treino%20da%20selecao%20brasileira%20de%20nado%20sincronizado%20no%20parque%20aquatico%20Maria%20Lenk.%20Jogos%20Olimpicos%20Rio%202016.",
        image: "https://sge-aquaticos.bigmidia.com/_uploads/fotos/0576/p1apbcjej61gbu15hj1b2u1k8b1v8bd.jpg",
      },
      {
        font: "https://www.metropoles.com/esportes/jogos-olimpicos-2016/deu-phelps-americano-conquista-ouro-nos-200-metros-borboleta?amp",
        image: "https://uploads.metropoles.com/wp-content/uploads/2016/08/09223049/nata%C3%A7%C3%A3o-1.jpg",
      },
    ]
  },
  {
    name: 'Basquete',
    description: 'Um desporto coletivo e olímpico inventado em 1891 em Massachusetts, EUA.',
    logo: basqueteImg,
    wikipedia: 'https://pt.wikipedia.org/wiki/Basquetebol',
    links: [
      {
        font: "https://veja.abril.com.br/esporte/por-que-os-lances-de-tres-pontos-estao-mudando-o-basquete/",
        image: "https://veja.abril.com.br/wp-content/uploads/2020/01/james-harden-basquete-2019-405.jpg.jpg",
      },
      {
        font: "https://www.olimpiadatododia.com.br/basquete/178192-ao-vivo-brasil-x-montenegro-mundial-basquete-2019/",
        image: "https://www.olimpiadatododia.com.br/wp-content/uploads/2019/09/bra-mont.jpg",
      },
      {
        font: "https://www.surtoolimpico.com.br/2020/08/fberj-e-flamengo-anunciam-o-maior.html",
        image: "https://1.bp.blogspot.com/-Ug_IrsqPAhw/X0WbxxgKv_I/AAAAAAAALio/-13jjYa3v_ULcn05dKyvoNmSHxrijr9wwCLcBGAsYHQ/s2048/campeonato-carioca-basquete-2019.jpg",
      },
      {
        font: "https://www.surtoolimpico.com.br/2021/03/sesi-araraquara-derrota-sampaio.html",
        image: "https://1.bp.blogspot.com/-cynEgbLrV0c/YE5nKI6pAsI/AAAAAAAAJV8/OtP2D7zbPjgXSJtxoxEKLBwmPPFS7MpzACLcBGAsYHQ/s1080/sesi%2Bararaquara%2Bx%2Bsampaio%2Bbasquete.jpg",
      },
    ]
  },
  {
    name: 'Voleibol',
    description: 'Um desporto de quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado.',
    logo: voleibolImg,
    wikipedia: 'https://pt.wikipedia.org/wiki/Voleibol',
    links: [
      {
        font: "http://www.dicionarioolimpico.com.br/voleibol/cenario/quadra",
        image: "https://lh3.googleusercontent.com/proxy/1tVwIp1x0-haq_-t4eyXC2_FWY-N7DvlJytTLWmzapwuA4dq9h2lZGVrgC7_cDH6gzHEJcpnhqPbWCr7cfSIa9OIbrog1uQTKrvtiW4JIzZMRh5MIDsRr1le1uAofSP-JLtz_jEvTzKMRreg9Zu5NoEI",
      },
      {
        font: "https://www.lance.com.br/volei/brasil-perde-para-servia-segunda-rodada-grand-prix.html",
        image: "https://www.lance.com.br/files/article_main/uploads/2016/06/17/57642a30eaad7.jpeg",
      },
      {
        font: "https://brasilescola.uol.com.br/educacao-fisica/o-brasil-no-voleibol.htm",
        image: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/selecao-feminina-volei-brasileiro-vs-republica-dominicana-durante-copa-mundo-voleibol-em-milao-2014-5a61dd1800d77.jpg",
      },
      {
        font: "https://www1.folha.uol.com.br/esporte/olimpiada-no-rio/2016/08/1799991-brasil-perde-set-para-o-mexico-mas-vence-na-estreia-do-volei-masculino.shtml",
        image: "https://f.i.uol.com.br/fotografia/2016/08/07/628739-970x600-1.jpeg",
      },
    ]
  },
  {
    name: 'Halterofilismo',
    description: 'Um desporto onde o atleta tenta levantar o maior peso possível, do chão até sobre a cabeça, numa barra de pesos fixados.',
    logo: halterofilismoImg,
    wikipedia: 'https://pt.wikipedia.org/wiki/Halterofilismo',
    links: [
      {
        font: "https://agenciaolimpica.com.br/internacional/2845/duas-campeas-olimpicas-do-halterofilismo-sao-pegas-no-doping/",
        image: "https://agenciaolimpica.com.br/wp-content/uploads/2019/01/sdut-thailands-sopita-tanasan-wins-48kg-gold-in-2016aug06.jpg",
      },
      {
        font: "https://maisfutebol.iol.pt/modalidades/sohrab-moradi/iraniano-bateu-o-recorde-mais-antigo-no-halterofilismo",
        image: "https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/5b8132660cf2532cd6cb091f/1024",
      },
      {
        font: "https://suplementosbrasil.org/musculacao/halterofilismo/",
        image: "https://www.suplementosbrasil.org/wp-content/uploads/2018/07/Halterofilismo-2.jpg",
      },
      {
        font: "http://www.espn.com.br/noticia/319562_ouro-em-sydney-2000-halterofilista-morre-de-infarto-aos-35-anos",
        image: "https://i.pinimg.com/originals/59/d4/36/59d436624c1933589c85c9b4b227b56e.gif",
      },
    ]
  },
]

export default sports;
