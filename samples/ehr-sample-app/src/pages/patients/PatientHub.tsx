import { useFhirRead } from "@bonfhir/fhir-query/r4b";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export function PatientHub(): ReactElement | null {
  const { patientId } = useParams<{ patientId: string }>();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const patientQuery = useFhirRead("Patient", patientId!);

  return <div>{patientQuery.data?.name?.[0]?.family}</div>;
}
