import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { ResultType, SortType, ViewType } from "../../types/search";
import { mockProperties } from "../../data/mockProperties";
import { mockBuilders } from "../../data/mockBuilders";
import { mockTraders } from "../../data/mockTraders";

import Toolbar from "../../components/filterresult/Toolbar";
import MapView from "../../components/filterresult/MapView";

import PropertyGridView from "../../components/filterresult/property/PropertyGridView";
import PropertyListView from "../../components/filterresult/property/PropertyListView";

import BuilderGridView from "../../components/filterresult/builder/BuilderGridView";
import BuilderListView from "../../components/filterresult/builder/BuilderListView";

import TraderGridView from "../../components/filterresult/trader/TraderGridView";
import TraderListView from "../../components/filterresult/trader/TraderListView";


const resultCounts: Record<ResultType, number> = {
  property: mockProperties.length,
  builder: mockBuilders.length,
  trader: mockTraders.length,
};

const renderResults = (
  view: ViewType,
  resultType: ResultType,
): React.ReactNode => {
  if (view === "map") return <MapView />;

  if (resultType === "property") {
    return view === "list" ? (
      <PropertyListView properties={mockProperties} />
    ) : (
      <PropertyGridView properties={mockProperties} />
    );
  }

  if (resultType === "builder") {
    return view === "list" ? (
      <BuilderListView builders={mockBuilders} />
    ) : (
      <BuilderGridView builders={mockBuilders} />
    );
  }

  return view === "list" ? (
    <TraderListView traders={mockTraders} />
  ) : (
    <TraderGridView traders={mockTraders} />
  );
};

const SearchPage = () => {
  const [view, setView] = useState<ViewType>("list");
  const [sort, setSort] = useState<SortType>("featured");
  const [searchParams] = useSearchParams();

  const resultType: ResultType =
    (searchParams.get("type") as ResultType | null) ?? "property";

  return (
    <div className="min-h-screen bg-[#F8F4EE] py-24 font-helvetica">
      <div className="mx-auto px-[5%]">
        <Toolbar
          view={view}
          setView={setView}
          sort={sort}
          setSort={setSort}
          total={resultCounts[resultType]}
        />

        <div className="mt-8">{renderResults(view, resultType)}</div>
      </div>
    </div>
  );
};

export default SearchPage;
