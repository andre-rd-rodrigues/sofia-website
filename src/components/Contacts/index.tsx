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
import Section from "../Section";

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
    <Section
      id="contacts"
      sectionClassName="flex flex-wrap lg:flex-nowrap gap-10"
    >
      {/* Left Side --------------------------------  */}
      <div className="w-full lg:w-1/2 justify-center items-center">
        <Section.Title
          title={t("pages.contacts.title")}
          subtitle={t("pages.contacts.subtitle")}
        />
        <Animated type="slide-in-left" delay={300}>
          <p className="my-7">{t("pages.contacts.description")}</p>
        </Animated>

        {contacts.map(({ description, icon, href }, i) => (
          <Animated type="slide-in-left" key={i} delay={i * 200}>
            <div className="mb-3">
              <IconContact icon={icon} contact={description} href={href} />
            </div>
          </Animated>
        ))}
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
                    icon="mynaui:user"
                    label="Nome"
                    placeholder="Name"
                    required
                  />
                  <Form.Input
                    icon="mdi-light:email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex gap-9 mb-8">
                  <Form.Input
                    icon="mdi-light:phone"
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
                  icon="mdi-light:pencil"
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
    </Section>
  );
}

export default Contacts;
