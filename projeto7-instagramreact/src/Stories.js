export default function Stories(){

    const listaStories = [
        {img: "assets/img/9gag.svg", texto: "9gag"},
        {img: "assets/img/meowed.svg", texto: "meowed"},
        {img: "assets/img/barked.svg", texto: "barked"},
        {img: "assets/img/nathanwpylestrangeplanet.svg", texto: "nathanwpylestrangeplanet"},
        {img: "assets/img/wawawicomics.svg", texto: "wawawicomics"},
        {img: "assets/img/respondeai.svg", texto: "respondeai"},
        {img: "assets/img/filomoderna.svg", texto: "filomoderna"},
        {img: "assets/img/memeriagourmet.svg", texto: "memeriagourmet"}
    ];

    return (
        <div className="stories">
            {listaStories.map( s => <Story key={s.texto} img={s.img} texto={s.texto} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props){
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.img} alt={props.texto} />
            </div>
            <div className="usuario">
                {props.texto}
            </div>
        </div>
    )
}