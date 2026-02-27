import { Layout } from "@/components/layout/Layout";
import { ShowcaseGallery } from "@/components/home/ShowcaseGallery";

export default function ShowcasePage() {
  return (
    <Layout>
      <div className="pt-8">
        <ShowcaseGallery />
      </div>
    </Layout>
  );
}
