import Image from "next/image";
import AuthForm from "./components/AuthForm";

function getZoomLevel() {
  return window.devicePixelRatio * 100;
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">

      {/* Inner flex container */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full h-screen overflow-hidden lg:space-x-16">

        {/* STUDIUS IMAGE */}
        <div className="w-3/4 sm:w-1/3 lg:w-1/4 text-center m-0 p-0">  
          <Image
            alt="Logo"
            height={500}
            width={500}
            src="/images/logo.png"
          />
        </div>

        {/* AuthForm Container */}
        <div style={{ width: '90%', maxWidth: '450px', height: '650px', overflow: 'hidden' }} className="m-0 p-0 mt-4 sm:mt-0 lg:text-lg">  
          <h2 className="mt-6 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 text-center">
            Welcome Islanders!
          </h2>
          <AuthForm />
        </div>

      </div>
    </div>
  );
}
