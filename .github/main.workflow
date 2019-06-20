workflow "New workflow" {
  resolves = ["Ilshidur/actions/action-discord@master"]
  on = "push"
}

action "Discord notification" {
  uses = "Ilshidur/actions/action-discord@master"
  secrets = ["DISCORD_WEBHOOK"]
  args = "The project has been deployed."
}
