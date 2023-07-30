# live-board
Football live board library that allows to keep track of ongoing matches.\
It was created using TDD approach.
To create new livaboard item use new LiveBoard().

## Approach
To store matches Map data structure was used.

## Available methods
**startMatch(teamHome: string, teamAway: string): Match** - starts a new match with 0 - 0 result. Returns started match.\
**updateScore(matchUuid: string, teamHomeScore: number, teamAwayScore: number): void** - updates score of the match by uuid. \
**endMatch(matchUuid: string): void**- finishes the match and removes it from live board by uuid.\
**getSummary(): any[]** - return array of summaries of each match sorted by total score and timestamp.
