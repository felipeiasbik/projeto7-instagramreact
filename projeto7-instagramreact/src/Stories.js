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
        <div class="stories">
            {listaStories.map( s => <Story img={s.img} texto={s.texto} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props){
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.texto} />
            </div>
            <div class="usuario">
                {props.texto}
            </div>
        </div>
    )
}