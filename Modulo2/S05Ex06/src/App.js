
import './styles/App.css';
//aqui é a importação do App.css(folha de estilo) e da logo
//no componente react é necessário importar a stylesheet
import Header from './components/Header';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}



//No React, tudo deve ser encapsulado em uma única tag, neste caso, uma div
// classe é className, e é ultilizado para poder puxar um CSS 
//ATENÇÃO: na tag imagem, há a importação de um source sempre é colocada entre chaves {}, pois ele é já uma variável js

export default App;
