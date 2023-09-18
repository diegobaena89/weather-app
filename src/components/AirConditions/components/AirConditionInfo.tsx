import { Text, Tooltip } from "@chakra-ui/react";

interface AirConditionInfoProps {
  airInfo: string;
  infoText: string;
  icon: React.ElementType;
  className?: string;
  label?: string;
}

export const AirConditionInfo = ({
  airInfo,
  infoText,
  className,
  label,
  icon: IconComponent,
}: AirConditionInfoProps) => {
  return (
    <div className={className}>
      <div>
        <Tooltip label={label} fontSize="md">
          <IconComponent size={20} />
        </Tooltip>
        <Text fontSize="lg" marginLeft={3} color="#7a7a7a">
          {infoText}
        </Text>
      </div>

      <Text marginLeft={5} fontSize="2xl" as="b">
        {airInfo}
      </Text>
    </div>
  );
};
