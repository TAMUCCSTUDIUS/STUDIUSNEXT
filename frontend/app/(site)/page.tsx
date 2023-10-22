import Image from "next/image";
import AuthForm from "./components/AuthForm";


export default function Home() {
  return (
    //erm
    // This controls the container of the page
    <div className="
    flex
    min-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    log:px-8
    bg-gray-100"
    >

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* This is STUDIUS IMAGE */}
        <Image
        alt="Logo"
        height="48"
        width="48"
        className="mx-auto w-auto"
        src="/images/logo.png"/>
        <h2 
        className="
        mt-6
        text-center
        text-3xl
        font-bold
        tracking-tight
        text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  )
}
