import { PageContext } from "../context/PageContext";
import { SiteContext } from "../context/SiteContext";
import "../public/engine.styles.css";
import "../styles/styles.css";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    asPath: "/page1/page2/page3",
    locale: "en",
  },
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => {
    return (
      <QueryClientProvider client={queryClient}>
        <SiteContext.Provider
          value={{
            config: { general: {} },
          }}
        >
          <PageContext.Provider
            value={{
              isPreviewMode: false,
              language: "en",
              sitemapItem: {
                _id: "xx",
                _type: "page.content",
                _updatedAt: "2022-01-04T14:26:24Z",
                path: "/page1",
                title: "Page 1",
              },
              breadcrumb: [],
              languageAlternates: [],
            }}
          >
            <div className={`font-text`}>
              <Story />
            </div>
          </PageContext.Provider>
        </SiteContext.Provider>
      </QueryClientProvider>
    );
  },
];
