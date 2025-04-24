function analyzeTicTacToe(board) {
    function checkWin(player) {
        // Sprawdzanie wierszy
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return true;
            }
        }

        // Sprawdzanie kolumn
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
                return true;
            }
        }

        // Sprawdzanie przekątnych
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }

        return false;
    }

    // Liczenie znaków X i O
    let countX = 0;
    let countO = 0;
    let emptyFields = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === "X") {
                countX++;
            } else if (board[i][j] === "O") {
                countO++;
            } else if (board[i][j] === "") {
                emptyFields++;
            }
        }
    }

    // Sprawdzenie czy obaj gracze wygrali
    const XWins = checkWin("X");
    const OWins = checkWin("O");

    // Sprawdzenie czy plansza jest nieprawidłowa
    if (XWins && OWins) {
        return "Invalid";
    }

    // Sprawdzenie liczby X i O
    if (countX < countO || countX > countO + 1) {
        return "Invalid";
    }

    // Sprawdzenie czy wyszedł nieprawidłowy wynik
    if (XWins && countX === countO) {
        return "Invalid"; // X wygrał, ale jest równa liczba X i O
    }

    if (OWins && countX > countO) {
        return "Invalid"; // O wygrał, ale jest więcej X niż O
    }

    // Zwrócenie wyniku gry
    if (XWins) {
        return "X wins";
    }

    if (OWins) {
        return "O wins";
    }

    if (emptyFields === 0) {
        return "Draw";
    }

    return "Ongoing";
}



