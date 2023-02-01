FROM mcr.microsoft.com/devcontainers/typescript-node:0-18-bullseye

# Default ZSH configuration only load the git plugin. This adds yarn as well.
RUN su node -c "sed -i 's/plugins=(git)/plugins=(git yarn)/' ~/.zshrc"

# Persist ZSH history
RUN mkdir /command_history \
 && touch /command_history/.zsh_history \
 && chown -R node /command_history

# Touch node_modules mounted as volumes
RUN mkdir -p /workspace/node_modules \
 && mkdir -p /workspace/samples/ehr-sample-app/node_modules \
 && chown -R node /workspace
