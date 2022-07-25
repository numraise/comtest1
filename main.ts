player.onChat("com", function () {
    agent.move(FORWARD, 5)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.teleportToPlayer()
})
