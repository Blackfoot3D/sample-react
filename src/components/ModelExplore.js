import React, { Suspense } from "react";
// import ModelUniverse from "./ModelUniverse";
// import ModelRing from "./ModelRing";
import MediaQuery from "react-responsive";
const ModelUniverse = React.lazy(() => import("./ModelUniverse"));
const ModelRing = React.lazy(() => import("./ModelRing"));
export default function ModelExplore(props) {
  return (
    <div style={{ overscrollBehavior: "contain" }}>
      <MediaQuery minWidth={801}>
        <Suspense fallback={<div>loading...</div>}>
          <ModelUniverse
            models={props.models}
            currentModel={props.currentModel}
            categories={props.categories}
            setCategory={props.setCategory}
            resetCategory={props.resetCategory}
            currentCategory={props.currentCategory}
            destinations={props.destinations}
          />
        </Suspense>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
        <Suspense fallback={<div>loading...</div>}>
          <ModelRing
            models={props.models}
            currentModel={props.currentModel}
            categories={props.categories}
            setCategory={props.setCategory}
            resetCategory={props.resetCategory}
            currentCategory={props.currentCategory}
            destinations={props.destinations}
          />
        </Suspense>
      </MediaQuery>
    </div>
  );
}
