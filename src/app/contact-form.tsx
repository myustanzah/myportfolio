"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

export function ContactForm() {

  const fNameRef = useRef<HTMLInputElement>(null);
  const lNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLInputElement>(null);
  const [payload, setPayload] = useState({
    fName: "",
    lName: "",
    email: "",
    interested: "A",
    msg: ""
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; interested?: string; msg?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

   useEffect(() => {
    // Tunggu hingga browser autofill berjalan
    setTimeout(() => {
      if (emailRef.current) {
        setPayload((prev) => ({ ...prev, email: emailRef.current?.value || "" }));
      } else if (fNameRef.current) {
        setPayload((prev) => ({ ...prev, fName: fNameRef.current?.value || "" }));
      } else if(lNameRef.current){
        setPayload((prev) => ({ ...prev, lName: lNameRef.current?.value || "" }));
      } else if (msgRef.current){
        setPayload((prev) => ({ ...prev, lName: msgRef.current?.value || "" }));
      }

    }, 500); // delay sedikit agar autofill sempat terjadi
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // reset error saat mengetik
  };

  const handleChangeTextArea = ( e: React.ChangeEvent<HTMLTextAreaElement> ) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // reset error saat mengetik
  }

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!payload.fName.trim()) newErrors.name = "Nama wajib diisi";
    if (!payload.email.includes("@")) newErrors.email = "Email tidak valid";
    if (!payload.interested.trim()) newErrors.interested = "Tunjukan ketertarikan mu";
    if (!payload.msg.trim()) newErrors.msg = "Apa pesan mu ?";
    return newErrors;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.alert(JSON.stringify({
        message: "Error Validation",
        validationErrors
      }, null, 2));
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      // Kirim data ke backend / API
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (!res.status) throw new Error("Gagal mengirim form");
      const data = await res.json();
      setSuccessMessage(data.message);
      window.alert(JSON.stringify("Sukses " + data.message))
    } catch (err) {
      window.alert(JSON.stringify("Error" + err));
    } finally {
      setIsSubmitting(false);
      setPayload({ 
        fName: "",
        lName: "",
        email: "",
        interested: "A",
        msg: ""}); // reset form
    }
  };


  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="https://wa.link/lmh6rv" target="_blank">
                    +62 - 8956 - 0606 - 4773
                  </a>
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="mailto:muhammadyustanzah@gmail.com?body=Hallo%20Yus%20!">
                    muhammadyustanzah@gmail.com
                  </a>
                </Typography>
              </div>
              {/* <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Open Support Ticket
                </Typography>
              </div> */}
              <div className="flex items-center gap-5">
                {/* <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton> */}
                <IconButton variant="text" color="white">
                  <a href="https://github.com/myustanzah" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github text-lg" />
                  </a>
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#" onSubmit={handleSendMessage}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                    <Input
                      ref={fNameRef}
                      color="gray"
                      size="lg"
                      variant="static"
                      label={`First Name * ${errors?.name ? "!! Error !!" : ""}`}
                      name="fName"
                      placeholder="eg. Lucas"
                      onChange={handleChange}
                      containerProps={{
                        className: "!min-w-full mb-3 md:mb-0 border-1 border-black",
                      }}
                      className="pr-10"
                    />
                  {/* @ts-ignore */}
                  <Input
                    ref={lNameRef}
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lName"
                    placeholder="eg. Jones"
                    onChange={handleChange}
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  ref={emailRef}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email *"
                  name="email"
                  placeholder="eg. lucas@mail.com"
                  onChange={handleChange}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="interested"
                    value={"A"}
                    label="Design"
                    onChange={handleChange}
                    defaultChecked
                  />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interested" value={"B"} onChange={handleChange} label="Development" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interested" value={"C"} onChange={handleChange} label="Support" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interested" value={"D"} onChange={handleChange} label="Other" />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  ref={msgRef}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message *"
                  name="msg"
                  onChange={handleChangeTextArea}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex flex-col items-end gap-3">
                  <Button className="w-full md:w-fit" disabled={isSubmitting} color="gray" size="md" type="submit">
                    {isSubmitting ? "Send message ..." : "Send"}
                  </Button>
                  {successMessage && 
                    (
                      <div className="flex items-center gap-2 rounded-md bg-green-50 border border-green-300 text-green-800 px-4 py-2 text-sm shadow-sm animate-fadeIn">
                        <svg
                          className="w-5 h-5 text-green-600 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{successMessage}</span>
                      </div>
                    )
                  }
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
