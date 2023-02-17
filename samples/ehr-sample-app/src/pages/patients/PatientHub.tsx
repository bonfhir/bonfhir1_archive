import { useFhirRead } from "@bonfhir/fhir-query/r4b";
import { AntdSelectProps } from "@bonfhir/ui-components-antd/r4b";
import { FhirValueSetSelect } from "@bonfhir/ui-components/r4b";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export function PatientHub(): ReactElement | null {
  const { patientId } = useParams<{ patientId: string }>();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const patientQuery = useFhirRead("Patient", patientId!);
  const patient = patientQuery?.data;

  return (
    <div>
      {patientQuery.data?.name?.[0]?.family}{" "}
      <FhirValueSetSelect<AntdSelectProps>
        kind="code"
        value={patient?.gender}
        style={{ width: 120 }}
        onChange={(x: any) => {
          patient!.gender = x;
        }}
        valueSetExpand={{
          url: "http://hl7.org/fhir/ValueSet/administrative-gender",
        }}
      />
    </div>
  );
}
