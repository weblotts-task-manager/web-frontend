import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 18px;
  margin-right: 10px;
  // margin-top: 10px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333333;
  transition: 0.4s;
  border-radius: 34px;
  border: solid #ccc 1px;

  &:before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: 4px;
    top: 3px;
    bottom: 4px;
    background-color: orange;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const HiddenInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: yellow;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px yellow;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;
const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <SwitchContainer>
      <HiddenInput
        checked={mode === "dark"}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Slider />
    </SwitchContainer>
  );
};

export default ThemeToggle;
