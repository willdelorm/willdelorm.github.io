import { useForm } from "react-hook-form";

function Projects() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: Update Web3Forms code to match docs for React Hook Form
  const [result, setResult] = useState("");

  const onSubmit = async (data) => {
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log(formData)

    formData.append("access_key", "fc07073a-47ef-49e3-96c1-7f029a003ee5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const res = await response.json();

    if (res.success) {
      setResult("Form Submitted Successfully");
      reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <section id="contact" className="w-full px-10 py-16 md:py-32">
      <div className="mb-10">
        <div className="space-y-3 mb-10">
          <h2>Contact</h2>
          <hr className="w-16 border-0 border-t-2" />
          <p>
            Whether you're interested in coffee or a new project, I'd love to
            hear from you!
          </p>
          <p className="text-sm italic">* indicates required field</p>
        </div>
        <div className="max-w-[1200px] md:px-[96px] mx-auto">
          <form
            className="md:p-8 space-y-4 md:flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="md:flex md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block font-medium mb-1" htmlFor="name">
                  Name*{" "}
                  {errors.name?.type === "required" && (
                    <span className="text-red-500">Required</span>
                  )}
                </label>
                <input
                  className="w-full border border-black px-2 py-1"
                  placeholder="e.g. Jane Doe"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  maxLength={50}
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1" htmlFor="email">
                  Email*{" "}
                  {errors.email?.type === "required" && (
                    <span className="text-red-500">Required</span>
                  )}
                </label>
                <input
                  className="w-full border border-black px-2 py-1"
                  placeholder="e.g. jane.doe@gmail.com"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  maxLength={320}
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full border border-black px-2 py-1"
                placeholder="e.g. Looking for a web developer"
                {...register("subject")}
                aria-invalid={errors.subject ? "true" : "false"}
                maxLength={100}
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="message">
                Message*{" "}
                {errors.message?.type === "required" && (
                  <span className="text-red-500">Required</span>
                )}
              </label>
              <textarea
                className="w-full border border-black px-2 py-1 resize-none"
                rows="5"
                placeholder="e.g. You're just the person I've been looking for!"
                {...register("message", { required: true })}
                aria-invalid={errors.message ? "true" : "false"}
                maxLength={2000}
              />
            </div>
            <button
              className="px-6 py-3 mx-auto rounded-lg text-white font-bold"
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
