/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import historia from '../../img/historia.jpg'
import mapa from '../../img/map.svg'
import damor from '../../img/damor.png'
import './Perfil.css'

export default () => {
  return (
    <>
      <container className="pagina-principal-perfil" >
        <div className="capa">

          <img src={damor} className="fotoperfil" />
        </div>
        <p className='nome-da-pessoa'>Sindy Paltriniere</p>
        <p className='nome-do-empreendimento'>D` Amor | Doceria Artesanal</p>
        <div className='endereco'>
          <img src={mapa} className="mapa" />
          <p className='endereco'>São Gonçalo, Rio de Janeiro - RJ - 22221-030</p>
        </div>
        <h2 className="titulo-destaque">Fotos</h2>
        <img src={historia} className="historia" />
        <h2 className="titulo-destaque">Sua história</h2>
        <p>Nossos brownies, cookies e pão de mel são fruto de uma busca obsessiva por receitas únicas. Algumas de nossas fórmular foram criadas após centenas de testes, anos de repetição e aperfeiçoamento. Isso porque a gente tá aqui pra deixar seu dia mais gostoso. Doce é afeto, é afago, é cuidado. E a gente gosta de espalhar amor em forma de bolinhos por ai. Então é isso: aqui absolutamente tudo é feito com amor, empatia e respeito. E tudo é bem fresquinho, produzido por pessoas cuidadosas e generosas.

          Assim a vida pode ser mais doce ;
        </p>
        <h2 className="titulo-destaque">Mais informações</h2>
        <a href="https://www.instagram.com/">@doces.d.amor</a>
      </container>
    </>
  )
}