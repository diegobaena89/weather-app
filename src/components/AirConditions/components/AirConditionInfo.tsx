import { Text } from "@chakra-ui/react";

interface AirConditionInfoProps {
  airInfo: string;
  infoText: string;
  icon: React.ElementType;
  className?: string;
}

export const AirConditionInfo = ({
  airInfo,
  infoText,
  className,
  icon: IconComponent,
}: AirConditionInfoProps) => {
  return (
    <div className={className}>
      <div>
        <IconComponent size={20} />
        <Text fontSize="2xl" color="#7a7a7a">
          {infoText}
        </Text>
      </div>
      <Text marginLeft={5} fontSize="2xl" as="b">
        {airInfo}
      </Text>
    </div>
  );
};
