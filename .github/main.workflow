workflow "New workflow" {
  resolves = ["Discord notification"]
  on = "push"
}

action "Discord notification" {
  uses = "Ilshidur/actions/discord@master"
  secrets = ["DISCORD_WEBHOOK"]
  args = "The project has been deployed."
}
