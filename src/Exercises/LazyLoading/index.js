import React, { Suspense } from "react";
import Component2 from "./Component2";

const LazyComponent1 = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Component1"));
    }, 3000);
  });
});

const LazyLoading1 = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Component 1...</div>}>
        <LazyComponent1 />
      </Suspense>
      <Component2 />
    </div>
  );
};

export default LazyLoading1;
