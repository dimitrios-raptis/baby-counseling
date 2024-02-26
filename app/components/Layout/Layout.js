import { ContainerWrapper } from "./Layout.style";

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  );
};


// export const Grid = (props) => {
//   return (
//     <Flex mx={[0, null, -3]} flexWrap="wrap" {...props}>
//       {props.children}
//     </Flex>
//   );
// };