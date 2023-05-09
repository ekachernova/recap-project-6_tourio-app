import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import Form from "../../../components/Form.js";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink.js";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
  position: absolute;
  top: -4rem;
  left: 1rem;
  z-index: 1;
`;

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: place, isLoading, error } = useSWR(`/api/places/${id}`);

  async function editPlace(place) {
    const response = await fetch(`/api/places/${id}`, {
      method: "PUT",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(`Error: ${response.status}`);
    }
    router.push("/");
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-place">Edit Place</h2>
      <Link href={`/places/${id}`} passHref legacyBehavior>
        <StyledBackLink justifySelf="start">back</StyledBackLink>
      </Link>
      <Form onSubmit={editPlace} formName={"edit-place"} defaultData={place} />
    </>
  );
}
