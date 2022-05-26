import styled from "styled-components";

export const Body = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  margin-top: 40px;
`;

interface ButtonProps {
  small?: boolean;
  borderless?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: white;
  border: ${p => p.borderless ? '0px' : '1px solid gray'};
  border-radius: ${p => p.borderless ? 'none' : '8px'};
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 20px;
  padding: ${p => p.small ? '2px 4px' : '12px 24px'};
  text-align: center;
  text-decoration: none;
`;

interface SelectorProps {
  isSelected: boolean;
}
export const Selector = styled(Button)<SelectorProps>`
  background-color: ${props => props.isSelected ? 'gray' : 'dark-gray'};};
`; 

export const Container = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

export const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  text-decoration: underline;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
  `
export const ItemContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 90vw;
  max-width: 900px;
  padding: 10px;
  margin-top: 20px;
`
export const ListContainer = styled.div`
  margin: 10px 10px 10px 50px;
`
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`
export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  `

export const Flex = styled.div`
  display: flex;
`
export const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.div`
  padding-right: 15px;
`

export const Input = styled.input`
`

export const Title = styled.h1`
  text-align: left;
  padding: 12px 24px;
`

export const Indent = styled.div`
    width: 30px;
    height: 10px;
    margin-right: 10px;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
`