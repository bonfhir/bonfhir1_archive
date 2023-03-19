import { Period } from "fhir/r4";
import { WithRequired } from "./types";

export interface Timeline<T> {
  /**
   * Discrete blocks of different periods
   */
  blocks: TimelineBlock<T>[];
}

export interface TimelineBlock<T> {
  /**
   * The start / end for that block.
   */
  period: WithRequired<Period, "start" | "end">;

  /**
   * The items that are included in that period.
   * An item may appear in multiple blocks.
   */
  items: T[];
}

export interface BuildTimelineOfResourcesWithPeriodsArgs<T> {
  /**
   * The resources to place into different blocks
   */
  resources: T[];

  /**
   * The method to extract a `Period` from a resource.
   */
  periodFn: (resource: T) => WithRequired<Period, "start" | "end">;
}

/**
 * From a list of resources that can be associated with a period, compute a timeline of multiple
 * blocks where resources are placed.
 * One of the advantage is to see if there was overlap, and for how many periods.
 *
 * @example:
 * const resources = [
 *    build("MedicationDispense", {
 *        status: "completed",
 *        daysSupply: { value: 30 },
 *        whenHandedOver: "2021-01-01",
 *      }),
 *      build("MedicationDispense", {
 *        status: "completed",
 *        daysSupply: { value: 30 },
 *        whenHandedOver: "2021-01-15",
 *      }),
 *    ];
 *    const result = buildTimelineOfResourcesWithPeriods({
 *      resources,
 *      periodFn: (resource) => ({
 *        start: resource.whenHandedOver!,
 *        end: addDays(
 *          new Date(resource.whenHandedOver!),
 *          resource.daysSupply!.value!
 *        )
 *          .toISOString()
 *          .slice(0, 10),
 *      }),
 *    });
 *
 *    > {
 *      blocks: [
 *        {
 *          period: {
 *            start: "2021-01-01",
 *            end: "2021-01-15",
 *          },
 *          items: [resources[0]],
 *        },
 *        {
 *          period: {
 *            start: "2021-01-15",
 *            end: "2021-01-31",
 *          },
 *          items: [resources[0], resources[1]],
 *        },
 *        {
 *          period: {
 *            start: "2021-01-31",
 *            end: "2021-02-14",
 *          },
 *          items: [resources[1]],
 *        },
 *      ],
 *    }
 *
 */
export function buildTimelineOfResourcesWithPeriods<T>({
  resources,
  periodFn,
}: BuildTimelineOfResourcesWithPeriodsArgs<T>): Timeline<T> {
  const tuples: Array<[T, WithRequired<Period, "start" | "end">]> =
    resources.map((resource) => [resource, periodFn(resource)]);

  const ticks = [
    ...new Set(tuples.flatMap((tuple) => [tuple[1].start, tuple[1].end])),
  ].sort();

  const blocks: TimelineBlock<T>[] = [];

  for (let i = 0; i < ticks.length - 1; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const start = ticks[i]!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const end = ticks[i + 1]!;

    blocks.push({
      period: {
        start,
        end,
      },
      items: tuples
        .filter(([, period]) => start < period.end && end > period.start)
        .map(([resource]) => resource),
    });
  }

  return {
    blocks: blocks.filter((block) => block.items.length),
  };
}
