export default function Posts(){

  const arrPosts = [

    {imgsrc: "assets/img/meowed.svg", 
    txtimg: "meowed", 
    contimgsrc: "assets/img/gato-telefone.svg", 
    conttxtimg: "gato-telefone", 
    curtimg: "assets/img/respondeai.svg", 
    curtnome: "respondeai", 
    curtnumero: "101.523"},
  
    {imgsrc: "assets/img/barked.svg", 
    txtimg: "barked", 
    contimgsrc: "assets/img/dog.svg", 
    conttxtimg: "dog", 
    curtimg: "assets/img/adorable_animals.svg", 
    curtnome: "adorable_animals", 
    curtnumero: "99.159"},
  
    {imgsrc: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs", 
    txtimg: "IMG", 
    contimgsrc: "https://i0.wp.com/imgonline.com.br/site/wp-content/uploads/2019/07/Capa-IMG.png", 
    conttxtimg: "WaltDisney", 
    curtimg: "https://www.procampuseducacao.com.br/wp-content/uploads/2017/08/fisk.jpg", 
    curtnome: "Fisk", 
    curtnumero: "80.567"}
  
  ];

    return (
        <div class="posts">
          {arrPosts.map( v => <Post imgsrc={v.imgsrc} txtimg={v.txtimg} contimgsrc={v.contimgsrc} conttxtimg={v.conttxtimg} curtimg={v.curtimg} curtnome={v.curtnome} curtnumero={v.curtnumero}/>)}
        </div>
    )
}

function Post(props){
  return (
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.imgsrc} alt={props.txtimg} />
        {props.txtimg}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.contimgsrc} alt={props.conttxtimg} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        { !props.curtnome ? "" : <img src={props.curtimg} alt={props.curtnome} />}
        <div class="texto">
          {/*props.curtidas*/}
          { !props.curtnome ? "" : "Curtido por "}<strong>{props.curtnome}</strong> {!props.curtnome ? "" : (props.curtnumero < 1) ? "" : "e "} <strong>{!props.curtnome ? "" : (props.curtnumero < 1) ? "" : (props.curtnumero < 2) ? "mais " : "outras "}{!props.curtnome ? "" : (props.curtnumero < 1) ? "" : props.curtnumero}  {!props.curtnome ? "" : (props.curtnumero < 1) ? "" : (props.curtnumero < 2) ? "pessoa" : "pessoas"}</strong>
        </div>
      </div>
    </div>
  </div>
  )
}