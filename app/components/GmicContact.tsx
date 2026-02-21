import Image from "next/image";
import ContactSVG from "../../assets/gmic/sportsman-fitness.jpg";

const Contact = () => {
  return (
    <div
      className="md:py-16 p-4 lg:px-20 flex min-h-screen w-full justify-center items-center relative">
       <div className="absolute inset-0 -z-10 bg-black">
              <Image src={ContactSVG} alt="Hero background" fill className="object-cover" sizes="100vw" />
            </div>
      <div className="shadow-md max-w-3xl p-10 md:py-20 md:px-25 rounded-xl bg-white">
        <form action="" className="space-y-8">
          {/* Name info */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400"
                placeholder="e.g John"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400"
                placeholder="e.g Dowry"
              />
            </div>
          </div>

          {/* Email and phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="name"
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400"
                placeholder="e.g John@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                Phone Number (WhatsApp preferred)
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400"
                placeholder="+234"
              />
            </div>
          </div>

          {/* Residence */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                Country of Residence
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400"
                placeholder="e.g Nigeria"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                State or City
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400"
                placeholder="Oyo state"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <button className="bg-purple-600 rounded-full px-4 py-2 w-full md:w-20 md:h-10 flex justify-center items-center text-white cursor-pointer">
              Submit
            </button>
            {/* <div className="text-xs text-gray-500">
              By pressing the submit button, I agree to Genomac Innovation
              contacting me by email and/or phone to share opportunities
              exclusively available to Select or Enterprise customes. I also
              understand that any information I&apos;ve shared in this form is
              subject to Designership Privacy Policy.
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;