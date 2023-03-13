import { Icon } from "@chakra-ui/react";

const LogoIcon = (props: Record<string, unknown>) => {
  return (
    <Icon viewBox="0 0 24 24" focusable="false" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.683 6.527c.403-.307.904.23.57.61l-6.803 7.77a.5.5 0 0 1-.755-.003l-3.238-3.763a.5.5 0 0 0-.752-.008l-5.995 6.7a.5.5 0 0 1-.372.167H1.126a.5.5 0 0 1-.372-.835l8.951-9.908a.5.5 0 0 1 .75.009l3.31 3.848a.5.5 0 0 0 .68.074l6.238-4.661Z"
        fill="#2D3748"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.528 18a.5.5 0 0 1-.356-.149L14.396 12a.5.5 0 0 1 .05-.747l1.272-.983a.5.5 0 0 1 .661.044l6.776 6.834A.5.5 0 0 1 22.8 18h-2.272Z"
        fill="#2D3748"
      ></path>
    </Icon>
  );
};

export default LogoIcon;
