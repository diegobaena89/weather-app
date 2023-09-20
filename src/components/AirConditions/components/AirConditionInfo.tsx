import { Text, Tooltip } from "@chakra-ui/react";
import React from "react";

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

      <Text marginLeft={8} fontSize="lg" as="b">
        {airInfo}
      </Text>
    </div>
  );
};
