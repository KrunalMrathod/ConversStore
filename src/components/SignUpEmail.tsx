import emailSignUp from '../assest/emailSignUp.png'

const SignUpEmail = () => {
  return (
    <div className="relative w-[95%] my-24 mx-auto ">
      <img src={emailSignUp} className="w-full h-full" />
      <div className="absolute bottom-12 flex flex-col w-[50%] p-5 font-poppins">
        <span className="w-[70%] m-auto text-lg ">
          Be the first to hear about exclusive sales, product drops, new
          collabs, and more—sent straight to your inbox.
        </span>
        <button className="border-2 border-gray-400 w-[30%] m-auto translate-y-5 p-3 cursor-pointer">
          Sign Up For Emails
        </button>
      </div>
    </div>
  )
}

export default SignUpEmail
