import { useForm } from "react-hook-form";

function Projects() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section id="contact" className="relative w-full px-10 py-32">
      <div className="mb-10 space-y-10">
        <div className="space-y-3">
          <h2 className="text-4xl font-medium">Contact</h2>
          <hr className="w-16 border-0 border-t-2" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="max-w-[1200px] px-[96px] mx-auto space-y-6">
          <div className="flex">
            <div className="flex-1">
              <h3 className="text-xl font-medium">Call Me</h3>
              <a href="tel:+19736344619">973 634 4619</a>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium">Email Me</h3>
              <a href="mailto:willdelorm@gmail.com">willdelorm@gmail.com</a>
            </div>
          </div>

          <form
            className="p-6 space-y-4 bg-white flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full border border-black px-2 py-1"
                  placeholder="e.g. Jane Doe"
                  {...register("name")}
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full border border-black px-2 py-1"
                  placeholder="e.g. jane.doe@gmail.com"
                  {...register("email")}
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full border border-black px-2 py-1"
                placeholder="e.g. Looking for a web developer"
                {...register("subject")}
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border border-black px-2 py-1 resize-none"
                rows="5"
                placeholder="e.g. Help!"
                {...register("message")}
              />
            </div>
            <button
              className="px-6 py-3 mx-auto rounded-lg text-white font-medium"
              type="submit"
            >
              Submit message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Projects;
