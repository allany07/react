function Titulo({nome, paragrafo, cor}){
    return (
        <div>
            <h1 style={{color: cor}}>Oi eu sou {nome ? nome : "Fulano"}</h1>
            { paragrafo ?
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque fuga corporis, et dolorem, mollitia eveniet distinctio ab deserunt rem aut delectus. Quasi obcaecati, omnis in harum a quae error!</p>
            :
            <p></p>
            }
        </div>
    )
}

export default Titulo