import Link from "next/link";

interface TemplateProps {
  title: string;
  description: string;
}

const Template = ({ title, description }: TemplateProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="text-copy-inactive">{description}</p>
      <p className="mt-8">
        Go back to{" "}
        <Link href="/" className="underline">
          menu
        </Link>
      </p>
    </div>
  );
};

export { Template };
