import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import storyHeroImage from "../assets/img7.JPG";
import chessImage from "../assets/img6.png";
import wonderlandImage from "../assets/keyvissual final.JPG";
import interiorImage from "../assets/img8.png";
import experienceImage from "../assets/1.jpg";

import "../styles/Story.css";

gsap.registerPlugin(ScrollTrigger);

const storySections = [
	{
		number: "01",
		eyebrow: "Nguồn cảm hứng",
		title: "Cờ vua — nghệ thuật của chiến lược",
		description:
			"KINGBAY bắt đầu từ cờ vua — biểu tượng của trí tuệ, sự cân bằng và khả năng nhìn xa. Từng nước đi không chỉ thay đổi thế trận, mà còn gợi mở cách chúng tôi tổ chức không gian: rõ ràng, có chủ đích và luôn ẩn chứa chiều sâu.",
		image: chessImage,
		imageAlt: "Bàn cờ đặc trưng KINGBAY",
		side: "left",
	},
	{
		number: "02",
		eyebrow: "Thế giới tưởng tượng",
		title: "Wonderland — nơi những quy tắc được viết lại",
		description:
			"Tinh thần Alice in Wonderland đưa KINGBAY vượt khỏi một không gian nội thất thông thường. Tỷ lệ, ánh sáng, màu sắc và những chi tiết bất ngờ được kết hợp để tạo nên cảm giác như đang bước qua một cánh cửa dẫn vào thế giới khác.",
		image: wonderlandImage,
		imageAlt: "Thế giới Wonderland của KINGBAY",
		side: "right",
	},
	{
		number: "03",
		eyebrow: "Không gian KINGBAY",
		title: "Nội thất — nghệ thuật trong từng chi tiết",
		description:
			"Mỗi vật liệu đều mang một vai trò trong câu chuyện: nhung tạo chiều sâu, kim loại gợi quyền lực, kính mở rộng không gian, ánh sáng dẫn dắt cảm xúc. Tất cả được sắp đặt như những quân cờ trong một thế trận hoàn chỉnh.",
		image: interiorImage,
		imageAlt: "Không gian nội thất KINGBAY",
		side: "left",
	},
	{
		number: "04",
		eyebrow: "Trải nghiệm",
		title: "Một lãnh địa dành cho người khác biệt",
		description:
			"KINGBAY không chỉ là nơi trưng bày sản phẩm hay chơi cờ. Đây là không gian gặp gỡ, khám phá và kết nối — nơi mỗi vị khách có thể trở thành một phần của câu chuyện và tự lựa chọn nước đi của riêng mình.",
		image: experienceImage,
		imageAlt: "Trải nghiệm tại KINGBAY",
		side: "right",
	},
];

const materials = [
	{
		number: "01",
		title: "Gỗ",
		description: "Ấm áp, vững chãi và mang dấu ấn thủ công.",
	},
	{
		number: "02",
		title: "Kính",
		description: "Tạo chiều sâu và mở rộng ranh giới không gian.",
	},
	{
		number: "03",
		title: "Kim loại",
		description: "Gợi lên bản lĩnh, quyền lực và tinh thần hoàng gia.",
	},
	{
		number: "04",
		title: "Nhung",
		description: "Mềm mại, huyền bí và giàu cảm xúc thị giác.",
	},
];

