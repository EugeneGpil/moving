import { setActivePinia, createPinia } from 'pinia'
import { usePlayerStore, type PlayerStore } from './playerStore'
import { beforeEach, describe, it, expect } from 'vitest'

type StartArgs = {
  playerStore: PlayerStore
  startPosX: number
  startPosY: number
}

const setUp = (): StartArgs => {
  setActivePinia(createPinia())

  const playerStore = usePlayerStore()

  const startPosX = playerStore.player.position.x
  const startPosY = playerStore.player.position.y

  return {
    playerStore,
    startPosX,
    startPosY
  }
}

const assert = (expectedX: number, expectedY: number): undefined => {
  expect(playerStore.player.position.x).toBe(expectedX)
  expect(playerStore.player.position.y).toBe(expectedY)
}

let playerStore: PlayerStore
let startPosX: number
let startPosY: number

describe('Player Store', () => {
  beforeEach((): undefined => {
    const startArgs = setUp()

    playerStore = startArgs.playerStore
    startPosX = startArgs.startPosX
    startPosY = startArgs.startPosY
  })

  it('moves player to left', (): undefined => {
    playerStore.goLeft()

    assert(startPosX - playerStore.step, startPosY)
  })

  it('moves player to right', (): undefined => {
    playerStore.goRight()

    assert(startPosX + playerStore.step, startPosY)
  })

  it('moves player up', (): undefined => {
    playerStore.goUp()

    assert(startPosX, startPosY + playerStore.step)
  })

  it('moves player down', (): undefined => {
    playerStore.goDown()

    assert(startPosX, startPosY - playerStore.step)
  })
})
