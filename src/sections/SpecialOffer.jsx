import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";
import { banner } from "../../public/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={banner}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-playfair font-bold'>
          <span className='text-amber-900'>Special </span>
          Offer
        </h2>
        <p className='mt-4 text-black font-semibold text-xl'>
        En utilisant nos produits "Khatra", vous aurez l'opportunité d'améliorer votre café de manière exponentielle. Nous offrons une large gamme de produits, allant des grains de café de haute qualité aux tasses, en passant par des poudres et bien plus encore.         </p>
        <p className='mt-6 text-black font-semibold text-xl'>

        Chaque élément est soigneusement sélectionné pour garantir une expérience café exceptionnelle, permettant à votre établissement de se démarquer et de ravir vos clients à chaque tasse.        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Link to="/contact"><Button label='Voir les produits' iconURL={arrowRight}/></Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
