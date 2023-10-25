FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

USER root
ARG ID_USER
ARG ID_GROUP
RUN \
    echo "adding group app" &&\
    groupadd -g "$ID_GROUP" app &&\
    \
    echo "adding user app and adding him to group app" &&\
    useradd -u "$ID_USER" -m app -g app &&\
    \
    apt-get update &&\
    \
    echo "installing common dependencies" &&\
    apt-get install curl nano git software-properties-common -y &&\
    \
    echo "adding nvm.sh to .bashrc to run nvm every login. It will set up nodejs version" &&\
    echo "source /home/app/.nvm/nvm.sh" >> ~/.bashrc

USER app:app
ARG VERSION_NODE
RUN \
    echo "downloading and installing nvm" &&\
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash &&\
    \
    echo "installing node, npm" &&\
    \
    echo "making nvm command available" &&\
    export NVM_DIR="$HOME/.nvm" &&\
    [ -s "$NVM_DIR/nvm.sh" ] &&\
    . "$NVM_DIR/nvm.sh" &&\
    \
    echo "installing node" &&\
    nvm install "$VERSION_NODE" &&\
    \
    echo "setting up nodejs version" &&\
    nvm use "$VERSION_NODE" &&\
    \
    echo "adding nvm.sh to .bashrc to run it every login. It set up nodejs version" &&\
    echo "source /home/app/.nvm/nvm.sh" >> /home/app/.bashrc
