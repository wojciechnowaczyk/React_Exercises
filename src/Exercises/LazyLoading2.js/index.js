import React, { Suspense, useState } from "react";

const Books = React.lazy(() => import("./books"));

const LazyLoading2 = () => {
  const [booksList, showBooksList] = useState(false);
  return (
    <div>
      <button onClick={() => showBooksList(true)}>See the books list</button>
      {booksList && (
        <Suspense fallback={<p>Loading books...</p>}>
          <Books />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoading2;
