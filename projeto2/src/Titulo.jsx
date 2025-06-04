function Titulo(){

    let nome = "Allany Santos";
    const soma = 10 + 11;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png";

    return (
        <div>
            <h1>Oi eu sou {nome} e tenho {soma} anos</h1>
            <img width={150} src={urlImg}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque fuga corporis, et dolorem, mollitia eveniet distinctio ab deserunt rem aut delectus. Quasi obcaecati, omnis in harum a quae error!</p>
        </div>
    )
}

export default Titulo