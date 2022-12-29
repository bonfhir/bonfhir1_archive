import { build } from "./builders";

const patient = build("Patient", {
  name: [
    {
      family: "Doe",
    },
  ],
});

console.log(patient.text);
