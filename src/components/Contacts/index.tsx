"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Animated from "../Animated";
import Button from "../Button";
import useTranslation from "@/hooks/useTranslation";
import IconContact from "../IconContact";
import { useForm } from "@formspree/react";
import * as Form from "../Form";

type Contact = {
  description: string;
  href: string;
  icon: string;
};

function Contacts() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");
  const t = useTranslations("pages.contacts");
  const { getTranslationsArray } = useTranslation();

  const contacts: Contact[] = getTranslationsArray("pages.contacts.links");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <>
      {/* Left Side --------------------------------  */}
      <div className="w-full lg:w-1/2 p-0 sm:p-4 justify-center items-center">
        <Animated type="slide-in-left">
          <h3 className="text-blue uppercase tracking-widest text-xs">
            {t("subtitle")}
          </h3>
        </Animated>
        <Animated type="slide-in-left" delay={100}>
          <h4 className="md:text-5xl sm:text-4xl text-blue mt-3">
            {t("title")}
          </h4>
        </Animated>
        <Animated type="slide-in-left" delay={300}>
          <p className="my-7 text-zinc-500">{t("description")}</p>
        </Animated>

        {contacts.map(({ description, icon, href }, i) => (
          <Animated type="slide-in-left" key={i} delay={i * 200}>
            <div className="mb-3">
              <IconContact icon={icon} contact={description} href={href} />
            </div>
          </Animated>
        ))}

        {/* Contacts */}
      </div>

      {/* Right Side -------------------------------- */}
      <div className="w-full lg:w-1/2">
        <div className="m-auto">
          <Animated delay={400}>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-9 mb-8">
                <Form.Input
                  icon="solar-user-outline"
                  label="fullName"
                  placeholder="Name"
                  required
                />
                <Form.Input
                  icon="mage:email"
                  label="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex gap-9 mb-8">
                <Form.Input
                  icon="solar:phone-rounded-outline"
                  label="phone"
                  type="tel"
                  placeholder="Phone number"
                />
                <Form.Input
                  icon="ph:info-light"
                  label="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <Form.Input
                icon="cil:pencil"
                label="message"
                placeholder="How can I help you?"
                required
              />

              <div className="mt-14 text-end">
                <Button label="send" icon="cil:send" type="submit" />
              </div>
            </form>
          </Animated>
        </div>
      </div>
    </>
  );
}

export default Contacts;
