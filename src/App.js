import React from "react";
import { Component } from 'react'
import styles from "./app.module.css"


class App extends Component {

  constructor() {
    super()
    this.state = {
      count: 0,
      coinInfo: {
        imgUrl: "",
        heads: 0,
        tails: 0,
      }


    }
  }

  changeCoin = () => {
    const randomIndex = Math.floor(Math.random() * 2)
    const urlArr = ["https://www.pcgs.com/UserImages/12563161o.jpg", "https://www.pcgs.com/UserImages/12563161r.jpg"]
    const randomImgUrl = urlArr[randomIndex]
    const count = this.state.count
    const { heads, tails } = this.state.coinInfo
    if (randomIndex === 0) {
      this.setState({
        count: count + 1,
        coinInfo: {
          imgUrl: randomImgUrl,
          heads: heads + 1,
          tails
        }
      })
    } else if (randomIndex === 1) {
      this.setState({
        count: count + 1,
        coinInfo: {
          imgUrl: randomImgUrl,
          heads,
          tails: tails + 1
        }
      })
    }

  }

  render() {
    const count = this.state.count 
    const { imgUrl, heads, tails } = this.state.coinInfo
    return (
      <>
        <div className={styles["container"]}>
          <div>
            <h1>Let's flip a coin!</h1>
          </div>
          <div className={styles["main-container"]}>
            {
              imgUrl ? <img className={styles["image"]} src={imgUrl} alt="coinImage" /> : null
            }
            <button onClick={this.changeCoin}>Flip Me</button>
          </div>
          <div>
            <span>Out of {count} tops, there have been {heads} heads and {tails} tails.</span>
          </div>
        </div>
      </>
    )
  }

}

export default App;
