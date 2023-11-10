import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonList = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300">
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default SkeletonList;
