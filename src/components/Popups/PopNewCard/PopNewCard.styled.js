import styled from "styled-components";
import {colour, colourDarkTheme} from "../../Shared.styled.js";


export const PopNewCardCommon = styled.div`
    display: none;
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
`;

export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
`;

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`;

export const PopNewCardTitle = styled.h3`
        color: #000;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 20px;
`;

export const LabelNewTask = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const ColorLabelInTasks = styled.label`
    //display: inline-block;
    //width: auto;
    //height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    //margin-right: 7px;
    //opacity: 0.4;

    ${(props) => (props.theme.darkStyle ? colourDarkTheme : colour)[props.$color]}

    //&._active-category {
    //    opacity: 1 !important;
    //}
`

export const PopNewCardLink = styled.a`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
    
    &:hover {
        color: #000000;
`;

export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PopNewCardFormNew = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`;

export const PopNewCardFormBlock = styled.div`
    display: flex;
    flex-direction: column;
    
    &__input, &__textarea {
        width: 100%;
        outline: none;
        padding: 14px;
        background: transparent;
        border: 0.7px solid rgba(148, 166, 190, 0.4);
        border-radius: 8px;
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;

        &__input::-moz-placeholder, &__area::-moz-placeholder {
            font-weight: 400;
            font-size: 14px;
            line-height: 1px;
            color: #94A6BE;
            letter-spacing: -0.14px;
`;

export const Categories = styled.div`
        margin-bottom: 20px;
`;

export const Categorie = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
`;

export const CategoriesTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    //padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    //opacity: 0.4;
    
    //&_active-category {
    //    opacity: 1 !important;
    //}
`;

export const BtnFormNewCreate = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;
    
    &_hover01:hover {
        background-color: #33399b;
    }
`;

export const LinkNewCard = styled.a``

export const CloseNewTask = styled.a`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
`

export const RadioInput = styled.input`
    display: none;
`;

export const WrapperRadio = styled.div`
    opacity: ${({$isActive}) => $isActive ? '1' : '0.4'};
    display: inline-block;
    width: auto;
    height: 30px;
    border-radius: 24px;
    margin-right: 7px;
    
`

export const TextArea = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    
&::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
}
`;

export const TextAreaInput = styled.input`
    margin: 20px 0;
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    
&::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
}
`