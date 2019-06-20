workflow "New workflow" {
  resolves = ["Ilshidur/actions/discord@master"]
  on = "push"
}

action "Discord notification" {
  uses = "Ilshidur/actions/discord@master"
  secrets = ["DISCORD_WEBHOOK"]
  args = "The project has been deployed."
}
