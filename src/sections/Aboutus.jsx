import React from 'react';
import { coffeebean } from '../assets/icons';
import TimelineComponent from './Timeline'; 

const Aboutus = () => {
  const timelineData = [
    {
      date: "L'histoire de Khatra",
      title: "2020",
      description: "L'histoire de Khatra a commencé en 2020 avec un simple chariot mobile à café. \"Khatra Café\" est rapidement devenu un refuge pour tous, jeunes et moins jeunes. Grâce à la qualité incomparable de notre café et au soutien indéfectible de nos clients fidèles, notre projet a connu une croissance fulgurante. Aujourd'hui, nous sommes fiers de posséder plus de 64 branches à travers le Maroc, chacune respectant les valeurs et les racines qui ont fait notre succès."
    },
    {
      date: "Bien Plus Qu'un Café",
      title: "",
      description: "Depuis notre lancement en 2020, Khatra Café s’est imposé comme une référence incontournable pour les amateurs de café à travers le Maroc. Ce qui a commencé comme un humble chariot de café mobile dans un quartier tranquille est rapidement devenu une histoire de succès, grâce à la passion et au dévouement que nous mettons dans chaque tasse que nous servons."
    },
    {
      date: "Notre Mission",
      title: "",
      description: "Chez Khatra, notre mission est simple : offrir à nos clients la meilleure expérience café possible. Pour nous, le café est bien plus qu'une boisson – c'est un art. Nous sélectionnons avec soin les grains de café les plus fins, issus des meilleures plantations du monde, pour créer des mélanges uniques qui ravissent les palais les plus exigeants. Chaque tasse que nous servons est le fruit d’un savoir-faire maîtrisé et d’un amour inconditionnel pour le café."
    },
    {
      date: "Une Croissance Ancrée",
      title: "",
      description: "Grâce à l'exceptionnelle qualité de notre café et au soutien fidèle de notre clientèle, nous avons rapidement élargi notre présence. Aujourd'hui, nous sommes fiers de compter plus de 64 succursales à travers le Maroc, chacune d'entre elles incarnant les valeurs qui nous sont chères : authenticité, qualité, et un service client irréprochable."
    },
    {
      date: "Qualité, Tradition et Innovation",
      title: "actuellement",
      description: "Khatra s'engage à maintenir un équilibre parfait entre tradition et innovation. Nous respectons profondément nos racines tout en restant à l'avant-garde des tendances du café. Que ce soit dans le choix de nos ingrédients, la formation de notre personnel, ou la conception de nos cafés, nous nous efforçons de rester fidèles à ce qui fait notre succès tout en vous offrant de nouvelles expériences gustatives."
    }
  ];

  const faqs = [
    {
      question: "Qu’est-ce qui rend Khatra Café unique ?",
      answer: "Khatra Café se distingue par sa passion pour l’excellence. Nous sélectionnons les meilleurs grains de café et utilisons des méthodes de préparation qui respectent la tradition tout en intégrant des innovations modernes. Chaque tasse que nous servons est conçue pour offrir une expérience gustative inégalée."
    },
    {
      question: "Où puis-je trouver un Khatra Café près de chez moi ?",
      answer: "Nous avons plus de 64 succursales à travers le Maroc. Pour trouver la succursale la plus proche, vous pouvez consulter la section 'Nos Cafés' sur notre site web ou utiliser notre application mobile, qui inclut une carte interactive."
    },
    {
      question: "Quels types de café proposez-vous ?",
      answer: "Nous offrons une large gamme de cafés, allant des classiques comme l’espresso et le cappuccino, à des créations uniques inspirées des saveurs locales. Nous proposons également des options de café biologique et des mélanges spéciaux pour répondre à tous les goûts."
    },
    {
      question: "Puis-je acheter vos grains de café en ligne ?",
      answer: "Oui, vous pouvez acheter nos grains de café directement sur notre site web. Nous offrons une sélection de nos meilleurs mélanges, disponibles en différentes tailles pour s’adapter à vos besoins."
    },
    {
      question: "Comment puis-je devenir franchisé Khatra Café ?",
      answer: "Nous sommes toujours à la recherche de partenaires passionnés pour rejoindre notre famille en tant que franchisés. Si vous êtes intéressé, rendez-vous sur la page 'Devenez Franchisé' pour plus d’informations sur les conditions et les étapes à suivre."
    },
    {
      question: "Quels sont les horaires d’ouverture de vos cafés ?",
      answer: "Les horaires d’ouverture peuvent varier d’une succursale à l’autre. Nous vous recommandons de consulter la page dédiée à votre succursale locale sur notre site web ou de contacter directement le café pour connaître les heures exactes."
    },
    {
      question: "Proposez-vous des options de fidélité ou des réductions ?",
      answer: "Oui, nous offrons un programme de fidélité qui vous permet de gagner des points à chaque achat, que vous pouvez ensuite échanger contre des réductions ou des produits gratuits. Nous proposons également des offres spéciales et des réductions tout au long de l'année."
    },
    {
      question: "Puis-je organiser des événements privés dans un Khatra Café ?",
      answer: "Certainement ! Plusieurs de nos succursales offrent la possibilité de réserver des espaces pour des événements privés tels que des réunions, des anniversaires ou des sessions de dégustation. Contactez votre succursale locale pour plus de détails."
    },
    {
      question: "Comment puis-je contacter le service client ?",
      answer: "Vous pouvez nous contacter via le formulaire de contact sur notre site web, par e-mail, ou directement en appelant notre service client : XXXXXXXXXXX. Nous nous engageons à répondre à toutes vos questions et à vous assister dans les plus brefs délais."
    },
  ];

  return (
    <div className="bg-gradient-to-r from-brown-500 via-black to-gold-500 min-h-screen py-10">
      <h1 className='text-4xl text-center font-playfair font-extrabold text-[#3C2F2F]'>Khatra Café : L’Art du Café Authentique</h1>
      <section className="text-center mb-10 px-4 md:px-8">
        <div className="bg-gradient-to-r from-brown-500 via-black to-gold-500 min-h-screen py-10">
          <TimelineComponent data={timelineData} />
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-8">
        <div className="divider divider-neutral">
          <img src={coffeebean} alt="Coffee Bean" className="h-14 w-14" />
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-brown-800 text-gold-400 rounded-lg mb-4 shadow-lg">
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title text-xl font-bold text-black ">{faq.question}</div>
            <div className="collapse-content">
              <p className="text-lg text-brown-200">{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Aboutus;
