# live-board
Football live board library that allows to keep track of ongoing matches.\
It was created using TDD approach.
To create new livaboard item use new LiveBoard().

## Approach
It is the simplest solution as per requirement :smile:\
To store matches Map data structure was used. This was done for a quick access to the match data. I am throwing exception if match was not found but we will need to handle it normally so the app continue to work.
When developing UI I would create an observable and subscribe on any board change to reflect it on UI. (like rxjs lib). We can discuss it later. 

## Available methods
**startMatch(teamHome: string, teamAway: string): Match** - starts a new match with 0 - 0 result. Returns started match.\
**updateScore(matchUuid: string, teamHomeScore: number, teamAwayScore: number): void** - updates score of the match by uuid. \
**endMatch(matchUuid: string): void**- finishes the match and removes it from live board by uuid.\
**getSummary(): any[]** - return array of summaries of each match sorted by total score and timestamp.
