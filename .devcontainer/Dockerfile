FROM mcr.microsoft.com/devcontainers/typescript-node:0-18-bullseye

# Let's make sure to use a supported version of node
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install 18.15.0 && nvm use 18.15.0"

# Default ZSH configuration only load the git plugin. This adds yarn as well.
RUN su node -c "sed -i 's/plugins=(git)/plugins=(git yarn)/' ~/.zshrc"

# Persist ZSH history
RUN mkdir /command_history \
 && touch /command_history/.zsh_history \
 && chown -R node /command_history

# Touch node_modules mounted as volumes
RUN mkdir -p /workspace/node_modules \
 && mkdir -p /workspace/packages/docs/node_modules \
 && chown -R node /workspace
