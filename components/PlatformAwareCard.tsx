import React from 'react';
import { View, Platform } from 'react-native';
import { styled } from 'nativewind';
const StyledView = styled(View);
interface PlatformAwareCardProps {
  children: React.ReactNode;
}
export default function PlatformAwareCard({ children }: PlatformAwareCardProps) {
  const getClassNames = () => {
    const baseClasses = 'bg-white rounded-lg p-4 mb-3';
    
    if (Platform.OS === 'web') {
      return `${baseClasses} shadow-lg hover:shadow-xl transition-shadow cursor-pointer`;
    } else if (Platform.OS === 'ios') {
      return `${baseClasses} shadow-sm`;
    } else {
      return `${baseClasses} shadow-md elevation-3`;
    }
  };
  return (
    <StyledView className={getClassNames()}>
      {children}
    </StyledView>
  );
}