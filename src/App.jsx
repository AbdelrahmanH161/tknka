import { useEffect, useState } from "react";
import logo from "/assets/logoo.svg";
import hola from "/assets/hola.png";
import video from "/assets/video.mp4";
import ReactPlayer from "react-player";
import { Controller, set, useForm } from "react-hook-form";
import { FaCircleExclamation } from 'react-icons/fa6';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
function App() {
  const [dis, setdis] = useState(true);
  const [show, setshow] = useState(false);
  const [big, setbig] = useState(false);
  const [hiddin, sethiddin] = useState(true);
  const {register,handleSubmit,watch,formState: { errors },control} = useForm({
    mode:'all'
  })
  const onSubmit = (data) => console.log(data)
  useEffect(()=>{
    if(watch('email') && watch('password')){
      setdis(false)
    }else{
      setdis(true)
    }
  },[watch('email') , watch('password')])
  return (
    
      <div dir="rtl"
        className="flex min-h-screen flex-col items-center justify-between gap-5 bg-no-repeat p-4 md:bg-logo md:p-12 bg-center bg-bottom">
        <nav className="flex w-full">
          <img src={logo} alt="logo-img" />
        </nav>
        <div className="flex w-full flex-1 items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="flex w-full flex-col items-center rounded-[10px] bg-transparent pb-8 pe-8 ps-3 pt-8 shadow-[0_0_10px_0_rgba(8,143,196,0.25)] md:w-[500px] md:px-12 md:pb-12 md:pt-16">
            <h3 className="md:mb-16 mb-10 text-center text-[27px] font-bold text-[#088FC4] md:text-[40px]">
              تسجيل الدخول
            </h3>
            <div className="mb-12 md:mb-24 flex w-full flex-col gap-3">
              <div>
                <Controller
                name={'email'}
                control={control}
                rules={{required:true}}
                render={({ field: { onChange, onBlur, value, name, ref }, fieldState, formState }) => (
                  <input
                  className={`min-h-[50px] w-full rounded-[10px]  px-3  placeholder:text-gray-400 text-[16px] outline-none placeholder:text-start md:min-h-[60px] md:text-[20px] ${errors.email ? 'border-red-500 text-red-500 placeholder:text-red-500' : "border-[#088FC4]"}`}
                  dir="rtl"
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                  placeholder="أدخل بريدك الإلكتروني"
                />
                )}
                />
                {errors.email && <p className="mt-2 text-red-500">هذا الحقل مطلوب</p>}
              </div>
              <div>
                <div className="relative flex items-center gap-3">
                  <div className="relative flex w-full items-center">
                  <Controller
                    name={'password'}
                    control={control}
                    rules={{required:true}}
                    render={({ field: { onChange, onBlur, value, name, ref }, fieldState, formState }) => (
                      <input
                      className={`min-h-[50px] w-full rounded-[10px]  px-3  placeholder:text-gray-400 text-[16px] outline-none placeholder:text-start md:min-h-[60px] md:text-[20px] ${errors.password ? 'border-red-500 text-red-500 placeholder:text-red-500' : "border-[#088FC4]"}`}
                      dir="rtl"
                      type={show? 'text':'password'}
                      placeholder="أدخل كلمة المرور"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      name={name}
                    />
                    )}
                    />
                    <button
                      type="button"
                      className="absolute end-[17px] outline-none"
                      onClick={()=>{
                        setshow(!show)
                      }}
                    >
                      {show? <AiOutlineEyeInvisible className={`text-xl ${errors.password ? '!text-red-500':'text-[#088FC4]'}`} />:<AiOutlineEye className={`text-xl ${errors.password ? '!text-red-500':'text-[#088FC4]'}`} />}
                    </button>
                  </div>
                  <FaCircleExclamation className={`absolute end-[-25px] text-[20px] md:end-[-32px]  md:text-[20px] ${errors.password ? '!text-red-500':'text-[#088FC4]'}`}></FaCircleExclamation>
                </div>
                {errors.password && <p className="mt-2 text-red-500">هذا الحقل مطلوب</p>}
              </div>
              <a className="w-fit text-[#088FC4] underline" href="/">
                هل نسيت كلمة المرور؟
              </a>
            </div>
            <button
              type="submit"
              disabled={dis}
              className="false min-h-[50px] w-full rounded-[10px] bg-[#088FC4] text-center text-[16px] text-white disabled:cursor-not-allowed disabled:opacity-50 md:min-h-[60px] md:text-[20px]"
            >
              تسجيل الدخول
            </button>
            <div className="mt-3 flex items-center justify-center">
              <span>ليس لديك حساب؟</span>
              <a className="text-[#088FC4] underline" href="/">
                إنشاء حساب جديد
              </a>
            </div>
          </form>
        </div>
        <footer className="flex w-full flex-wrap items-center justify-center gap-1 md:justify-between">
          <h6 className="text-[#121212]">جميع الحقوق محفوظة © تكنكة 2023</h6>
          <h6 className="flex items-center md:gap-2 text-[#121212]">
            <span className="mt-2">تطوير و تشغيل</span>
            <img src={hola} alt="hola-image" />
            <span className="mt-2">لتقنية المعلومات</span>
          </h6>
        </footer>
        
        { hiddin && <><button onClick={()=>{console.log('fff'); setbig(!big)}} className={`bg-black overflow-hidden hover:scale-105 text-white transition items-center justify-center fixed z-40 ${big? "w-full max-w-sm h-[500px]  mx-auto my-auto rounded-lg ":'w-[120px] h-[120px] rounded-full bottom-8 md:bottom-12 right-8 md:left-12'}`}>
          <video  src={video} muted  width={big? 384 : 120}  height={big? 500 : 120}  autoPlay={true} preload="auto"/>
        </button>
        <button
            type="button"
            className={`fixed z-40  outline-none ${big? "top-8 right-[580px]": "bottom-36 left-36"}`}
            onClick={()=>{
              sethiddin(!hiddin)
            }}
          >
            <IoIosCloseCircle className="text-red-600 text-xl"/>
          </button></>}
        
      </div>
  );
}

export default App;
