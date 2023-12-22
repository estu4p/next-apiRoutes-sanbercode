import Link from "next/link";
import Layout from "@/layouts";

export default function Users() {
  return (
    <>
      <Layout
        metaTitle={"Users"}
        metaDescription={"Informasi Users dari Next App"}
      >
        {/* Content Styling dengan Global CSS */}
        <div className="content">
          <p>Ini Halaman Users</p>
          <Link href="/users/detail" className="content-link">
            User Detail →
          </Link>
        </div>
      </Layout>
    </>
  );
}
