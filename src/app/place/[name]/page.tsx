"use client";
import { useParams } from "next/navigation";

const Place = () => {
  const router = useParams();
  return <h1>Hello {router.name}</h1>;
};
export default Place;
