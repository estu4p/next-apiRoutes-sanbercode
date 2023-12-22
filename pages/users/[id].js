import Layout from "@/layouts";
import { useRouter } from "next/router";

export default function GetUserByName() {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <Layout>
      <div className="content">
        <p>User By Name: {id}</p>
      </div>
    </Layout>
  );
}
