import React, { Component } from "react"
import {
	WhatsappShareButton,
	WhatsappIcon,
	TelegramShareButton,
	TelegramIcon,
	FacebookShareButton,
	FacebookIcon,
	// FacebookMessengerShareButton,
	// FacebookMessengerIcon
} from "react-share"

import tick from "../images/tick.svg"
import cross from "../images/cross.svg"
import Constants from "../constants/config"
import logo from "../constants/images"
import styles from "../styles/template.module.css"
import styles2 from "../styles/result.module.css"

class ResultPage extends Component {
	state = {
		correct: 0
	}
	componentDidMount() {
		this.setState(() => {
			return {
				correct: this.props.result.filter(
					({ player_name, answer }) => player_name.toLowerCase() === answer.toLowerCase()
				).length
			}
		})
	}

	renderPage = (result) => (
		<div className={styles2.resultWrapper}>
			<div className={styles2.title}>
				You got {`${this.state.correct} / ${result.length}`}
			</div>
			<div>
				{
					result.map(quesObj => {
						return (
							<div key={`${quesObj.player_name}`} className={styles2.answerRows}>
								<div className={styles2.logoList}>
									{
										quesObj.teams.map((name, index) => (
											<div key={`${name}_${index}`} className={styles.logo}>
												{
													index !== 0 &&
													<>
														<div className={styles2.bar} />
														<div className={styles2.right} />
													</>
												}
												<img
													className={styles2.teamLogo}
													src={logo[name]}
													alt={`${name} logo`}
												/>
											</div>
										))
									}
								</div>
								<div className={styles2.answerWrapper}>
									<div>
										Your answer:&nbsp;<span>{quesObj.answer}</span>
										{
											quesObj.player_name.toLowerCase() === quesObj.answer
												? <img className={styles2.status} src={tick} alt="Correct answer" />
												: <img className={styles2.status} src={cross} alt="Wrong answer" />
										}
									</div>
									{
										quesObj.player_name.toLowerCase() !== quesObj.answer &&
										<div>
											Correct answer:&nbsp;<span>{quesObj.player_name}</span>
										</div>
									}
								</div>
							</div>
						)
					})
				}
			</div>
			<div className={styles2.buttonWrapper}>
				<div
					role="button"
					className={styles.button}
					tabIndex={0}
					onClick={() => window.location.reload()}
					onKeyPress={()=> window.location.reload()}
				>
					Play again
				</div>
				<div className={styles2.shareButtonWrapper}>
					Share it with your friends
					<div>
						<WhatsappShareButton
							url={window.location.href}
							title={Constants.SHARE_LINK_TITLE}
							separator=": "
						>
							<WhatsappIcon size={32} round />
						</WhatsappShareButton>
						{/* <FacebookMessengerShareButton
							url={window.location.href}
							appId={Constants.APP_ID}
						>
							<FacebookMessengerIcon size={32} round />
						</FacebookMessengerShareButton> */}
						<FacebookShareButton
							url={window.location.href}
							quote={Constants.SHARE_LINK_TITLE}
						>
							<FacebookIcon size={32} round />
						</FacebookShareButton>
						<TelegramShareButton
							url={window.location.href}
							title={Constants.SHARE_LINK_TITLE}
						>
							<TelegramIcon size={32} round />
						</TelegramShareButton>
					</div>
				</div>
			</div>
		</div>
	)

	render() {
		return this.renderPage(this.props.result);
	}
}

export default ResultPage
