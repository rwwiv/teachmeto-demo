import { Icon } from "@chakra-ui/react";

type StarIconProps = {
  fill?: string;
} & Record<string, unknown>;

const StarIcon = (props: StarIconProps) => {
  const fill = props.fill ? props.fill : "#009DA3";
  return (
    <Icon viewBox="0 0 13 12" fill={fill} {...props}>
      <path d="M5.55834 0.45783C5.60335 0.332369 5.686 0.223871 5.79501 0.147167C5.90401 0.0704628 6.03405 0.0292969 6.16734 0.0292969C6.30063 0.0292969 6.43066 0.0704628 6.53967 0.147167C6.64868 0.223871 6.73133 0.332369 6.77634 0.45783L7.87634 3.53883C7.92004 3.66057 7.99923 3.76642 8.10369 3.84272C8.20814 3.91901 8.33307 3.96224 8.46234 3.96683L11.7043 4.08183C11.8365 4.08667 11.9639 4.13186 12.0696 4.21134C12.1753 4.29082 12.254 4.40075 12.2953 4.52636C12.3366 4.65196 12.3384 4.7872 12.3005 4.91387C12.2626 5.04053 12.1868 5.15255 12.0833 5.23483L9.50834 7.28083C9.40855 7.36019 9.33444 7.46725 9.29529 7.58859C9.25615 7.70993 9.25373 7.84012 9.28834 7.96283L10.1883 11.1458C10.2242 11.2737 10.2199 11.4095 10.1759 11.5348C10.132 11.6601 10.0505 11.7689 9.94263 11.8463C9.83473 11.9238 9.70562 11.9661 9.57282 11.9676C9.44003 11.9691 9.30998 11.9298 9.20034 11.8548L6.53334 10.0248C6.42559 9.95092 6.298 9.91136 6.16734 9.91136C6.03668 9.91136 5.90908 9.95092 5.80134 10.0248L3.13134 11.8578C3.0217 11.9328 2.89165 11.9721 2.75885 11.9706C2.62606 11.9691 2.49695 11.9268 2.38905 11.8493C2.28116 11.7719 2.1997 11.6631 2.15574 11.5378C2.11178 11.4125 2.10745 11.2767 2.14334 11.1488L3.04334 7.96583C3.07794 7.84312 3.07552 7.71293 3.03638 7.59159C2.99724 7.47025 2.92313 7.36319 2.82334 7.28383L0.24434 5.23383C0.14085 5.15155 0.0650533 5.03953 0.0271528 4.91287C-0.0107478 4.7862 -0.00893245 4.65096 0.0323543 4.52536C0.0736411 4.39976 0.152417 4.28982 0.258079 4.21034C0.36374 4.13086 0.491214 4.08566 0.62334 4.08083L3.86534 3.96583C3.99461 3.96124 4.11953 3.91801 4.22399 3.84172C4.32845 3.76542 4.40764 3.65957 4.45134 3.53783L5.55834 0.45783Z" />
    </Icon>
  );
};

export default StarIcon;