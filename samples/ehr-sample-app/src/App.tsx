import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  Layout,
} from "@pankod/refine-chakra-ui";

import dataProvider from "@pankod/refine-simple-rest";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";
import routerProvider from "@pankod/refine-react-router-v6";

import { dataProvider as fhirDataProvider } from "./fhir-dataprovider";

function App() {
  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        dataProvider={{
          default: dataProvider("https://api.fake-rest.refine.dev"),
          fhir: fhirDataProvider("https://api.fake-rest.refine.dev"),
        }}
        notificationProvider={notificationProvider()}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        Layout={Layout}
        resources={[
          {
            name: "posts",
            list: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
            create: ChakraUIInferencer,
            canDelete: true,
            options: {
              providerName: "default",
            },
          },
        ]}
        routerProvider={routerProvider}
      />
    </ChakraProvider>
  );
}

export default App;
