import TreatmentCard from "@/components/Card/TreatmentCard";
import Page from "@/components/Page";
import { treatments } from "@/constants/treatments.constants";
import { useTranslations } from "next-intl";

const Treatments = () => {
  const t = useTranslations("pages.treatments");
  const tComponents = useTranslations();

  const translatedTreatments = treatments.map((treatment) => ({
    ...treatment,
    name: tComponents(treatment.name),
    category: tComponents(treatment.category),
    objective: tComponents(treatment.objective),
    details: {
      duration: tComponents(treatment.details.duration),
      effectDuration: tComponents(treatment.details.effectDuration),
      anesthesia: tComponents(treatment.details.anesthesia),
      recovery: tComponents(treatment.details.recovery)
    }
  }));
  console.log(translatedTreatments);
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title={t("title")}
      />
      <section className="bg-white text-neutral-800 py-12 px-4 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 ">
          {translatedTreatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} {...treatment} />
          ))}
        </div>
      </section>
    </Page>
  );
};

export default Treatments;
