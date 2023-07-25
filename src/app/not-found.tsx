import { Error } from "@/components/Errors";

export default function NotFound() {
  return (
    <Error.Container>
      <Error.NotFound />
    </Error.Container>
  );
}
