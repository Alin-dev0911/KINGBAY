import "../styles/World.css";

import worldHero from "../assets/world-hero.jpg";
import worldCards from "../assets/world-cards.png";
import worldChessRoom from "../assets/world-chess-room.jpg";
import worldWindow from "../assets/world-window.jpg";

function World() {
	return (
		<main className="world-page">
			{/* =====================================================
			    HERO
			===================================================== */}
			<section className="world-hero">
				<img className="world-hero-bg" src={worldHero} alt="Không gian KingBay" />

				<div className="world-hero-overlay" />

				<div className="world-hero-content">
					<span className="world-section-label">04 — THẾ GIỚI KINGBAY</span>

					<h1>
						BƯỚC VÀO
						<br />
						<em>KINGBAY.</em>
					</h1>

					<p>
						Nơi thế giới Wonderland không chỉ nằm trên bàn cờ, mà hiện hữu trong từng không gian, ánh sáng
						và chi tiết.
					</p>

					<a href="#world-experience" className="world-main-btn">
						Khám phá không gian
						<span>↓</span>
					</a>
				</div>

				{/* HERO INFO */}
				<div className="world-hero-info">
					<div>
						<small>CONCEPT</small>
						<strong>WONDERLAND</strong>
					</div>

					<div>
						<small>SPACE</small>
						<strong>KINGBAY</strong>
					</div>

					<div>
						<small>EST.</small>
						<strong>2026</strong>
					</div>
				</div>

				<div className="world-scroll">
					<span />
					CUỘN ĐỂ KHÁM PHÁ
				</div>
			</section>

			{/* =====================================================
			    INTRO
			===================================================== */}
			<section className="world-intro">
				<div className="world-index">01</div>

				<div className="world-intro-title">
					<span>KHÔNG GIAN KINGBAY</span>

					<h2>
						Một thế giới
						<br />
						<em>được bước vào.</em>
					</h2>
				</div>

				<div className="world-intro-copy">
					<p className="world-lead">
						KingBay không chỉ tạo ra một bộ cờ. Chúng tôi tạo nên một thế giới mà người chơi có thể thực sự
						bước vào và trải nghiệm.
					</p>

					<p>
						Từ vật liệu, màu sắc, ánh sáng đến những biểu tượng được lấy cảm hứng từ bàn cờ và Wonderland,
						mỗi chi tiết đều trở thành một phần của câu chuyện.
					</p>
				</div>
			</section>

			{/* =====================================================
			    FEATURE 01 - CARD GALLERY
			===================================================== */}
			<section className="world-feature" id="world-experience">
				<div className="world-feature-image">
					<img src={worldCards} alt="Không gian trưng bày thẻ KingBay" />

					<div className="world-image-number">01 / 03</div>
				</div>

				<div className="world-feature-content">
					<span>02 — STRATEGY GALLERY</span>

					<h2>
						Chiến thuật
						<br />
						<em>trở thành nghệ thuật.</em>
					</h2>

					<p>
						Những thẻ kỹ năng của Lãnh Địa Wonderland được đưa khỏi bàn cờ và trở thành một phần của không
						gian trưng bày KingBay.
					</p>

					<div className="world-feature-line" />

					<div className="world-feature-meta">
						<div>
							<small>EXPERIENCE</small>
							<strong>Card System</strong>
						</div>

						<div>
							<small>COLLECTION</small>
							<strong>Wonderland</strong>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    FEATURE 02 - PLAY SPACE
			===================================================== */}
			<section className="world-feature world-feature-reverse">
				<div className="world-feature-image">
					<img src={worldChessRoom} alt="Không gian chơi cờ KingBay" />

					<div className="world-image-number">02 / 03</div>
				</div>

				<div className="world-feature-content">
					<span>03 — PLAY SPACE</span>

					<h2>
						Ngồi xuống.
						<br />
						<em>Bắt đầu ván cờ.</em>
					</h2>

					<p>
						Không gian chơi được thiết kế như một sân khấu. Mỗi bàn cờ trở thành trung tâm của trải nghiệm,
						nơi người chơi bước vào thế giới chiến thuật của KingBay.
					</p>

					<div className="world-feature-line" />

					<div className="world-feature-meta">
						<div>
							<small>ACTIVITY</small>
							<strong>Chess</strong>
						</div>

						<div>
							<small>EXPERIENCE</small>
							<strong>Community</strong>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    ARCHITECTURE
			===================================================== */}
			<section className="world-architecture">
				<div className="world-architecture-heading">
					<span>04 — ARCHITECTURE</span>

					<h2>
						Mỗi chi tiết đều
						<br />
						<em>có một nước đi.</em>
					</h2>

					<p>
						Không gian KingBay sử dụng chính ngôn ngữ thiết kế của Lãnh Địa Wonderland để tạo nên một trải
						nghiệm thống nhất từ sản phẩm đến kiến trúc.
					</p>
				</div>

				<div className="world-architecture-image">
					<img src={worldWindow} alt="Chi tiết kiến trúc KingBay" />

					<div className="architecture-label label-one">
						<span>01</span>

						<p>Họa tiết bàn cờ</p>
					</div>

					<div className="architecture-label label-two">
						<span>02</span>

						<p>Biểu tượng quân cờ</p>
					</div>

					<div className="architecture-label label-three">
						<span>03</span>

						<p>Đỏ · Kem · Vàng</p>
					</div>
				</div>
			</section>

			{/* =====================================================
			    DESIGN LANGUAGE
			===================================================== */}
			<section className="world-language">
				<div className="world-language-heading">
					<span className="world-section-number">05</span>

					<div>
						<span className="world-section-label">NGÔN NGỮ KINGBAY</span>

						<h2>
							Từ bàn cờ
							<br />
							<em>đến không gian.</em>
						</h2>
					</div>
				</div>

				<div className="world-language-grid">
					{/* CARD 01 */}
					<article className="world-language-card">
						<span>01</span>

						<div className="world-language-symbol">♜</div>

						<h3>Hình khối</h3>

						<p>Những đường cong, khung cửa và cấu trúc được phát triển từ hình học của bàn cờ.</p>
					</article>

					{/* CARD 02 */}
					<article className="world-language-card world-language-card-red">
						<span>02</span>

						<div className="world-language-symbol">◆</div>

						<h3>Màu sắc</h3>

						<p>Đỏ Burgundy, xanh KingBay, vàng kim và sắc kem tạo nên bản sắc Wonderland.</p>
					</article>

					{/* CARD 03 */}
					<article className="world-language-card">
						<span>03</span>

						<div className="world-language-symbol">✦</div>

						<h3>Ánh sáng</h3>

						<p>Ánh sáng được sử dụng như một lớp vật liệu giúp tạo chiều sâu và cảm giác sân khấu.</p>
					</article>
				</div>
			</section>

			{/* =====================================================
			    QUOTE
			===================================================== */}
			<section className="world-quote">
				<div className="world-quote-mark">“</div>

				<h2>
					Không chỉ nhìn thấy
					<br />
					KingBay.
					<br />
					<em>Hãy bước vào nó.</em>
				</h2>

				<div className="world-quote-line" />

				<span>KINGBAY · WONDERLAND</span>
			</section>

			{/* =====================================================
			    FINAL CTA
			===================================================== */}
			<section className="world-final">
				<div className="world-final-glow world-final-glow-red" />

				<div className="world-final-glow world-final-glow-green" />

				<div className="world-final-inner">
					<span>WELCOME TO</span>

					<h2>KINGBAY</h2>

					<p>
						Một thế giới được tạo nên từ
						<br />
						chiến thuật, nghệ thuật và câu chuyện.
					</p>

					<a href="/san-pham">
						Khám phá Lãnh Địa Wonderland
						<span>↗</span>
					</a>
				</div>
			</section>
		</main>
	);
}

export default World;
