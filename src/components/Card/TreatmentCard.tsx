import Image from "next/image";
import Button from "@/components/Button";

interface TreatmentDetails {
  duration: string;
  effectDuration: string;
  anesthesia: string;
  recovery: string;
}

export interface TreatmentCardProps {
  category: string;
  name: string;
  image: string;
  objective: string;
  details: TreatmentDetails;
}

const TreatmentCard = ({
  category,
  name,
  image,

  objective,
  details
}: TreatmentCardProps) => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 items-start">
      {/* Image and button */}
      <div className="w-full lg:w-1/2 flex flex-col h-full">
        <h2 className="text-3xl mb-4 font-serif">{category}</h2>
        <div className="relative flex-1 rounded overflow-hidden shadow-lg mb-6">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <Button label={"make appointment"} />
      </div>

      {/* Objective and treatment details */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="bg-background-alt text-white p-6  shadow">
          <h5 className="mb-1">Objective</h5>
          <p>{objective}</p>
        </div>

        <div className="border p-6  space-y-4 text-neutral-700 ">
          <div>
            <h5 className="font-normal">Application Time</h5>
            <p>{details.duration}</p>
          </div>
          <div>
            <h5 className="font-normal">Effect Duration</h5>
            <p>{details.effectDuration}</p>
          </div>
          <div>
            <h5 className="font-normal">Anesthesia Needed</h5>
            <p>{details.anesthesia}</p>
          </div>
          <div>
            <h5 className="font-normal">Recovery</h5>
            <p>{details.recovery}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentCard;
