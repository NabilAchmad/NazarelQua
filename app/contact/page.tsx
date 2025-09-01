import type { Metadata } from 'next';

// Impor Bootstrap Icons jika belum ditambahkan di layout.tsx
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

export const metadata: Metadata = {
    title: "Kontak - Nazarel Qua Portfolio",
    description: "Hubungi kami untuk informasi lebih lanjut atau pemesanan.",
};

export default function ContactPage() {
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Hubungi Kami</h1>
                <p className="lead text-muted">
                    Kami siap melayani pertanyaan dan pesanan Anda.
                </p>
            </div>

            <div className="row g-5">
                {/* Kolom Informasi Kontak dan Jam Operasional */}
                <div className="col-lg-6">
                    <div className="bg-white p-4 p-md-5 rounded shadow-sm h-100">
                        <h3 className="fw-bold text-primary mb-4">Informasi Kontak</h3>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-geo-alt-fill fs-4 text-primary me-3"></i>
                                <div>
                                    <h6 className="fw-semibold mb-0">Alamat Depot</h6>
                                    <p className="text-muted mb-0">
                                        Simpang Camp, Desa Maur baru, Kec. Rupit, Kab. Musi Rawas Utara, Sumatera Selatan 
                                    </p>
                                </div>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-whatsapp fs-4 text-primary me-3"></i>
                                <div>
                                    <h6 className="fw-semibold mb-0">Pesan via WhatsApp</h6>
                                    <a href="https://wa.me/6281234567890" target="_blank" className="text-decoration-none">
                                        0812-6869-7475
                                    </a>
                                </div>
                            </li>
                            <li className="d-flex align-items-start">
                                <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>
                                <div>
                                    <h6 className="fw-semibold mb-0">Email</h6>
                                    <p className="text-muted mb-0">kontak@nazarelqua.com</p>
                                </div>
                            </li>
                        </ul>

                        <hr className="my-4" />

                        <h3 className="fw-bold text-primary mb-4">Jam Operasional</h3>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Senin - Minggu</span>
                                <strong>06:00 - 18:00</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Kolom Peta dan Formulir Kontak */}
                <div className="col-lg-6">
                    <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                        <h3 className="fw-bold text-primary mb-4">Kirim Pesan</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="contactName" className="form-label">Nama Lengkap</label>
                                <input type="text" className="form-control" id="contactName" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactEmail" className="form-label">Alamat Email</label>
                                <input type="email" className="form-control" id="contactEmail" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactSubject" className="form-label">Subjek</label>
                                <input type="text" className="form-control" id="contactSubject" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactMessage" className="form-label">Pesan Anda</label>
                                <textarea className="form-control" id="contactMessage" rows={4} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 py-2">
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Peta Lokasi */}
            <div className="row mt-5">
                <div className="col-12">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h3 className="fw-bold text-primary mb-4 text-center">Lokasi Kami</h3>
                        <div className="ratio ratio-16x9">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.149846169632!2d102.86049047435252!3d-2.771985197205101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e304b139e0c3edf%3A0xbaee141b1049ede5!2sNazarel%20Qua!5e0!3m2!1sid!2sid!4v1756700306952!5m2!1sid!2sid" 
                                width="600" 
                                height="450" 
                                style={{ border: 0 }} 
                                allowFullScreen={false} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}