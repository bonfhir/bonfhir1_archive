import { build } from "@bonfhir/core/r4b";
import { useFhirRead, useFhirUpdateMutation } from "@bonfhir/fhir-query/r4b";
import { AntdSelectProps } from "@bonfhir/ui-components-antd/r4b";
import { FhirCodeSelect } from "@bonfhir/ui-components/r4b";
import { Button, Form } from "antd";
import { Patient } from "fhir/r4";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export function PatientHub(): ReactElement | null {
  const { patientId } = useParams<{ patientId: string }>();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const patientQuery = useFhirRead("Patient", patientId!);

  const updatePatientMutation = useFhirUpdateMutation("Patient");

  return (
    <Form
      name="patient"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={patientQuery?.data}
      autoComplete="off"
      onFinish={(updatedPatient: Partial<Patient>) => {
        updatePatientMutation.mutate({
          body: build("Patient", { ...patientQuery.data, ...updatedPatient }),
        });
      }}
    >
      <Form.Item label="Gender" name="gender">
        <FhirCodeSelect<AntdSelectProps>
          valueSetExpand={{
            url: "http://hl7.org/fhir/ValueSet/administrative-gender",
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
