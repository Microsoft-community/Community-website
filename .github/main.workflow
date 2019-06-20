workflow "Discord notifications" {
  resolves = ["Discord notification"]
  on = "push"
}

action "Discord notification" {
  uses = "Ilshidur/actions/discord@master"
  secrets = ["DISCORD_WEBHOOK"]
  args = "$GITHUB_ACTOR The project has been deployed."
}
