import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenresSkeleton = () => {
  return (
    <HStack mb={4}>
      <Skeleton boxSize="32px" />
      <SkeletonText noOfLines={1} width="50px" />
    </HStack>
  );
};

export default GenresSkeleton;
