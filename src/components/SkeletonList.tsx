import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonList = () => {
  return (
    <Card>
      <Skeleton height="300px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default SkeletonList;
