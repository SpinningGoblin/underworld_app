use poem::{web::Data, Result};
use poem_openapi::{
    param::{Header, Path},
    payload::Json,
    ApiResponse, OpenApi,
};
use sqlx::PgPool;
use underworld_core::{
    actions::{
        AttackNpc, CastSpellOnPlayer, ExitRoom, InspectFixture, InspectNpc, LookAtFixture,
        LookAtNpc, LootFixture, LootNpc, MovePlayerItem, UseItemOnPlayer,
    },
    components::{
        fixtures::fixture::FixtureView, non_player::NonPlayerView, rooms::room_view::RoomView,
    },
};

use crate::{
    actions::PerformAction,
    game::{
        attack::{attack_npc, NpcAttacked},
        exit::{exit_room, RoomExited},
        get::game_actions,
        inspect::{inspect_fixture, inspect_npc, FixtureInspected, NpcInspected},
        items::{move_player_item, use_item_on_player, ItemMoved, ItemUsed},
        look::{look_at_fixture, look_at_npc, look_at_room},
        loot::{loot_fixture, loot_npc, FixtureLooted, NpcLooted},
        spells::{cast_spell_on_player, SpellCast},
    },
};

use crate::tags::UnderworldApiTags;

#[derive(ApiResponse)]
enum LookResponse {
    #[oai(status = 200)]
    LookAtRoom(Json<RoomView>),
}

#[derive(ApiResponse)]
enum LookFixtureResponse {
    #[oai(status = 200)]
    FixtureViewed(Json<FixtureView>),
}

#[derive(ApiResponse)]
enum LookNpcResponse {
    #[oai(status = 200)]
    NpcViewed(Json<NonPlayerView>),
}

#[derive(ApiResponse)]
enum InspectNpcResponse {
    #[oai(status = 200)]
    NpcInspected(Json<NpcInspected>),
}

#[derive(ApiResponse)]
enum InspectFixtureResponse {
    #[oai(status = 200)]
    FixtureInspected(Json<FixtureInspected>),
}

#[derive(ApiResponse)]
enum LootNpcResponse {
    #[oai(status = 200)]
    NpcLooted(Json<NpcLooted>),
}

#[derive(ApiResponse)]
enum LootFixtureResponse {
    #[oai(status = 200)]
    FixtureLooted(Json<FixtureLooted>),
}

#[derive(ApiResponse)]
enum AttackNpcResponse {
    #[oai(status = 200)]
    NpcAttacked(Json<NpcAttacked>),
}

#[derive(ApiResponse)]
enum CastSpellResponse {
    #[oai(status = 200)]
    SpellCast(Json<SpellCast>),
}

#[derive(ApiResponse)]
enum UseItemResponse {
    #[oai(status = 200)]
    ItemUsed(Json<ItemUsed>),
}

#[derive(ApiResponse)]
enum MoveItemResponse {
    #[oai(status = 200)]
    ItemMoved(Json<ItemMoved>),
}

#[derive(ApiResponse)]
enum ExitRoomResponse {
    #[oai(status = 200)]
    RoomExited(Json<RoomExited>),
}

#[derive(ApiResponse)]
enum GameActionsResponse {
    #[oai(status = 200)]
    GameActions(Json<Vec<PerformAction>>),
}

pub struct UnderworldGameActionApi;

#[OpenApi(
    tag = "UnderworldApiTags::GameActions",
    prefix_path = "/game/:game_id/"
)]
impl UnderworldGameActionApi {
    /// Exit the current room of the specified game through the specified exit.
    #[oai(path = "/exit_room", method = "post")]
    async fn exit_room(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<ExitRoom>,
    ) -> Result<ExitRoomResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let exit_result = exit_room(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();
        Ok(ExitRoomResponse::RoomExited(Json(exit_result)))
    }

    /// Attack a specific NPC inside the current room of the specified game.
    #[oai(path = "/attack_npc", method = "post")]
    async fn attack_npc(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<AttackNpc>,
    ) -> Result<AttackNpcResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let attack_result = attack_npc(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();

        Ok(AttackNpcResponse::NpcAttacked(Json(attack_result)))
    }

