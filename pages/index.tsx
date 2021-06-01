import GlobalLayout from "src/layouts/global";
import Main from "src/components/main-section";
import Mailing from "src/components/feature/mailing";
import Recommendation from "src/components/feature/recommendation";
import NoMissingData from "src/components/feature/no-missing-data";
import Bottom from "src/components/bottom-section";

export default function Home() {
  return (
    <GlobalLayout>
      <Main />
      <Mailing />
      <Recommendation />
      <NoMissingData />
      <Bottom />
    </GlobalLayout>
  );
}
