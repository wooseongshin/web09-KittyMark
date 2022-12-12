import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.palette.back};

  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 400;
`;

const Form = styled.form`
  width: 17rem;
  height: 27rem;
  background: ${(props) => props.theme.palette.inner};
  border: 1px solid ${(props) => props.theme.palette.border};
  border-radius: 35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  padding: 3rem 3rem 2rem 3rem;

  * {
    font-family: 'SF-Pro';
    font-style: normal;
    font-weight: 400;
  }
`;

const Title = styled.p`
  margin: 0px;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => props.theme.palette.main};
`;

const Info = styled.p`
  margin: 0px;
  font-weight: 590;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;

  width: 100%;
  gap: 1rem;
`;

const NameCheckButton = styled.button<{ checked: boolean }>`
  cursor: pointer;
  border: none;
  padding: 0px;

  width: 30%;
  height: 2rem;
  background: ${(props) =>
    props.checked ? '#3ae048' : props.theme.palette.border};
  color: ${(props) => (props.checked ? '#ffffff' : '#000000')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;

  font-size: 14px;
  line-height: 17px;
`;

const Input = styled.input`
  width: 65%;
  height: 3rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.palette.back};
  border: 1px solid ${(props) => props.theme.palette.border};
  padding: 0px 10px;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;

  &::placeholder {
    color: #9b9b9b;
  }
`;
const SubmitButton = styled.button`
  width: 9.5rem;
  height: 3rem;
  background: ${(props) => props.theme.palette.main};
  color: #ffffff;
  border: 1px solid ${(props) => props.theme.palette.border};
  border-radius: 1rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;

  &:disabled {
    background-color: #d4d4d4;
    color: #000000;
  }
`;

const ProfileContainer = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.palette.back};
  border: 1px solid ${(props) => props.theme.palette.border};
  border-radius: 3rem;

  Button {
    position: absolute;
    top: 4rem;
    left: 4rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #bcc7ff;
    border: 1px solid ${(props) => props.theme.palette.border};
    border-radius: 1.25rem;
    cursor: pointer;
  }
`;

const Thumbnail = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 3rem;
`;

const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;

const NameCheckResult = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export default {
  Body,
  Form,
  ProfileContainer,
  Title,
  Info,
  NameCheckButton,
  InputContainer,
  Input,
  SubmitButton,
  Thumbnail,
  ButtonImg,
  NameCheckResult,
};
