import React from "react";
import { css } from "@emotion/core";
import { Button, Header, Svg, Divider, Collapse } from "./style";

const AccordionHeader = ({
  heading,
  onToggle,
  isOpen
}) => (
    <Button
      isOpen={isOpen}
      aria-expanded={isOpen}
      onClick={onToggle}
      className="btn accordion__toggle"
    >
      <div>
        <Header isOpen={isOpen}>
          {heading}
        </Header>
      </div>
      <Svg
        isOpen={isOpen}
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M29.602 8.002l-13.6 11.562-13.6-11.562-2.4 2.752 16 13.764 16-13.764z"
        />
      </Svg>
      <Divider
        isOpen={isOpen}
        className="accordion__divider"
      />
    </Button>
  );

const Accordion = ({
  children,
  isOpen,
  heading,
  onToggle
}) => {
  return (
    <div
      className={isOpen ? "accordion accordion--is-open" : "accordion accordion--is-closed"}
    >
      <AccordionHeader
        {...{
          heading,
          onToggle,
          isOpen
        }}
      />

      {/* This is the library. */}
      <Collapse
        isOpen={isOpen}
        aria-hidden={isOpen ? "false" : "true"}
      >
        <div
          css={css`
            margin-bottom: 10px;
          `}
        >
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
