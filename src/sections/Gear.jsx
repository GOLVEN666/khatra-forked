import React from 'react';
import { khatra_gear } from '../../public/images';
import { Button } from '../components';
import { Link } from 'react-router-dom';
import { arrowRight } from '../assets/icons';

const GearSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-3/5">
        <img
          src={khatra_gear}
          alt="khatra gear"
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="w-full md:w-2/5 p-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-2 font-playfair ">Équipement de Café Parfait</h2>
        <p className="mb-4 text-black font-semibold text-xl">
        Chez Khatra, nous savons que le secret d’un café exceptionnel ne réside pas seulement dans les grains, mais aussi dans les outils que vous utilisez pour le préparer. Que vous soyez un amateur occasionnel ou un véritable connaisseur, notre gamme d’équipements de café a été soigneusement sélectionnée pour vous aider à perfectionner chaque tasse que vous préparez.
        </p>
        <Link to="/contact">
          <Button label='Devenir Franchisé' iconURL={arrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default GearSection;
