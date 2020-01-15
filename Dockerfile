FROM ubuntu:bionic

# initialize apt repositories
RUN apt update

# installing pandoc
RUN apt install -y pandoc

# installing latex
RUN apt install -y texlive-lang-cjk xdvik-ja
RUN apt install -y texlive-fonts-recommended texlive-fonts-extra

# installing node.js
RUN apt install -y nodejs npm

# cleanup apt cache
RUN apt clean && rm -rf /var/lib/apt/lists/*