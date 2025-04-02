"use client";

import { motion } from "framer-motion";

import Image from "next/image";


 function Hero() {
  return (
    <section className="flex  flex-wrap items-center justify-center bg-cover bg-center bg-no-repeat  py-12 "
      style={{ backgroundImage: "url('/images/bg_img.jpg')" }}>
      <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  animate={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="max-w-2xl space-y-6 text-center sm:text-left">
        <h1 className="text-4xl font-bold text-[#032d60] sm:text-5xl px-4">
          Delight customers and grow revenue on the #1 AI CRM.
        </h1>
        <p className="text-lg leading-relaxed text-[#032d60] px-4">
          Get a complete CRM across sales, service, marketing, commerce, and
          more. It’s all on one integrated platform. We call it Einstein 1. It
          lets you work smarter so you can spend more time growing
          relationships, productivity, and your bottom line.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:justify-start px-4">
          <button className="rounded-md bg-[#0176d3] px-6 py-3 text-white font-semibold text-lg hover:bg-[#032d60]">
            Try for free
          </button>
          <button className="rounded-md border-2 border-[#0176d3] bg-white px-6 py-3 text-lg font-semibold text-[#0176d3] hover:border-[#032d60] hover:bg-[#eaf5fe] hover:text-[#032d60]">
            Watch demos
          </button>
        </div>
      </motion.div>
      <motion.div initial={{ transform: "translateY(-50px)",opacity:0 }}
  whileInView={{ transform: "translateY(0px)",opacity:1 }}
  animate={{ transform: "translateY(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="relative w-[642px] md:h-[590px] hidden lg:block  h-[400px]">
  <Image
    src="/images/salesforce_banner_img2.png"
    alt="Einstein AI"
    layout="fill"
    objectFit="cover"
  />
</motion.div>

      {/* Chat Button */}
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4  }}  className="fixed bottom-0 right-0 m-5 flex w-[170px] items-center justify-center gap-2 rounded-full bg-[#0176d3] px-5 py-2 text-white hover:underline cursor-pointer">
        <Image src="/images/chat-agent-image-2x.png" alt="Chat Agent Image" width={40} height={40} />
        <p className="font-semibold underline">Let's Chat</p>
      </motion.div>
    </section>
  );
}
 function LatestUpdates() {
  return (
    <section className="w-11/12 mx-auto py-12">
      <h2 className="text-center text-[#032d60] text-4xl font-bold my-8">
        Get the latest from Salesforce.
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {[{
          img: '/images/latest-boost_customers.jpg',
          text: 'Boost customer satisfaction by 32% with Service Cloud.',
          link: 'Take guided tour'
        }, {
          img: '/images/latest-forrester.jpg',
          text: 'Check out the new Forrester guide on how companies are investing in AI for CRM.',
          link: 'Get Guide'
        }, {
          img: '/images/latest-gartner.jpg',
          text: 'Gartner named Salesforce a Leader in Customer Data Platforms.',
          link: 'Read Report'
        }, {
          img: '/images/latest-discover_ai.jpg',
          text: 'Discover how new AI features in Slack get you up to speed faster at work.',
          link: 'Read the article'
        }].map((item, index) => (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5  }} key={index} className="w-72 h-96 rounded-lg shadow-lg">
            <div className="h-2/5">
              <Image src={item.img} alt="Update" width={290} height={160} className="rounded-t-lg" />
            </div>
            <div className="p-6 flex flex-col justify-between h-3/5">
              <p className="text-[#032d60] text-xl font-bold">{item.text}</p>
              <a href="#" className="text-[#0176d3] font-semibold underline hover:no-underline">{item.link}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

 function PowerUpTeams() {
  return (
    <section className="w-11/12 mx-auto py-12 text-center">
      <h2 className="text-[#032d60] text-4xl font-bold my-8">
        Power up every team with CRM, trusted AI, and data.
      </h2>
      <p className="text-lg text-gray-800 max-w-2xl mx-auto">
        Learn how Salesforce <span className="text-[#0176d3] underline">CRM</span>, powered by the trusted Einstein 1 platform, helps everyone at your company be more productive and grow customer loyalty.
      </p>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {[{
          img: '/images/small_business.jpg',
          title: 'Small Business',
          text: 'Sell smarter and provide support faster in a single app.',
          link: 'Watch demos'
        }, {
          img: '/images/sales.jpg',
          title: 'Sales',
          text: 'Close more deals faster and unleash growth with AI-driven sales.',
          link: 'Watch demos'
        }, {
          img: '/images/service.jpg',
          title: 'Service',
          text: 'Boost customer satisfaction and efficiency with AI-powered service.',
          link: 'Watch demos'
        }, {
          img: '/images/see_all_products.png',
          title: 'See all products',
          text: 'Connect with customers in a whole new way with AI on Einstein 1.',
          link: 'Watch demos'
        }].map((item, index) => (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} key={index} className="w-72 h-98 rounded-lg shadow-lg">
            <div className="h-3/5">
              <Image src={item.img} alt={item.title} width={290} height={210} className="rounded-t-lg" />
            </div>
            <div className="p-6 flex flex-col justify-between h-2/5">
              <p className="text-[#032d60] text-xl font-bold ">{item.title}</p>
              <p className="text-gray-700">{item.text}</p>
              <a href="#" className="text-[#0176d3] font-semibold underline hover:no-underline">{item.link}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


const industries = [
  { src: "/images/php-industries-finserv.png", label: "Financial Services" },
  { src: "/images/php-industries-retail.png", label: "Retail" },
  { src: "/images/php-industries-health.png", label: "Healthcare" },
  { src: "/images/php-industries-manufacturing.png", label: "Manufacturing" },
];

const customers = [
  "/images/logo-wall-turtlebay.png",
  "/images/logo-wall-gucci.png",
  "/images/logo-wall-wonolo.png",
  "/images/logo-wall-wonolo-1.png",
  "/images/logo-wall-baca.png",
];

const Section4 = () => {
  return (
    <section className="flex flex-col items-center gap-8 mt-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-900">
          Find innovations for any industry.
        </h1>
        <p className="text-gray-700">
          Whatever your industry, we offer solutions to modernize your
          business, save time, and lower costs.
        </p>
      </div>
      <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white">
        See all industries
      </button>
      <div className="flex flex-wrap justify-center gap-10">
        {industries.map((industry, index) => (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * index  }} key={index} className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md">
              <Image src={industry.src} alt={industry.label} width={50} height={50} />
            </div>
            <p className="text-blue-900 font-semibold text-center">{industry.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Section5 = () => {
  return (
    <section className="flex flex-col items-center mt-16">
      <div
        className="w-full h-44 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/industries_bg.jpg')" }}
      ></div>
      <div className="text-center w-3/5 mt-6">
        <h1 className="text-3xl font-bold text-blue-900">
          See how companies drive customer success in a whole new way with
          Einstein 1.
        </h1>
        <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white mt-4">
          See all customer stories
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {customers.map((customer, index) => (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * index  }} key={index} className="w-48 h-24 flex items-center justify-center shadow-md rounded-md">
            <Image src={customer} alt="Customer Logo" width={120} height={60} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Section6And7: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Section 6 */}
      <section className="text-center  py-10">
        <h1 className="text-3xl font-bold">Learn valuable skills for free, with Trailhead.</h1>
        <p className="text-gray-700 text-center mt-2">
          Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft skills from anywhere.
        </p>
        
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {cardData.map(({ imgSrc, title, description }, index) => (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8  }} key={index} className="w-96 h-[450px] shadow-lg rounded-lg grid grid-rows-2">
              <div className="flex flex-col items-center gap-6 py-6">
                <Image src={imgSrc} alt={title} width={80} height={80} className="cursor-pointer" />
                <button className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">Module</button>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-700">{description}</p>
                <a href="#" className="text-blue-600 font-semibold">Start Learning</a>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="mt-6 bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">Learn for Free</button>
      </section>
      
      {/* Section 7 */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold px-10">All sorts of content. All to help you grow.</h1>
        <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="flex flex-wrap items-center justify-center gap-10 mt-10 px-6">
          <div className="max-w-lg text-left flex flex-col gap-6">
            <h3 className="text-2xl font-bold">What is CRM?</h3>
            <p className="text-gray-700 leading-relaxed">
              Learn all about CRM, how it can unify all your teams, and how it drives growth and productivity across your business.
            </p>
            <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">Discover CRM</button>
          </div>
          <div className="md:w-[620px] md:h-[349px]">
            <Image src="/images/php-rc-what-is-crm.jpg" alt="CRM" width={620} height={349} className="rounded-md" />
          </div>
        </motion.div>
      </section>
    </section>
  );
};

const cardData = [
  {
    imgSrc: '/images/calender.png',
    title: 'Salesforce CRM',
    description: 'Learn how to use customer relationship management (CRM) software to grow your business.',
  },
  {
    imgSrc: '/images/phone.png',
    title: 'Sales Cloud Basics',
    description: 'Grow your business, boost productivity, and make smart decisions with Sales Cloud.',
  },
  {
    imgSrc: '/images/medal.png',
    title: 'Service Cloud Basics',
    description: 'Supercharge your agents with omni-channel tools and an intelligent service platform.',
  },
];

const Section8 = () => {
  return (
    <section className="relative">
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 mb-10 relative z-10 top-24">
        {/* Card 1 */}
        <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="w-[390px] h-[560px] shadow-md rounded-lg bg-white grid grid-rows-2">
          <div className="flex flex-col justify-end items-center gap-6 p-6">
            <Image src="/images/state-of-sales-resource-card.jpg" alt="" width={390} height={250} />
            <button className="self-start mb-5 px-4 py-2 bg-[#d2edff] text-[#032d60] rounded-3xl text-xs font-semibold">Report</button>
          </div>
          <div className="p-5 flex flex-col gap-8">
            <h3 className="text-xl font-bold">Read our latest State of Sales Report.</h3>
            <p>
              Learn how more than 7,700 sales professionals are finding success now.
            </p>
            <a href="#" className="text-blue-500">Read the report</a>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="w-[390px] h-[560px] shadow-md rounded-lg bg-white grid grid-rows-2">
          <div className="flex flex-col justify-end items-center gap-6 p-6">
            <Image src="/images/php-rc-connections-series.jpg" alt="" width={390} height={250} />
            <button className="self-start mb-5 px-4 py-2 bg-[#d2edff] text-[#032d60] rounded-3xl text-xs font-semibold">Video Series</button>
          </div>
          <div className="p-5 flex flex-col gap-8">
            <h3 className="text-xl font-bold">Stream our Connections video series.</h3>
            <p>
              Hear how innovative marketers are connecting with customers in all new ways.
            </p>
            <a href="#" className="text-blue-500">Watch the series</a>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="w-[390px] h-[560px] shadow-md rounded-lg bg-white grid grid-rows-2">
          <div className="flex flex-col justify-end items-center gap-6 p-6">
            <Image src="/images/n-up-news-pro-suite.jpg" alt="" width={390} height={250} />
            <button className="self-start mb-5 px-4 py-2 bg-[#d2edff] text-[#032d60] rounded-3xl text-xs font-semibold">Webinar</button>
          </div>
          <div className="p-5 flex flex-col gap-8">
            <h3 className="text-xl font-bold">Scale your business quickly and efficiently with a single CRM solution.</h3>
            <p>
              Discover how Pro Suite brings marketing, sales, and service tools together.
            </p>
            <a href="#" className="text-blue-500">Join the webinar</a>
          </div>
        </motion.div>
      </div>

      {/* Background Image */}
      <div className="relative z-[-1]">
        <Image src="/images/crm_bg.png" alt="" layout="responsive" width={1920} height={1080} />
      </div>
    </section>
  );
};


const Section9 = () => {
  return (
    <section className="p-5">
      <p className="text-4xl font-semibold py-5 text-center mb-10">
        Inspiring events. In-person and streaming.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {/* Event Card 1 */}
        <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="w-[390px] h-[500px] shadow-md rounded-lg bg-white grid grid-rows-2">
          <div className="flex flex-col justify-end items-center gap-6 p-6">
            <Image src="/images/chp-news-bar-evergreen-events.jpg" alt="" width={390} height={250} />
            <button className="self-start mb-5 px-4 py-2 bg-[#d2edff] text-[#032d60] rounded-3xl text-xs font-semibold">Events</button>
          </div>
          <div className="p-5 flex flex-col gap-8">
            <h3 className="text-xl font-bold">Immerse yourself in passion, learning, and expertise.</h3>
            <a href="#" className="text-blue-500">Explore Events</a>
          </div>
        </motion.div>

        {/* Event Card 2 */}
        <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out",delay:0.2 }} className="w-[390px] h-[500px] shadow-md rounded-lg bg-white grid grid-rows-2">
          <div className="flex flex-col justify-end items-center gap-6 p-6">
            <Image src="/images/chp-events-customer-success.jpg" alt="" width={390} height={250} />
            <button className="self-start mb-5 px-4 py-2 bg-[#d2edff] text-[#032d60] rounded-3xl text-xs font-semibold">Customer Success</button>
          </div>
          <div className="p-5 flex flex-col gap-8">
            <h3 className="text-xl font-bold">Learn all about customer success in hands-on workshops.</h3>
            <a href="#" className="text-blue-500">Check out our workshops</a>
          </div>
        </motion.div>

        {/* Event Card 3 */}
        <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out",delay:0.3 }} className="w-[390px] h-[500px] shadow-md rounded-lg bg-white grid grid-rows-2">
          <div className="flex flex-col justify-end items-center gap-6 p-6">
            <Image src="/images/chp-events-for-developers.jpg" alt="" width={390} height={250} />
            <button className="self-start mb-5 px-4 py-2 bg-[#d2edff] text-[#032d60] rounded-3xl text-xs font-semibold">Webinars</button>
          </div>
          <div className="p-5 flex flex-col gap-8">
            <h3 className="text-xl font-bold">Get in-depth guidance on how to drive growth with Salesforce, free.</h3>
            <a href="#" className="text-blue-500">Find webinars</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const Section10 = () => {
  return (
    <section className="px-4 py-8 flex flex-col items-center gap-8 mb-8">
      <p className="font-bold text-center px-8">
        Meet and collaborate with Trailblazers who share your role and interests.
      </p>

      <div className="flex  flex-wrap justify-center gap-8">
        {['Sales Cloud - Getting Started', 'Salesforce Platform', '#Customer360'].map((title, index) => (
          <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
          whileInView={{ transform: "translateX(0px)",opacity:1 }}
          transition={{ type: "ease-out",delay:0.2* index }} key={index} className="w-[390px] h-[180px] bg-white shadow-xl rounded-lg grid grid-rows-2">
            <div className="flex items-center justify-start pl-5 py-3">
              <button className="px-4 py-2">Group</button>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-xl font-semibold">{title}</h3>
              <a href="#" className="text-blue-500">Join us now</a>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="bg-transparent border-2 hover:text-white hover:bg-blue-500 border-blue-500 text-blue-500 py-2 px-6 rounded-lg mt-6">
        Explore Trailblazer Community
      </button>
    </section>
  );
};


const Section11 = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-16">
      <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
  whileInView={{ transform: "translateX(0px)",opacity:1 }}
  transition={{ type: "ease-out" }} className="flex flex-wrap justify-center gap-8 items-center">
        <div>
          <Image src="/images/php-appy-appexchange.jpg" alt="AppExchange" objectFit="contain" width={435} height={300} />
        </div>
        <div className="flex flex-col items-start w-[620px] gap-8 px-10">
          <h3 className="text-xl font-bold">Discover apps and expertise to extend Salesforce.</h3>
          <p className="text-gray-800 text-lg">
            Browse our AppExchange marketplace, with thousands of customized apps and specialized consulting partners to help any sized business craft a perfectly tailored Customer 360 solution.
          </p>
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-lg">
            Visit App Exchange
          </button>
        </div>
      </motion.div>
    </section>
  );
};


const Section12 = () => {
  return (
    <section className="px-4 py-8 flex flex-col items-center gap-8 mt-8">
      <h3 className="font-bold text-center px-8">
        Ready to take the next step with the world’s #1 AI CRM?
      </h3>

      <div className="flex  flex-wrap justify-center gap-8">
        {[
          { title: 'Start your trial.', description: 'Try Salesforce for free. No credit card required, no software to install.', icon: '/images/screen.svg' },
          { title: 'Talk to an expert.', description: 'Tell us a bit more so the right person can reach out faster.', icon: '/images/call.svg' },
          { title: 'Stay up to date.', description: 'Get the latest research, industry insights, and product news delivered straight to your inbox.', icon: '/images/email.svg' }
        ].map((item, index) => (
          <motion.div   initial={{ transform: "translateX(-50px)",opacity:0 }}
          whileInView={{ transform: "translateX(0px)",opacity:1 }}
          transition={{ type: "ease-out",delay:0.2*index }} key={index} className="w-[320px] h-[300px] bg-white shadow-xl rounded-lg grid grid-rows-2 p-6">
            <div className="flex justify-start items-center pl-5">
              <div className="bg-[#eaf5fe] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-4">
                <Image src={item.icon} alt={item.title} width={30} height={30} />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-left text-xl text-[#032d60]">{item.title}</h4>
              <p className="text-lg">{item.description}</p>
              <a href="#" className="text-blue-500">Try for free</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



const Footer = () => {
  return (
    <footer className="font-sans">
      <div className="relative bottom-[220px] z-[-1]">
        <Image src="/images/php-contact-us-footer.jpg" alt="Footer Image" width={1200} height={400} layout="responsive" />
      </div>

      <div className="w-[90%] mx-auto flex flex-wrap gap-10 relative bottom-[120px] z-[-1] py-10">
        <div className="flex flex-col gap-7 justify-center">
          <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
          <div className="flex gap-4">
            <Image src="/images/facebook-day.svg" alt="Facebook Logo" width={30} height={30} />
            <Image src="/images/twitter-day.svg" alt="Twitter Logo" width={30} height={30} />
            <Image src="/images/linkedin-day.svg" alt="LinkedIn Logo" width={30} height={30} />
            <Image src="/images/instagram-day.svg" alt="Instagram Logo" width={30} height={30} />
            <Image src="/images/youtube-day.svg" alt="YouTube Logo" width={30} height={30} />
          </div>
          <p>Call us at 234-815-789-9361</p>
          <a href="#" className="text-[#032d60] font-semibold hover:text-[#0176d3]">
            See all ways to contact us
          </a>
        </div>

        <div>
          <p className="font-semibold text-[#48474b] pb-6">New to Salesforce?</p>
          <ul>
            {['What is CRM?', 'What is Salesforce?', 'Help Desk Software', 'Marketing Automation Software', 'Explore All Products', 'What is Cloud Computing?', 'Customer Success', 'Product Pricing', 'Privacy for Salesforce Products'].map((item, index) => (
              <li key={index} className="text-[#1b5fb1] hover:text-[#0176d3] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[#48474b] pb-6">About Salesforce</p>
          <ul>
            {['Our Story', 'Newsroom', 'Blog', 'Careers', 'Trust', 'Salesforce.org', 'Sustainability', 'Investors', 'Give us your Feedback'].map((item, index) => (
              <li key={index} className="text-[#1b5fb1] hover:text-[#0176d3] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[#48474b] pb-6">Popular Links</p>
          <ul>
            {['Manage Your Account', 'New Release Features', 'Find or Become a Partner', 'CRM Software', 'Salesforce LIVE', 'Dreamforce', 'Salesforce Mobile', 'Newsletter Sign-Up'].map((item, index) => (
              <li key={index} className="text-[#1b5fb1] hover:text-[#0176d3] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#032e61] text-white flex flex-wrap gap-10 py-6 px-3 lg:px-32">
        <div className="flex items-center gap-3">
          <Image src="/images/globe2.png" alt="Globe" width={20} height={20} />
          <h4>WorldWide</h4>
          <Image src="/images/down-arrow.png" alt="Arrow" width={15} height={15} />
        </div>

        <div className="flex flex-col gap-7 w-[80%] mx-auto">
          <ul className="flex flex-wrap gap-6">
            {['Legal', 'Terms of Service', 'Privacy Information', 'Responsible Disclosure', 'Trust', 'Contact', 'Cookie Preferences'].map((item, index) => (
              <li key={index} className="underline text-sm hover:text-[#0176d3] cursor-pointer">{item}</li>
            ))}
            <li className="flex items-center text-sm">
              <Image src="/images/icon-cpra.svg" alt="CPRA" width={30} height={30} />
              <span className="ml-2">Your Privacy Choices</span>
            </li>
          </ul>

          <div>
            <p className="text-sm">
              &copy; Copyright 2024 Salesforce, Inc. All rights reserved. Various trademarks held by their respective owners. Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default function HomePage() {
  return (
    <div className="min-h-screen max-w-[1800px] mx-auto">
 
 <Hero />
 <LatestUpdates />
 <PowerUpTeams />
 <Section4 />
 <Section5 />
 <Section6And7 />
 <Section8 />
 <Section9 />
 <Section10 />
 <Section11 />
 <Section12 />
 <Footer />
     </div>
  );
}
