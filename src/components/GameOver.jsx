export default function GameOver({ winner, onRestart }) {
    return (
    <div id="game-over">
        <h2>Game Over!</h2>
        {winner ?  <p>{winner} wins!</p> : <p>It's a draw!</p>}
        <button onClick={onRestart}> Rematch </button>
    </div>);
}