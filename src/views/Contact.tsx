import ClickSpark from "../components/ClickSpark";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Particles from '../components/Particles';


const contactSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});


type ContactSchema = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
  
    formState: { errors },
     reset
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactSchema) => {
    console.log("Form Submitted:", data);
      reset();
    

   
  };

  return (
    <>
      <ClickSpark
        sparkColor="#b91c1c"
        sparkSize={20}
        sparkRadius={50}
        sparkCount={6}
        duration={300}
      >    <div
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    pointerEvents: 'none'
  }}
>
  <Particles
    particleColors={['#ef4444', '#b91c1c']}
    particleCount={1000}
    particleSpread={10}
    speed={0.7}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={true}
    disableRotation={false}
  />
</div>
        <div className="bg-black w-full flex flex-col">
   
          {/* nav */}
          <div className="border-b border-primary w-full h-20 flex items-center justify-center px-4">
            <div className="w-full h-full border-x border-primary max-w-[1889px]"></div>

          </div>
          {/* form */}
          <div className="border-b border-primary w-full flex items-center justify-center px-4">
            <div className="w-full h-[80vh] min-h-[800px] border-x border-primary max-w-[1889px] flex max-[600px]:flex-col items-center justify-center">
          
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 w-[500px] max-[600px]:w-full p-6 border border-primary rounded-lg"
              >
                {/* Name */}
                <div className="flex flex-col w-full">
                  <label className="text-primary mb-2 ">Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="border border-primary bg-black text-primary p-3 outline-none rounded-md"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <span className="text-red-600 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col w-full">
                  <label className="text-primary mb-2">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="border border-primary bg-black text-primary p-3 outline-none rounded-md"
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col w-full">
                  <label className="text-primary mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    className="border border-primary bg-black text-primary p-3 outline-none resize-none h-32 rounded-md"
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-600 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="border border-primary text-primary py-3 hover:bg-primary hover:text-black transition rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="w-full h-20 flex items-center justify-center px-4">
            <div className="w-full h-full border-x border-primary max-w-[1889px]"></div>
          </div>
        </div>
      </ClickSpark>
    </>
  );
}
