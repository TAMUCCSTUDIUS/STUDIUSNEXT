import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full items-center py-0 bg-gray-100">
      <div className="sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="w-1/4 text-center">
          <div className="mx-auto">
            <div className="my-8 mx-4">
              {/* This is the STUDIUS IMAGE */}
              <Image
                alt="Logo"
                height={800} // Increase the height for a larger image
                width={800}  // Increase the width for a larger image
                src="/images/logo.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2">
        <h2
          className="
            mt-6
            text-3xl
            font-bold
            tracking-tight
            text-gray-900
            text-center"
        >
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
}
