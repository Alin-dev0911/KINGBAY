import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "../styles/Home.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const heroRef = useRef(null);
	const bgRef = useRef(null);
	const titleRef = useRef(null);
	const gateLightRef = useRef(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		gsap.to(bgRef.current, {
			scale: 1.18,
			y: -80,
			scrollTrigger: {
				trigger: heroRef.current,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});

		gsap.to(titleRef.current, {
			y: -120,
			opacity: 0,
			scale: 0.88,
			scrollTrigger: {
				trigger: heroRef.current,
				start: "top top",
				end: "45% top",
				scrub: true,
			},
		});

		gsap.to(gateLightRef.current, {
			opacity: 1,
			scale: 1.4,
			scrollTrigger: {
				trigger: heroRef.current,
				start: "15% top",
				end: "bottom top",
				scrub: true,
			},
		});

		return () => {
			lenis.destroy();
			ScrollTrigger.killAll();
		};
	}, []);

	return (
		<main className="kingbay-page">
			<nav className="kingbay-nav">
				<div className="nav-logo">
					<img src="/logo.svg" alt="KingBay Logo" />
				</div>

				<div className="nav-menu">
					<a href="#home">Trang chủ</a>
					<a href="#story">Về chúng tôi</a>
					<a href="#blog">Blog</a>
					<a href="#contact">Liên hệ</a>
				</div>

				<button
					className="nav-btn"
					onClick={() => {
						document.getElementById("story").scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					Khám phá
				</button>
			</nav>

			<section id="home" ref={heroRef} className="kingbay-hero">
				<img ref={bgRef} className="hero-bg" src="/assets/kingbay-home-bg.png" alt="Kingbay Home" />

				<div className="hero-overlay"></div>
				<div ref={gateLightRef} className="gate-light"></div>

				<div ref={titleRef} className="hero-content">
					<span className="hero-kicker">Lãnh địa trí tuệ</span>

					<h1>KINGBAY</h1>

					<h2>Ai Chiếu Ai Đây?</h2>

					<p>Nơi nghệ thuật, chiến lược và trí tưởng tượng hội tụ trong một bộ sưu tập cờ vua độc bản.</p>

					<div className="hero-actions">
						<button
							onClick={() => {
								document.getElementById("product").scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							Khám phá bộ cờ
						</button>
						<button
							className="outline"
							onClick={() => {
								document.getElementById("story").scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							Xem câu chuyện
						</button>
					</div>
				</div>
			</section>

			<section id="story" className="story-section">
				<div className="story-wrapper">
					<span className="story-chapter">CÂU CHUYỆN KINGBAY</span>

					<div className="story-head">
						<h2>
							Khởi Nguồn
							<br />
							Không Gian
						</h2>

						<div className="story-description">
							<p>
								Trước khi trở thành một không gian thực, KingBay bắt đầu từ những bản thiết kế chi tiết.
								Mỗi mặt bằng là nền móng cho toàn bộ trải nghiệm.
							</p>

							<p>
								Từng khu vực, vật liệu và lối di chuyển đều được nghiên cứu nhằm tạo nên một không gian
								mang tinh thần cờ vua kết hợp thế giới Wonderland. Trở thành thương hiệu tiên phong đưa
								cờ vua vượt ra khỏi khuôn khổ trò chơi, phát triển thành một hệ sinh thái trải nghiệm
								mang bản sắc riêng.
							</p>
						</div>
					</div>

					<div className="story-maps">
						<figure className="map-item">
							<img src="/assets/map-01.png" alt="Mặt bằng KingBay" />
							<figcaption>
								<strong>Mặt bằng bố trí nội thất</strong>
								<span>Bố trí nội thất và trải nghiệm thi đấu</span>
							</figcaption>
						</figure>

						<figure className="map-item">
							<img src="/assets/map-02.png" alt="Bản vẽ nội thất KingBay" />
							<figcaption>
								<strong>Mặt bằng trần</strong>
								<span>Ốp vật liệu và thiết kế trần</span>
							</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="product" className="product-section">
				<div className="product-bg-glow"></div>

				<div className="product-layout">
					<div className="product-left">
						<span className="product-label">Bộ sản phẩm KingBay</span>

						<h2>Cờ Vua KingBay</h2>

						<p>
							Mỗi nước đi, mỗi khoảnh khắc và mỗi chiến thuật đều được tái hiện trong một bộ cờ nghệ thuật
							mang tinh thần Wonderland.
						</p>

						<div className="product-buttons">
							<button>Xem ngay</button>
							<button className="outline">Khám phá sản phẩm</button>
						</div>

						<div className="product-features">
							<div>
								<strong>Thiết kế độc bản</strong>
								<span>Phong cách Wonderland kết hợp hoàng gia.</span>
							</div>

							<div>
								<strong>Chiến thuật mới</strong>
								<span>Tích hợp thẻ bài làm thay đổi cục diện.</span>
							</div>
						</div>
					</div>

					<div className="product-board">
						<img src="/assets/kingbay-board.png" alt="Bàn cờ KingBay" />
					</div>

					<div className="product-right">
						<div className="match-card">
							<div className="match-top">
								<strong>Trận đấu mẫu</strong>
								<span>LIVE</span>
							</div>

							<div className="team">
								<p>Vương quốc đỏ</p>
								<b>1250</b>
							</div>

							<div className="team">
								<p>Vương quốc xanh</p>
								<b>1250</b>
							</div>

							<div className="timer">
								<b>04:35</b>
								<span>|</span>
								<b>03:12</b>
							</div>
						</div>

						<div className="info-card">
							<strong>Trải nghiệm trực quan</strong>
							<p>Xoay 360°, phóng to và cảm nhận từng chi tiết.</p>
						</div>

						<div className="info-card">
							<strong>Hiệu ứng sống động</strong>
							<p>Ánh sáng, bóng đổ và chuyển động mượt mà.</p>
						</div>

						<div className="info-card">
							<strong>Tối ưu đa nền tảng</strong>
							<p>Hiển thị đẹp trên desktop, tablet và mobile.</p>
						</div>
					</div>
				</div>
			</section>
			<section id="members" className="members-section">
				<div className="members-header">
					<span>Hệ Thống KingBay</span>
					<h2>Các nhân vật chủ lực</h2>
					<p>Mỗi chủ lực đại diện cho một vai trò trong thế giới chiến thuật KingBay.</p>
				</div>

				<div className="member-cards">
					{[
						["Lê Thị Ngọc Trân", "Tìm kiếm sự thật", "/assets/tran.png"],
						["Đăng Thị Thanh Thảo", "Trí tuệ và bí ẩn", "/assets/thao.jpg"],
						["Phạm Thu Hoài", "Cân bằng thế trận", "/assets/hoai.png"],
						["Nguyễn Văn Quyền", "Khởi tạo hành trình", "/assets/quyen.png"],
						["Lê Văn Bền", "Lật ngược thế cục", "/assets/ben.png"],
						["Hồ Minh Tặng", "Khám phá bí ẩn", "/assets/tang.png"],
					].map((item, index) => (
						<article className="member-card" key={index}>
							<img src={item[2]} alt={item[0]} />
							<div className="member-info">
								<h3>{item[0]}</h3>
								<p>{item[1]}</p>
							</div>
						</article>
					))}
				</div>
			</section>
			<section id="blog" className="blog-section">
				<div className="blog-header">
					<span>Tin tức KingBay</span>
					<h2>Blog & Sự Kiện</h2>
					<p>Cập nhật các hoạt động thi đấu, khai trương và hành trình phát triển của KingBay.</p>
				</div>

				<div className="blog-grid">
					<article className="blog-card blog-large">
						<img src="/assets/kingbay-home-bg.png" alt="Khai trương KingBay" />
						<div className="blog-content">
							<span>Khai trương</span>
							<h3>KingBay chính thức mở cổng vương quốc</h3>
							<p>
								Sự kiện ra mắt không gian cờ vua nghệ thuật đầu tiên, nơi chiến thuật và trải nghiệm hòa
								làm một.
							</p>
							<button>Đọc thêm</button>
						</div>
					</article>

					<article className="blog-card">
						<img src="/assets/img1.png" alt="Giải đấu KingBay" />
						<div className="blog-content">
							<span>Thi đấu</span>
							<h3>Giải đấu chiến thuật KingBay</h3>
							<p>Nơi người chơi thử sức với những ván cờ đầy bất ngờ.</p>
						</div>
					</article>

					<article className="blog-card">
						<img src="/assets/img3.png" alt="Nhân vật KingBay" />
						<div className="blog-content">
							<span>Bộ sưu tập nhân vật</span>
							<h3>Khai trương nhân vật mới</h3>
							<p>Sức mạnh, quyền lực và cảm xúc trong từng quân cờ.</p>
						</div>
					</article>

					<article className="blog-card">
						<img src="/assets/img4.jpg" alt="Nhân vật xanh KingBay" />
						<div className="blog-content">
							<span>Không gian KingBay</span>
							<h3>Khám phá không gian KingBay</h3>
							<p>Trải nghiệm thế giới cờ vua nghệ thuật với không gian độc đáo.</p>
						</div>
					</article>
					<article className="blog-card">
						<img src="/assets/img4.png" alt="Nhân vật xanh KingBay" />
						<div className="blog-content">
							<span>Tích Điểm</span>
							<h3>Chương trình tích điểm hấp dẫn</h3>
							<p>Tham gia các hoạt động để tích lũy điểm và nhận những phần thưởng hấp dẫn.</p>
						</div>
					</article>
				</div>
			</section>
			<section id="contact" className="contact-section">
				<div className="contact-header">
					<span>LIÊN HỆ </span>
					<h2>KINGBAY | LÃNH ĐỊA TRÍ TUỆ</h2>
					<p>Hợp tác, tổ chức giải đấu, trải nghiệm sản phẩm hoặc nhận tư vấn về bộ cờ vua KingBay.</p>
				</div>

				<div className="contact-wrapper">
					<div className="contact-info">
						<div className="info-box">
							<h3>Địa chỉ</h3>
							<p>119, Lê Trọng Tấn, Tân Sơn Nhì</p>
							<p>TP. Hồ Chí Minh</p>
						</div>

						<div className="info-box">
							<h3>Email</h3>
							<p>kingbay@gmail.com</p>
						</div>

						<div className="info-box">
							<h3>Số điện thoại</h3>
							<p>0384799202</p>
						</div>
					</div>

					<div className="contact-king">
						<div className="king-glow"></div>
						<img src="/assets/img2.png" alt="KingBay Character" />
					</div>

					<form className="contact-form">
						<input placeholder="Họ và tên" />
						<input placeholder="Email" />
						<input placeholder="Số điện thoại" />
						<textarea rows="6" placeholder="Nội dung..." />
						<button type="button">Gửi liên hệ</button>
					</form>
				</div>
			</section>
		</main>
	);
}
