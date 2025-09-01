import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Portofolio Layanan - Depot Air Minum Nazarel Qua",
    description: "Lihat kualitas proses, layanan, dan jangkauan kami.",
};

export default function PortfolioPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Portofolio Layanan Kami</h1>
                    <p className="lead">
                        Komitmen kami terhadap kualitas, kebersihan, dan kepuasan Anda.
                    </p>
                </div>
            </section>

            {/* Proses Higienis Kami */}
            <section className="container my-5 py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">Proses Penyaringan Modern Kami</h2>
                    <p className="lead text-muted">Setiap tetes air dijamin murni dan higienis melalui 8 tahap filtrasi.</p>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <Image
                            src="/placeholder-proses-filtrasi.jpg" // GANTI: Foto atau diagram proses filtrasi Anda
                            alt="Diagram Proses Filtrasi Air"
                            width={600}
                            height={400}
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-unstyled">
                            <li className="d-flex mb-3">
                                <i className="bi bi-check-circle-fill fs-4 text-success me-3"></i>
                                <div>
                                    <h5 className="fw-semibold">Filter Sedimen Awal</h5>
                                    <p className="text-muted">Menghilangkan partikel besar seperti pasir dan lumpur.</p>
                                </div>
                            </li>
                            <li className="d-flex mb-3">
                                <i className="bi bi-check-circle-fill fs-4 text-success me-3"></i>
                                <div>
                                    <h5 className="fw-semibold">Karbon Aktif</h5>
                                    <p className="text-muted">Menyerap klorin, bau, dan rasa tidak sedap.</p>
                                </div>
                            </li>
                            <li className="d-flex mb-3">
                                <i className="bi bi-check-circle-fill fs-4 text-success me-3"></i>
                                <div>
                                    <h5 className="fw-semibold">Reverse Osmosis (RO)</h5>
                                    <p className="text-muted">Membran ultra-halus yang menyaring mineral terlarut dan kontaminan.</p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <i className="bi bi-check-circle-fill fs-4 text-success me-3"></i>
                                <div>
                                    <h5 className="fw-semibold">Sterilisasi UV & Ozon</h5>
                                    <p className="text-muted">Membunuh 99.9% bakteri, virus, dan mikroorganisme berbahaya.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Galeri Layanan */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold">Galeri Depot & Layanan</h2>
                        <p className="lead text-muted">Lihat lebih dekat fasilitas dan tim kami yang siap melayani Anda.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <Image src="/placeholder-depot-interior.jpg" alt="Interior Depot yang Bersih" width={500} height={400} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <Image src="/placeholder-staff-delivery.jpg" alt="Staf Profesional Mengantar Galon" width={500} height={400} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <Image src="/placeholder-armada.jpg" alt="Armada Pengiriman Nazarel Qua" width={500} height={400} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <Image src="/placeholder-sikat-galon.jpg" alt="Proses Pencucian Galon Otomatis" width={500} height={400} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <Image src="/placeholder-layanan-kantor.jpg" alt="Melayani Klien Perkantoran" width={500} height={400} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <Image src="/placeholder-pelanggan-senyum.jpg" alt="Pelanggan Puas" width={500} height={400} className="img-fluid rounded shadow-sm" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimoni Pelanggan */}
            <section className="container my-5 py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">Apa Kata Pelanggan Kami</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <i className="bi bi-quote fs-1 text-primary"></i>
                                <p className="my-3 fst-italic">"Pengiriman selalu tepat waktu dan airnya benar-benar segar. Anak-anak saya jadi lebih suka minum air putih. Terima kasih Nazarel Qua!"</p>
                                <h5 className="fw-bold mt-4 mb-0">Ibu Amelia</h5>
                                <small className="text-muted">Pelanggan Rumah Tangga</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <i className="bi bi-quote fs-1 text-primary"></i>
                                <p className="my-3 fst-italic">"Untuk kebutuhan kantor, Nazarel Qua adalah pilihan terbaik. Layanan pelanggannya responsif dan kualitas airnya terjamin. Sangat profesional."</p>
                                <h5 className="fw-bold mt-4 mb-0">Bapak Hermawan</h5>
                                <small className="text-muted">Manajer HR, PT Maju Jaya</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <i className="bi bi-quote fs-1 text-primary"></i>
                                <p className="my-3 fst-italic">"Harga terjangkau dengan kualitas premium. Sudah langganan lebih dari 2 tahun dan tidak pernah kecewa. Top!"</p>
                                <h5 className="fw-bold mt-4 mb-0">Mas Budi</h5>
                                <small className="text-muted">Pemilik Warung Makan</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-5 bg-primary-subtle text-center">
                <div className="container">
                    <h2 className="fw-bold">Siap Merasakan Kesegarannya?</h2>
                    <p className="lead text-muted mb-4">Hubungi kami sekarang untuk pemesanan atau informasi lebih lanjut.</p>
                    <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-5">
                        Hubungi Kami
                    </Link>
                </div>
            </section>
        </>
    );
}
