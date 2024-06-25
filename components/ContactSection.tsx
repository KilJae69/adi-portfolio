"use client";

import SectionHeading from "./SectionHeading";
import { MotionSection } from "./framer";
import { useSectionInView } from "@/lib/hooks";
import { sendEmailAction } from "@/lib/sendEmail.action";

import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function ContactSection() {
  const { ref } = useSectionInView("Contact");

  return (
    <MotionSection
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:adi.toromanovic@outlook.com">
          adi.toromanovic@outlook.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmailAction(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Message sent successfully");
        }}
        className="mt-10 flex flex-col dark:text-black  "
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          name="senderEmail"
          type="email"
          maxLength={100}
          required
        />
        <textarea
          required
          className="h-52 my-3 p-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          name="message"
          maxLength={5000}
          id=""
        />
        <SubmitButton />
      </form>
    </MotionSection>
  );
}
