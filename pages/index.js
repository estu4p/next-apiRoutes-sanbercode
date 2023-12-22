import Layout from "@/layouts";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => console.log("response => ", res))
      .catch((err) => console.log("response => ", err));
  }, []);

  return (
    <>
      <Layout metaTitle={"Home"} metaDescription={"Informasi utama Next App"}>
        {/* Content Styling dengan Global CSS */}
        <div className="content">
          <p>Ini Halaman Home</p>
        </div>
      </Layout>
    </>
  );
}
