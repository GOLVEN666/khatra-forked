import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-playfair font-bold'>
          Nos <span className='text-amber-900'> produits </span> Populaires
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Découvrez l’excellence et le style inégalés avec nos sélections de café renommées.
         Plongez dans un monde de confort, de design et de valeur avec Khatra .
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
