import React from 'react';
import AnimatedComponent from './animated-component';

// This is a higher-order component that wraps the given component in an AnimatedComponent
function withAnimation<T extends {}>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentType<T> {
  return function WithAnimation(props: T) {
    return (
      <AnimatedComponent>
        <WrappedComponent {...props} />
      </AnimatedComponent>
    );
  };
}

export default withAnimation;
