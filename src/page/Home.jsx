import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import heroBackground from "../assets/kingbay-home-bg.png";
import kingbayBoard from "../assets/kingbay-board.png";
import redKingImage from "../assets/img3.png";
import eventImage from "../assets/img1.png";
import mapInterior from "../assets/map-01.png";
import mapCeiling from "../assets/map-02.png";
import tranImage from "../assets/tran.png";
import thaoImage from "../assets/thao.jpg";
import hoaiImage from "../assets/hoai.png";
import quyenImage from "../assets/quyen.png";
import benImage from "../assets/ben.png";
import tangImage from "../assets/tang.png";
import experienceBackground from "../assets/img5.png";
import contactKingImage from "../assets/img2.png";

import "../styles/Home.css";

gsap.registerPlugin(ScrollTrigger);
const kingbayMembers = [
	{
		id: 1,
		name: "Lê Thị Ngọc Trân",
		role: "Tìm kiếm sự thật",
		image: tranImage,
		size: "small",
	},
	{
		id: 2,
		name: "Đặng Thị Thanh Thảo",
		role: "Trí tuệ và bí ẩn",
		image: thaoImage,
		size: "medium",
	},
	{
		id: 3,
		name: "Phạm Thu Hoài",
		role: "Cân bằng thế trận",
		image: hoaiImage,
		size: "large",
	},
	{
		id: 4,
		name: "Nguyễn Văn Quyền",
		role: "Khởi tạo hành trình",
		image: quyenImage,
		size: "large",
	},
	{
		id: 5,
		name: "Lê Văn Bền",
		role: "Lật ngược thế cục",
		image: benImage,
		size: "medium",
	},
	{
		id: 6,
		name: "Hồ Minh Tặng",
		role: "Khám phá bí ẩn",
		image: tangImage,
		size: "small",
	},
];
const newsItems = [
	{
		id: 1,
		category: "Sự kiện",
		title: "KingBay chính thức mở cổng vương quốc",
		description: "Không gian cờ vua nghệ thuật, nội thất và trải nghiệm chiến thuật chính thức được giới thiệu.",
		image: heroBackground,
	},
	{
		id: 2,
		category: "Giải đấu",
		title: "Cuộc đối đầu giữa hai vương quốc",
		description: "Những trận đấu nơi chiến thuật, thẻ kỹ năng và bản lĩnh người chơi quyết định cục diện.",
		image: eventImage,
	},
	{
		id: 3,
		category: "Bộ sưu tập",
		title: "Khám phá thế giới nhân vật KingBay",
		description: "Mỗi quân cờ mang một hình dáng, cá tính và câu chuyện riêng trong thế giới KingBay.",
		image: redKingImage,
	},
];

const productFeatures = [
	{
		number: "01",
		title: "Thiết kế độc bản",
		description: "Hình khối nhân vật được phát triển riêng theo thế giới KingBay.",
	},
	{
		number: "02",
		title: "Chiến thuật mở rộng",
		description: "Hệ thống thẻ kỹ năng tạo ra những biến đổi bất ngờ trong mỗi trận đấu.",
	},
	{
		number: "03",
		title: "Giá trị trưng bày",
		description: "Bộ cờ vừa là sản phẩm chiến thuật, vừa là điểm nhấn nghệ thuật trong không gian.",
	},
];

