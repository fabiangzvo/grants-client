import styled from '@emotion/styled';
import prism from './prism';

export const Footer = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
  & > div{
    margin: 0;
    padding-bottom: 2rem;
    text-align: center;
    color: ${props => props.theme.colors.white.light};
    > span {
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:1em;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    display: flex;
    font-weight: 700;
    align-items: center;
    font-size:1.5em;
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

export const Content = styled.div`
${prism};
p,
li {
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  font-size: 1.15rem;
  line-height: 2;
  code {
    padding: 0.2rem 0.5rem;
    margin: 0.5rem 0;
  }
}
a:not(.gatsby-resp-image-link):not(.anchor) {
  color: black;
  box-shadow: inset 0 -2px 0 ${props => props.theme.colors.primary.base};
  border-bottom: 1px solid ${props => props.theme.colors.primary.base};
  transition: ${props => props.theme.transitions.default.transition};
  text-decoration: none;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.primary.base};
    color: black;
  }
}
h1 {
  margin-top: 3rem;
}
h2 {
  margin-top: 1rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  display: inline-block;
  position: relative;
  a {
    box-shadow: none;
    border-bottom: none;
    &:hover,
    &:focus {
      background: none;
    }
  }
  &:hover {
    .anchor svg {
      opacity: 0.8;
    }
  }
}
`;

export const Container = styled.section`
text-align: ${props => (props.center ? 'center' : '')};
margin: auto;
padding: 3rem 1.5rem;
width: 60%;
max-width: ${props => props.theme.layout[props.type]};
height: 100%;
flex: 1;

@media (max-width: ${props => props.theme.breakpoints.m}) {
  width: 90%;
}

@media (max-width: ${props => props.theme.breakpoints.s}) {
  width: 95%;
}
`;

export const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items:center;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
export const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin: 1rem 3rem 1rem 3rem;
  > a {
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:inherit;
    >h4{
      margin:0;
    }
  }
`;

export const Wrapper = styled.div`
  display:flex;
  justify-content:${props => props.justify || "space-between"};
  flex-wrap:wrap;
  line-height:2em;
  > span {
    font-weight:bold;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

export const Paginator = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:auto;
  width:100%;
  margin-top:2em;
  > ul {
    margin:0;
  } 
`
