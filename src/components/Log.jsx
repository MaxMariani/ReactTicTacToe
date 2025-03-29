export default function Log({ turns }) {

    return (
        <ol id="log">
            {turns.map((gameTurn) =>
            (
                <li key={`${gameTurn.square.row}${gameTurn.square.col}`}>
                    {gameTurn.player} selected on {gameTurn.square.row}, {gameTurn.square.col}
                </li>
            ))}
        </ol>
    );
}