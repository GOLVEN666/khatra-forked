import { ReviewCard } from "../components";
import { reviews } from "../constants";
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const CustomerReviews = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className='max-container'>
      <h3 className='font-playfair text-center text-4xl font-bold'>
        {t.customerReviewsTitle1} 
        <span className='text-amber-800'> {t.customerReviewsTitle2} </span>
        {t.customerReviewsTitle3}
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center info-text'>
        {t.customerReviewsDesc}
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
