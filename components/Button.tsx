import tw, { css, styled } from "twin.macro";

const Button = styled.button<any>(({ variant, isSmall }) => [
  // The common button styles added with the tw import
  tw`btn`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  variant === "primary" && tw`btn-primary`,

  // Combine regular css with tailwind classes within backticks
  variant === "secondary" && tw`btn-secondary`,

  // Conditional props can be used
  isSmall ? tw`btn-sm` : tw`btn-lg`,
  css`
    display: flex;
  `,
]);

export default Button;
