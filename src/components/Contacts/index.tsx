"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Animated from "../Animated";
import Button from "../Button";
import useTranslation from "@/hooks/useTranslation";
import IconContact from "../IconContact";
import { useForm } from "@formspree/react";
import * as Form from "../Form";
import { Icon } from "@iconify/react";

type Contact = {
  description: string;
  href: string;
  icon: string;
};

function Contacts() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "");
  const t = useTranslations();
  const { getTranslationsArray } = useTranslation();

  const contacts: Contact[] = getTranslationsArray("pages.contacts.links");

  return (
    <>
      {/* Left Side --------------------------------  */}
      <div className="w-full lg:w-1/2 justify-center items-center">
        <Animated type="slide-in-left">
          <h3 className="text-blue uppercase tracking-widest text-xs">
            {t("pages.contacts.subtitle")}
          </h3>
        </Animated>
        <Animated type="slide-in-left" delay={100}>
          <h4 className="text-3xl sm:text-5xl text-blue mt-3">
            {t("pages.contacts.title")}
          </h4>
        </Animated>
        <Animated type="slide-in-left" delay={300}>
          <p className="my-7 text-zinc-500">
            {t("pages.contacts.description")}
          </p>
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
      <div className="w-full lg:w-1/2 mt-0 lg:mt-9">
        <div className="m-auto">
          {state.succeeded ? (
            <Animated
              type="slide-in-left"
              className="flex flex-col items-center"
            >
              <Icon
                icon="lets-icons:check-fill"
                className="text-emerald-400"
                fontSize={90}
              />

              <p className="text-blue text-lg">{t("notifications.success")}</p>
            </Animated>
          ) : (
            <Animated delay={400}>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-9 mb-8">
                  <Form.Input
                    icon="solar-user-outline"
                    label="Nome"
                    placeholder="Name"
                    required
                  />
                  <Form.Input
                    icon="mage:email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex gap-9 mb-8">
                  <Form.Input
                    icon="solar:phone-rounded-outline"
                    label="Telefone"
                    type="tel"
                    placeholder="Phone number"
                  />
                  <Form.Input
                    icon="ph:info-light"
                    label="Assunto"
                    placeholder="Subject"
                    required
                  />
                </div>
                <Form.Input
                  icon="cil:pencil"
                  label="Mensagem"
                  placeholder="How can I help you?"
                  required
                />

                <div className="mt-14 text-end">
                  <Button label="send" icon="cil:send" type="submit" />
                </div>
              </form>
            </Animated>
          )}
        </div>
      </div>
    </>
  );
}

export default Contacts;
