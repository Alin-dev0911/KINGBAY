import "../styles/Contact.css";

import contactHero from "../assets/img13.png";

export default function Contact() {
	return (
		<main className="contact-page">
			{/* ================= HERO ================= */}
			<section className="contact-hero">
				<img src={contactHero} alt="Liên hệ KINGBAY" className="contact-hero-image" />

				<div className="contact-hero-overlay" />

				<div className="contact-hero-content">
					<span>LIÊN HỆ</span>

					<h1>
						Chúng tôi luôn sẵn sàng
						<br />
						lắng nghe và đồng hành cùng bạn.
					</h1>

					<p>
						Mọi thắc mắc, hợp tác và góp ý của bạn đều là nguồn cảm hứng
						<br />
						để KINGBAY hoàn thiện hành trình mỗi ngày.
					</p>
				</div>
			</section>

			{/* ================= CONTACT FORM ================= */}
			<section className="contact-main">
				<div className="contact-title">
					<span>LIÊN HỆ</span>

					<h2>
						KINGBAY <i>|</i> LÃNH ĐỊA TRÍ TUỆ
					</h2>

					<p>Hợp tác, tư vấn, góp ý hoặc chia sẻ cùng KINGBAY.</p>
				</div>

				<div className="contact-box">
					<form className="contact-form">
						<input type="text" placeholder="Họ và tên" />

						<input type="email" placeholder="Email" />

						<input type="text" placeholder="Số điện thoại" />

						<textarea placeholder="Nội dung" />

						<button type="submit">Gửi liên hệ</button>
					</form>

					<div className="contact-info">
						<div className="contact-info-item">
							<span>ĐỊA CHỈ</span>

							<p>
								11 Đường Lê Trọng Tấn,Phường Tân Sơn Nhì
								<br />
								TP. Hồ Chí Minh
							</p>
						</div>

						<div className="contact-info-item">
							<span>EMAIL</span>

							<p>kingbay@gmail.com</p>
						</div>

						<div className="contact-info-item">
							<span>ĐIỆN THOẠI</span>

							<p>0384799202</p>
						</div>
					</div>
				</div>
			</section>

			{/* ================= MAP ================= */}
			<section className="contact-map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.7683143928417!2d106.62830973966341!3d10.805726033089547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be29db320e1%3A0xf9a96a4cce6e5ce5!2zMTExIEzDqiBUcuG7jW5nIFThuqVuLCBUw6JuIFPGoW4gTmjDrCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1788484304211!5m2!1sen!2s"
					title="CÔNG TY TNHH KINGBAY"
					loading="lazy"
					allowFullScreen
					referrerPolicy="strict-origin-when-cross-origin"
				/>
			</section>
		</main>
	);
}
