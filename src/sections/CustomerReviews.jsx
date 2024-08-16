import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-playfair text-center text-4xl font-bold'>
      Ce que  
        <span className='text-amber-800'> nos clients  </span>
        disent ?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
      Lisez les témoignages authentiques de nos clients ravis
       et découvrez pourquoi ils nous font confiance.

      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
