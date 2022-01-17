import {gql} from '@apollo/client';

export const INSERT_PLAYER = gql`
mutation ($gameId: Int, $userId: String, $nickname: String) {
  insert_game_users(objects: {game_id: $gameId, nickname: $nickname, user_id: $userId}, on_conflict: {constraint: game_users_pkey}) {
    affected_rows
  }
}
`