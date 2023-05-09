import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
import useSWR from "swr";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
  position: absolute;
  top: -4rem;
  left: 1rem;
  z-index: 1;
`;

export default function CreatePlacePage() {
  const router = useRouter();
  const places = useSWR("/api/places");

  async function addPlace(place) {
    const response = await fetch("/api/places", {
      method: "POST",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error("Couldn't create a place", response.status);
      return;
    }
    router.push("/");
  }

  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <h2 id="add-place">Add Place</h2>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
