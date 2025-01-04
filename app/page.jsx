export default function Home() {

  const mail = "shrutiunadkat5@gmail.com"

  return (
    <div className="container max-w-7xl mx-auto">

      {/* navbbar */}
      <div className="flex items-center justify-between gap-2 mt-4">
        <img src="/logo.svg" alt="Shruti" className="w-32 block" />

        <div className="flex items-center gap-6">
          <a href="#home" className="block text-[#383838] font-artschool-skinny">home</a>
          <img src="/assets/star.svg" alt="star" className="w-5" />
          <a href="#work" className="block text-[#383838] font-artschool-skinny">work</a>
          <img src="/assets/star.svg" alt="star" className="w-5" />
          <a href="#about" className="block text-[#383838] font-artschool-skinny">about</a>
          <img src="/assets/star.svg" alt="star" className="w-5" />
          <a href="#resume" className="block text-[#383838] font-artschool-skinny">resume</a>
        </div>

        <button className="w-32 flex items-center justify-center bg-[#FFB0B0] hover:bg-[#e58989] transition active:scale-95 text-white py-2 rounded-xl font-artschool text-xl">
          Let's Talk
        </button>
      </div>
      {/* navbbar */}

      {/* hero */}
      <div className="px-4 w-full md:w-[1024px] md:mx-auto mt-36">
        <img src="/hero-logo.svg" alt="Shruti" className="w-96 block" />

        <div className="flex items-center text-2xl gap-4 px-4 mt-6">
          <p>[Sh-ru-ti]</p>
          <img src="/assets/heart.svg" alt="heart icon" />
          <p>श्रुति</p>
        </div>
      </div>
      {/* hero */}


      {/* about */}
      <div className="px-4 w-full md:w-[1024px] md:mx-auto mt-36 flex flex-col md:flex-row gap-8">
        <div className="flex-1 text-2xl leading-9 mt-10">
          Hey, I'm full-stack developer based out of India. who spends her days fighting bugs and casting spells with code. When I'm not busy turning coffee into websites, you'll find me exploring the vast wilderness of tech (or at least my couch). Let's make magic happen—no wands required! 😆
        </div>
        <img src="/shruti-memoji.png" alt="shruti" className="w-full md:w-96" />
      </div>
      {/* about */}

      <p className="px-4 w-full md:w-[1024px] md:mx-auto mt-60 text-2xl">
        When I'm not wrestling with code, you might catch me trying to teach my cat
        <span className="inline-block align-bottom mx-4">
          <img src="/assets/cat.png" alt="cat" className="w-20 inline" />
        </span>
        how to code (spoiler: she's more into napping). I believe every bug is just a misunderstood feature waiting for a chat.

        <br />
        <br />

        So, whether it's creating a sleek website or just figuring out why my JavaScript
        <span className="inline-block align-bottom mx-4">
          <img src="/assets/js.png" alt="javascript" className="w-12 inline" />
        </span>
        is acting like a moody teenager, I'm here for it all—one line of code and one laugh at a time!
      </p>

      <img src="/assets/line.svg" alt="lines" className="my-40 mx-auto" />

      <p className="px-4 w-full md:w-[1024px] md:mx-auto mt-60 text-2xl">
        So, let's cut to the chase—grab a coffee ☕️ and check out what I've built! I've worked on some fun projects using React, Next.js, Tailwind CSS, MySQL, and Express.js
        <br /><br />
        all aimed at making life easier and more efficient. Trust me, it's worth a peek!
      </p>


      <div className="px-4 w-full md:w-[1024px] md:mx-auto mt-60 text-2xl">
        <img src="/restropro.png" alt="RestroPRO" className="w-full" />
      </div>

      <p className="px-4 w-full md:w-[1024px] md:mx-auto mt-20 text-2xl leading-10">
        I've had the pleasure of working on RestroPRO, a SaaS product designed for restaurants, cafes, and bars. Here, I've rolled out some fantastic features like tips, discounts, split tickets, and seamless order management. 

        We're constantly cooking up exciting updates for our clients across the USA, Australia, Africa, and Europe—because who says tech can't spice up the dining experience? 🌶️ 👩🏻‍💻
      </p>

      <img src="/assets/line.svg" alt="lines" className="my-40 mx-auto" />

      <p className="text-center text-4xl font-artschool">
        Let's Connect
      </p>

      <div className="relative mx-auto w-28"> 
        <img src="/avatar.png" alt="Shruti" className="mx-auto w-28 h-28 mt-10" />
        <img src="/assets/arrow.svg" alt="arrow" className="absolute bottom-0 -right-16" />
      </div>

      <div className="px-4 w-full flex items-center justify-center md:mx-auto mt-10">
        <a href={`mailto:${mail}`} className="mx-auto text-2xl text-white bg-[#694F8E] flex items-center justify-center rounded-full px-6 py-3 gap-4">
          <img src="/assets/mail.svg" alt="mail" className="w-8 h-8" />
          {mail}
        </a>
      </div>

      

    </div>
  );
}
