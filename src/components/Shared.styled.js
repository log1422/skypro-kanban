import styled, {css} from 'styled-components';


export const hover01 = css`
    &:hover {
        background-color: #33399b;
    }
`;

export const hover02 = css`
    &:hover {
        color: #33399b;
    }
    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
`;

export const hover03 = css`
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
    }
`;

export const Button = styled.button`
    width: 153px;
    height: 30px;
    background-color: ${(props) => (props.$primary ? '#565EEF' : 'transparent')};
    border-radius: 4px;
    border: ${(props) => (props.$primary ? 'none' : '0.7px solid var(--palette-navy-60, #565EEF)')};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: ${(props) => (props.$primary ? '#FFFFFF' : '#565EEF')};
    margin-right: 10px;

    ${hover03}
    
    a, a:visited {
        color: inherit;
    }
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`

export const colour = {
  orange: `background-color: #FFE4C2;
             color: #FF6D00;`,
  purple: `background-color: #E9D4FF;
             color: #9A48F1;`,
  green: `background-color: #B4FDD1;
            color: #06B16E;`
}

export const colourDarkTheme = {
  orange: `background-color: #FF6D00;
             color: #FFE4C2;`,
  purple: `background-color: #9A48F1;
             color: #E9D4FF;`,
  green: `background-color: #06B16E;
            color: #B4FDD1;`
}