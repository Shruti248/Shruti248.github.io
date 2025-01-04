import Image from "next/image";

export default function Home() {
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
      <div className="px-4 md:px-10 mt-36">
        <img src="/hero-logo.svg" alt="Shruti" className="w-96 block" />

        <div className="flex items-center text-2xl gap-4 px-4 mt-6">
          <p>[Sh-ru-ti]</p>
          <img src="/assets/heart.svg" alt="heart icon" />
          <p>श्रुति</p>
        </div>
      </div>
      {/* hero */}


      
    </div>
  );
}
