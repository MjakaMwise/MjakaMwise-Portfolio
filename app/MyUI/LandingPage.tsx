import Image from "next/image";
import myImg from "@/app/assets/Mash001.png"
const LandingPage = () => {
  return(
    <main className="min-h-screen bg-[#fdf9f6] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm tracking-wide text-gray-500">MjakaMwise</p>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Marshall <br /> Israel
          </h1>
          <p className="text-gray-600 max-w-md">
            Welcome to my world where innovation knows no bounds.
            With a passion for pushing the boundaries of UI/UX design.
          </p>

          <div className="inline-block border-2 border-gray-900 px-4 py-2 rounded-lg">
            <span className="font-semibold text-lg">Full-Stack Developer</span>
          </div>

     
        </div>

        {/* RIGHT IMAGE + LABELS */}
        <div className="relative flex justify-center">
          <div className="relative">
            <Image
              src={myImg}
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default LandingPage;