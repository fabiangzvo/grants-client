import { css, Global } from '@emotion/core';
import theme from "../../config/theme";
import headroom from './headroom';

export const GlobalStyles = () => (
  <Global
    styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
          }

          .accordion {
            margin-top: 1em;
            transition: 260ms cubic-bezier(0.4, 0, 0.2, 1);
          }
          .accordion__toggle{
            transition: min-height 260ms cubic-bezier(0.4, 0, 0.2, 1);
          }
          .accordion--is-closed + .accordion--is-open {
            margin-top: 10px;
          }
          .accordion + .accordion {
            .accordion__divider {
              display: block;
            }
          }
          .accordion--is-open + .accordion--is-closed {
            .accordion__divider {
              display: none;
            }
          }
          
          .collapse-css-transition {
            transition: height 260ms cubic-bezier(0.4, 0, 0.2, 1);
          }
          .accordion--is-open > .accordion__toggle{
            background:#F4FDFD;
          }
          ${headroom}
        `}
  />
)
