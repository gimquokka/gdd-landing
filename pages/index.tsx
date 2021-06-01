import GlobalLayout from "src/layouts/global";
import Main from "src/components/main-section";
import Mailing from "src/components/feature/mailing";
import Recommendation from "src/components/feature/recommendation";
import NoMissingData from "src/components/feature/no-missing-data";

export default function Home() {
  return (
    <GlobalLayout>
      <Main />
      <Mailing />
      <Recommendation />
      <NoMissingData />
    </GlobalLayout>
  );
}
