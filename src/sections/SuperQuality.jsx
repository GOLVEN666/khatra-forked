import { khatra_shop } from "../../public/images";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-playfair capitalize text-4xl lg:max-w-lg font-bold">
       
          Nous vous offrons 
          <span className="text-amber-900"> du café  </span>
          <span className="text-amber-900">de qualité  </span> supérieure.
        </h2>
        <p className="mt-4 lg:max-w-lg text-black font-semibold text-xl">
        Chez Khatra, nous ne faisons pas que servir du café, nous créons une expérience unique qui réveille vos sens et réchauffe votre cœur. Depuis notre modeste début en 2020 avec un simple chariot mobile dans un quartier tranquille, nous avons su captiver l'âme de nos clients grâce à la qualité exceptionnelle de notre café. Ce qui n'était qu'un rêve est devenu une réalité florissante, avec plus de 64 succursales à travers tout le Maroc.
        </p>

        <div className="mt-11">
        <Link to="/products"><Button label='Voir les produits' iconURL={arrowRight} /></Link>
        </div>

      </div>
      <div className="divider divider-neutral">
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={khatra_shop}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain rounded-md'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