export default function Home() {
	const pageRef = useRef(null);
	const heroRef = useRef(null);
	const heroBackgroundRef = useRef(null);
	const heroContentRef = useRef(null);
	const productBoardRef = useRef(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.1,
			smoothWheel: true,
			wheelMultiplier: 0.9,
		});

		let animationFrameId;

		const handleAnimationFrame = (time) => {
			lenis.raf(time);
			ScrollTrigger.update();

			animationFrameId = requestAnimationFrame(handleAnimationFrame);
		};

		animationFrameId = requestAnimationFrame(handleAnimationFrame);

		lenis.on("scroll", ScrollTrigger.update);

		const context = gsap.context(() => {
			const memberCards = gsap.utils.toArray(".home-member-card");

			gsap.fromTo(
				memberCards,
				{
					opacity: 0,
					y: 90,
					rotateX: 12,
					scale: 0.9,
				},
				{
					opacity: 1,
					y: 0,
					rotateX: 0,
					scale: 1,
					duration: 1.1,
					stagger: 0.12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".home-members-stage",
						start: "top 82%",
						once: true,
					},
				},
			);
			const introTimeline = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			introTimeline
				.fromTo(
					".home-eyebrow",
					{
						opacity: 0,
						y: 24,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
					},
				)
				.fromTo(
					".home-hero-title",
					{
						opacity: 0,
						y: 60,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1.1,
					},
					"-=0.45",
				)
				.fromTo(
					".home-hero-subtitle",
					{
						opacity: 0,
						y: 35,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.9,
					},
					"-=0.65",
				)
				.fromTo(
					".home-hero-description",
					{
						opacity: 0,
						y: 24,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
					},
					"-=0.55",
				)
				.fromTo(
					".home-hero-actions",
					{
						opacity: 0,
						y: 22,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
					},
					"-=0.5",
				);

			gsap.to(heroBackgroundRef.current, {
				scale: 1.15,
				y: -75,
				ease: "none",
				scrollTrigger: {
					trigger: heroRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});

			gsap.to(heroContentRef.current, {
				y: -90,
				opacity: 0,
				scale: 0.96,
				ease: "none",
				scrollTrigger: {
					trigger: heroRef.current,
					start: "20% top",
					end: "78% top",
					scrub: true,
				},
			});

			if (productBoardRef.current) {
				gsap.fromTo(
					productBoardRef.current,

					{
						opacity: 0,

						scale: 0.86,

						y: 70,

						rotateX: 10,
					},

					{
						opacity: 1,

						scale: 1,

						y: 0,

						rotateX: 3,

						duration: 1.4,

						ease: "power3.out",

						scrollTrigger: {
							trigger: "#product",

							start: "top 75%",

							once: true,
						},
					},
				);
				gsap.fromTo(
					".home-experience-background img",
					{
						scale: 1.18,
					},
					{
						scale: 1.02,
						ease: "none",
						scrollTrigger: {
							trigger: ".home-experience",
							start: "top bottom",
							end: "center center",
							scrub: 1.2,
						},
					},
				);

				gsap.fromTo(
					".home-experience-copy",
					{
						opacity: 0,
						x: -70,
					},
					{
						opacity: 1,
						x: 0,
						duration: 1.1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".home-experience",
							start: "top 68%",
							once: true,
						},
					},
				);

				gsap.fromTo(
					".home-experience-detail",
					{
						opacity: 0,
						y: 70,
						rotateX: 8,
					},
					{
						opacity: 1,
						y: 0,
						rotateX: 0,
						duration: 1.1,
						delay: 0.15,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".home-experience",
							start: "top 65%",
							once: true,
						},
					},
				);
				gsap.fromTo(
					".home-contact-info-card",
					{
						opacity: 0,
						x: -65,
					},
					{
						opacity: 1,
						x: 0,
						duration: 0.9,
						stagger: 0.12,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".home-contact-layout",
							start: "top 78%",
							once: true,
						},
					},
				);

				gsap.fromTo(
					".home-contact-character-stage",
					{
						opacity: 0,
						y: 120,
						scale: 0.78,
						rotateY: -15,
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						rotateY: 0,
						duration: 1.3,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".home-contact",
							start: "top 70%",
							once: true,
						},
					},
				);

				gsap.fromTo(
					".home-contact-form",
					{
						opacity: 0,
						x: 70,
					},
					{
						opacity: 1,
						x: 0,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: ".home-contact-layout",
							start: "top 78%",
							once: true,
						},
					},
				);
			}

			const revealElements = gsap.utils.toArray(".home-reveal");

			revealElements.forEach((element) => {
				gsap.fromTo(
					element,
					{
						opacity: 0,
						y: 65,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: element,
							start: "top 88%",
							once: true,
						},
					},
				);
			});

			const worldCards = gsap.utils.toArray(".home-world-card");

			worldCards.forEach((card, index) => {
				gsap.fromTo(
					card,
					{
						opacity: 0,
						x: index === 0 ? -70 : 70,
					},
					{
						opacity: 1,
						x: 0,
						duration: 1.1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: card,
							start: "top 84%",
							once: true,
						},
					},
				);
			});

			ScrollTrigger.refresh();
		}, pageRef);

		return () => {
			cancelAnimationFrame(animationFrameId);

			lenis.off("scroll", ScrollTrigger.update);
			lenis.destroy();

			context.revert();

			ScrollTrigger.getAll().forEach((trigger) => {
				trigger.kill();
			});
		};
	}, []);

	return (
		<main ref={pageRef} className="kingbay-home">
			<section id="home" ref={heroRef} className="home-hero">
				<img
					ref={heroBackgroundRef}
					className="home-hero-background"
					src={heroBackground}
					alt="Không gian trải nghiệm KingBay"
				/>

				<div className="home-hero-overlay" />
				<div className="home-hero-light" />
				<div className="home-hero-vignette" />

				<div ref={heroContentRef} className="home-hero-content">
					<p className="home-eyebrow">Lãnh địa trí tuệ</p>

					<h1 className="home-hero-title">KINGBAY</h1>

					<h2 className="home-hero-subtitle">Ai chiếu ai đây?</h2>

					<p className="home-hero-description">
						Một thế giới nơi nghệ thuật nội thất, chiến thuật cờ vua và trí tưởng tượng Wonderland cùng hội
						tụ.
					</p>

					<div className="home-hero-actions">
						<a className="home-primary-button" href="#product">
							Khám phá KingBay
						</a>

						<Link className="home-secondary-button" to="/story">
							Xem câu chuyện
						</Link>
					</div>
				</div>
			</section>

			<section id="introduction" className="home-origin home-section">
				<div className="home-origin-header home-reveal">
					<p className="home-section-label">Câu chuyện KingBay</p>

					<h2>
						Khởi Nguồn
						<br />
						Không Gian
					</h2>
				</div>

				<div className="home-origin-description home-reveal">
					<p>
						Trước khi trở thành một không gian thực, KingBay bắt đầu từ những bản thiết kế chi tiết. Mỗi mặt
						bằng là nền móng cho toàn bộ trải nghiệm.
					</p>

					<p>
						Từng khu vực, vật liệu và lối di chuyển đều được nghiên cứu nhằm tạo nên một không gian mang
						tinh thần cờ vua kết hợp thế giới Wonderland. Trở thành thương hiệu tiên phong đưa cờ vua vượt
						ra khỏi khuôn khổ trò chơi, phát triển thành một hệ sinh thái trải nghiệm mang bản sắc riêng.
					</p>
				</div>

				<div className="home-origin-maps">
					<article className="home-origin-map home-reveal">
						<div className="home-origin-map-image">
							<img src={mapInterior} alt="Mặt bằng bố trí nội thất KingBay" />
						</div>

						<div className="home-origin-map-caption">
							<h3>Mặt bằng bố trí nội thất</h3>

							<p>Bố trí nội thất và trải nghiệm thi đấu</p>
						</div>
					</article>

					<article className="home-origin-map home-reveal">
						<div className="home-origin-map-image">
							<img src={mapCeiling} alt="Mặt bằng trần KingBay" />
						</div>

						<div className="home-origin-map-caption">
							<h3>Mặt bằng trần</h3>

							<p>Ốp vật liệu và thiết kế trần</p>
						</div>
					</article>
				</div>
			</section>

			<section id="product" className="home-product">
				<div className="home-product-background">
					<div className="home-product-red-glow" />
					<div className="home-product-green-glow" />
				</div>

				<div className="home-product-layout">
					<div className="home-product-copy home-reveal">
						<p className="home-section-label">Bộ sản phẩm KingBay</p>

						<h2>
							Cờ Vua
							<br />
							KingBay
						</h2>

						<p className="home-product-description">
							Mỗi nước đi, mỗi khoảnh khắc và mỗi chiến thuật đều được tái hiện trong một bộ cờ nghệ thuật
							mang tinh thần Wonderland.
						</p>

						<div className="home-product-actions">
							<a className="home-primary-button" href="#world">
								Xem ngay
							</a>

							<a className="home-secondary-button" href="#experience">
								Khám phá sản phẩm
							</a>
						</div>

						<div className="home-product-feature-list">
							<article className="home-product-feature-card">
								<strong>Thiết kế độc bản</strong>

								<p>Phong cách Wonderland kết hợp tinh thần hoàng gia.</p>
							</article>

							<article className="home-product-feature-card">
								<strong>Chiến thuật mới</strong>

								<p>Tích hợp thẻ bài có khả năng thay đổi cục diện.</p>
							</article>
						</div>
					</div>

					<div className="home-product-board home-reveal">
						<div className="home-product-board-glow" />

						<img ref={productBoardRef} src={kingbayBoard} alt="Bàn cờ nghệ thuật KingBay" />
					</div>

					<aside className="home-product-sidebar home-reveal">
						<article className="home-match-card">
							<div className="home-match-header">
								<strong>Trận đấu mẫu</strong>

								<span>Live</span>
							</div>

							<div className="home-match-team">
								<p>
									Vương quốc
									<br />
									đỏ
								</p>

								<strong>1250</strong>
							</div>

							<div className="home-match-team">
								<p>
									Vương quốc
									<br />
									xanh
								</p>

								<strong>1250</strong>
							</div>

							<div className="home-match-time">
								<strong>04:35</strong>
								<span />
								<strong>03:12</strong>
							</div>
						</article>

						<article className="home-product-info-card">
							<strong>Trải nghiệm trực quan</strong>

							<p>Xoay 360°, phóng to và cảm nhận từng chi tiết.</p>
						</article>

						<article className="home-product-info-card">
							<strong>Hiệu ứng sống động</strong>

							<p>Ánh sáng, bóng đổ và chuyển động mượt mà.</p>
						</article>

						<article className="home-product-info-card">
							<strong>Tối ưu đa nền tảng</strong>

							<p>Hiển thị đẹp trên desktop, tablet và mobile.</p>
						</article>
					</aside>
				</div>
			</section>

			<section id="world" className="home-members">
				<div className="home-members-glow home-members-glow-red" />
				<div className="home-members-glow home-members-glow-green" />

				<div className="home-members-container">
					<header className="home-members-heading home-reveal">
						<p className="home-section-label">Hệ thống KingBay</p>

						<h2>Các nhân vật chủ lực</h2>

						<p>Mỗi chủ lực đại diện cho một vai trò trong thế giới chiến thuật KingBay.</p>
					</header>

					<div className="home-members-stage">
						{kingbayMembers.map((member, index) => (
							<article
								className={`home-member-card home-member-${member.size}`}
								key={member.id}
								style={{
									"--member-index": index,
								}}
							>
								<div className="home-member-card-inner">
									<div className="home-member-image">
										<img src={member.image} alt={member.name} />

										<div className="home-member-image-light" />
										<div className="home-member-image-shadow" />
									</div>

									<div className="home-member-content">
										<h3>{member.name}</h3>
										<p>{member.role}</p>
									</div>

									<div className="home-member-card-shine" />
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="experience" className="home-experience">
				<div className="home-experience-background">
					<img src={experienceBackground} alt="Không gian trải nghiệm Wonderland của KingBay" />

					<div className="home-experience-overlay" />
					<div className="home-experience-vignette" />
					<div className="home-experience-light" />
				</div>

				<div className="home-experience-content">
					<div className="home-experience-copy home-reveal">
						<p className="home-section-label">Không gian trải nghiệm</p>

						<h2>
							Bước vào
							<br />
							thế giới
							<br />
							<span>KingBay</span>
						</h2>

						<p className="home-experience-intro">
							Nơi nội thất cổ điển, chiến thuật cờ vua và thế giới Wonderland hòa làm một.
						</p>

						<Link className="home-experience-button" to="/story">
							<span>Khám phá không gian</span>
							<i>→</i>
						</Link>
					</div>

					<div className="home-experience-detail home-reveal">
						<span>Interior × Chess × Wonderland</span>

						<h3>Mỗi khu vực là một phần của câu chuyện</h3>

						<p>
							Không gian KingBay được kiến tạo từ màu sắc, vật liệu, ánh sáng và chuyển động. Mỗi bước
							chân mở ra một khu vực mới, đưa người xem tiến sâu hơn vào lãnh địa cờ vua.
						</p>

						<div className="home-experience-features">
							<div>
								<b>01</b>

								<p>Trưng bày bộ cờ và nhân vật KingBay</p>
							</div>

							<div>
								<b>02</b>

								<p>Trải nghiệm và tổ chức thi đấu</p>
							</div>

							<div>
								<b>03</b>

								<p>Giao lưu, sáng tạo và khám phá chiến thuật</p>
							</div>
						</div>
					</div>
				</div>

				<div className="home-experience-scroll">
					<span>Bước vào</span>
					<i />
				</div>
			</section>

			<section id="news" className="home-news home-section">
				<div className="home-news-heading home-reveal">
					<div>
						<p className="home-section-label">Tin tức và sự kiện</p>

						<h2>
							Chuyện mới
							<br />
							từ KingBay
						</h2>
					</div>

					<a className="home-text-link" href="#news">
						Xem tất cả
						<span>→</span>
					</a>
				</div>

				<div className="home-news-grid">
					{newsItems.map((item) => (
						<article className="home-news-card home-reveal" key={item.id}>
							<div className="home-news-image">
								<img src={item.image} alt={item.title} />
							</div>

							<div className="home-news-content">
								<span>{item.category}</span>

								<h3>{item.title}</h3>

								<p>{item.description}</p>

								<a href="#news">
									Đọc thêm
									<i>→</i>
								</a>
							</div>
						</article>
					))}
				</div>
			</section>

			<section id="contact" className="home-contact">
				<div className="home-contact-glow home-contact-glow-red" />
				<div className="home-contact-glow home-contact-glow-green" />

				<div className="home-contact-container">
					<header className="home-contact-heading home-reveal">
						<p className="home-section-label">Liên hệ</p>

						<h2>
							<strong>KINGBAY</strong>
							<i>|</i>
							<strong>Lãnh địa trí tuệ</strong>
						</h2>

						<p>Hợp tác, tổ chức giải đấu, trải nghiệm sản phẩm hoặc nhận tư vấn về bộ cờ vua KingBay.</p>
					</header>

					<div className="home-contact-layout">
						<div className="home-contact-info home-reveal">
							<article className="home-contact-info-card">
								<span>Địa chỉ</span>

								<p>
									119, Lê Trọng Tấn, Tân Sơn Nhì
									<br />
									TP. Hồ Chí Minh
								</p>
							</article>

							<article className="home-contact-info-card">
								<span>Email</span>

								<a href="mailto:kingbay@gmail.com">kingbay@gmail.com</a>
							</article>

							<article className="home-contact-info-card">
								<span>Số điện thoại</span>

								<a href="tel:0384799202">0384 799 202</a>
							</article>
						</div>

						<div className="home-contact-character home-reveal">
							<div className="home-contact-character-light" />
							<div className="home-contact-character-platform" />

							<div className="home-contact-character-stage">
								<img src={contactKingImage} alt="Nhân vật vua đỏ KingBay" />
							</div>
						</div>

						<form className="home-contact-form home-reveal" onSubmit={(event) => event.preventDefault()}>
							<div className="home-contact-field">
								<input type="text" name="name" placeholder="Họ và tên" autoComplete="name" />
							</div>

							<div className="home-contact-field">
								<input type="email" name="email" placeholder="Email" autoComplete="email" />
							</div>

							<div className="home-contact-field">
								<input type="tel" name="phone" placeholder="Số điện thoại" autoComplete="tel" />
							</div>

							<div className="home-contact-field">
								<textarea name="message" rows="6" placeholder="Nội dung..." />
							</div>

							<button type="submit">Gửi liên hệ</button>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
}
