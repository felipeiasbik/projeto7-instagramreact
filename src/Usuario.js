import {useState} from "react";

export default function Usuario(){
    return (  
    <DadosUsuario/>
    )
}

function DadosUsuario(){
  const [nomeUsuario, setNomeUsuario] = useState("Anônimo(a)");
  const [urlPerfil, setUrlPerfil] = useState("assets/img/profile.jpg");
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