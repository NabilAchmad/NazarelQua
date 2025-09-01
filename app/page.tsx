import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Air Minum Isi Ulang",
      description: "Air mineral berkualitas tinggi yang melalui proses filtrasi modern.",
      price: "Rp 5.000 / galon",
      image: "/Galon.jpeg",
    },
    {
      name: "Air Minum Isi Ulang Ukuran",
      description: "Air minum praktis, segar, dan higienis dalam kemasan botol.",
      price: "Rp 3.000 / botol",
      image: "/botol.jpg",
    },
    {
      name: "Paket Langganan Bulanan",
      description: "Nikmati kemudahan dengan layanan langganan bulanan antar ke rumah.",
      price: "Rp 120.000 / bulan",
      image: "/paket.jpg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-primary">
            Selamat Datang di Depot Air Minum Nazarel Qua
          </h1>
          <p className="lead text-muted mt-3">
            Menyediakan air minum sehat, segar, dan berkualitas untuk kebutuhan harian Anda.
            Dengan teknologi filtrasi modern, kami menjaga kesehatan keluarga Anda.
          </p>
        </div>
      </section>

      {/* Katalog Produk */}
      <section className="container py-5">
        <h2 className="h3 fw-semibold text-center mb-4 text-dark">Katalog Produk</h2>
        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card shadow-lg h-100 border-0">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={300}
                  className="card-img-top rounded-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{p.name}</h5>
                  <p className="card-text text-muted">{p.description}</p>
                  <span className="badge bg-primary fs-6">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
