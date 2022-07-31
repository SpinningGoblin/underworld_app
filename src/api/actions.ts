import {
  AttackNpc,
  CastSpellOnNpc,
  CastSpellOnPlayer,
  ExitRoom,
  GameEvent,
  InspectFixture,
  InspectNpc,
  LookAtFixture,
  LookAtNpc,
  LootFixture,
  LootNpc,
  MovePlayerItem,
  OpenFixture,
  OpenFixtureHiddenCompartment,
  PerformAction,
  PlayerCharacter,
  ResponseError,
  Room,
  SellPlayerItem,
  ThrowItemAtNpc,
  UseItemOnPlayer,
} from "../generated-api";
import { getCurrentGameId } from "./current-game";
import { getGameActionsApi, getPlayerApi } from "./factory";
import { getUsername } from "./username";

interface BasicParams {
  username: string;
  gameId: string;
}

export interface ActionPerformed {
  events: Array<GameEvent>;
  room?: Room;
  player?: PlayerCharacter;
}

const getBasicParams = (): BasicParams => {
  const gameId = getCurrentGameId();
  const username = getUsername();

  if (!gameId || !username) {
    throw new Error("Missing required parameters");
  }

  return {
    username,
    gameId,
  };
};

export type ActionPerformedCallback = (event: ActionPerformed) => void;

const listeners: Array<ActionPerformedCallback> = [];

export const listenActionPerformed = (callback: ActionPerformedCallback) => {
  if (!listeners.includes(callback)) {
    listeners.push(callback);
  }
};

export const removeActionPerformedListener = (
  callback: ActionPerformedCallback,
) => {
  const index = listeners.indexOf(callback);

  if (index >= 0) {
    listeners.splice(index, 1);
  }
};

export type ErrorCallback = (error: string) => void;

const errorListeners: Array<ErrorCallback> = [];

export const listenError = (callback: ErrorCallback) => {
  if (!errorListeners.includes(callback)) {
    errorListeners.push(callback);
  }
};

export const removeErrorListener = (callback: ErrorCallback) => {
  const index = errorListeners.indexOf(callback);

  if (index >= 0) {
    errorListeners.splice(index, 1);
  }
};

const notifyListeners = (actionPerformed: ActionPerformed) => {
  for (const listener of listeners) {
    listener(actionPerformed);
  }
};

const notifyError = (error: string) => {
  for (const listener of errorListeners) {
    listener(error);
  }
};

export const getCurrentRoom = async (): Promise<Room> => {
  const { gameId, username } = getBasicParams();

  const api = getGameActionsApi();

  return api.lookAroundRoom({ underworldUsername: username, gameId });
};

export const getCurrentActions = async (): Promise<Array<PerformAction>> => {
  const { username, gameId } = getBasicParams();

  const api = getGameActionsApi();
  return api.currentActions({ underworldUsername: username, gameId });
};

