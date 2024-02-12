import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const gifs = [
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
    "https://gifdb.com/images/high/cat-bites-cat-s-ears-6z8wbx8lxubf8vkp.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHg0OWt5a2lhMTRxOXF4cjBuZ3JkMThyeTdvZGx3eXc3aXlqNTBjdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXYwNTVhZGR6cHR0eGdtcnh0NjJkNnU1eDJzY3BucGxxMGU5eDBrbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vFKqnCdLPNOKc/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGNwcXU0Mno1dW53amdvajBqczQybXA3Nmh6YzR3ZXFzNDBjZHRydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/efHwZH4DeN9ss/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTJub2ttY3Z5d3NvY3Nnam41bWE5dWtpNXgxeXJxNWZ1aTV5NTF5biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MWSRkVoNaC30A/giphy-downsized-large.gif",
    "https://media.giphy.com/media/qTpmfmjM9vpSM/giphy.gif",
    "https://media.giphy.com/media/MOgAd5Z2LZRHW/giphy.gif",
    "https://media.giphy.com/media/fQ168fAHs5yA8/giphy.gif",
    "https://media.giphy.com/media/naAaDvbAoOYdW/giphy.gif",
    "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif?cid=790b76113b4ttd6jseorbw24apsmdyjsb4zj1epbvrtcpaj6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/hzBc3HCFc0icM/giphy.gif?cid=ecf05e47243a43odsd7g6njxj04j8d9gstoyqdzprojcx29i&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/l41lTn1liPDzkv0Zi/giphy.gif?cid=ecf05e4765gczi4fwxxgxmdh35m7zw22xsx12ntp86tqno2p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/duFclbm7D3cDVNhJLq/giphy.gif?cid=ecf05e47r0omhqeiaip18isz56npk3pad80y7vqybekrujyx&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/7zq4LJsGwaFXy/giphy.gif",
    "https://media.giphy.com/media/d2jibZKKA0k3RUgU/giphy.gif",
    "https://media.giphy.com/media/MlwKxHLlZdKWQ/giphy.gif?cid=ecf05e47qwoirg5fw8sca8lwgamx7ljsb04949355jhg50e9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/ASvQ3A2Q7blzq/giphy.gif?cid=790b76115nkbgjl62dtirze7wq9x1gzb6dxl6ag57yt6b3m3&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "I can't give you more chances?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart!!!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const currentGif = gifs[noCount % gifs.length];

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src={currentGif}
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
      <footer className="footer">Made by Chinmayi Upendra Joshi</footer>
    </div>
  );
}
