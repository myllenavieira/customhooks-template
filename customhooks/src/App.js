import React from "react";
import { Title, NameContainer, PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
// import useCapturarNome from "./hooks/useCapturarNome";
// import useCapturarPostagens from "./hooks/useCapturarPostagens";
import useRequestData from "./hooks/useRequestData";
import { BASE_URL, BASE_URL_HP } from "./constants/constants";
function App() {

  // const nomeUsuarios = useCapturarNome()
  // const postagens = useCapturarPostagens()

  const [personagens, loading, erroPersonagens] = useRequestData(BASE_URL_HP, "characters/students")
  const [magias, loading2, erroMagias] = useRequestData(BASE_URL_HP, "spells")
  // const [nomeUsuarios, loading, erroUsuarios] = useRequestData(BASE_URL, 'users')
  // const [postagens, loading2, erroPostagens] = useRequestData(BASE_URL, 'comments')

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      {erroPersonagens && <p>Erro na requisição, aguarde!</p>}
      {!loading ?
        <NameContainer>
          {personagens.map((usuario) => {
            return (
              <Card
                key={usuario.id}
                text={usuario.name}
                backgroudColor={'nome'}
                textColor={'nome'}
              />)
          })}
        </NameContainer> :
        <p>Carregando...</p>
      }


      <hr />
      <Title>Comentários dos usuários</Title>
      {erroMagias && <p>Erro na requisição, aguarde!</p>}
      {!loading2 ?
        <PostContainer>
          {magias.map((post) => {
            //console.log(post);
            return (
              <Card
                key={post.id}
                text={post.name}
                backgroudColor={'#1dc690'}
                textColor={'#ffffff'}
              />)
          })}
        </PostContainer> :
        <p>Carregando...</p>
      }
    </div>
  );
}

export default App;



