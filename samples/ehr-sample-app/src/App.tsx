import { antdFhirUIComponentsRenderer } from "@bonfhir/antd/r4b";
import { isEqual } from "@bonfhir/core/r4b";
import { FhirQueryProvider } from "@bonfhir/fhir-query/r4b";
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { FhirUIComponentsProvider } from "@bonfhir/ui-components/r4b";
import { LoginState, MedplumClient } from "@medplum/core";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

const SIGNIN_REDIRECT_PATH_SESSION_STORAGE_KEY = "signInRedirectPath";

export function App(): ReactElement | null {
  const renderer = useMemo(antdFhirUIComponentsRenderer, []);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const medplum = useMemo(
    () =>
      new MedplumClient({
        baseUrl:
          process.env.SAMPLE_APP_MEDPLUM_SERVER_URL || "http://localhost:8103",
        cacheTime: 0,
      }),
    []
  );

  const [loginState, setLoginState] = useState<LoginState | undefined>();

  function updateLoginState(newLoginState: LoginState | undefined) {
    if (!isEqual(loginState, newLoginState)) setLoginState(newLoginState);
  }

  function medplumChangeEventListener() {
    updateLoginState(medplum.getActiveLogin());
  }

  async function signIn() {
    const activeLogin = medplum.getActiveLogin();

    if (!loginState && !activeLogin) {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      // If the current URL includes a "code" query string param, then we can exchange it for a token
      if (code) {
        try {
          await medplum.processCode(code);
          const signInRedirectPath = sessionStorage.getItem(
            SIGNIN_REDIRECT_PATH_SESSION_STORAGE_KEY
          );
          if (signInRedirectPath) {
            sessionStorage.removeItem(SIGNIN_REDIRECT_PATH_SESSION_STORAGE_KEY);
            navigate(signInRedirectPath, { replace: true });
          } else {
            urlParams.delete("code");
            const newUrl = new URL(
              window.location.pathname,
              window.location.origin
            );
            urlParams.forEach((value, key) => {
              newUrl.searchParams.append(key, value);
            });
            navigate(newUrl.toString(), { replace: true });
          }
          return;
        } catch (e) {
          console.error(e);
        }
      }

      if (pathname) {
        sessionStorage.setItem(
          SIGNIN_REDIRECT_PATH_SESSION_STORAGE_KEY,
          pathname
        );
      } else {
        sessionStorage.removeItem(SIGNIN_REDIRECT_PATH_SESSION_STORAGE_KEY);
      }

      await medplum.signInWithRedirect({
        clientId: process.env.MEDPLUM_CLIENT_ID,
        redirectUri: window.location.origin.endsWith("/")
          ? window.location.origin
          : `${window.location.origin}/`,
      });
    } else {
      updateLoginState(activeLogin);
    }
  }

  useEffect(() => {
    medplum.addEventListener("change", medplumChangeEventListener);
    signIn().catch((e) => console.error(e));
    return () =>
      medplum.removeEventListeneer("change", medplumChangeEventListener);
  }, []);

  const fhirClient = useMemo(() => {
    if (!medplum) {
      return undefined;
    }
    return buildFhirRestfulClientAdapter(medplum);
  }, [medplum]);

  if (!fhirClient) {
    return null;
  }

  if (!loginState) {
    return null;
  }

  return (
    <FhirQueryProvider fhirClient={fhirClient}>
      <ConfigProvider>
        <FhirUIComponentsProvider renderer={renderer}>
          <AppRoutes />
          <ReactQueryDevtools />
        </FhirUIComponentsProvider>
      </ConfigProvider>
    </FhirQueryProvider>
  );
}
