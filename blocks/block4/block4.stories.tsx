import {
  TextSizeType,
  TEXT_SIZE_OPTIONS,
} from "../../components/text/text.options";
import {
  TitleSizeType,
  TITLE_SIZE_OPTIONS,
} from "../../components/title/title.options";
import { demoImage2, demoImage3 } from "../../stories/content";
import { COLORS } from "../../theme";
import {
  ColorType,
  HorizontalAlignType,
  HORIZONTAL_ALIGN_OPTIONS,
} from "../../types";
import { Block4 } from "./Block4";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: Block4,
  title: "Blocks/Block4",
} as Meta;

const DEMO_CONTENT = {
  title: "We didn't reinvent the wheel ",
  intro: (
    <p>
      We are strategists, designers and developers. Innovators and problem
      solvers. Small enough to be simple and quick, but big enough to deliver
      the scope you want at the pace you need.
    </p>
  ),
  buttons: [{ label: "Free trail", href: "/" }],
  image: demoImage2,
};

export const Default = () => <Block4 {...DEMO_CONTENT} />;

export const BlockBackgrounds = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block4
          {...DEMO_CONTENT}
          theme={{
            block: { background: color },
          }}
        />
      </div>
    ))}
  </>
);

export const TitleColors = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block4
          {...DEMO_CONTENT}
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
        <Block4
          {...DEMO_CONTENT}
          theme={{
            title: { size },
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
        <Block4
          intro={DEMO_CONTENT.intro}
          theme={{
            intro: { size },
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
        <Block4
          {...DEMO_CONTENT}
          theme={{
            intro: { color },
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
          <Block4
            {...DEMO_CONTENT}
            image={demoImage3}
            theme={{
              block: { align },
            }}
          />
        </div>
      ),
    )}
  </>
);