export const performExitRoom = async (args: ExitRoom): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.exitRoom({
      underworldUsername: username,
      gameId,
      exitRoom: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    const actionPerformed: ActionPerformed = {
      events,
      room,
      player,
    };

    notifyListeners(actionPerformed);
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performThrowItemAtNpc = async (
  args: ThrowItemAtNpc,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.throwItemAtNpc({
      underworldUsername: username,
      gameId,
      throwItemAtNpc: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events,
      player,
      room,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performAttackNpc = async (args: AttackNpc): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.attackNpc({
      underworldUsername: username,
      gameId,
      attackNpc: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events,
      player,
      room,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performCastSpellOnNpc = async (
  args: CastSpellOnNpc,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.castSpellOnNpc({
      underworldUsername: username,
      gameId,
      castSpellOnNpc: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events,
      player,
      room,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performCastSpellOnPlayer = async (
  args: CastSpellOnPlayer,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.castSpellOnPlayer({
      underworldUsername: username,
      gameId,
      castSpellOnPlayer: args,
    });

    const playerApi = getPlayerApi();
    const player = await playerApi.getCurrentPc({
      underworldUsername: username,
    });

    notifyListeners({
      events,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performUseItemOnPlayer = async (
  args: UseItemOnPlayer,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.useItemOnPlayer({
      underworldUsername: username,
      gameId,
      useItemOnPlayer: args,
    });

    const playerApi = getPlayerApi();
    const player = await playerApi.getCurrentPc({
      underworldUsername: username,
    });

    notifyListeners({
      events,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performOpenFixture = async (args: OpenFixture): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const response = await api.openFixture({
      underworldUsername: username,
      gameId,
      openFixture: args,
    });

    const room = await getCurrentRoom();
    const playerApi = getPlayerApi();
    const player = await playerApi.getCurrentPc({
      underworldUsername: username,
    });

    notifyListeners({
      events: response.events,
      room,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performOpenFixtureHiddenCompartment = async (
  args: OpenFixtureHiddenCompartment,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const response = await api.openFixtureHiddenCompartment({
      underworldUsername: username,
      gameId,
      openFixtureHiddenCompartment: args,
    });

    const room = await getCurrentRoom();
    const playerApi = getPlayerApi();
    const player = await playerApi.getCurrentPc({
      underworldUsername: username,
    });

    notifyListeners({
      events: response.events,
      room,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performInspectFixture = async (
  args: InspectFixture,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const response = await api.inspectFixture({
      underworldUsername: username,
      gameId,
      inspectFixture: args,
    });

    const room = await getCurrentRoom();
    const playerApi = getPlayerApi();
    const player = await playerApi.getCurrentPc({
      underworldUsername: username,
    });

    notifyListeners({
      events: response.events,
      room,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performMovePlayerItem = async (
  args: MovePlayerItem,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();

    const { events } = await api.movePlayerItem({
      underworldUsername: username,
      gameId,
      movePlayerItem: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events,
      room,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      console.log("getting response");
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performSellPlayerItem = async (
  args: SellPlayerItem,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();

    const { events } = await api.sellPlayerItem({
      underworldUsername: username,
      gameId,
      sellPlayerItem: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events,
      room,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      console.log("getting response");
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performInspectNpc = async (args: InspectNpc): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();

    const response = await api.inspectNpc({
      underworldUsername: username,
      gameId,
      inspectNpc: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events: response.events,
      room,
      player,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performLootNpc = async (args: LootNpc): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.lootNpc({
      underworldUsername: username,
      gameId,
      lootNpc: args,
    });

    const playerApi = getPlayerApi();

    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events,
      player,
      room,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performLootFixture = async (args: LootFixture): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();
    const { events } = await api.lootFixture({
      underworldUsername: username,
      gameId,
      lootFixture: args,
    });

    const playerApi = getPlayerApi();
    const [room, player] = await Promise.all([
      getCurrentRoom(),
      playerApi.getCurrentPc({ underworldUsername: username }),
    ]);

    notifyListeners({
      events,
      player,
      room,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performLookAtNpc = async (args: LookAtNpc): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();

    const response = await api.lookAtNpc({
      underworldUsername: username,
      gameId,
      lookAtNpc: args,
    });

    const events: Array<GameEvent> = [
      {
        name: "npc_viewed",
        data: response,
      },
    ];

    notifyListeners({
      events,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};

export const performLookAtFixture = async (
  args: LookAtFixture,
): Promise<void> => {
  try {
    const { username, gameId } = getBasicParams();
    const api = getGameActionsApi();

    const response = await api.lookAtFixture({
      underworldUsername: username,
      gameId,
      lookAtFixture: args,
    });

    const events: Array<GameEvent> = [
      {
        name: "fixture_viewed",
        data: response,
      },
    ];

    notifyListeners({
      events,
    });
  } catch (e) {
    if (typeof e === "string") {
      notifyError(e);
    } else if (e instanceof ResponseError) {
      const message = await e.response.text();
      notifyError(message);
    }
    throw e;
  }
};
