import { useState } from "react";

function Nom() {
    const [nom, setNom] = useState("");  
    const [prenom, setPrenom] = useState("");

    const handleChaneNom = (event) => {
      setNom(event.target.value);
    }

    const handleChanePrenom = (event) => {
      setPrenom(event.target.value);
    }

  return (
    <div>
      <input type="text" value={nom} onChange={handleChaneNom}/>
      <input type="text" value={prenom} onChange={handleChanePrenom}/>

      <div>
        Bonjour {prenom} {nom}
      </div>
    </div>
  );
}

export default Nom;