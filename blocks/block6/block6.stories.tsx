import {
  TextSizeType,
  TEXT_SIZE_OPTIONS,
} from "../../components/text/text.options";
import {
  TitleSizeType,
  TITLE_SIZE_OPTIONS,
} from "../../components/title/title.options";
import { demoImage } from "../../stories/content";
import { COLORS } from "../../theme";
import {
  ColorType,
  HorizontalAlignType,
  HORIZONTAL_ALIGN_OPTIONS,
} from "../../types";
import { Block6 } from "./Block6";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: Block6,
  title: "Blocks/Block6",
} as Meta;

const DEMO_CONTENT = {
  title: "Designed for business teams like yours ",
  intro: (
    <p>
      Here at Flowbite we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive economic growth.{" "}
    </p>
  ),

  buttons: [{ label: "Button" }],
  items: [
    {
      image: demoImage,
      title: "Marketing",
      intro: (
        <p>
          Plan it, create it, launch it. Collaborate seamlessly with all the
          organization and hit your marketing goals every month with our
          marketing plan.
        </p>
      ),
    },
    {
      image: demoImage,
      title: "Legal",
      intro: (
        <p>
          Protect your organization, devices and stay compliant with our
          structured workflows and custom permissions made for you.
        </p>
      ),
    },
    {
      image: demoImage,
      title: "Business Automation",
      intro: (
        <p>
          Auto-assign tasks, send Slack messages, and much more. Now power up
          with hundreds of new templates to help you get started.
        </p>
      ),
    },
    {
      image: demoImage,
      title: "Finance",
      intro: (
        <p>
          Audit-proof software built for critical financial operations like
          month-end close and quarterly budgeting.
        </p>
      ),
    },
    {
      image: demoImage,
      title: "Enterprise Design",
      intro: (
        <p>
          Craft beautiful, delightful experiences for both marketing and product
          with real cross-company collaboration.
        </p>
      ),
    },
    {
      image: demoImage,
      title: "Operations",
      intro: (
        <p>
          Keep your company’s lights on with customizable, iterative, and
          structured workflows built for all efficient teams and individual.
        </p>
      ),
    },
  ],
};

export const Default = () => <Block6 {...DEMO_CONTENT} />;

export const BlockBackgrounds = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block6
          {...DEMO_CONTENT}
          theme={{
            block: { background: color },
          }}
        />
      </div>
    ))}
  </>
);

export const Alignments = () => (
  <>
    {(Object.keys(HORIZONTAL_ALIGN_OPTIONS) as HorizontalAlignType[]).map(
      (align) => (
        <div key={align}>
          <Block6
            {...DEMO_CONTENT}
            theme={{
              block: { align },
            }}
          />
        </div>
      ),
    )}
  </>
);

export const TitleColors = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block6
          title={DEMO_CONTENT.title}
          theme={{
            title: { color },
          }}
        />
      </div>
    ))}
  </>
);

export const TitleSizes = () => (
  <>
    {(Object.keys(TITLE_SIZE_OPTIONS) as TitleSizeType[]).map((size) => (
      <div key={size}>
        <Block6
          title={DEMO_CONTENT.title}
          theme={{
            title: { size },
          }}
        />
      </div>
    ))}
  </>
);

export const IntroColors = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block6
          intro={DEMO_CONTENT.intro}
          theme={{
            intro: { color },
          }}
        />
      </div>
    ))}
  </>
);

export const IntroSizes = () => (
  <>
    {(Object.keys(TEXT_SIZE_OPTIONS) as TextSizeType[]).map((size) => (
      <div key={size}>
        <Block6
          intro={DEMO_CONTENT.intro}
          theme={{
            intro: { size },
          }}
        />
      </div>
    ))}
  </>
);

export const NumberOfItems = () => (
  <>
    <Block6 {...DEMO_CONTENT} items={[...DEMO_CONTENT.items].splice(0, 1)} />;
    <Block6 {...DEMO_CONTENT} items={[...DEMO_CONTENT.items].splice(0, 2)} />;
    <Block6 {...DEMO_CONTENT} items={[...DEMO_CONTENT.items].splice(0, 3)} />;
    <Block6 {...DEMO_CONTENT} items={[...DEMO_CONTENT.items].splice(0, 4)} />;
    <Block6 {...DEMO_CONTENT} items={[...DEMO_CONTENT.items].splice(0, 5)} />;
    <Block6 {...DEMO_CONTENT} items={[...DEMO_CONTENT.items].splice(0, 6)} />;
  </>
);
