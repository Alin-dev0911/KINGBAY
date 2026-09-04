import "../styles/News.css";

import heroNews from "../assets/heronew.png";

import img1 from "../assets/img12.png";
import img2 from "../assets/img13.png";
import img3 from "../assets/img9.png";
import img4 from "../assets/img14.png";

const shortNews = [
	{
		number: "01",
		category: "KINGBAY",
		title: "Vì sao KINGBAY chọn cờ vua làm ngôn ngữ thiết kế?",
	},
	{
		number: "02",
		category: "KHÔNG GIAN",
		title: "Một không gian được xây dựng từ chiến lược",
	},
	{
		number: "03",
		category: "SẢN PHẨM",
		title: "KINGBAY và hành trình biến bàn cờ thành trải nghiệm",
	},
	{
		number: "04",
		category: "THIẾT KẾ",
		title: "Vật liệu và ánh sáng trong thế giới KINGBAY",
	},
	{
		number: "05",
		category: "WONDERLAND",
		title: "Khi thế giới tưởng tượng bước lên bàn cờ",
	},
];

const featuredArticles = [
	{
		image: img2,
		number: "01",
		category: "DESIGN",
		title: "Không gian tạo nên những nước đi mang cảm hứng",
		description: "Khám phá cách KINGBAY kết hợp chiến lược, vật liệu và cảm xúc để tạo nên một thế giới riêng.",
	},
	{
		image: img1,
		number: "02",
		category: "KINGBAY",
		title: "5 bài học mới dành cho người yêu cờ vua",
		description:
			"Không chỉ là một trò chơi, mỗi nước đi còn phản ánh tư duy và cách chúng ta nhìn nhận không gian.",
	},
	{
		image: img3,
		number: "03",
		category: "PRODUCT",
		title: "Bí mật phía sau những quân cờ KINGBAY",
		description: "Từ hình khối, màu sắc đến vật liệu, từng quân cờ đều được xây dựng như một nhân vật riêng.",
	},
	{
		image: img4,
		number: "04",
		category: "WONDERLAND",
		title: "10 nhân vật làm nên thế giới Wonderland",
		description: "Mỗi nhân vật mang cá tính, biểu tượng và câu chuyện riêng trên chiến trường 64 ô cờ.",
	},
];

export default function News() {
	return (
		<main className="news-page">
			{/* ================= HERO ================= */}
			<section className="news-hero">
				<img src={heroNews} alt="KINGBAY News" className="news-hero-image" />

				<div className="news-hero-overlay" />

				<div className="news-hero-content">
					<span className="news-label">TIN TỨC</span>

					<h1>
						Trí thức cờ vua,
						<br />
						<span>Tinh thần KINGBAY</span>
					</h1>

					<p>Chia sẻ những câu chuyện, mẹo chơi và cảm hứng từ thế giới cờ vua.</p>
				</div>
			</section>

			{/* ================= SHORT NEWS ================= */}
			<section className="news-short-section">
				<div className="news-short-grid">
					{shortNews.map((item) => (
						<article className="news-short-item" key={item.number}>
							<span className="news-short-category">{item.category}</span>

							<h3>{item.title}</h3>

							<div className="news-short-bottom">
								<span>{item.number}</span>

								<button>
									Xem thêm
									<i>↗</i>
								</button>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* ================= FEATURED ================= */}
			<section className="featured-news">
				<div className="featured-news-heading">
					<span>BÀI VIẾT NỔI BẬT</span>

					<div className="featured-heading-line" />
				</div>

				<div className="featured-news-grid">
					{featuredArticles.map((article) => (
						<article className="featured-card" key={article.number}>
							<div className="featured-card-image">
								<img src={article.image} alt={article.title} />

								<span className="featured-number">{article.number}</span>
							</div>

							<div className="featured-card-content">
								<span className="featured-category">{article.category}</span>

								<h2>{article.title}</h2>

								<p>{article.description}</p>

								<button>
									Đọc bài viết
									<span>↗</span>
								</button>
							</div>
						</article>
					))}
				</div>

				<div className="featured-pagination">
					<button>‹</button>

					<span className="active">1</span>
					<span>2</span>
					<span>3</span>

					<button>›</button>
				</div>
			</section>
		</main>
	);
}
