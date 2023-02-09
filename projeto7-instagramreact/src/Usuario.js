
export default function Usuario(){
  let nomeUsuario = prompt("Qual é o seu nome?");
  const arrUsuario = [{urlperfil: "assets/img/catanacomics.svg", nomeusuario: nomeUsuario}];
    return (
        arrUsuario.map( v => <DadosUsusario urlperfil={v.urlperfil} nomeusuario={v.nomeusuario}/>)
    )
}

function DadosUsusario(props){
  return (
    <div class="usuario">
      <img src={props.urlperfil} alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong>{props.nomeusuario ? props.nomeusuario : "Anônimo(a)"}</strong>
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}