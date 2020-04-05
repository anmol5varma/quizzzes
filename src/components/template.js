import React, { Component } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import Layout from "./layout"
import ProgressBar from "./progress-bar"
import SEO from "./seo"
import Result from "./result"
import Constants from "../constants/config"
import { GetQuizQuestionIndexes } from "../utils/style"
import list from "../jsons/transfer.json"
import logo from "../jsons/team-logo.json"
import styles from "../styles/template.module.css"

const selectedIndex = GetQuizQuestionIndexes(Constants.NUMBER_OF_QUESTIONS, list.length)
const data = selectedIndex.map(value => list[value])

const renderTime = value => {
	if (value === 0) {
		return <div className="timer">Too late...</div>;
	}

	return (
		<div className={styles.timer}>
			<div className={styles.text}>Remaining</div>
			<div className={styles.value}>{value}</div>
			<div className={styles.text}>seconds</div>
		</div>
	);
};

class Template extends Component {
	state = {
		currentQuestion: 0,
		currentAnswer: ""
	}

	renderPage = () => (
		<Layout>
			<SEO title="Home" />
			<div className={styles.wrapperBox}>
				{
					this.state.currentQuestion < Constants.NUMBER_OF_QUESTIONS &&
					<>
						<div className={styles.progressWrapper}>
							<ProgressBar current={this.state.currentQuestion + 1} total={data.length} />
						</div>
						<div className={styles.contentWrapper}>
							<span className={styles.heading}>Who am I?</span>
							<div className={styles.logoWrapper}>
								{
									data[this.state.currentQuestion].teams.map((name, index) => (
										<div key={`${name}_${index}`} className={styles.logo}>
											{index !== 0 && <><div className={styles.bar} /><div className={styles.right} /></>}
											<img className={styles.teamLogo} src={logo[name]} alt={`${name} logo`} />
										</div>
									))
								}
							</div>
							<CountdownCircleTimer
								isPlaying
								durationSeconds={Constants.TIME_FOR_EACH_QUESTION}
								colors={[["#00AA00", 0.5], ["#A30000"]]}
								renderTime={renderTime}
								strokeWidth={5}
								size={140}
								onComplete={() => {
									this.input.disabled = true
									setTimeout(() => this.goToNextQuestion(), Constants.TIME_INTERVAL_BETWEEN_QUESTIONS)
									return [false, Constants.TIME_INTERVAL_BETWEEN_QUESTIONS]
								}}
								key={this.state.currentQuestion}
							/>
							<div className={styles.inputWrapper}>
								I am
                <input
									list="players"
									name="input_player"
									ref={input => { this.input = input; return input && input.focus() }}
									className={styles.input}
									type="text"
									value={this.state.currentAnswer}
									onChange={(evt) => {
										this.saveInput(evt.target.value)
									}}
								/>
								<datalist id="players">
									{
										data.map(({ player_name }) => <option key={player_name} value={player_name} />)
									}
								</datalist>
							</div>
							<div
								role="button"
								className={styles.button}
								tabIndex={0}
								onClick={this.goToNextQuestion}
								onKeyPress={this.goToNextQuestion}
							>
								Next
              </div>
						</div>
					</>
				}
				{
					this.state.currentQuestion === Constants.NUMBER_OF_QUESTIONS &&
					<Result result={data} />
				}
			</div>
		</Layout>
	)

	goToNextQuestion = () => {
		const { currentAnswer, currentQuestion } = this.state
		data[currentQuestion].answer = currentAnswer
		this.input.disabled = false
		this.setState((prevState) => {
			return {
				currentQuestion: prevState.currentQuestion + 1,
				currentAnswer: ""
			};
		})
	}

	saveInput = (value) => {
		this.setState(() => {
			return {
				currentAnswer: value
			}
		})
	}

	render() {
		return this.renderPage();
	}
}

export default Template
