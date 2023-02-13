import {useState} from "react";

export default function Posts(){

  const arrPosts = [

    {imgsrc: "assets/img/meowed.svg", 
    txtimg: "meowed", 
    contimgsrc: "assets/img/gato-telefone.svg", 
    conttxtimg: "gato-telefone", 
    curtimg: "assets/img/respondeai.svg", 
    curtnome: "respondeai", 
    curtnumero: "101523"},
  
    {imgsrc: "assets/img/barked.svg", 
    txtimg: "barked", 
    contimgsrc: "assets/img/dog.svg", 
    conttxtimg: "dog", 
    curtimg: "assets/img/adorable_animals.svg", 
    curtnome: "adorable_animals", 
    curtnumero: "99159"}
  
  ];

    return (
        <div className="posts">
          {arrPosts.map( v => <Post key={v.curtnome} imgsrc={v.imgsrc} txtimg={v.txtimg} contimgsrc={v.contimgsrc} conttxtimg={v.conttxtimg} curtimg={v.curtimg} curtnome={v.curtnome} curtnumero={v.curtnumero}/>)}
        </div>
    )
}

function Post(props){
  const [salvar, setSalvar] = useState("bookmark-outline");
  const [like, setLike] = useState("heart-outline");
  const [cor, setCor] = useState("preto");
  const [contagem, setContagem] = useState(parseInt(props.curtnumero));
  const [animaLike, setAnimaLike] = useState("esconder");

  function deuLike(){
    if (like === "heart-outline"){
      setLike("heart");
      setCor("vermelho");
      setContagem(contagem + 1);
    } else {
      setLike("heart-outline");
      setCor("preto");
      setContagem(contagem - 1);
    }
  }

  function animarLike(){
    setAnimaLike("animarLike");
    setTimeout((()=>setAnimaLike("esconder")),500);
  }

  function deuLikeImg(){
    if (like === "heart-outline"){
      setLike("heart");
      setCor("vermelho");
      setContagem(contagem + 1);
      animarLike();
    }
  }

  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imgsrc} alt={props.txtimg} />
          {props.txtimg}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <div className={animaLike}><ion-icon name="heart"></ion-icon></div>
        <img onDoubleClick={deuLikeImg} src={props.contimgsrc} alt={props.conttxtimg} data-test="post-image"/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon class={cor} onClick={deuLike} name={like} data-test="like-post"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div onClick={ () => setSalvar((salvar === "bookmark-outline") ? "bookmark" : "bookmark-outline")} data-test="save-post">
          <ion-icon name={salvar}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          { !props.curtnome ? "" : <img src={props.curtimg} alt={props.curtnome} />}
          <div className="texto" data-test="likes-number">
            { !props.curtnome ? "" : "Curtido por "}<strong>{props.curtnome}</strong> {!props.curtnome ? "" : (props.curtnumero < 1) ? "" : "e "} <strong>{!props.curtnome ? "" : (props.curtnumero < 1) ? "" : (props.curtnumero < 2) ? "mais " : "outras "}{!props.curtnome ? "" : (props.curtnumero < 1) ? "" : contagem.toLocaleString('pt-BR')}  {!props.curtnome ? "" : (props.curtnumero < 1) ? "" : (props.curtnumero < 2) ? "pessoa" : "pessoas"}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}