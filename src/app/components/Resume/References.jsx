"use client"
import { useEffect, useContext } from "react";
import { useCms } from "@/app/hooks/useCms";
import contentContext from "@/app/contexts/content/contentContext";
import Reference from "./Reference";

const References = () => {
  const { getReferences } = useCms();
  const { references } = useContext(contentContext);

  useEffect(() => {
    getReferences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-8">
      <h4 className="text-xl font-black">References</h4>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1">
        {references?.map((reference) => {
          const { name, title, organization, id, linkedIn } = reference;
          return (
            <Reference
              key={id}
              name={name}
              title={title}
              organization={organization}
              linkedin={linkedIn}
            />
          )
        })}

      </div>
    </section>
  );
};
References.displayName = "References";
export default References;
