import Image from 'next/image';
import Button from '@/components/Button';

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
  details,
}: TreatmentCardProps) => {
  return (
    <section className="flex flex-col items-start gap-6 lg:flex-row">
      {/* Image and button */}
      <div className="flex h-full w-full flex-col lg:w-1/2">
        <h2 className="text-3xl">{name}</h2>
        <p className="mb-6 text-sm text-neutral-500">{category}</p>
        <div className="relative min-h-44 flex-1 shadow-lg md:mb-6">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <Button label={'make appointment'} className="hidden md:block" />
      </div>

      {/* Treatment details */}
      <div className="w-full space-y-6 lg:w-1/2">
        <div className="bg-background-alt p-6 text-white">
          <h5 className="mb-1 font-normal">Objective</h5>
          <p>{objective}</p>
        </div>
        <div className="space-y-4 border p-6 text-neutral-700">
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
        <Button label={'make appointment'} className="block w-full md:hidden" />
      </div>
    </section>
  );
};

export default TreatmentCard;
