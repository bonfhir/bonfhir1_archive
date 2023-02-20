import { useFhirSearch } from "@bonfhir/fhir-query/r4b";
import { ValueSetURIs } from "@bonfhir/terminology/r4b";
import { FhirValue } from "@bonfhir/ui-components/r4b";
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
            <Link to={`/patients/${patient.id}`}>{patient.id}</Link> (DOB:
            <FhirValue
              type="date"
              value={patient.birthDate}
              options={{ dateStyle: "long" }}
            />
            , Gender:{" "}
            <FhirValue
              type="code"
              value={patient.gender}
              options={{
                valueSetExpand: {
                  url: ValueSetURIs.AdministrativeGender,
                },
              }}
            />
            )
          </li>
        ))}
      </ul>
    </Page>
  );
}
