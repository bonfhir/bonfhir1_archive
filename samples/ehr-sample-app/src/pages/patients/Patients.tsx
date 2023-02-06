import { useFhirSearch } from "@bonfhir/fhir-query/r4b";
import { Typography } from "antd";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export function Patients(): ReactElement | null {
  const patientsQuery = useFhirSearch("Patient", (search) =>
    search.active("true")
  );

  if (patientsQuery.isInitialLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Page>
      <Typography.Title>Patients</Typography.Title>
      <ul>
        {patientsQuery.data?.nav.type("Patient").map((patient) => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}`}>{patient.id}</Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
