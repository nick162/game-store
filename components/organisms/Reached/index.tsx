import React from "react";
import ReachedItem from "../../molecules/ReachedItem";
import ReachedLine from "../../molecules/ReachedItem/ReachedLine";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem angka="290M+" title="Players Top Up" />
          <ReachedLine />
          <ReachedItem angka="12.500" title="Games Available" />
          <ReachedLine />
          <ReachedItem angka="99,9%" title="Happy Players" />
          <ReachedLine />
          <ReachedItem angka="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
