import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full items-center py-0 bg-gray-100">
      <div className="flex justify-center items-center w-full">  {/* Adjusted to justify-center */}

        {/* This is the STUDIUS IMAGE */}
        <div className="w-1/4 text-center m-0 p-0">  
          <Image
            alt="Logo"
            height={500}
            width={500}
            src="/images/logo.png"
          />
        </div>

        {/* AuthForm Container */}
        <div className="w-1/3 m-0 p-0">  
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 text-center">
            Sign in to your account
          </h2>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
