import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const register = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  interface Inputs {
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await signUp(email, password);
  };
  return (
    <div className="register w-full h-screen relative">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <div>
        <div className="py-5 px-12 flex items-center justify-between">
          <h1 className="text-[#e50914] font-bold text-5xl">PhimNhat</h1>
          <div className="py-1 px-6 text-lg bg-[#e50914] hover:bg-[#db0510] rounded-sm font-medium z-30">
            <Link href="/login">Sign in</Link>
          </div>
        </div>
      </div>
      <div className="w-full  h-full left-0 top-0 absolute flex items-center justify-center flex-col text-white">
        <h1 className="text-[3.125rem] font-bold">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="m-5 text-3xl font-medium">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-2xl font-medium">
          Ready to watch? Enter your email to create or start your membership.
        </p>

        {/* <form className="relative input w-[50%] bg-white flex items-center justify-between mt-5 h-[70px] rounded">
          <input
            className="flex-[9] h-[50%] px-[10px] py-0  text-black outline-none"
            // ref={emailRef}
            type="email"
            placeholder="email address"
            {...register("email", {
              required: true,
              minLength: 10,
              maxLength: 30,
            })}
          />
          {errors?.email?.type === "required" && (
            <div className="text-yellow-500 text-lg z-[9999] absolute left-2 top-20 ">
              Please fill your email
            </div>
          )}
          <button
            type="submit"
            className="text-white text-2xl font-light cursor-pointer flex-[3] h-full bg-[#db0510] hover:bg-primary outline-none"
          >
            Get Started
          </button>
        </form> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative input w-[50%] bg-white flex items-center justify-between mt-5 h-[70px] rounded"
        >
          <input
            className="flex-[9] h-[50%] py-0 px-[10px] text-black outline-none"
            type="text"
            placeholder="email"
            {...register("email", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-yellow-500 text-lg z-[9999] absolute left-2 top-20 ">
              Please enter a valid email.
            </p>
          )}
          <input
            className="flex-[9] h-[50%] py-0 px-[10px] text-black outline-none"
            type="password"
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
          />
          {errors?.password?.type === "required" && (
            <div className="text-yellow-500 text-lg z-[9999] absolute right-[220px] top-20 ">
              Please fill your password
            </div>
          )}
          {errors?.password?.type === "maxLength" && (
            <div className="text-yellow-500 text-lg z-[9999] absolute right-[-70px] top-20 ">
              Your password must contain between 4 and 60 characters.
            </div>
          )}
          <button
            type="submit"
            className="text-white text-2xl font-light cursor-pointer flex-[3] h-full bg-[#e50914] outline-none"
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
};

export default register;
