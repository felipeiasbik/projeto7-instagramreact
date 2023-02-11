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
    curtnumero: "99159"},
  
    {imgsrc: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs", 
    txtimg: "IMG", 
    contimgsrc: "https://i0.wp.com/imgonline.com.br/site/wp-content/uploads/2019/07/Capa-IMG.png", 
    conttxtimg: "WaltDisney", 
    curtimg: "https://www.procampuseducacao.com.br/wp-content/uploads/2017/08/fisk.jpg", 
    curtnome: "Fisk", 
    curtnumero: "80540"}
  
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

  function deuLikeImg(){
    if (like === "heart-outline"){
      setLike("heart");
      setCor("vermelho");
      setContagem(contagem + 1);
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