const arrSugestoes = [
    {img:"assets/img/bad.vibes.memes.svg", texto:"bad.vibes.memes"},
    {img:"assets/img/chibirdart.svg", texto:"chibirdart"},
    {img:"assets/img/razoesparaacreditar.svg", texto:"razoesparaacreditar"},
    {img:"assets/img/adorable_animals.svg", texto:"adorable_animals"},
    {img:"assets/img/smallcutecats.svg", texto:"smallcutecats"},
];

export default function Sugestoes(){
    return (
        <div class="sugestoes">
              <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
              </div>

              {arrSugestoes.map( v => <Sugestao img={v.img} texto={v.texto}/>)}

            </div>
    )
}

function Sugestao(props){
    return (
        <div class="sugestao">
        <div class="usuario">
            <img src={props.img} alt={props.texto} />
            <div class="texto">
            <div class="nome">{props.texto} </div>
            <div class="razao">Segue você</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
        </div>
    )
}