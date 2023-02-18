import { useFhirSearch } from "@bonfhir/fhir-query/r4b";
import { AntdTableProps } from "@bonfhir/ui-components-antd/r4b/AntdTable";
import { FhirTable, FhirValue } from "@bonfhir/ui-components/r4b";
import { Typography } from "antd";
import { Patient } from "fhir/r4";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";

export function Patients(): ReactElement | null {
  const navigate = useNavigate();
  const patientsQuery = useFhirSearch("Patient", (search) =>
    search.active("true")
  );

  return (
    <Page>
      <Typography.Title>Patients</Typography.Title>
      <FhirTable<Patient, Patient, AntdTableProps>
        query={patientsQuery}
        querySelect={(result) => result.nav.type("Patient")}
        columns={[
          {
            title: "Id",
            render: (patient) => patient.id,
          },
          {
            title: "Gender",
            render: (patient) => (
              <FhirValue
                type="code"
                value={patient.gender}
                options={{
                  valueSetExpand: {
                    url: "http://hl7.org/fhir/ValueSet/administrative-gender",
                  },
                }}
              />
            ),
          },
        ]}
        onRow={(patient) => {
          return {
            onClick: () => navigate(`/patients/${(patient as Patient).id}`),
          };
        }}
      />
    </Page>
  );
}
