import React from "react";
import "node-waves/dist/waves.min.css";
import * as Waves from "node-waves";

class ScrollButton extends React.Component {
	constructor() {
		super();

		this.state = {
			intervalId: 0,
			isTop: true,
		};
	}

	componentDidMount() {
		document.addEventListener("scroll", () => {
			const isTop = window.scrollY < 200;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
			Waves.attach("button.back-to-top", "waves-effect");
			Waves.init();
		});
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.intervalId);
		}
		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}

	scrollToTop() {
		let intervalId = setInterval(
			this.scrollStep.bind(this),
			this.props.delayInMs
		);
		this.setState({ intervalId: intervalId });
	}

	render() {
		return (
			<button
				title="Back to top"
				className={`back-to-top ${this.state.isTop? "" : "show"} scroll`}
				onClick={() => {
					this.scrollToTop();
				}}
			>
				<i className="fas fa-angle-up" />
			</button>
		);
	}
}

export default ScrollButton;
