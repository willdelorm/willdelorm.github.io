import ContactForm from "../ui/ContactForm";

function Contact() {
  return (
    <section id="contact" className="w-full px-10 py-20 xl:px-20 xl:py-32">
      <div className="max-w-[1000px] space-y-4">
        <div>
          <h2>Contact</h2>
          <hr className="w-16 border-0 border-t-2 mb-4" />
          <p>
            Whether you're interested in coffee or a new project, I'd love to
            hear from you!
          </p>
          <p className="text-sm italic">* indicates required field</p>
        </div>
        <div className="max-w-[1000px] xl:px-[96px] mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
