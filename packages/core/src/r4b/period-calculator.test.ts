/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { addDays } from "date-fns";
import { MedicationDispense, Period } from "fhir/r4";
import { build } from "./builders";
import {
  buildTimelineOfResourcesWithPeriods,
  Timeline,
} from "./period-calculator";
import { WithRequired } from "./types";

describe("period-calculator", () => {
  it("compute timeline of empty resources", () => {
    const result = buildTimelineOfResourcesWithPeriods({
      resources: [],
      periodFn: () => ({ start: "", end: "" }),
    });

    expect(result.blocks.length).toBe(0);
  });

  it("compute timeline of 1 resource", () => {
    const resources = [
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-01",
      }),
    ];
    const result = buildTimelineOfResourcesWithPeriods({
      resources,
      periodFn: medicationDispensePeriodFn,
    });

    expect(result).toMatchObject(<Timeline<MedicationDispense>>{
      blocks: [
        {
          period: {
            start: "2021-01-01",
            end: "2021-01-31",
          },
          items: resources,
        },
      ],
    });
  });

  it("compute timeline of 2 resources with same time", () => {
    const resources = [
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-01",
      }),
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-01",
      }),
    ];
    const result = buildTimelineOfResourcesWithPeriods({
      resources,
      periodFn: medicationDispensePeriodFn,
    });

    expect(result).toMatchObject(<Timeline<MedicationDispense>>{
      blocks: [
        {
          period: {
            start: "2021-01-01",
            end: "2021-01-31",
          },
          items: resources,
        },
      ],
    });
  });

  it("compute timeline of 2 resources no overlap", () => {
    const resources = [
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-01",
      }),
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-02-01",
      }),
    ];
    const result = buildTimelineOfResourcesWithPeriods({
      resources,
      periodFn: medicationDispensePeriodFn,
    });

    expect(result).toMatchObject(<Timeline<MedicationDispense>>{
      blocks: [
        {
          period: {
            start: "2021-01-01",
            end: "2021-01-31",
          },
          items: [resources[0]],
        },
        {
          period: {
            start: "2021-02-01",
            end: "2021-03-03",
          },
          items: [resources[1]],
        },
      ],
    });
  });

  it("compute timeline of 2 resources with overlap", () => {
    const resources = [
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-01",
      }),
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-15",
      }),
    ];
    const result = buildTimelineOfResourcesWithPeriods({
      resources,
      periodFn: medicationDispensePeriodFn,
    });

    expect(result).toMatchObject(<Timeline<MedicationDispense>>{
      blocks: [
        {
          period: {
            start: "2021-01-01",
            end: "2021-01-15",
          },
          items: [resources[0]],
        },
        {
          period: {
            start: "2021-01-15",
            end: "2021-01-31",
          },
          items: [resources[0], resources[1]],
        },
        {
          period: {
            start: "2021-01-31",
            end: "2021-02-14",
          },
          items: [resources[1]],
        },
      ],
    });
  });

  it("compute timeline of multiple resources with overlap", () => {
    const resources = [
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-01",
      }),
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 30 },
        whenHandedOver: "2021-01-15",
      }),
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 90 },
        whenHandedOver: "2021-01-01",
      }),
      build("MedicationDispense", {
        status: "completed",
        daysSupply: { value: 15 },
        whenHandedOver: "2021-03-01",
      }),
    ];
    const result = buildTimelineOfResourcesWithPeriods({
      resources,
      periodFn: medicationDispensePeriodFn,
    });

    expect(result).toMatchObject(<Timeline<MedicationDispense>>{
      blocks: [
        {
          period: {
            start: "2021-01-01",
            end: "2021-01-15",
          },
          items: [resources[0], resources[2]],
        },
        {
          period: {
            start: "2021-01-15",
            end: "2021-01-31",
          },
          items: [resources[0], resources[1], resources[2]],
        },
        {
          period: {
            start: "2021-01-31",
            end: "2021-02-14",
          },
          items: [resources[1], resources[2]],
        },
        {
          period: {
            start: "2021-02-14",
            end: "2021-03-01",
          },
          items: [resources[2]],
        },
        {
          period: {
            start: "2021-03-01",
            end: "2021-03-16",
          },
          items: [resources[2], resources[3]],
        },
        {
          period: {
            start: "2021-03-16",
            end: "2021-04-01",
          },
          items: [resources[2]],
        },
      ],
    });
  });
});

function medicationDispensePeriodFn(
  resource: MedicationDispense
): WithRequired<Period, "start" | "end"> {
  return {
    start: resource.whenHandedOver!,
    end: addDays(
      new Date(resource.whenHandedOver!),
      resource.daysSupply!.value!
    )
      .toISOString()
      .slice(0, 10),
  };
}
