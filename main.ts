player.onChat("com", function () {
    agent.move(FORWARD, 5)
    mobs.spawn(CHICKEN, player.position())
    blocks.place(RED_SAND, player.position())
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.teleportToPlayer()
})
