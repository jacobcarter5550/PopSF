import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [coverImages, seCoverImages] = useState<string[] | null>(null);

  const getURLS = async () => {
    const res = await fetch("http://localhost:3003/api/getPop", {
      method: "GET",
    }).then(async (response) => {
      const data = await response.json();
      seCoverImages(data.files);
    });
  };

  useEffect(() => {
    getURLS();
  }, []);

  return (
    <main>
      <aside style={{ display: "flex" }}>
        <h1 className="welcomeW text-[15em]">PopSF</h1>
        <h3
          style={{ paddingTop: "1.1em", paddingRight: "5em" }}
          className="rothek text-[3em]"
        >
          SF`s Population, Stories, and Serendipity
        </h3>
      </aside>
      <section>
        <div className="grid grid-cols-3 gap-4">
          {coverImages &&
            coverImages.map((image) => (
              <div style={{ padding: "25px" }}>
                <img
                  src={"https://jacobcarter.xyz/pop/" + image}
                  alt="Picture of the author"
                  width={475}
                  height={475}
                />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
