import "../styles/Products.css";
import heroImage from "../assets/wonderland-hero.png";
import img1 from "../assets/skill-card.png";
import img2 from "../assets/material-card.png";
import img3 from "../assets/kingbay-board.png";

function Products() {
	return (
		<main className="products-page">
			{/* ================= HERO ================= */}
			<section
				className="wonderland-hero"
				style={{
					backgroundImage: `url(${heroImage})`,
				}}
			>
				<div className="wonderland-hero-bg" />

				{/* lớp tối để chữ dễ đọc */}
				<div className="wonderland-hero-overlay" />

				{/* ánh sáng đỏ / xanh */}
				<div className="wonderland-glow wonderland-glow-red" />
				<div className="wonderland-glow wonderland-glow-green" />

				<div className="wonderland-hero-content">
					<span className="wonderland-small-title">SẢN PHẨM ĐẶC TRƯNG KINGBAY</span>

					<h1>
						LÃNH ĐỊA
						<span>WONDERLAND</span>
					</h1>

					<div className="wonderland-divider">
						<span />
						<i>◆</i>
						<span />
					</div>

					<p>
						Mỗi nước đi, một câu chuyện.
						<br />
						Mỗi ván cờ, một thế giới.
					</p>

					<div className="wonderland-buttons">
						<a href="#discover" className="wonderland-btn-primary">
							Khám phá Wonderland
						</a>

						<a href="#gameplay" className="wonderland-btn-outline">
							Cách chơi
							<span>↗</span>
						</a>
					</div>
				</div>
			</section>

			{/* ================= INTRO ================= */}
			<section className="wonderland-intro" id="discover">
				<div className="wonderland-section-number">01</div>

				<div className="wonderland-intro-left">
					<span className="section-label">BƯỚC VÀO WONDERLAND</span>

					<h2>
						Không chỉ là
						<br />
						<em>một bàn cờ.</em>
					</h2>
				</div>

				<div className="wonderland-intro-right">
					<p className="intro-big">
						Một thế giới nơi chiến thuật, nhân vật và câu chuyện cùng tồn tại trên 64 ô cờ.
					</p>

					<p>
						Lãnh Địa Wonderland kế thừa luật chơi cờ vua quen thuộc, nhưng mở rộng trải nghiệm bằng hệ thống
						nhân vật, thẻ kỹ năng và vật liệu chiến thuật độc quyền của KingBay.
					</p>

					<div className="wonderland-stats">
						<div>
							<strong>02</strong>
							<span>VƯƠNG QUỐC</span>
						</div>

						<div>
							<strong>32</strong>
							<span>NHÂN VẬT</span>
						</div>

						<div>
							<strong>20</strong>
							<span>THẺ CHIẾN THUẬT</span>
						</div>
					</div>
				</div>
			</section>

			{/* ================= TWO KINGDOMS ================= */}
			<section className="kingdom-section">
				<div className="kingdom-heading">
					<span className="section-label">02 — HAI VƯƠNG QUỐC</span>

					<h2>
						Hai phe.
						<br />
						<span>Một chiến trường.</span>
					</h2>
				</div>

				<div className="kingdom-grid">
					{/* RED */}
					<div className="kingdom-card kingdom-red">
						<div className="kingdom-card-content">
							<span className="kingdom-index">01</span>

							<span className="kingdom-name-small">VƯƠNG QUỐC ĐỎ</span>

							<h3>
								Trái Tim
								<br />
								Hoàng Gia
							</h3>

							<p>Quyền lực, mạnh mẽ và trực diện. Mỗi quân cờ mang tinh thần của Vương quốc Đỏ.</p>

							<button>
								Khám phá phe đỏ
								<span>↗</span>
							</button>
						</div>

						<div className="kingdom-symbol">♥</div>
					</div>

					{/* GREEN */}
					<div className="kingdom-card kingdom-green">
						<div className="kingdom-card-content">
							<span className="kingdom-index">02</span>

							<span className="kingdom-name-small">VƯƠNG QUỐC XANH</span>

							<h3>
								Bí Ẩn
								<br />
								Wonderland
							</h3>

							<p>
								Linh hoạt, khó đoán và đầy biến hóa. Phe Xanh tạo nên những nước đi bất ngờ trên bàn cờ.
							</p>

							<button>
								Khám phá phe xanh
								<span>↗</span>
							</button>
						</div>

						<div className="kingdom-symbol">♛</div>
					</div>
				</div>
			</section>

			{/* ================= GAMEPLAY ================= */}
			<section className="gameplay-section" id="gameplay">
				<div className="gameplay-heading">
					<span className="section-label">03 — LUẬT CHƠI MỚI</span>

					<h2>
						Cờ vua,
						<br />
						<em>nhưng khác biệt.</em>
					</h2>

					<p>Những thẻ bài có thể thay đổi cục diện trận đấu chỉ trong 1 nước đi.</p>
				</div>

				<div className="gameplay-cards">
					<div className="gameplay-card">
						<span>01</span>

						<div className="gameplay-image">
							<img src={img1} alt="Thẻ kỹ năng" />
						</div>

						<h3>Thẻ kỹ năng</h3>

						<p>Mỗi quân cờ có thể sở hữu khả năng chiến thuật riêng.</p>
					</div>

					<div className="gameplay-card featured">
						<span>02</span>

						<div className="gameplay-image">
							<img src={img2} alt="Vật liệu" />
						</div>

						<h3>Vật liệu</h3>

						<p>Gương, kính, thép, ánh sáng và nhiều vật liệu thay đổi bàn đấu.</p>
					</div>

					<div className="gameplay-card">
						<span>03</span>

						<div className="gameplay-image">
							<img src={img3} alt="Chiến thuật mới" />
						</div>

						<h3>Chiến thuật mới</h3>

						<p>Mỗi trận đấu tạo ra một kịch bản hoàn toàn khác nhau.</p>
					</div>
				</div>
			</section>

			{/* ================= CTA ================= */}
			<section className="wonderland-final">
				<div className="wonderland-final-glow" />

				<div className="wonderland-final-content">
					<span className="section-label">SẴN SÀNG BƯỚC VÀO?</span>

					<h2>KINGBAY</h2>

					<p>
						Lãnh Địa Wonderland
						<br />
						Một bàn cờ. Hai vương quốc. Vô số khả năng.
					</p>

					<button className="wonderland-btn-primary">Khám phá sản phẩm</button>
				</div>
			</section>
		</main>
	);
}

export default Products;
