import styled from 'styled-components';
import { FaBuffer } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
  scrolling?: boolean;
  active?: boolean;
  color?: string;
}

export const Container = styled.div`


height: 10vh;
background-color: ${props=>props.theme.colors.background};


  
`;
