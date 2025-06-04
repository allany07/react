import Titulo from "./Titulo"

function App(){
  return(
    <div>
      <Titulo cor="red" nome="Allany" paragrafo={true} />
      <Titulo cor="blue"/>
      <Titulo cor="purple"/>
      <Titulo cor="orangered"/>
    </div>
  ) 
}

export default App