    /// Cast a spell on your player character.
    #[oai(path = "/cast_spell_on_player", method = "post")]
    async fn cast_spell_on_player(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<CastSpellOnPlayer>,
    ) -> Result<CastSpellResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let cast_result = cast_spell_on_player(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();

        Ok(CastSpellResponse::SpellCast(Json(cast_result)))
    }

    /// Use an item on your player character.
    #[oai(path = "/use_item_on_player", method = "post")]
    async fn use_item_on_player(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<UseItemOnPlayer>,
    ) -> Result<UseItemResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let use_item_result = use_item_on_player(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();

        Ok(UseItemResponse::ItemUsed(Json(use_item_result)))
    }

    /// Use an item on your player character.
    #[oai(path = "/move_player_item", method = "post")]
    async fn move_player_item(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<MovePlayerItem>,
    ) -> Result<MoveItemResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let move_item_result = move_player_item(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();

        Ok(MoveItemResponse::ItemMoved(Json(move_item_result)))
    }

    /// Loot some items from an NPC.
    #[oai(path = "/loot_npc", method = "post")]
    async fn loot_npc(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<LootNpc>,
    ) -> Result<LootNpcResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let loot_result = loot_npc(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();

        Ok(LootNpcResponse::NpcLooted(Json(loot_result)))
    }

    /// Loot some items from a fixture.
    #[oai(path = "/loot_fixture", method = "post")]
    async fn loot_fixture(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<LootFixture>,
    ) -> Result<LootFixtureResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let loot_result = loot_fixture(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();

        Ok(LootFixtureResponse::FixtureLooted(Json(loot_result)))
    }

    /// Take a closer look at the current room.
    #[oai(path = "/look_around_room", method = "post")]
    async fn look_around_room(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
    ) -> Result<LookResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let view_result = look_at_room(&mut transaction, &username, &game_id)
            .await
            .unwrap();
        transaction.commit().await.unwrap();

        Ok(LookResponse::LookAtRoom(Json(view_result)))
    }

    /// Look at a specific Fixture in the current room.
    #[oai(path = "/look_at_fixture", method = "post")]
    async fn look_at_fixture(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<LookAtFixture>,
    ) -> Result<LookFixtureResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let view = look_at_fixture(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();
        Ok(LookFixtureResponse::FixtureViewed(Json(view)))
    }

    /// Look at a specific NPC in the current room.
    #[oai(path = "/look_at_npc", method = "post")]
    async fn look_at_npc(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<LookAtNpc>,
    ) -> Result<LookNpcResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let view = look_at_npc(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();
        Ok(LookNpcResponse::NpcViewed(Json(view)))
    }

    /// Inspect a fixture to find out more information about them when looking at them next.
    /// After completing an inspect, look at the fixture to see new information.
    #[oai(path = "/inspect_fixture", method = "post")]
    async fn inspect_fixture(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<InspectFixture>,
    ) -> Result<InspectFixtureResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let inspection = inspect_fixture(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();
        Ok(InspectFixtureResponse::FixtureInspected(Json(inspection)))
    }

    /// Inspect an NPC to find out more information about them when looking at them next.
    /// After completing an inspect, look at the NPC to see new information.
    #[oai(path = "/inspect_npc", method = "post")]
    async fn inspect_npc(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
        args: Json<InspectNpc>,
    ) -> Result<InspectNpcResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let inspection = inspect_npc(&mut transaction, &username, &game_id, &args)
            .await
            .unwrap();
        transaction.commit().await.unwrap();
        Ok(InspectNpcResponse::NpcInspected(Json(inspection)))
    }

    /// Get the current actions available for the game.
    #[oai(path = "/current_actions", method = "post")]
    async fn current_actions(
        &self,
        pool: Data<&PgPool>,
        #[oai(name = "underworld-username")] username: Header<String>,
        game_id: Path<String>,
    ) -> Result<GameActionsResponse> {
        let mut transaction = pool.0.begin().await.unwrap();
        let actions = game_actions(&mut transaction, &username, &game_id)
            .await
            .unwrap();
        Ok(GameActionsResponse::GameActions(Json(actions)))
    }
}