export default function Story() {
	const pageRef = useRef(null);
	const heroImageRef = useRef(null);
	const heroContentRef = useRef(null);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto",
		});

		const context = gsap.context(() => {
			const heroTimeline = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			heroTimeline
				.fromTo(
					".story-kicker",
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
					".story-hero-content h1",
					{
						opacity: 0,
						y: 70,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1.1,
					},
					"-=0.45",
				)
				.fromTo(
					".story-hero-content h2",
					{
						opacity: 0,
						y: 45,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.9,
					},
					"-=0.65",
				)
				.fromTo(
					".story-hero-content > p",
					{
						opacity: 0,
						y: 30,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
					},
					"-=0.5",
				)
				.fromTo(
					".story-scroll-button",
					{
						opacity: 0,
						y: 20,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
					},
					"-=0.45",
				);

			gsap.to(heroImageRef.current, {
				scale: 1.13,
				y: -60,
				ease: "none",
				scrollTrigger: {
					trigger: ".story-hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});

			gsap.to(heroContentRef.current, {
				y: -90,
				opacity: 0,
				ease: "none",
				scrollTrigger: {
					trigger: ".story-hero",
					start: "25% top",
					end: "85% top",
					scrub: true,
				},
			});

			gsap.utils.toArray(".story-reveal").forEach((element) => {
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
							start: "top 86%",
							once: true,
						},
					},
				);
			});

			gsap.utils.toArray(".story-chapter").forEach((chapter) => {
				const image = chapter.querySelector(".story-chapter-image");
				const content = chapter.querySelector(".story-chapter-content");

				const isLeft = chapter.classList.contains("story-chapter-left");

				gsap.fromTo(
					image,
					{
						opacity: 0,
						x: isLeft ? -90 : 90,
						scale: 0.94,
					},
					{
						opacity: 1,
						x: 0,
						scale: 1,
						duration: 1.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: chapter,
							start: "top 78%",
							once: true,
						},
					},
				);

				gsap.fromTo(
					content,
					{
						opacity: 0,
						x: isLeft ? 70 : -70,
					},
					{
						opacity: 1,
						x: 0,
						duration: 1,
						delay: 0.12,
						ease: "power3.out",
						scrollTrigger: {
							trigger: chapter,
							start: "top 78%",
							once: true,
						},
					},
				);
			});

			ScrollTrigger.refresh();
		}, pageRef);

		return () => {
			context.revert();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<main ref={pageRef} className="story-page">
			<section className="story-hero">
				<div className="story-hero-image">
					<img ref={heroImageRef} src={storyHeroImage} alt="Không gian thương hiệu KINGBAY" />
				</div>

				<div className="story-hero-overlay" />
				<div className="story-hero-vignette" />
				<div className="story-hero-light" />

				<div ref={heroContentRef} className="story-hero-content">
					<span className="story-kicker">
						<i />
						Câu chuyện thương hiệu
					</span>

					<h1>KINGBAY</h1>

					<h2>
						Nơi nghệ thuật, chiến lược
						<br />
						và trí tưởng tượng gặp nhau.
					</h2>

					<p>
						Lấy cảm hứng từ cờ vua, KINGBAY không chỉ xây dựng một không gian nội thất mang tinh thần “lãnh
						địa của Vua”, mà còn mở rộng trải nghiệm bằng những lá bài chiến thuật kết hợp cùng vật liệu như
						kính, đá, thép,.... Từ đó, không gian không chỉ là bối cảnh, mà trở thành một phần của cuộc chơi
						— nơi chiến lược, vật liệu và cảm xúc cùng song hành.
					</p>

					<a href="#story-origin" className="story-scroll-button">
						<span>Khám phá câu chuyện</span>
						<i>↓</i>
					</a>
				</div>

				<div className="story-hero-line" />
			</section>

			<section className="story-introduction" id="story-origin">
				<div className="story-intro-label story-reveal">
					<span>Khởi nguồn</span>
					<i />
				</div>

				<div className="story-intro-content">
					<h2 className="story-reveal">
						Từ bàn cờ,
						<br />
						mở ra một thế giới.
					</h2>

					<div className="story-intro-copy story-reveal">
						<p>
							Với KINGBAY, không gian không chỉ là nơi chứa đựng nội thất. Đó là một cuộc chơi của tỷ lệ,
							vật liệu, ánh sáng và cảm xúc.
						</p>

						<p>
							Cờ vua tạo nên cấu trúc chiến lược. Wonderland mang đến sự bất ngờ. Nội thất biến những ý
							tưởng ấy thành trải nghiệm có thể chạm, nhìn và cảm nhận.
						</p>
					</div>
				</div>
			</section>

			<section className="story-chapters">
				{storySections.map((section) => (
					<article className={`story-chapter story-chapter-${section.side}`} key={section.number}>
						<div className="story-chapter-image">
							<img src={section.image} alt={section.imageAlt} />

							<div className="story-image-shade" />

							<span className="story-image-index">{section.number}</span>
						</div>

						<div className="story-chapter-content">
							<span className="story-chapter-number">{section.number}</span>

							<span className="story-chapter-eyebrow">{section.eyebrow}</span>

							<h2>{section.title}</h2>

							<p>{section.description}</p>

							<div className="story-chapter-rule">
								<span />
								<i />
							</div>
						</div>
					</article>
				))}
			</section>

			<section className="story-materials">
				<div className="story-materials-heading story-reveal">
					<span>Ngôn ngữ thiết kế</span>

					<h2>
						Vật liệu tạo nên
						<br />
						lãnh địa
					</h2>
				</div>

				<div className="story-material-list">
					{materials.map((material) => (
						<article className="story-material-card story-reveal" key={material.number}>
							<span>{material.number}</span>

							<h3>{material.title}</h3>

							<p>{material.description}</p>
						</article>
					))}
				</div>
			</section>

			<section className="story-final">
				<div className="story-final-glow" />

				<div className="story-final-content story-reveal">
					<span>Lãnh địa trí tuệ</span>

					<blockquote>
						“Tại KINGBAY, mỗi nước đi là một câu chuyện,
						<br />
						mỗi không gian là một tác phẩm nghệ thuật.”
					</blockquote>

					<Link to="/#product" className="story-final-button">
						Khám phá bàn cờ KINGBAY
						<i>→</i>
					</Link>
				</div>
			</section>
		</main>
	);
}
