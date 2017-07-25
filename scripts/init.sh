#!/bin/bash
sudo echo

# install yarn
if !(command -v yarn >/dev/null 2>&1); then 
    sudo npm install yarn -g
fi

root=$(pwd)

modules=(api home blog)

# init modules.
yarn
for m in ${modules[@]}
do
    echo "===== init" ${m} "======"
    cd $root/$m && yarn
done

cd $root/types && sudo npm link