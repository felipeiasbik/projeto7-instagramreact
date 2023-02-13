import {useState} from "react";

export default function Usuario(){
    return (  
    <DadosUsuario nomeDoUsuario="Anônimo(a)" urlDoPerfil="assets/img/profile.jpg"/>
    )
}

function DadosUsuario(props){
  const [nomeUsuario, setNomeUsuario] = useState(props.nomeDoUsuario);
  const [urlPerfil, setUrlPerfil] = useState(props.urlDoPerfil);
  return (
  <div className="usuario">
    <img onClick={() => setUrlPerfil(prompt('Qual a URL da imagem de Perfil?'))} src={!urlPerfil ? "assets/img/profile.jpg" : urlPerfil} alt="imagem de perfil" data-test="profile-image"/>
    <div className="texto">
      <span>
        <strong data-test="name">{nomeUsuario ? nomeUsuario : "Anônimo(a)"}</strong>
        <ion-icon onClick={() => setNomeUsuario(prompt('Qual é o seu nome?'))} name="pencil" data-test="edit-name"></ion-icon>
      </span>
    </div>
  </div>
  )
}