import { SchemaName } from "../../../types.sanity";
import {
  DEFAULT_CONTENT_PAGE_PREVIEW,
  getI18nBaseFieldForSingleton,
  getParentDocumentInitialValue,
  ORDER_PUBLISHED_DESC,
  pageBase,
  PARENT_FIELD,
} from "./page-fields";
import { CalendarHome } from "@vectopus/atlas-icons-react";
import React from "react";
import { defineType } from "sanity";

export const SCHEMA_NAME: SchemaName = "page.events";

export default defineType({
  name: SCHEMA_NAME,
  title: "Events overview",
  type: "document",
  orderings: [ORDER_PUBLISHED_DESC],
  options: {
    singleton: true,
  },
  preview: DEFAULT_CONTENT_PAGE_PREVIEW,
  icon: () => <CalendarHome weight="thin" size={20} />,
  initialValue: async (props: any, context: any) => {
    return await getParentDocumentInitialValue(context, "page_resources");
  },
  groups: [...pageBase.groups],
  fields: [
    {
      ...PARENT_FIELD,
      to: [{ type: "page.resources" }, { type: "page.content" }],
      options: {
        disableNew: true,
        ...PARENT_FIELD.options,
      },
    },
    ...pageBase.fields.map((field) => {
      if (field.name === "i18n_base") {
        return getI18nBaseFieldForSingleton(SCHEMA_NAME);
      }
      return { ...field };
    }),
  ],
});
