import { VStack, Skeleton } from "@navikt/ds-react";

export const SkeletonView = () => {
  return (
    <VStack gap="2" className="w-100">
      {Array.from({ length: 15 }).map((_, index) => (
        <Skeleton key={index} variant="rectangle" width="100%" height={30} />
      ))}
    </VStack>
  );
};
