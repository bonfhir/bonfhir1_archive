import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Simplify FHIR usage",
    Svg: require("@site/static/img/fhir-logo.svg").default,
    description: (
      <>
        Bonfhir provides building blocks to help get started quickly.
        Implementing FHIR solution is easier & faster.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        This is not another FHIR Server implementation. These are packages that
        help build applications: UI components, helper libraries, mappers to
        common data sources...
      </>
    ),
  },
  {
    title: "Powered by TypeScript",
    Svg: require("@site/static/img/ts-lettermark-blue.svg").default,
    description: <>The comprehensively typed, universal language.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
