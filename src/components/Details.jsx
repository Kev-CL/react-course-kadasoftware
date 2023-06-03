//Dependencies
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  return <H2>`Hi ${id}`</H2>;
};
