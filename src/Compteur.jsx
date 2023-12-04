import { useState } from "react";

function Compteur() {
    const [compteur, setCompteur] = useState(0);

    const handleClick = () => {
        let tmp = compteur
        tmp++
        
        setCompteur(tmp)
    }

  return ( 
    <div>
        <button onClick={handleClick}>Compteur = {compteur}</button>
    </div>
  );
}

export default Compteur;