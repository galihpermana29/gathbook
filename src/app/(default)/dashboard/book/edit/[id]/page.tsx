"use client";

import { notFound } from "next/navigation";

import { EditBookFormContainer } from "./_components/forms/edit-book-form/edit-book-form-container";
import { useGetBookById } from "./_hooks/use-get-book-by-id";
import LoadingDashboardUpdateBook from "./loading";

export default function BookEditPage({
  params,
}: {
  params: { id: string | undefined };
}) {
  const { data, isLoading, isError } = useGetBookById(Number(params.id));

  if (isLoading) return <LoadingDashboardUpdateBook />;
  if (isError) return notFound();
  if (!data) return "No data found!";

  return (
    <EditBookFormContainer
      id={Number(params.id)}
      initials={data}
    />
  );
}
