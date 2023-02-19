import { useFhirSearch } from "@bonfhir/fhir-query/r4b";
import { AntdTableProps } from "@bonfhir/ui-components-antd/r4b/AntdTable";
import { FhirTable, FhirValue, useFhirTable } from "@bonfhir/ui-components/r4b";
import { Typography } from "antd";
import { Patient } from "fhir/r4";
import { ReactElement } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Page } from "../../components/Page";

export function Patients(): ReactElement | null {
  const navigate = useNavigate();
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const fhirTable = useFhirTable({
    pageSize: 5,
    state: [
      {
        pageUrl: urlSearchParams.has("pageUrl")
          ? atob(urlSearchParams.get("pageUrl")!)
          : "",
      },
      (prevState) => {
        if (typeof prevState === "function") {
          const resState = prevState({
            pageUrl: urlSearchParams.get("pageUrl") || "",
          });
          setUrlSearchParams((prevUrlSearchParams) => ({
            ...prevUrlSearchParams,
            pageUrl: resState?.pageUrl ? btoa(resState?.pageUrl) : "",
          }));
        } else {
          setUrlSearchParams((prevUrlSearchParams) => ({
            ...prevUrlSearchParams,
            pageUrl: prevState?.pageUrl ? btoa(prevState?.pageUrl) : "",
          }));
        }
      },
    ],
  });

  const patientsQuery = useFhirSearch(
    "Patient",
    (search) => search._count(fhirTable.pageSize)._total("accurate"),
    fhirTable.pageUrl
  );

  return (
    <Page>
      <Typography.Title>Patients</Typography.Title>
      <FhirTable<Patient, Patient, AntdTableProps<Patient>>
        query={patientsQuery}
        querySelect={(result) => result.nav.type("Patient")}
        columns={[
          {
            title: "Name",
            render: (patient) =>
              `${patient.name?.[0]?.given?.[0]} ${patient.name?.[0]?.family}`,
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
        {...fhirTable}
        rowKey={(patient) => patient.id!}
        onRow={(patient) => {
          return {
            onClick: () => navigate(`/patients/${patient.id}`),
          };
        }}
      />
    </Page>
  );
}
