import { SPACE_OPTIONS } from "../../components/block/spacing.options";
import { optionsToList } from "../../studio/utils/fields/optionsToList";
import { HEADING_LEVELS } from "../../types";
import {
  BACKGROUND_COLOR_OPTIONS,
  TITLE_COLOR_OPTIONS,
  TITLE_SIZE_OPTIONS,
  INTRO_COLOR_OPTIONS,
  IMAGE_POSITION_OPTIONS,
} from "./block1.options";
import { EllipsisVerticalIcon } from "@sanity/icons";
import { Question } from "@vectopus/atlas-icons-react";
import React from "react";
import { defineField, defineType } from "sanity";

const schema = defineType({
  name: "block.block1",
  title: "Image with feature list",
  type: "object",
  icon: () => <Question weight="thin" />,
  description: "Text, image and feature list next to each other",
  preview: {
    select: {
      title: "title",

      image: "image",
    },
    prepare({ title = "Block 1", image }: any) {
      return {
        title: title,

        media: image || <Question weight="thin" />,
      };
    },
  },
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "theme",
      title: "Theme",
    },
    {
      name: "tools",
      title: " ",
      icon: EllipsisVerticalIcon,
    },
  ],
  fields: [
    defineField({
      name: "preset",
      title: "Preset",
      type: "preset",
      group: "tools",
    }),
    defineField({
      name: "copyPaste",
      title: "Copy Paste",
      type: "copyPaste",
      group: "tools",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "portabletext.simple",
      group: "content",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "portabletext.basic",
      group: "content",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "object",
      group: "theme",
      fields: [
        defineField({
          name: "block",
          title: "Block",
          type: "styles",
          options: {
            fields: [
              {
                name: "space",
                title: "Space",
                type: "space",
                options: {
                  list: optionsToList(SPACE_OPTIONS),
                },
              },
            ],
          },
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "styles",
          options: {
            fields: [
              {
                name: "position",
                title: "Position",
                type: "select",
                options: {
                  list: optionsToList(IMAGE_POSITION_OPTIONS),
                },
              },
              {
                name: "background",
                type: "color",
                options: {
                  colors: BACKGROUND_COLOR_OPTIONS,
                },
              },
            ],
          },
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "styles",
          options: {
            fields: [
              {
                name: "size",
                type: "select",
                options: {
                  list: optionsToList(TITLE_SIZE_OPTIONS),
                },
              },
              {
                name: "level",
                type: "select",
                options: {
                  list: optionsToList(HEADING_LEVELS),
                },
              },
              {
                name: "color",
                type: "color",
                options: {
                  colors: TITLE_COLOR_OPTIONS,
                },
              },
            ],
          },
        }),

        defineField({
          name: "intro",
          title: "Intro",
          type: "styles",
          options: {
            fields: [
              {
                name: "color",
                type: "color",
                options: {
                  colors: INTRO_COLOR_OPTIONS,
                },
              },
            ],
          },
        }),
        defineField({
          name: "features",
          title: "Features",
          type: "styles",
          options: {
            fields: [
              {
                name: "color",
                type: "color",
                options: {
                  colors: INTRO_COLOR_OPTIONS,
                },
              },
            ],
          },
        }),
      ],
    }),
  ],
});

export default schema;
