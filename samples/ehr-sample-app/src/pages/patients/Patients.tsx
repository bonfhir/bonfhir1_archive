import {
  getIdFromReference,
  resourceSearch,
  SortOrderPatient,
} from "@bonfhir/core/r4b";
import { useFhirSearch } from "@bonfhir/fhir-query/r4b";
import { ValueSetURIs } from "@bonfhir/terminology/r4b";
import {
  FhirField,
  FhirForm,
  FhirTable,
  FhirValue,
  useFhirTable,
  useURLSearchParamsStateManager,
} from "@bonfhir/ui-components/r4b";
import {
  Col,
  Divider,
  Row,
  SelectProps,
  TableColumnProps as AntdTableColumnProps,
  TableProps as AntdTableProps,
  Typography,
} from "antd";
import { Organization, Patient } from "fhir/r4";
import { ReactElement } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Page } from "../../components/Page";

export function Patients(): ReactElement | null {
  interface SearchParams {
    name: string;
    organization: string;
  }

  const navigate = useNavigate();

  const fhirTable = useFhirTable<SortOrderPatient, SearchParams>({
    pageSize: 5,
    defaultSort: "name",
    defaultSearch: { name: "", organization: "" },
    stateManager: useURLSearchParamsStateManager("search", useSearchParams()),
  });

  const patientsQuery = useFhirSearch(
    "Patient",
    (search) =>
      search
        .name(fhirTable.search?.name)
        .organization(fhirTable.search?.organization)
        ._count(fhirTable.pageSize)
        ._sort(fhirTable.sort)
        ._total("accurate"),
    fhirTable.pageUrl
  );

  const organizationsQuery = useFhirSearch(
    "Organization",
    (search) =>
      search._id([
        ...new Set(
          patientsQuery.data?.nav
            .type("Patient")
            .map((x) => getIdFromReference(x.managingOrganization))
            .filter(Boolean) as string[]
        ),
      ]),
    undefined,
    {
      query: {
        enabled: !!patientsQuery.data,
      },
    }
  );

  return (
    <Page>
      <Typography.Title>Patients</Typography.Title>
      <Divider />
      <FhirForm<SearchParams>
        initialValues={fhirTable.search!}
        onChange={fhirTable.onSearch}
      >
        <Row>
          <Col span={12}>
            <FhirField
              type="string"
              name="name"
              options={{ placeholder: "Search by name" }}
            />
          </Col>
          <Col span={12}>
            <FhirField<Omit<SelectProps, "options">>
              type="resource"
              name="organization"
              options={{
                resourceType: "Organization",
                placeholder: "Managing organization",
                search: (val) =>
                  resourceSearch("Organization").name(val)._sort("name").href,
                label: (org: Organization) => org.name || "",
              }}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </FhirForm>
      <Divider />
      <FhirTable<
        Patient,
        Patient,
        AntdTableProps<Patient>,
        AntdTableColumnProps<Patient>
      >
        query={patientsQuery}
        querySelect={(result) => result.nav.type("Patient")}
        columns={[
          {
            key: "name",
            title: "Name",
            sortable: true,
            render: (patient) =>
              `${patient.name?.[0]?.given?.[0]} ${patient.name?.[0]?.family}`,
          },
          {
            key: "gender",
            title: "Gender",
            sortable: true,
            render: (patient) => (
              <FhirValue
                type="code"
                value={patient.gender}
                options={{
                  valueSetExpand: {
                    url: ValueSetURIs.AdministrativeGender,
                  },
                }}
              />
            ),
          },
          {
            key: "organization",
            title: "Managing Organization",
            render: (patient: Patient) =>
              organizationsQuery.data?.nav.reference(
                patient.managingOrganization?.reference
              )?.name,
          },
        ]}
        {...fhirTable}
        onRow={(patient) => {
          return {
            onClick: () => navigate(`/patients/${patient.id}`),
          };
        }}
      />
    </Page>
  );
}
