import styled from '@emotion/styled';
import ReactCollapse from "@kunukn/react-collapse";

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content:space-between;
  font-size: 100%;
  margin: 0;
  padding: 20px 15px;
  /* setting padding gives better anim than setting height */
  min-height: ${props => props.isOpen ? "80px" : "60px"};
  position: relative;
  width: 100%;
  text-align: left;
  background: white;
  font-family: inherit;
  outline: none;
  &:focus:after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: -2px;
    right: -2px;
    border: 3px solid #68b2e3;
    z-index: 1;
  }
  &:focus:not(.focus-visible):after {
    display: none;
  }
`;

export const Header = styled.span`
  display: block;
  line-height: 1.25;
  font-size: 16px;
  font-weight: bold;
`;

export const Svg = styled.svg`
  color: #68b2e3;
  margin-left: 15px;
  width: 20px;
  height: 20px;
  transform: rotate(${ props => props.isOpen ? ".5turn" : "0"});
`;

export const Divider = styled.div`
  position: absolute;
  top: 0px;
  height: 1px;
  left: 20px;
  right: 20px;
  background: #e4e5e4;
  transition: 260ms;
  opacity: ${ props => props.isOpen ? 0 : 1};
  display: none;
`;

export const Collapse = styled(ReactCollapse)`
  padding: 0 15px;
`