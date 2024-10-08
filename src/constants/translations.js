import { services } from ".";

export const translations = {
  en: {
    home: 'Home',
    subtext: 'Boost your mornings with our energizing coffee novelties.',
    products: 'Products',
    contact: 'Contact',
    aboutUs: 'About Us',
    all: 'All',
    cups: 'Cups',
    toppings: 'Toppings',
    coffee: 'Coffee',
    supplies: 'Supplies',
    cacao: 'Cacao',
    honey: 'Honey',
    contactUs: 'Contact Us',
    services: [
      {
        label: "Free Shipping",
        subtext: "Enjoy hassle-free shopping with our free shipping service."
      },
      {
        label: "High Quality",
        subtext: "Shop with confidence with our high-quality options."
      },
      {
        label: "We Love to Help",
        subtext: "Our dedicated team is here to assist you every step of the way."
      },
    ],
    footerLinks: {
      categories: [
        { name: "All", link: "/products?category=All" },
        { name: "Cups", link: "/products?category=Cups" },
        { name: "Toppings", link: "/products?category=Toppings" },
        { name: "Cacao", link: "/products?category=Cacao" },
        { name: "Supplies", link: "/products?category=Supplies" },
        { name: "Coffee", link: "/products?category=Coffee" },
        { name: "Honey", link: "/products?category=Honey" },
      ],
      help: [
        { name: "About Us", link: "/aboutus" },
        { name: "FAQs", link: "/aboutus" },
        { name: "Become a Franchisee", link: "/contact" },
      ],
      contact: [
        { name: "cafekhatra@khatracafe.com", link: "mailto:cafekhatra@khatracafe.com" },
        { name: "+212666666666", link: "tel:+212666666666" },
      ],
    },
    ourProducts: 'Our Products',
    productVariety: 'Here you will find a variety of our products.',
    franchise: 'Become a Franchisee',
    contactDesc: 'We are here to answer any questions or comments. Contact us and let’s make your coffee experience even better!',
    address: 'Our Address',
    openingHours: 'Opening Hours',
    weekdays: 'Monday - Friday: 08:00 - 17:00',
    weekends: 'Saturday & Sunday: 08:00 - 12:00',
    readyToStart: 'Ready to Start?',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email address',
    messagePlaceholder: 'Write your message...',
    sendMessage: 'Send Message',
    successMessage: 'Your message has been sent successfully!',
    buyNow: 'Buy Now',
    welcomeKhatra: 'Welcome to Khatra',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    aboutUsTitle: "Khatra Café: The Art of Authentic Coffee",
    timelineDate1: "The History of Khatra",
    timelineDesc1: "The history of Khatra began in 2020 with a simple mobile coffee cart. 'Khatra Café' quickly became a haven for everyone, young and old. Thanks to the unparalleled quality of our coffee and the unwavering support of our loyal customers, our project experienced rapid growth. Today, we are proud to own more than 64 branches across Morocco, each respecting the values and roots that made our success.",
    timelineDate2: "More Than Just Coffee",
    timelineDesc2: "Since our launch in 2020, Khatra Café has become a must-see for coffee lovers across Morocco. What began as a humble mobile coffee cart in a quiet neighborhood quickly turned into a success story, thanks to the passion and dedication we put into every cup we serve.",
    timelineDate3: "Our Mission",
    timelineDesc3: "At Khatra, our mission is simple: to provide our customers with the best coffee experience possible. For us, coffee is more than just a drink – it's an art. We carefully select the finest coffee beans from the best plantations in the world to create unique blends that delight even the most demanding palates. Every cup we serve is the result of mastered craftsmanship and unconditional love for coffee.",
    timelineDate4: "A Rooted Growth",
    timelineDesc4: "Thanks to the exceptional quality of our coffee and the loyal support of our customers, we have quickly expanded our presence. Today, we are proud to have more than 64 branches across Morocco, each embodying the values that are dear to us: authenticity, quality, and impeccable customer service.",
    timelineDate5: "Quality, Tradition, and Innovation",
    timelineTitle5: "Currently",
    timelineDesc5: "Khatra is committed to maintaining a perfect balance between tradition and innovation. We deeply respect our roots while remaining at the forefront of coffee trends. Whether in our choice of ingredients, staff training, or café design, we strive to stay true to what makes our success while offering you new taste experiences.",
    faqQuestion1: "What makes Khatra Café unique?",
    faqAnswer1: "Khatra Café stands out for its passion for excellence. We select the best coffee beans and use preparation methods that respect tradition while incorporating modern innovations. Every cup we serve is designed to offer an unparalleled taste experience.",
    faqQuestion2: "Where can I find a Khatra Café near me?",
    faqAnswer2: "We have over 64 branches across Morocco. To find the nearest branch, you can check the 'Our Cafés' section on our website or use our mobile app, which includes an interactive map.",
    faqQuestion3: "What types of coffee do you offer?",
    faqAnswer3: "We offer a wide range of coffees, from classics like espresso and cappuccino to unique creations inspired by local flavors. We also offer organic coffee options and special blends to suit all tastes.",
    faqQuestion4: "Can I buy your coffee beans online?",
    faqAnswer4: "Yes, you can buy our coffee beans directly from our website. We offer a selection of our best blends, available in different sizes to suit your needs.",
    faqQuestion5: "How can I become a Khatra Café franchisee?",
    faqAnswer5: "We are always looking for passionate partners to join our family as franchisees. If you are interested, visit the 'Become a Franchisee' page for more information on the requirements and steps to take.",
    faqQuestion6: "What are the opening hours of your cafés?",
    faqAnswer6: "Opening hours may vary from one branch to another. We recommend checking the dedicated page for your local branch on our website or directly contacting the café for exact hours.",
    faqQuestion7: "Do you offer loyalty options or discounts?",
    faqAnswer7: "Yes, we offer a loyalty program that allows you to earn points with every purchase, which you can then redeem for discounts or free products. We also offer special deals and discounts throughout the year.",
    faqQuestion8: "Can I host private events at a Khatra Café?",
    faqAnswer8: "Certainly! Many of our branches offer the possibility of reserving spaces for private events such as meetings, birthdays, or tasting sessions. Contact your local branch for more details.",
    faqQuestion9: "How can I contact customer service?",
    faqAnswer9: "You can contact us via the contact form on our website, by email, or directly by calling our customer service at XXXXXXXXXXX. We are committed to answering all your questions and assisting you as quickly as possible.",
    customerReviewsTitle1: "What",
    customerReviewsTitle2: "our clients",
    customerReviewsTitle3: "say?",
    customerReviewsDesc: "Read authentic testimonials from our delighted customers and discover why they trust us.",
    footerDesc: "Discover our latest coffee novelties, combining authentic flavors and unparalleled quality.",
    footerRights: "Khatra. All rights reserved",
    footerTerms: "Terms & Conditions",
    gearTitle: "Perfect Coffee Gear",
    gearDesc: "At Khatra, we know that the secret to exceptional coffee lies not just in the beans, but also in the tools you use to prepare it. Whether you're a casual enthusiast or a true connoisseur, our range of coffee equipment has been carefully selected to help you perfect every cup you brew.",
    gearButton: "Become a Franchisee",
    heroDesc: "Boost your mornings with our energizing coffee novelties.",
    heroButton: "View Products",
    popularProductsTitle1: "Our",
    popularProductsTitle2: "Popular Products",
    popularProductsDesc: "Discover unmatched excellence and style with our renowned coffee selections. Dive into a world of comfort, design, and value with Khatra.",
    serviceLabel1: "Fast Delivery",
    serviceDesc1: "Get your coffee delivered quickly and fresh.",
    serviceLabel2: "Quality Beans",
    serviceDesc2: "We source only the finest beans from around the world.",
    serviceLabel3: "Customer Support",
    serviceDesc3: "We're here to help with any of your coffee needs.",
    specialOfferTitle: "Special Offer",
    specialOfferDesc1: "Using our 'Khatra' products, you'll have the opportunity to exponentially improve your coffee. We offer a wide range of products, from high-quality coffee beans to cups, powders, and much more.",
    specialOfferDesc2: "Each element is carefully selected to ensure an exceptional coffee experience, allowing your establishment to stand out and delight your customers with every cup.",
    specialOfferButton: "View Products",
    specialOfferAlt: "Shoe Promotion",
    superQualityTitle1: "We offer you",
    superQualityTitle2: "high-quality",
    superQualityTitle3: "coffee",
    superQualityTitle4: "superior quality",
    superQualityDesc: "At Khatra, we don’t just serve coffee; we create a unique experience that awakens your senses and warms your heart. From our humble beginnings in 2020 with a simple coffee cart in a quiet neighborhood, we’ve captured the soul of our customers through the exceptional quality of Khatra coffee. What started as just a dream has become a flourishing reality, with more than 64 branches across Morocco.",
    superQualityButton: "View Products",
    superQualityImgAlt: "product detail",
  },
  ar: {
    home: 'الرئيسية',
    subtext: 'عزز صباحك مع مستجدات القهوة المنشطة لدينا.',
    products: 'المنتجات',
    contact: 'اتصل بنا',
    aboutUs: 'معلومات عنا',
    all: 'الكل',
    cups: 'أكواب',
    toppings: 'إضافات',
    coffee: 'قهوة',
    supplies: 'مستلزمات',
    cacao: 'كاكاو',
    honey: 'عسل',
    contactUs: 'اتصل بنا',
    services: [
      {
        label: "الشحن المجاني",
        subtext: "استمتع بالتسوق بدون متاعب مع خدمة الشحن المجاني لدينا."
      },
      {
        label: "جودة عالية",
        subtext: "تسوق بثقة مع خياراتنا عالية الجودة."
      },
      {
        label: "نحن نحب المساعدة",
        subtext: "فريقنا المخصص هنا لمساعدتك في كل خطوة على الطريق."
      },
    ],
    footerLinks: {
      categories: [
        { name: "الكل", link: "/products?category=All" },
        { name: "أكواب", link: "/products?category=Cups" },
        { name: "إضافات", link: "/products?category=Toppings" },
        { name: "كاكاو", link: "/products?category=Cacao" },
        { name: "مستلزمات", link: "/products?category=Supplies" },
        { name: "قهوة", link: "/products?category=Coffee" },
        { name: "عسل", link: "/products?category=Honey" },
      ],
      help: [
        { name: "معلومات عنا", link: "/aboutus" },
        { name: "الأسئلة الشائعة", link: "/aboutus" },
        { name: "كن فرنشايزي", link: "/contact" },
      ],
      contact: [
        { name: "cafekhatra@khatracafe.com", link: "mailto:cafekhatra@khatracafe.com" },
        { name: "+212666666666", link: "tel:+212666666666" },
      ],
    },
    ourProducts: 'منتجاتنا',
    productVariety: 'هنا ستجد مجموعة متنوعة من منتجاتنا.',
    buyNow: 'اشتري الآن',
    franchise: 'كن فرنشايزي',
    contactDesc: 'نحن هنا للإجابة على أي أسئلة أو تعليقات. تواصل معنا واجعل تجربة القهوة الخاصة بك أفضل!',
    address: 'عنواننا',
    openingHours: 'ساعات العمل',
    weekdays: 'الاثنين - الجمعة: 08:00 - 17:00',
    weekends: 'السبت والأحد: 08:00 - 12:00',
    readyToStart: 'مستعد للبدء؟',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    namePlaceholder: 'اسمك',
    emailPlaceholder: 'بريدك الإلكتروني',
    messagePlaceholder: 'اكتب رسالتك...',
    sendMessage: 'أرسل الرسالة',
    successMessage: 'تم إرسال رسالتك بنجاح!',
    welcomeKhatra: 'مرحبًا بكم في خاترة',
    shopNow: 'تسوق الآن',
    learnMore: 'تعرف على المزيد',
    aboutUsTitle: "مقهى خاترة: فن القهوة الأصيلة",
    timelineDate1: "تاريخ خاترة",
    timelineDesc1: "بدأ تاريخ خاترة في عام 2020 بعربة قهوة متنقلة بسيطة. سرعان ما أصبح 'مقهى خاترة' ملاذًا للجميع، الصغار والكبار. بفضل الجودة التي لا تضاهى لقهوة خاترة والدعم اللامتناهي من عملائنا المخلصين، شهد مشروعنا نموًا سريعًا. نحن فخورون اليوم بامتلاك أكثر من 64 فرعًا عبر المغرب، كل منها يحترم القيم والجذور التي جعلت من نجاحنا ممكنًا.",
    timelineDate2: "أكثر من مجرد قهوة",
    timelineDesc2: "منذ إطلاقنا في عام 2020، أصبح مقهى خاترة مرجعًا لا غنى عنه لمحبي القهوة عبر المغرب. ما بدأ كعربة قهوة متنقلة متواضعة في حي هادئ، سرعان ما تحول إلى قصة نجاح بفضل الشغف والتفاني الذي نضعه في كل كوب نقدمه.",
    timelineDate3: "مهمتنا",
    timelineDesc3: "في خاترة، مهمتنا بسيطة: تقديم أفضل تجربة قهوة ممكنة لعملائنا. بالنسبة لنا، القهوة هي أكثر من مجرد مشروب – إنها فن. نختار بعناية أفضل حبوب القهوة من أفضل المزارع في العالم لإنشاء خلطات فريدة تلبي أذواق الأكثر تطلبًا. كل كوب نقدمه هو نتيجة مهارة متقنة وحب غير مشروط للقهوة.",
    timelineDate4: "نمو راسخ",
    timelineDesc4: "بفضل الجودة الاستثنائية لقهوة خاترة والدعم المخلص من عملائنا، قمنا بتوسيع وجودنا بسرعة. نحن فخورون اليوم بوجود أكثر من 64 فرعًا عبر المغرب، كل منها يجسد القيم التي نعتز بها: الأصالة، الجودة، وخدمة العملاء التي لا تشوبها شائبة.",
    timelineDate5: "الجودة، التقاليد والابتكار",
    timelineTitle5: "حاليًا",
    timelineDesc5: "تلتزم خاترة بالحفاظ على التوازن المثالي بين التقاليد والابتكار. نحن نحترم جذورنا بعمق بينما نبقى في طليعة اتجاهات القهوة. سواء كان ذلك في اختيار مكوناتنا، تدريب موظفينا، أو تصميم مقاهينا، نسعى جاهدين للبقاء مخلصين لما يميز نجاحنا مع تقديم تجارب طعم جديدة لك.",
    faqQuestion1: "ما الذي يجعل مقهى خاترة مميزًا؟",
    faqAnswer1: "يتميز مقهى خاترة بشغفه بالكمال. نحن نختار أفضل حبوب القهوة ونستخدم طرق تحضير تحترم التقاليد بينما تدمج الابتكارات الحديثة. كل كوب نقدمه مصمم ليقدم تجربة طعم لا تضاهى.",
    faqQuestion2: "أين يمكنني العثور على مقهى خاترة بالقرب مني؟",
    faqAnswer2: "لدينا أكثر من 64 فرعًا عبر المغرب. للعثور على الفرع الأقرب لك، يمكنك التحقق من قسم 'مقاهينا' على موقعنا الإلكتروني أو استخدام تطبيقنا المحمول الذي يتضمن خريطة تفاعلية.",
    faqQuestion3: "ما هي أنواع القهوة التي تقدمونها؟",
    faqAnswer3: "نقدم مجموعة واسعة من أنواع القهوة، بدءًا من الكلاسيكيات مثل الإسبريسو والكابتشينو إلى الإبداعات الفريدة المستوحاة من النكهات المحلية. نقدم أيضًا خيارات القهوة العضوية وخلطات خاصة لتلبية جميع الأذواق.",
    faqQuestion4: "هل يمكنني شراء حبوب القهوة الخاصة بكم عبر الإنترنت؟",
    faqAnswer4: "نعم، يمكنك شراء حبوب القهوة الخاصة بنا مباشرة من موقعنا الإلكتروني. نقدم مجموعة مختارة من أفضل الخلطات لدينا، المتاحة بأحجام مختلفة لتناسب احتياجاتك.",
    faqQuestion5: "كيف يمكنني أن أصبح صاحب امتياز لمقهى خاترة؟",
    faqAnswer5: "نحن دائمًا نبحث عن شركاء شغوفين للانضمام إلى عائلتنا كأصحاب امتياز. إذا كنت مهتمًا، تفضل بزيارة صفحة 'كن صاحب امتياز' لمزيد من المعلومات حول المتطلبات والخطوات التي يجب اتباعها.",
    faqQuestion6: "ما هي ساعات عمل مقاهيكم؟",
    faqAnswer6: "قد تختلف ساعات العمل من فرع لآخر. ننصحك بالتحقق من الصفحة المخصصة لفرعك المحلي على موقعنا الإلكتروني أو الاتصال بالمقهى مباشرة لمعرفة الساعات الدقيقة.",
    faqQuestion7: "هل تقدمون خيارات الولاء أو الخصومات؟",
    faqAnswer7: "نعم، نقدم برنامج ولاء يسمح لك بجمع النقاط مع كل عملية شراء، والتي يمكنك استبدالها فيما بعد بخصومات أو منتجات مجانية. نقدم أيضًا عروضًا خاصة وخصومات على مدار السنة.",
    faqQuestion8: "هل يمكنني تنظيم أحداث خاصة في مقهى خاترة؟",
    faqAnswer8: "بالطبع! العديد من فروعنا تقدم إمكانية حجز مساحات للأحداث الخاصة مثل الاجتماعات، أعياد الميلاد، أو جلسات تذوق. تواصل مع فرعك المحلي للحصول على مزيد من التفاصيل.",
    faqQuestion9: "كيف يمكنني الاتصال بخدمة العملاء؟",
    faqAnswer9: "يمكنك الاتصال بنا عبر نموذج الاتصال على موقعنا الإلكتروني، عن طريق البريد الإلكتروني، أو الاتصال مباشرة بخدمة العملاء على الرقم XXXXXXXXXXX. نحن ملتزمون بالإجابة على جميع أسئلتك ومساعدتك بأسرع وقت ممكن.",
    customerReviewsTitle1: "ماذا",
    customerReviewsTitle2: "يقول عملاؤنا",
    customerReviewsTitle3: "؟",
    customerReviewsDesc: "اقرأ شهادات حقيقية من عملائنا السعداء واكتشف لماذا يثقون بنا.",
    footerDesc: "اكتشف أحدث مستجدات قهوتنا، تجمع بين النكهات الأصيلة والجودة التي لا تضاهى.",
    footerRights: "خاترة. جميع الحقوق محفوظة",
    footerTerms: "الشروط والأحكام",
    gearTitle: "معدات القهوة المثالية",
    gearDesc: "في خاترة، نعلم أن سر القهوة الاستثنائية يكمن ليس فقط في الحبوب، ولكن أيضًا في الأدوات التي تستخدمها لتحضيرها. سواء كنت من عشاق القهوة العاديين أو من الخبراء الحقيقيين، فقد تم اختيار مجموعة معدات القهوة الخاصة بنا بعناية لمساعدتك في إتقان كل كوب تقوم بتحضيره.",
    gearButton: "كن صاحب امتياز",
    heroDesc: "عزز صباحك مع مستجدات القهوة المنشطة لدينا.",
    heroButton: "عرض المنتجات",
    popularProductsTitle1: "منتجاتنا",
    popularProductsTitle2: "الشائعة",
    popularProductsDesc: "اكتشف التفوق والأناقة التي لا مثيل لها مع اختيارات قهوتنا المشهورة. اغمر نفسك في عالم من الراحة والتصميم والقيمة مع خاترة.",
    serviceLabel1: "توصيل سريع",
    serviceDesc1: "احصل على قهوتك بسرعة وطازجة.",
    serviceLabel2: "حبوب ذات جودة",
    serviceDesc2: "نختار فقط أفضل الحبوب من جميع أنحاء العالم.",
    serviceLabel3: "دعم العملاء",
    serviceDesc3: "نحن هنا للمساعدة في أي من احتياجاتك المتعلقة بالقهوة.",
    specialOfferTitle: "عرض خاص",
    specialOfferDesc1: "باستخدام منتجات 'خاترة' الخاصة بنا، سيكون لديك الفرصة لتحسين قهوتك بشكل كبير. نحن نقدم مجموعة واسعة من المنتجات، بدءًا من حبوب القهوة عالية الجودة إلى الأكواب، المساحيق، وأكثر من ذلك بكثير.",
    specialOfferDesc2: "يتم اختيار كل عنصر بعناية لضمان تجربة قهوة استثنائية، مما يسمح لمؤسستك بالتميز وإسعاد عملائك مع كل كوب.",
    specialOfferButton: "عرض المنتجات",
    specialOfferAlt: "ترويج الحذاء",
    superQualityTitle1: "نحن نقدم لك",
    superQualityTitle2: "قهوة",
    superQualityTitle3: "عالية الجودة",
    superQualityTitle4: "جودة فائقة",
    superQualityDesc: "في خاترة، نحن لا نقدم فقط قهوة؛ بل نخلق تجربة فريدة من نوعها توقظ حواسك وتدفئ قلبك. منذ بداياتنا المتواضعة في عام 2020 بعربة قهوة بسيطة في حي هادئ، استحوذنا على روح عملائنا بفضل الجودة الاستثنائية لقهوة خاترة. ما كان مجرد حلم أصبح حقيقة مزدهرة، مع أكثر من 64 فرعًا في جميع أنحاء المغرب.",
    superQualityButton: "عرض المنتجات",
    superQualityImgAlt: "تفاصيل المنتج",
  }
};
