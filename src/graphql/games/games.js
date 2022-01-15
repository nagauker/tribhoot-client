import {gql} from '@apollo/client';

export const GAMES_SUBSCRIPTION = gql`
subscription {
    games {
      id
      created_at
    }
  }
  `

  export const GAMES_QUERY = gql`
  query {
      games {
        id
        created_at
      }
    }
    `
export const GAME_PIN_CHECK = gql`
query ($gameId: numeric) {
  games(where: {_and: {id: {_eq: $gameId}, is_closed: {_eq: false}}}) {
    id
  }
}
`