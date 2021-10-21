import React, { Suspense } from "react";

export type DynamicComponentPropsType = {
  loader: Function;
  loading: any,
}

export default function dynamicComponent({ loader, loading }: DynamicComponentPropsType){
  const LazyComponent = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(loader());
      }, 2000);
    });
  });

  return () => (
    <Suspense fallback={loading}>
      <LazyComponent />
    </Suspense>
  )
}
